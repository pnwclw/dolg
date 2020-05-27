from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.translation import ugettext as _

from simple_history.models import HistoricalRecords

from .templatetags.users import device, location

import uuid


class User(AbstractUser):
    class Meta:
        verbose_name = _('User')
        verbose_name_plural = _('Users')

    middle_name = models.CharField(max_length=128, null=True, blank=True, verbose_name=_('Middle Name'))

    rules_accepted = models.BooleanField(default=False)

    confirmation_id = models.UUIDField(default=uuid.uuid4, unique=True)
    is_confirmed = models.BooleanField(default=False)

    history = HistoricalRecords()

    def get_full_name(self):
        return f"{self.last_name} {self.first_name} {self.middle_name}"

    def __str__(self):
        return f"{self.get_full_name()} (ID: {self.id}, {self.username})"


class SessionManager(models.Manager):
    use_in_migrations = True

    def encode(self, session_dict):
        """
        Returns the given session dictionary serialized and encoded as a string.
        """
        return SessionStore().encode(session_dict)

    def save(self, session_key, session_dict, expire_date):
        s = self.model(session_key, self.encode(session_dict), expire_date)
        if session_dict:
            s.save()
        else:
            s.delete()  # Clear sessions with no data.
        return s


class Session(models.Model):
    """
    Session objects containing user session information.

    Django provides full support for anonymous sessions. The session
    framework lets you store and retrieve arbitrary data on a
    per-site-visitor basis. It stores data on the server side and
    abstracts the sending and receiving of cookies. Cookies contain a
    session ID -- not the data itself.

    Additionally this session object providers the following properties:
    ``user``, ``user_agent`` and ``ip``.
    """
    class Meta:
        verbose_name = _('session')
        verbose_name_plural = _('sessions')

    session_key = models.CharField(_('session key'), max_length=40, primary_key=True)
    session_data = models.TextField(_('session data'))
    expire_date = models.DateTimeField(_('expiry date'), db_index=True)

    user = models.ForeignKey(User, null=True, on_delete=models.CASCADE)
    user_agent = models.CharField(null=True, blank=True, max_length=200)
    last_activity = models.DateTimeField(auto_now=True)
    ip = models.GenericIPAddressField(null=True, blank=True, verbose_name='IP')

    objects = SessionManager()

    def __str__(self):
        return f"Session {self.session_key} (User: {self.user}, Location: {location(self.ip)}, Device: {device(self.user_agent)}, Expires: {self.expire_date})"

    def get_decoded(self):
        return SessionStore(None, None).decode(self.session_data)


# At bottom to avoid circular import
from .backends.db import SessionStore  # noqa: E402 isort:skip

from django.contrib.contenttypes.models import ContentType
from django.db import models
from django.utils import timezone
from django.utils.translation import ugettext as _


def get_file_path(instance, filename):
    ext = filename.split('.')[-1]
    filename = f"{instance.date.year}-{instance.date.month:02d}-{instance.date.day:02d}.{ext}"
    return f"{instance.model.app_label}/{instance.model.model}/{filename}"


class Backup(models.Model):
    model = models.ForeignKey(ContentType, on_delete=models.CASCADE)
    file = models.FileField(upload_to=get_file_path)
    date = models.DateField(default=timezone.now)

    def __str__(self):
        return "{} backup ({})".format(self.model, self.date)


class Script(models.Model):
    name = models.CharField(_('Name'), max_length=100)
    source = models.TextField(_('Source'))

    class Meta:
        verbose_name = _('Script')
        verbose_name_plural = _('Scripts')

    def __str__(self):
        return self.name

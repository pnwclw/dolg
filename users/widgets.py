from __future__ import unicode_literals

from django.forms import PasswordInput
from django.utils.safestring import mark_safe
from django.utils.translation import ugettext as _

from zxcvbn_password.utils import zxcvbn_min_score


class PasswordStrengthInput(PasswordInput):
    """Form widget to show the user how strong his/her password is."""

    def render(self, name, value, attrs=None, **kwargs):
        """Widget render method."""
        min_score = zxcvbn_min_score()
        message_title = _('Warning')
        message_body = _(
            'This password would take '
            '<em class="password_strength_time"></em> to crack.')

        strength_markup = """
        <div class="progress-bloc">
            <div class="progress mt-2 d-none" style="height: 5px;">
                <div class="progress-bar bg-gold password_strength_bar" role="progressbar" aria-valuenow="0" aria-valuemin="{min_score}" aria-valuemax="4"></div>
            </div>
            <p class="text-muted password_strength_info d-none"><small>
                <span class="badge badge-danger mr-1">
                    {title}
                </span>
                <span>
                    {body}
                </span>
            </small></p>
        </div>
        """

        strength_markup = strength_markup.format(
            title=message_title,
            body=message_body,
            min_score=min_score)

        try:
            self.attrs['class'] = '%s password_strength'.strip() % self.attrs['class']  # noqa
        except KeyError:
            self.attrs['class'] = 'password_strength'

        return mark_safe(super(PasswordStrengthInput, self).render(  # nosec
            name, value, attrs) + strength_markup)

    class Media:
        """Media class to use in templates."""

        js = (
            'zxcvbn_password/js/zxcvbn.js',
            'zxcvbn_password/js/password_strength.js',
        )
from django import forms
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth.password_validation import validate_password
from django.contrib.auth.validators import UnicodeUsernameValidator
from django.core.exceptions import ValidationError
from django.utils.translation import ugettext as _

from captcha.fields import ReCaptchaField
from captcha.widgets import ReCaptchaV3

from zxcvbn_password.fields import PasswordField

from .models import User
from .widgets import PasswordStrengthInput


class CustomAuthenticationForm(AuthenticationForm):
    username = forms.CharField(
        max_length=32,
        required=True, 
        validators=[UnicodeUsernameValidator,],
        label=_('Username'),
        widget=forms.TextInput(
            attrs={'placeholder': _('Username'), "class": "form-control form-control-gold", 'autofocus': True}
        )
    )
    password = forms.CharField(
        max_length=32,
        required=True,
        label=_('Password'),
        strip=False,
        widget=forms.PasswordInput(
            attrs={'placeholder': _('Password'), "class": "form-control form-control-gold", 'autocomplete': 'current-password'}
        )
    )
    captcha = ReCaptchaField(widget=ReCaptchaV3())

    def confirm_login_allowed(self, user):
        if not user.is_active:
            raise ValidationError(
                _("This account is inactive. Please contact support.`"),
                code='inactive',
            )

        if not user.is_confirmed:
            raise ValidationError(
                _("Your account is not confirmed. Please check your e-mail for the letter with activation link."),
                code="banned",
            )


class CustomSetPasswordForm(forms.Form):
    password = PasswordField(
        max_length=32,
        required=True,
        label=_('Password'),
        widget=PasswordStrengthInput(
            attrs={'placeholder': _('Password'), "class": "form-control form-control-gold"}
        ),
    )

    def __init__(self, user, *args, **kwargs):
        self.user = user
        super().__init__(*args, **kwargs)

    def save(self, commit=True):
        password = self.cleaned_data["password"]
        self.user.set_password(password)
        if commit:
            self.user.save()
        return self.user
        

class CreateForm(forms.Form):
    def validate_username(value):
        try:
            u = User.objects.get(username=value)
        except User.DoesNotExist:
            return value
        raise ValidationError(_("A user with that username already exists."))


    def validate_unique_email(value):
        try:
            u = User.objects.get(email=value)
        except User.DoesNotExist:
            return value
        raise ValidationError(_("A user with that e-mail already exists."))


    def validate_referral_id(value):
        try:
            u = User.objects.get(referral_id=value)
        except User.DoesNotExist:
            raise ValidationError(_("There's no user with such referral ID"))
        return value

    last_name = forms.CharField(
        max_length=30,
        required=True,
        label=_('Last name'),
        widget=forms.TextInput(
            attrs={'placeholder': _('Last name'), "class": "form-control form-control-gold"}
        )
    )
    first_name = forms.CharField(
        max_length=30,
        required=True,
        label=_('First name'),
        widget=forms.TextInput(
            attrs={'placeholder': _('First name'), "class": "form-control form-control-gold"}
        )
    )
    middle_name = forms.CharField(
        max_length=30,
        required=True,
        label=_('Last name'),
        widget=forms.TextInput(
            attrs={'placeholder': _('Last name'), "class": "form-control form-control-gold"}
        )
    )
    username = forms.CharField(
        max_length=32,
        required=True, 
        validators=[UnicodeUsernameValidator, validate_username,],
        label=_('Username'),
        widget=forms.TextInput(
            attrs={'placeholder': _('Username'), "class": "form-control form-control-gold"}
        )
    )
    email = forms.EmailField(
        required=True,
        validators=[validate_unique_email,],
        label=_('E-mail'),
        widget=forms.EmailInput(
            attrs={'placeholder': _('E-mail'), "class": "form-control form-control-gold"}
        )
    )
    password = PasswordField(
        max_length=32,
        required=True,
        label=_('Password'),
        widget=PasswordStrengthInput(
            attrs={'placeholder': _('Password'), "class": "form-control form-control-gold"}
        )
    )
    rules_accepted = forms.BooleanField(required=True)
    captcha = ReCaptchaField(widget=ReCaptchaV3())

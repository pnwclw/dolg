from django.urls import path, reverse
from django.utils.translation import ugettext as _

from django.contrib.auth.views import LoginView, LogoutView, PasswordResetView, PasswordResetDoneView, PasswordResetConfirmView, PasswordResetCompleteView

from .apps import UsersConfig
from .forms import CustomAuthenticationForm, CustomSetPasswordForm, CreateForm
from .views import CreateView, ConfirmAccountView

urlpatterns = [
    path("login/", LoginView.as_view(
        template_name="users/login.html",
        redirect_authenticated_user=True,
        authentication_form=CustomAuthenticationForm,
        extra_context={
            "createform": CreateForm,
            "title": _("Log in"),
        }
    ), name="login"),
    path("logout/", LogoutView.as_view(), name="logout"),
    path("create/", CreateView.as_view(), name="create"),
    path("confirm/<uuid:confirmation_id>", ConfirmAccountView.as_view(), name='confirm'),
    path("reset/", PasswordResetView.as_view(
        template_name="users/login.html",
        email_template_name="users/password_reset_email.html",
        success_url='/accounts/reset/requested/',
        extra_context={
            "form": CustomAuthenticationForm,
            "createform": CreateForm,
            "title": _("Password reset"),
        },
    ), name="password_reset"),
    path("reset/requested/", PasswordResetDoneView.as_view(
        template_name="users/password_reset_requested.html",
        extra_context={
            "title": _("Password reset requested"),
        }
    ), name="password_reset_done"),
    path("reset/confirm/<str:uidb64>/<str:token>/", PasswordResetConfirmView.as_view(
        template_name="users/password_change.html",
        form_class=CustomSetPasswordForm,
        success_url='/accounts/reset/complete/',
        post_reset_login=True,
        extra_context={
            "title": _("Set new password"),
        },
    ), name="password_reset_confirm"),
    path("reset/complete/", PasswordResetCompleteView.as_view(
        template_name="users/password_reset_complete.html",
        extra_context={
            "title": _("Password reset completed"),
        }
    ), name="password_reset_complete"),
]

app_name = UsersConfig.name

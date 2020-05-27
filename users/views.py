from django.http import JsonResponse, Http404
from django.shortcuts import render, get_object_or_404, redirect
from django.utils.translation import ugettext as _
from django.views import View

from .forms import CreateForm, CustomAuthenticationForm
from .models import User

import uuid


class CreateView(View):
    def get(self, request):
        context = {
            "form": CustomAuthenticationForm,
            "createform": CreateForm(),
            "title": _("Create account"),
        }
        return render(request, "users/login.html", context=context)

    def post(self, request):
        if not request.is_ajax():
            return JsonResponse({})
        form = CreateForm(request.POST)
        if form.is_valid():
            user = User.objects.create_user(
                username=form.cleaned_data["username"],
                password=form.cleaned_data["password"],
                email=form.cleaned_data["email"],
                first_name=form.cleaned_data["first_name"],
                last_name=form.cleaned_data["last_name"],
                rules_accepted=form.cleaned_data["rules_accepted"],
            )
            user.email_user(
                _("[DOLG] E-mail confirmation"),
                _("Hi, {first_name}! Please confirm you e-mail by following this link: {url}").format(
                    first_name=user.first_name,
                    url="http{}://{}/accounts/confirm/{}".format(
                        "s" if request.is_secure() else "",
                        request.get_host(), 
                        user.confirmation_id,
                    ),
                ),
                fail_silently=False
            )

            return JsonResponse({
                "result": "ok"
            })
        data = {
            'non_field_errors': form.non_field_errors(),
            'errors': form.errors,
        }
        return JsonResponse(data, status=400)


class ConfirmAccountView(View):
    def get(self, request, confirmation_id):
        user = get_object_or_404(User, confirmation_id=confirmation_id)
        if user.is_confirmed:
            raise Http404()
        user.is_confirmed = True
        user.save()
        return redirect("dashboard:main")

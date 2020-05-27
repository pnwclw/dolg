from datetime import timedelta

from django.contrib.auth.mixins import LoginRequiredMixin
from django.db import models
from django.db.models import F, Case, When, ExpressionWrapper
from django.urls import reverse_lazy
from django.utils import timezone
from django.views import View
from django.views.generic import ListView, CreateView, DeleteView, UpdateView
from django.utils.translation import ugettext as _

from core.models import Item, Borrow, ExtendTermRequest

from .forms import OrderForm, WithdrawForm, ReinvestForm


class DashboardView(LoginRequiredMixin, ListView):
    paginate_by = 100
    template_name = "dashboard/dashboard.html"

    def get_queryset(self):
        return Item.objects.filter(owner=self.request.user)

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context.update({
            'title': _('Dashboard'),
        })
        return context


class AddNewItemView(LoginRequiredMixin, CreateView):
    model = Item
    fields = ['name']
    template_name = 'dashboard/item_form.html'
    success_url = reverse_lazy('dashboard:main')

    def get_context_data(self, **kwargs):
        context = super().get_context_data()
        context.update(
            title=_('Add New Item')
        )
        return context

    def form_valid(self, form):
        form.instance.owner = self.request.user
        return super().form_valid(form)

    def get_form(self, form_class=None):
        form = super(AddNewItemView, self).get_form(form_class)
        for field in self.fields:
            form.fields[field].widget.attrs.update({
                'class': 'form-control',
                'placeholder': form.fields[field].label
            })
        return form


class DeleteItemView(LoginRequiredMixin, DeleteView):
    model = Item
    success_url = reverse_lazy('dashboard:main')
    template_name = 'dashboard/item_confirm_delete.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data()
        context.update(
            title=_('Delete Item'),
        )
        return context


class ChangeItemView(LoginRequiredMixin, UpdateView):
    model = Item
    fields = ['name']
    template_name = 'dashboard/item_form.html'
    success_url = reverse_lazy('dashboard:main')

    def get_context_data(self, **kwargs):
        context = super().get_context_data()
        context.update(
            title=_('Edit Item'),
            can_delete=True,
        )
        return context

    def form_valid(self, form):
        form.instance.created_by = self.request.user
        return super().form_valid(form)

    def get_form(self, form_class=None):
        form = super(ChangeItemView, self).get_form(form_class)
        for field in self.fields:
            form.fields[field].widget.attrs.update({
                'class': 'form-control',
                'placeholder': form.fields[field].label
            })
        return form


class BorrowedByMeListView(LoginRequiredMixin, ListView):
    paginate_by = 100
    template_name = "dashboard/borrowed_by_me.html"

    def get_queryset(self):
        now = timezone.now()
        return Borrow.objects.filter(borrower=self.request.user).annotate(
            expire_time=ExpressionWrapper(F('created') + timedelta(days=1) * F('term'),
                                          output_field=models.DateTimeField())
        ).annotate(
            expired=Case(
                When(expire_time__gt=now, then=False),
                When(expire_time__lte=now, then=True),
                output_field=models.BooleanField(),
            )
        )

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context.update({
            'title': _('Borrowed Items by Me'),
        })
        return context


class GivenByMeListView(LoginRequiredMixin, ListView):
    paginate_by = 100
    template_name = "dashboard/given.html"

    def get_queryset(self):
        now = timezone.now()
        return Borrow.objects.filter(item__owner=self.request.user).annotate(
            expire_time=ExpressionWrapper(F('created') + timedelta(days=1) * F('term'), output_field=models.DateTimeField())
        ).annotate(
            expired=Case(
                When(expire_time__gt=now, then=False),
                When(expire_time__lte=now, then=True),
                output_field=models.BooleanField(),
            )
        )

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context.update({
            'title': _('My Given Items'),
        })
        return context

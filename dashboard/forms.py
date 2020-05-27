from django import forms
from django.utils.translation import ugettext as _

from core.models import Item, Borrow, ExtendTermRequest

from decimal import Decimal


class OrderForm(forms.Form):
    amount_dollars = forms.DecimalField(
        max_digits=100,
        decimal_places=2,
        label=_('Amount in USD'),
        widget=forms.NumberInput(
            attrs={'placeholder': _('Amount in USD'), "class": "form-control form-control-gold"}
        )
    )
    amount_auro = forms.DecimalField(
        min_value=Decimal(1000),
        max_digits=100,
        decimal_places=9,
        label=_('Amount in AURO'),
        widget=forms.NumberInput(
            attrs={'placeholder': _('Amount in AURO'), "class": "form-control form-control-gold"}
        ),
    )

class WithdrawForm(forms.Form):
    amount = forms.DecimalField(
        min_value=Decimal(50),
        max_digits=100,
        decimal_places=2,
        label=_('Amount in USD'),
        widget=forms.NumberInput(
            attrs={'placeholder': _('Amount in USD'), "class": "form-control form-control-gold"}
        )
    )
        

class ReinvestForm(forms.Form):
    amount = forms.DecimalField(
        max_digits=100,
        decimal_places=2,
        label=_('Amount in USD'),
        widget=forms.NumberInput(
            attrs={'placeholder': _('Amount in USD'), "class": "form-control form-control-gold"}
        )
    )
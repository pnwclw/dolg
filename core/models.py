from django.core.exceptions import ValidationError
from django.db import models
from django.utils import timezone
from django.utils.translation import ugettext as _

from simple_history.models import HistoricalRecords

from users.models import User


class Item(models.Model):
    class Meta:
        verbose_name = _('Item')
        verbose_name_plural = _('Items')

    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=128)

    history = HistoricalRecords()

    def __str__(self):
        return self.name


class Borrow(models.Model):
    class Meta:
        verbose_name = _('Borrow')
        verbose_name_plural = _('Borrows')

    borrower = models.ForeignKey(User, on_delete=models.CASCADE)
    item = models.OneToOneField(Item, on_delete=models.CASCADE)
    term = models.PositiveIntegerField(default=0, help_text=_('Leave zero if it doesn\'t have term'))
    returned = models.BooleanField(default=False)
    created = models.DateTimeField(default=timezone.now)

    history = HistoricalRecords()

    def __str__(self):
        return _(f'{self.item} (ID: {self.id}, Borrower: {self.borrower.get_full_name()})')

    def clean(self):
        if self.item.owner == self.borrower:
            raise ValidationError(_('Borrower can\'t borrow items he owns'))


class ExtendTermRequest(models.Model):
    class Meta:
        verbose_name = _('Extend Term Request')
        verbose_name_plural = _('Extend Term Requests')

    STATUS_CHOICES = (
        ('pending', _('Pending')),
        ('approved', _('Approved')),
        ('declined', _('Declined')),
    )

    borrow = models.OneToOneField(Borrow, on_delete=models.CASCADE)
    term = models.PositiveIntegerField(default=0)
    status = models.CharField(default='pending', max_length=10, choices=STATUS_CHOICES)
    created = models.DateTimeField(default=timezone.now)

    history = HistoricalRecords()

    def __str__(self):
        return _(f'Extend Term Request #{self.id} (Borrow: {self.borrow})')

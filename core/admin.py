from django.contrib import admin
from django.utils.html import format_html
from django.utils.translation import ugettext as _

from simple_history.admin import SimpleHistoryAdmin
from import_export.admin import ImportExportMixin

from .models import Item, Borrow, ExtendTermRequest


class ItemInline(admin.TabularInline):
    model = Item
    extra = 0


@admin.register(Item)
class ItemAdmin(ImportExportMixin, SimpleHistoryAdmin):
    list_display = ('name', 'owner_link')
    search_fields = ('id', 'name', 'owner')
    autocomplete_fields = ('owner',)

    def owner_link(self, obj):
        return format_html(f'<a href="/admin/users/user/{obj.owner.id}/change">{obj.owner.get_full_name()}</a>')
    owner_link.short_description = _('Owner')


@admin.register(Borrow)
class BorrowAdmin(ImportExportMixin, SimpleHistoryAdmin):
    list_display = ('id', 'item_link', 'borrower_link', 'term_', 'created')
    search_fields = ('id', 'item__name',)
    autocomplete_fields = ('borrower', 'item')

    def borrower_link(self, obj):
        return format_html(f'<a href="/admin/users/user/{obj.borrower.id}/change">{obj.borrower.get_full_name()}</a>')
    borrower_link.short_description = _('Borrower')

    def item_link(self, obj):
        return format_html(f'<a href="/admin/core/item/{obj.item.id}/change">{obj.item.__str__()}</a>')
    item_link.short_description = _('Item')

    def term_(self, obj):
        return _('No term') if not obj.term else obj.term
    term_.short_description = _('Term')


@admin.register(ExtendTermRequest)
class ExtendTermRequestAdmin(ImportExportMixin, SimpleHistoryAdmin):
    list_display = ('id', 'borrow_link', 'term_', 'status')
    list_filter = ('status',)
    search_fields = ('id',)
    autocomplete_fields = ('borrow',)

    def borrow_link(self, obj):
        return format_html(f'<a href="/admin/core/borrow/{obj.borrow.id}/change">{obj.borrow.__str__()}</a>')
    borrow_link.short_description = _('Borrow')

    def term_(self, obj):
        return _('No term') if not obj.term else obj.term
    term_.short_description = _('Term')




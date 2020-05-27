from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.utils import timezone
from django.utils.translation import ugettext as _

from simple_history.admin import SimpleHistoryAdmin
from import_export.admin import ImportExportMixin

from core.admin import ItemInline

from .models import User, Session
from .templatetags.users import device, location


@admin.register(User)
class CustomUserAdmin(ImportExportMixin, UserAdmin, SimpleHistoryAdmin):
    list_display = ('id', 'username', 'full_name', 'date_joined')
    search_fields = ('first_name', 'last_name', 'username', 'email',)
    date_hierarchy = 'date_joined'
    inlines = [ItemInline]

    fieldsets = (
        (None, {'fields': ('username', 'password', 'email')}),
        (_('Personal Info'), {'fields': ('last_name', 'first_name', 'middle_name')}),
        (_('Confirmation'), {'fields': ('confirmation_id', 'is_confirmed')}),
        (_('Permissions'), {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
        (_('Important dates'), {'fields': ('last_login', 'date_joined')}),
    )
    filter_horizontal = ('groups', 'user_permissions')

    def full_name(self, obj):
        return obj.get_full_name()
    full_name.short_description = _('Full Name')


class ExpiredFilter(admin.SimpleListFilter):
    title = _('Is valid')
    parameter_name = 'active'

    def lookups(self, request, model_admin):
        return (
            ('1', _('Active')),
            ('0', _('Expired'))
        )

    def queryset(self, request, queryset):
        if self.value() == '1':
            return queryset.filter(expire_date__gt=timezone.now())
        elif self.value() == '0':
            return queryset.filter(expire_date__lte=timezone.now())


@admin.register(Session)
class SessionAdmin(admin.ModelAdmin):
    list_display = ('ip', 'user', 'is_valid', 'location', 'device',)
    search_fields = ('ip', 'user__id',)
    autocomplete_fields = ('user',)
    list_filter = (ExpiredFilter,)
    exclude = ('session_key',)
    readonly_fields = ('user', 'user_agent', 'ip',)

    fieldsets = (
        (None, {'fields': ('user',)}),
        (_('User agent'), {'fields': ('user_agent', 'ip')}),
        (_('Stored data'), {'fields': ('session_data', 'expire_date')}),
    )

    def is_valid(self, obj):
        return obj.expire_date > timezone.now()
    is_valid.boolean = True

    def location(self, obj):
        return location(obj.ip)
    location.short_description = _("Location")

    def device(self, obj):
        return device(obj.user_agent) if obj.user_agent else '-'
    location.short_description = _("Location")

    def get_form(self, request, obj=None, **kwargs):
        form = super().get_form(request, obj, **kwargs)
        session_data = form.base_fields.get("session_data")
        session_data.help_text = f"Decoded value: {obj.get_decoded()}"
        return form

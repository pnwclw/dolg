

(function(globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    var v=0;
    if (typeof(v) == 'boolean') {
      return v ? 1 : 0;
    } else {
      return v;
    }
  };
  

  /* gettext library */

  django.catalog = django.catalog || {};
  
  var newcatalog = {
    "%(sel)s of %(cnt)s selected": [
      "%(cnt)s \u0430\u0440\u0430\u0441\u044b\u043d\u043d\u0430\u043d %(sel)s \u0441\u0430\u0439\u043b\u0430\u043d\u0433\u0430\u043d"
    ],
    "6 a.m.": "\u0418\u0440\u0442\u04d9\u043d\u0433\u0435 6",
    "Available %s": "\u0420\u04e9\u0445\u0441\u04d9\u0442 \u0438\u0442\u0435\u043b\u0433\u04d9\u043d %s",
    "Cancel": "\u042e\u043a\u043a\u0430 \u0447\u044b\u0433\u0430\u0440\u044b\u0440\u0433\u0430",
    "Choose a time": "\u0412\u0430\u043a\u044b\u0442 \u0441\u0430\u0439\u043b\u0430\u0433\u044b\u0437",
    "Choose all": "\u0411\u0430\u0440\u044b\u0441\u044b\u043d \u0441\u0430\u0439\u043b\u0430\u0440\u0433\u0430",
    "Chosen %s": "\u0421\u0430\u0439\u043b\u0430\u043d\u0433\u0430\u043d %s",
    "Filter": "\u0424\u0438\u043b\u044c\u0442\u0440",
    "Hide": "\u042f\u0448\u0435\u0440\u0435\u0440\u0433\u04d9",
    "Midnight": "\u0422\u04e9\u043d \u0443\u0440\u0442\u0430\u0441\u044b",
    "Noon": "\u0422\u04e9\u0448",
    "Now": "\u0425\u04d9\u0437\u0435\u0440",
    "Remove": "\u0411\u0435\u0442\u0435\u0440\u0435\u0440\u0433\u04d9",
    "Show": "\u041a\u04af\u0440\u0441\u04d9\u0442\u0435\u0440\u0433\u04d9",
    "Today": "\u0411\u04af\u0433\u0435\u043d",
    "Tomorrow": "\u0418\u0440\u0442\u04d9\u0433\u04d9",
    "Yesterday": "\u041a\u0438\u0447\u04d9",
    "You have selected an action, and you haven't made any changes on individual fields. You're probably looking for the Go button rather than the Save button.": "\u0421\u0435\u0437 \u0433\u0430\u043c\u04d9\u043b\u043d\u0435 \u0441\u0430\u0439\u043b\u0430\u0434\u044b\u0433\u044b\u0437 \u04bb\u04d9\u043c \u0442\u04e9\u0437\u04d9\u0442\u04af\u043b\u04d9\u0440\u043d\u0435 \u0431\u0430\u0448\u043a\u0430\u0440\u043c\u0430\u0434\u044b\u0433\u044b\u0437. \u0411\u04d9\u043b\u043a\u0438 \u0441\u0435\u0437 \"\u0421\u0430\u043a\u043b\u0430\u0440\u0433\u0430\" \u0442\u04e9\u0439\u043c\u04d9\u0441\u0435 \u0443\u0440\u044b\u043d\u044b\u043d\u0430 \"\u0411\u0430\u0448\u043a\u0430\u0440\u044b\u0440\u0433\u0430\" \u0442\u04e9\u0439\u043c\u04d9\u0441\u0435\u043d \u043a\u0443\u043b\u043b\u0430\u043d\u044b\u0440\u0433\u0430 \u0442\u0435\u043b\u04d9\u0434\u0435\u0433\u0435\u0437.",
    "You have selected an action, but you haven't saved your changes to individual fields yet. Please click OK to save. You'll need to re-run the action.": "\u0421\u0435\u0437 \u0433\u0430\u043c\u04d9\u043b\u043d\u0435 \u0441\u0430\u0439\u043b\u0430\u0434\u044b\u0433\u044b\u0437, \u04d9\u043c\u043c\u0430 \u043a\u0430\u0439\u0431\u0435\u0440 \u043a\u044b\u0440\u043b\u0430\u0440\u0434\u0430\u0433\u044b \u0442\u04e9\u0437\u04d9\u0442\u04af\u043b\u04d9\u0440\u043d\u0435 \u0441\u0430\u043a\u043b\u0430\u043c\u0430\u0434\u044b\u0433\u044b\u0437. \u0410\u043b\u0430\u0440\u043d\u044b \u0441\u0430\u043a\u043b\u0430\u0443 \u04e9\u0447\u0435\u043d OK \u0442\u04e9\u0439\u043c\u04d9\u0441\u0435\u043d\u04d9 \u0431\u0430\u0441\u044b\u0433\u044b\u0437. \u0410\u043d\u043d\u0430\u043d \u0441\u043e\u04a3 \u0433\u0430\u043c\u04d9\u043b\u043d\u0435 \u0442\u0430\u0433\u044b\u043d \u0431\u0435\u0440 \u0442\u0430\u043f\u043a\u044b\u0440 \u0431\u0430\u0448\u043a\u0430\u0440\u044b\u0440\u0433\u0430 \u0442\u0443\u0440\u044b \u043a\u0438\u043b\u0435\u0440.",
    "You have unsaved changes on individual editable fields. If you run an action, your unsaved changes will be lost.": "\u041a\u0430\u0439\u0431\u0435\u0440 \u043a\u044b\u0440\u043b\u0430\u0440\u0434\u0430 \u0441\u0430\u043a\u043b\u0430\u043d\u043c\u0430\u0433\u0430\u043d \u0442\u04e9\u0437\u04d9\u0442\u04af\u043b\u04d9\u0440 \u043a\u0430\u043b\u0430. \u0421\u0435\u0437 \u0433\u0430\u043c\u04d9\u043b\u043d\u0435 \u0431\u0430\u0448\u043a\u0430\u0440\u0441\u0430\u0433\u044b\u0437, \u0441\u0435\u0437\u043d\u0435\u04a3 \u0441\u0430\u043a\u043b\u0430\u043d\u043c\u0430\u0433\u0430\u043d \u04af\u0437\u0433\u04d9\u0440\u0442\u04af\u043b\u04d9\u0440 \u044e\u0433\u0430\u043b\u0430\u0447\u0430\u043a\u043b\u0430\u0440."
  };
  for (var key in newcatalog) {
    django.catalog[key] = newcatalog[key];
  }
  

  if (!django.jsi18n_initialized) {
    django.gettext = function(msgid) {
      var value = django.catalog[msgid];
      if (typeof(value) == 'undefined') {
        return msgid;
      } else {
        return (typeof(value) == 'string') ? value : value[0];
      }
    };

    django.ngettext = function(singular, plural, count) {
      var value = django.catalog[singular];
      if (typeof(value) == 'undefined') {
        return (count == 1) ? singular : plural;
      } else {
        return value.constructor === Array ? value[django.pluralidx(count)] : value;
      }
    };

    django.gettext_noop = function(msgid) { return msgid; };

    django.pgettext = function(context, msgid) {
      var value = django.gettext(context + '\x04' + msgid);
      if (value.indexOf('\x04') != -1) {
        value = msgid;
      }
      return value;
    };

    django.npgettext = function(context, singular, plural, count) {
      var value = django.ngettext(context + '\x04' + singular, context + '\x04' + plural, count);
      if (value.indexOf('\x04') != -1) {
        value = django.ngettext(singular, plural, count);
      }
      return value;
    };

    django.interpolate = function(fmt, obj, named) {
      if (named) {
        return fmt.replace(/%\(\w+\)s/g, function(match){return String(obj[match.slice(2,-2)])});
      } else {
        return fmt.replace(/%s/g, function(match){return String(obj.shift())});
      }
    };


    /* formatting library */

    django.formats = {
    "DATETIME_FORMAT": "N j, Y, P",
    "DATETIME_INPUT_FORMATS": [
      "%Y-%m-%d %H:%M:%S",
      "%Y-%m-%d %H:%M:%S.%f",
      "%Y-%m-%d %H:%M",
      "%Y-%m-%d",
      "%m/%d/%Y %H:%M:%S",
      "%m/%d/%Y %H:%M:%S.%f",
      "%m/%d/%Y %H:%M",
      "%m/%d/%Y",
      "%m/%d/%y %H:%M:%S",
      "%m/%d/%y %H:%M:%S.%f",
      "%m/%d/%y %H:%M",
      "%m/%d/%y"
    ],
    "DATE_FORMAT": "N j, Y",
    "DATE_INPUT_FORMATS": [
      "%Y-%m-%d",
      "%m/%d/%Y",
      "%m/%d/%y",
      "%b %d %Y",
      "%b %d, %Y",
      "%d %b %Y",
      "%d %b, %Y",
      "%B %d %Y",
      "%B %d, %Y",
      "%d %B %Y",
      "%d %B, %Y"
    ],
    "DECIMAL_SEPARATOR": ".",
    "FIRST_DAY_OF_WEEK": 0,
    "MONTH_DAY_FORMAT": "F j",
    "NUMBER_GROUPING": 0,
    "SHORT_DATETIME_FORMAT": "m/d/Y P",
    "SHORT_DATE_FORMAT": "m/d/Y",
    "THOUSAND_SEPARATOR": ",",
    "TIME_FORMAT": "P",
    "TIME_INPUT_FORMATS": [
      "%H:%M:%S",
      "%H:%M:%S.%f",
      "%H:%M"
    ],
    "YEAR_MONTH_FORMAT": "F Y"
  };

    django.get_format = function(format_type) {
      var value = django.formats[format_type];
      if (typeof(value) == 'undefined') {
        return format_type;
      } else {
        return value;
      }
    };

    /* add to global namespace */
    globals.pluralidx = django.pluralidx;
    globals.gettext = django.gettext;
    globals.ngettext = django.ngettext;
    globals.gettext_noop = django.gettext_noop;
    globals.pgettext = django.pgettext;
    globals.npgettext = django.npgettext;
    globals.interpolate = django.interpolate;
    globals.get_format = django.get_format;

    django.jsi18n_initialized = true;
  }

}(this));


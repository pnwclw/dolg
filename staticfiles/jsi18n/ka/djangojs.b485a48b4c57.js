

(function(globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    var v=(n!=1);
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
      "%(cnt)s-\u10d3\u10d0\u10dc \u10d0\u10e0\u10e9\u10d4\u10e3\u10da\u10d8\u10d0 %(sel)s",
      "%(cnt)s-\u10d3\u10d0\u10dc \u10d0\u10e0\u10e9\u10d4\u10e3\u10da\u10d8\u10d0 %(sel)s"
    ],
    "6 a.m.": "\u10d3\u10d8\u10da\u10d8\u10e1 6 \u10e1\u10d7",
    "Available %s": "\u10db\u10d8\u10e1\u10d0\u10ec\u10d5\u10d3\u10dd\u10db\u10d8 %s",
    "Cancel": "\u10e3\u10d0\u10e0\u10d8",
    "Choose": "\u10d0\u10e0\u10e9\u10d4\u10d5\u10d0",
    "Choose a time": "\u10d0\u10d5\u10d8\u10e0\u10e9\u10d8\u10dd\u10d7 \u10d3\u10e0\u10dd",
    "Choose all": "\u10d0\u10d5\u10d8\u10e0\u10e9\u10d8\u10dd\u10d7 \u10e7\u10d5\u10d4\u10da\u10d0",
    "Chosen %s": "\u10d0\u10e0\u10e9\u10d4\u10e3\u10da\u10d8 %s",
    "Click to choose all %s at once.": "\u10d3\u10d0\u10d0\u10ec\u10d9\u10d0\u10de\u10e3\u10dc\u10d4\u10d7 \u10d4\u10e0\u10d7\u10d3\u10e0\u10dd\u10e3\u10da\u10d0\u10d3 \u10e7\u10d5\u10d4\u10da\u10d0 %s-\u10d8\u10e1 \u10d0\u10e1\u10d0\u10e0\u10e9\u10d4\u10d5\u10d0\u10d3.",
    "Click to remove all chosen %s at once.": "\u10d3\u10d0\u10d0\u10ec\u10d9\u10d0\u10de\u10e3\u10dc\u10d4\u10d7 \u10e7\u10d5\u10d4\u10da\u10d0 \u10d0\u10e0\u10e9\u10d4\u10e3\u10da\u10d8 %s-\u10d8\u10e1 \u10d4\u10e0\u10d7\u10d3\u10e0\u10dd\u10e3\u10da\u10d0\u10d3 \u10db\u10dd\u10e1\u10d0\u10e8\u10dd\u10e0\u10d4\u10d1\u10da\u10d0\u10d3.",
    "Filter": "\u10e4\u10d8\u10da\u10e2\u10e0\u10d8",
    "Hide": "\u10d3\u10d0\u10d5\u10db\u10d0\u10da\u10dd\u10d7",
    "Midnight": "\u10e8\u10e3\u10d0\u10e6\u10d0\u10db\u10d4",
    "Noon": "\u10e8\u10e3\u10d0\u10d3\u10e6\u10d4",
    "Note: You are %s hour ahead of server time.": [
      "\u10e8\u10d4\u10dc\u10d8\u10e8\u10d5\u10dc\u10d0: \u10d7\u10e5\u10d5\u10d4\u10dc \u10ee\u10d0\u10e0\u10d7 %s \u10e1\u10d0\u10d0\u10d7\u10d8\u10d7 \u10ec\u10d8\u10dc \u10e1\u10d4\u10e0\u10d5\u10d4\u10e0\u10d8\u10e1 \u10d3\u10e0\u10dd\u10d6\u10d4.",
      "\u10e8\u10d4\u10dc\u10d8\u10e8\u10d5\u10dc\u10d0: \u10d7\u10e5\u10d5\u10d4\u10dc \u10ee\u10d0\u10e0\u10d7 %s \u10e1\u10d0\u10d0\u10d7\u10d8\u10d7 \u10ec\u10d8\u10dc \u10e1\u10d4\u10e0\u10d5\u10d4\u10e0\u10d8\u10e1 \u10d3\u10e0\u10dd\u10d6\u10d4."
    ],
    "Note: You are %s hour behind server time.": [
      "\u10e8\u10d4\u10dc\u10d8\u10e8\u10d5\u10dc\u10d0: \u10d7\u10e5\u10d5\u10d4\u10dc \u10ee\u10d0\u10e0\u10d7 %s \u10e1\u10d0\u10d0\u10d7\u10d8\u10d7 \u10e3\u10d9\u10d0\u10dc \u10e1\u10d4\u10e0\u10d5\u10d4\u10e0\u10d8\u10e1 \u10d3\u10e0\u10dd\u10d6\u10d4.",
      "\u10e8\u10d4\u10dc\u10d8\u10e8\u10d5\u10dc\u10d0: \u10d7\u10e5\u10d5\u10d4\u10dc \u10ee\u10d0\u10e0\u10d7 %s \u10e1\u10d0\u10d0\u10d7\u10d8\u10d7 \u10e3\u10d9\u10d0\u10dc \u10e1\u10d4\u10e0\u10d5\u10d4\u10e0\u10d8\u10e1 \u10d3\u10e0\u10dd\u10d6\u10d4."
    ],
    "Now": "\u10d0\u10ee\u10da\u10d0",
    "Remove": "\u10ec\u10d0\u10d5\u10e8\u10d0\u10da\u10dd\u10d7",
    "Remove all": "\u10e7\u10d5\u10d4\u10da\u10d0\u10e1 \u10db\u10dd\u10e8\u10dd\u10e0\u10d4\u10d1\u10d0",
    "Show": "\u10d5\u10d0\u10e9\u10d5\u10d4\u10dc\u10dd\u10d7",
    "This is the list of available %s. You may choose some by selecting them in the box below and then clicking the \"Choose\" arrow between the two boxes.": "\u10d4\u10e1 \u10d0\u10e0\u10d8\u10e1 \u10db\u10d8\u10e1\u10d0\u10ec\u10d5\u10d3\u10dd\u10db\u10d8 %s-\u10d8\u10e1 \u10e1\u10d8\u10d0. \u10d6\u10dd\u10d2\u10d8\u10d4\u10e0\u10d7\u10d8 \u10db\u10d0\u10d7\u10d2\u10d0\u10dc\u10d8\u10e1 \u10d0\u10e1\u10d0\u10e0\u10e9\u10d4\u10d5\u10d0\u10d3,  \u10db\u10dd\u10dc\u10d8\u10e8\u10d5\u10dc\u10d8\u10d7 \u10d8\u10e1\u10d8\u10dc\u10d8 \u10e5\u10d5\u10d4\u10d3\u10d0 \u10e1\u10d0\u10e0\u10d9\u10db\u10d4\u10da\u10e8\u10d8 \u10d3\u10d0 \u10d3\u10d0\u10d0\u10ec\u10d9\u10d0\u10de\u10e3\u10dc\u10d4\u10d7  \u10dd\u10e0 \u10e1\u10d0\u10e0\u10d9\u10db\u10d4\u10da\u10e1 \u10e8\u10dd\u10e0\u10d8\u10e1 \u10db\u10d3\u10d4\u10d1\u10d0\u10e0\u10d4 \u10d8\u10e1\u10d0\u10e0\u10d6\u10d4 \"\u10d0\u10e0\u10e9\u10d4\u10d5\u10d0\" .",
    "This is the list of chosen %s. You may remove some by selecting them in the box below and then clicking the \"Remove\" arrow between the two boxes.": "\u10d4\u10e1 \u10d0\u10e0\u10d8\u10e1 \u10d0\u10e0\u10e9\u10d4\u10e3\u10da\u10d8 %s-\u10d8\u10e1 \u10e1\u10d8\u10d0. \u10d6\u10dd\u10d2\u10d8\u10d4\u10e0\u10d7\u10d8 \u10db\u10d0\u10d7\u10d2\u10d0\u10dc\u10d8\u10e1 \u10db\u10dd\u10e1\u10d0\u10e8\u10dd\u10e0\u10d4\u10d1\u10da\u10d0\u10d3,  \u10db\u10dd\u10dc\u10d8\u10e8\u10d5\u10dc\u10d8\u10d7 \u10d8\u10e1\u10d8\u10dc\u10d8 \u10e5\u10d5\u10d4\u10d3\u10d0 \u10e1\u10d0\u10e0\u10d9\u10db\u10d4\u10da\u10e8\u10d8 \u10d3\u10d0 \u10d3\u10d0\u10d0\u10ec\u10d9\u10d0\u10de\u10e3\u10dc\u10d4\u10d7  \u10dd\u10e0 \u10e1\u10d0\u10e0\u10d9\u10db\u10d4\u10da\u10e1 \u10e8\u10dd\u10e0\u10d8\u10e1 \u10db\u10d3\u10d4\u10d1\u10d0\u10e0\u10d4 \u10d8\u10e1\u10d0\u10e0\u10d6\u10d4 \"\u10db\u10dd\u10e8\u10dd\u10e0\u10d4\u10d1\u10d0\" .",
    "Today": "\u10d3\u10e6\u10d4\u10e1",
    "Tomorrow": "\u10ee\u10d5\u10d0\u10da",
    "Type into this box to filter down the list of available %s.": "\u10d0\u10d9\u10e0\u10d8\u10e4\u10d4\u10d7 \u10d0\u10db \u10e1\u10d0\u10e0\u10d9\u10db\u10d4\u10da\u10e8\u10d8 \u10db\u10d8\u10e1\u10d0\u10ec\u10d5\u10d3\u10dd\u10db\u10d8 %s-\u10d8\u10e1 \u10e1\u10d8\u10d8\u10e1 \u10d2\u10d0\u10e1\u10d0\u10e4\u10d8\u10da\u10e2\u10e0\u10d0\u10d3.",
    "Yesterday": "\u10d2\u10e3\u10e8\u10d8\u10dc",
    "You have selected an action, and you haven't made any changes on individual fields. You're probably looking for the Go button rather than the Save button.": "\u10d0\u10d2\u10d8\u10e0\u10e9\u10d4\u10d5\u10d8\u10d0\u10d7 \u10db\u10dd\u10e5\u10db\u10d4\u10d3\u10d4\u10d1\u10d0, \u10db\u10d0\u10d2\u10e0\u10d0\u10db \u10ea\u10d0\u10da\u10d9\u10d4\u10e3\u10da \u10d5\u10d4\u10da\u10d4\u10d1\u10e8\u10d8 \u10ea\u10d5\u10da\u10d8\u10da\u10d4\u10d1\u10d4\u10d1\u10d8 \u10d0\u10e0 \u10d2\u10d0\u10d2\u10d8\u10d9\u10d4\u10d7\u10d4\u10d1\u10d8\u10d0\u10d7! \u10e1\u10d0\u10d5\u10d0\u10e0\u10d0\u10e3\u10d3\u10dd\u10d3, \u10d4\u10eb\u10d4\u10d1\u10d7 \u10e6\u10d8\u10da\u10d0\u10d9\u10e1 \"Go\", \u10d3\u10d0 \u10d0\u10e0\u10d0 \"\u10e8\u10d4\u10dc\u10d0\u10ee\u10d5\u10d0\"",
    "You have selected an action, but you haven't saved your changes to individual fields yet. Please click OK to save. You'll need to re-run the action.": "\u10d0\u10d2\u10d8\u10e0\u10e9\u10d4\u10d5\u10d8\u10d0\u10d7 \u10db\u10dd\u10e5\u10db\u10d4\u10d3\u10d4\u10d1\u10d0, \u10db\u10d0\u10d2\u10e0\u10d0\u10db \u10ea\u10d0\u10da\u10d9\u10d4\u10e3\u10da\u10d8 \u10d5\u10d4\u10da\u10d4\u10d1\u10d8 \u10ef\u10d4\u10e0 \u10d0\u10e0 \u10e8\u10d4\u10d2\u10d8\u10dc\u10d0\u10ee\u10d8\u10d0\u10d7! \u10d2\u10d7\u10ee\u10dd\u10d5\u10d7, \u10e8\u10d4\u10dc\u10d0\u10ee\u10d5\u10d8\u10e1\u10d7\u10d5\u10d8\u10e1 \u10d3\u10d0\u10d0\u10ed\u10d8\u10e0\u10dd\u10d7 OK. \u10db\u10dd\u10e5\u10db\u10d4\u10d3\u10d4\u10d1\u10d8\u10e1 \u10ee\u10d4\u10da\u10d0\u10ee\u10da\u10d0 \u10d2\u10d0\u10e8\u10d5\u10d4\u10d1\u10d0 \u10db\u10dd\u10d2\u10d8\u10ec\u10d4\u10d5\u10d7.",
    "You have unsaved changes on individual editable fields. If you run an action, your unsaved changes will be lost.": "\u10ea\u10d0\u10da\u10d9\u10d4\u10e3\u10da \u10d5\u10d4\u10da\u10d4\u10d1\u10e8\u10d8 \u10e8\u10d4\u10e3\u10dc\u10d0\u10ee\u10d0\u10d5\u10d8 \u10ea\u10d5\u10da\u10d8\u10da\u10d4\u10d1\u10d4\u10d1\u10d8 \u10d2\u10d0\u10e5\u10d5\u10d7! \u10d7\u10e3 \u10db\u10dd\u10e5\u10db\u10d4\u10d3\u10d4\u10d1\u10d0\u10e1 \u10e8\u10d4\u10d0\u10e1\u10e0\u10e3\u10da\u10d4\u10d1\u10d7, \u10e8\u10d4\u10e3\u10dc\u10d0\u10ee\u10d0\u10d5\u10d8 \u10ea\u10d5\u10da\u10d8\u10da\u10d4\u10d1\u10d4\u10d1\u10d8 \u10d3\u10d0\u10d8\u10d9\u10d0\u10e0\u10d0\u10d2\u10d4\u10d1\u10d0."
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
    "DATETIME_FORMAT": "j F, Y h:i a",
    "DATETIME_INPUT_FORMATS": [
      "%Y-%m-%d %H:%M:%S",
      "%Y-%m-%d %H:%M:%S.%f",
      "%Y-%m-%d %H:%M",
      "%Y-%m-%d",
      "%d.%m.%Y %H:%M:%S",
      "%d.%m.%Y %H:%M:%S.%f",
      "%d.%m.%Y %H:%M",
      "%d.%m.%Y",
      "%d.%m.%y %H:%M:%S",
      "%d.%m.%y %H:%M:%S.%f",
      "%d.%m.%y %H:%M",
      "%d.%m.%y",
      "%m/%d/%Y %H:%M:%S",
      "%m/%d/%Y %H:%M:%S.%f",
      "%m/%d/%Y %H:%M",
      "%m/%d/%Y",
      "%m/%d/%y %H:%M:%S",
      "%m/%d/%y %H:%M:%S.%f",
      "%m/%d/%y %H:%M",
      "%m/%d/%y"
    ],
    "DATE_FORMAT": "l, j F, Y",
    "DATE_INPUT_FORMATS": [
      "%Y-%m-%d",
      "%m/%d/%Y",
      "%m/%d/%y"
    ],
    "DECIMAL_SEPARATOR": ".",
    "FIRST_DAY_OF_WEEK": 1,
    "MONTH_DAY_FORMAT": "j F",
    "NUMBER_GROUPING": 3,
    "SHORT_DATETIME_FORMAT": "j.M.Y H:i",
    "SHORT_DATE_FORMAT": "j.M.Y",
    "THOUSAND_SEPARATOR": " ",
    "TIME_FORMAT": "h:i a",
    "TIME_INPUT_FORMATS": [
      "%H:%M:%S",
      "%H:%M:%S.%f",
      "%H:%M"
    ],
    "YEAR_MONTH_FORMAT": "F, Y"
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


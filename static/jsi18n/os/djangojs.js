

(function(globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    var v=(n != 1);
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
      "%(cnt)s-\u04d5\u0439 %(sel)s \u04d5\u0432\u0437\u04d5\u0440\u0441\u0442",
      "%(cnt)s-\u04d5\u0439 %(sel)s \u04d5\u0432\u0437\u04d5\u0440\u0441\u0442"
    ],
    "6 a.m.": "6 \u04d5.\u0440.",
    "Available %s": "\u0423\u04d5\u0432\u04d5\u0433 %s",
    "Cancel": "\u0420\u0430\u0437\u0434\u04d5\u0445\u044b\u043d",
    "Choose": "\u0420\u0430\u0432\u0437\u0430\u0440\u044b\u043d",
    "Choose a time": "\u0420\u04d5\u0441\u0442\u04d5\u0433 \u0440\u0430\u0432\u0437\u0430\u0440\u044b\u043d",
    "Choose all": "\u0420\u0430\u0432\u0437\u0430\u0440\u044b\u043d \u0430\u043b\u043a\u04d5\u0446\u044b\u0434\u04d5\u0440",
    "Chosen %s": "\u04d4\u0432\u0437\u04d5\u0440\u0441\u0442 %s",
    "Click to choose all %s at once.": "\u041d\u044b\u0445\u0445\u04d5\u0446, \u0430\u043b\u044b %s \u0440\u0430\u0432\u0437\u0430\u0440\u044b\u043d\u04d5\u043d.",
    "Click to remove all chosen %s at once.": "\u041d\u044b\u0445\u0445\u04d5\u0446, \u0430\u043b\u044b \u04d5\u0432\u0437\u04d5\u0440\u0441\u0442 %s \u0441\u0445\u0430\u0444\u044b\u043d\u04d5\u043d.",
    "Filter": "\u0424\u04d5\u0440\u0441\u0443\u0434\u0437\u04d5\u043d",
    "Hide": "\u0410\u0439\u0441\u044b\u043d",
    "Midnight": "\u04d4\u043c\u0431\u0438\u0441\u04d5\u0445\u0441\u04d5\u0432",
    "Noon": "\u04d4\u043c\u0431\u0438\u0441\u0431\u043e\u043d",
    "Now": "\u041d\u044b\u0440",
    "Remove": "\u0421\u0445\u0430\u0444\u044b\u043d",
    "Remove all": "\u0421\u0445\u0430\u0444\u044b\u043d \u0430\u043b\u043a\u04d5\u0446\u044b\u0434\u04d5\u0440",
    "Show": "\u0420\u0430\u0432\u0434\u0438\u0441\u044b\u043d",
    "This is the list of available %s. You may choose some by selecting them in the box below and then clicking the \"Choose\" arrow between the two boxes.": "\u0423\u04d5\u0432\u04d5\u0433 %s-\u0442\u044b \u043d\u043e\u043c\u0445\u044b\u0433\u044a\u0434. \u0414\u04d5 \u0431\u043e\u043d \u0443 \u0438\u0441\u043a\u04d5\u0446\u044b\u0442\u04d5 \u0434\u0437\u044b \u0440\u0430\u0443\u04d5\u043b\u0434\u0430\u0439 \u043a\u04d5\u043d\u0430\u0439, \u043a\u0443\u044b \u0441\u04d5 \u0440\u0430\u0432\u0437\u0430\u0440\u0430\u0439 \u0431\u044b\u043d\u0434\u04d5\u0440 \u043a\u044a\u04d5\u0440\u0442\u0442\u044b \u04d5\u043c\u04d5 \u0434\u044b\u0443\u0443\u04d5 \u043a\u044a\u04d5\u0440\u0442\u0442\u044b \u04d5\u0445\u0441\u04d5\u043d \"\u0420\u0430\u0432\u0437\u0430\u0440\u044b\u043d\"-\u044b \u04d5\u0433\u044a\u043d\u04d5\u0433\u044b\u043b \u043a\u0443\u044b \u043d\u044b\u0445\u0445\u04d5\u0446\u0430\u0439, \u0443\u04d5\u0434.",
    "This is the list of chosen %s. You may remove some by selecting them in the box below and then clicking the \"Remove\" arrow between the two boxes.": "\u0410\u0439 \u0443 \u04d5\u0432\u0437\u04d5\u0440\u0441\u0442 %s-\u0442\u044b \u043d\u043e\u043c\u0445\u044b\u0433\u044a\u0434. \u0421\u04d5 \u0445\u0430\u0444\u044b\u043d\u04d5\u043d \u0441\u04d5 \u0434\u04d5 \u0431\u043e\u043d \u0443 \u0431\u044b\u043d\u0434\u04d5\u0440 \u043a\u044a\u04d5\u0440\u0442\u0442\u044b \u0440\u0430\u0432\u0437\u0430\u0440\u044b\u043d \u04d5\u043c\u04d5 \u0434\u044b\u0443\u0443\u04d5 \u04d5\u0433\u044a\u043d\u04d5\u0434\u0436\u044b \u04d5\u0445\u0441\u04d5\u043d \"\u0421\u0445\u0444\u044b\u043d\"-\u044b\u043b \u043d\u044b\u0445\u0445\u04d5\u0446\u044b\u043d.",
    "Today": "\u0410\u0431\u043e\u043d",
    "Tomorrow": "\u0421\u043e\u043c",
    "Type into this box to filter down the list of available %s.": "\u0411\u0430\u0444\u044b\u0441\u0441 \u0430\u0446\u044b \u043a\u044a\u04d5\u0440\u0442\u0442\u044b, \u0443\u04d5\u0432\u04d5\u0433 %s-\u0442\u044b \u043d\u043e\u043c\u0445\u044b\u0433\u044a\u0434 \u0444\u04d5\u0440\u0441\u0443\u0434\u0437\u044b\u043d\u04d5\u043d.",
    "Yesterday": "\u0417\u043d\u043e\u043d",
    "You have selected an action, and you haven't made any changes on individual fields. You're probably looking for the Go button rather than the Save button.": "\u0414\u044b \u0440\u0430\u0432\u0437\u04d5\u0440\u0442\u0430\u0439 \u0446\u044b\u0434\u04d5\u0440 \u043c\u0438, \u0444\u04d5\u043b\u04d5 \u0438\u0432\u04d5\u043d \u0431\u044b\u043d\u04d5\u0442\u0442\u044b \u043d\u0438\u0446\u044b \u0431\u0430\u0438\u0432\u0442\u0430\u0439. \u0423\u04d5\u0446\u0446\u04d5\u0433\u04d5\u043d \u0434\u04d5 \u0410\u0446\u04d5\u0443\u044b\u043d\u044b \u04d5\u0433\u044a\u043d\u04d5\u0433 \u0445\u044a\u04d5\u0443\u044b, \u0411\u0430\u0432\u04d5\u0440\u044b\u043d\u044b \u043d\u04d5 \u0444\u04d5\u043b\u04d5.",
    "You have selected an action, but you haven't saved your changes to individual fields yet. Please click OK to save. You'll need to re-run the action.": "\u0414\u044b \u0440\u0430\u0432\u0437\u04d5\u0440\u0441\u0442\u0430\u0439 \u0446\u044b\u0434\u04d5\u0440 \u043c\u0438, \u0444\u04d5\u043b\u04d5 \u0438\u0432\u04d5\u043d \u0431\u044b\u043d\u04d5\u0442\u0442\u044b \u0446\u044b \u0444\u04d5\u0438\u0432\u0442\u0430\u0439, \u0443\u044b\u0434\u043e\u043d \u043d\u04d5 \u0431\u0430\u0432\u04d5\u0440\u0434\u0442\u0430\u0439. \u0414\u04d5 \u0445\u043e\u0440\u0437\u04d5\u0445\u04d5\u0439, \u043d\u044b\u0445\u0445\u04d5\u0446 \u0425\u043e\u0440\u0437\u044b\u043b \u0446\u04d5\u043c\u04d5\u0439 \u0431\u0430\u0432\u04d5\u0440\u0434 \u0443\u043e\u0439. \u0421\u0442\u04d5\u0439 \u0434\u044b\u043d \u0445\u044a\u04d5\u0443\u0434\u0437\u04d5\u043d \u0430\u0446\u044b \u043c\u0438 \u043d\u043e\u0433\u04d5\u0439 \u0431\u0430\u043a\u04d5\u043d\u044b\u043d.",
    "You have unsaved changes on individual editable fields. If you run an action, your unsaved changes will be lost.": "\u04d4\u043d\u04d5\u0432\u04d5\u0440\u0434 \u0438\u0432\u0434\u0442\u044b\u0442\u04d5 \u0431\u0430\u0437\u0437\u0430\u0434\u044b\u0441\u0442\u044b \u0438\u0432\u044b\u043d\u044b \u0431\u044b\u043d\u04d5\u0442\u0442\u044b. \u041a\u04d5\u0434 \u0438\u0441\u0442\u044b \u043c\u0438 \u0441\u0430\u0440\u0430\u0437\u0430\u0439, \u0443\u04d5\u0434 \u0434\u04d5 \u04d5\u043d\u04d5\u0432\u04d5\u0440\u0434 \u0438\u0432\u0434\u0442\u044b\u0442\u04d5 \u0444\u0435\u0441\u04d5\u0444\u0434\u0437\u044b\u0441\u0442\u044b."
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


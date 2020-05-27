

(function(globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    var v=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<12 || n%100>14) ? 1 : n%10==0 || (n%10>=5 && n%10<=9) || (n%100>=11 && n%100<=14)? 2 : 3);
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
      "\u0410\u0431\u0440\u0430\u043b\u0456 %(sel)s \u0437 %(cnt)s",
      "\u0410\u0431\u0440\u0430\u043b\u0456 %(sel)s \u0437 %(cnt)s",
      "\u0410\u0431\u0440\u0430\u043b\u0456 %(sel)s \u0437 %(cnt)s",
      "\u0410\u0431\u0440\u0430\u043b\u0456 %(sel)s \u0437 %(cnt)s"
    ],
    "6 a.m.": "6 \u043f\u0430\u043f\u043e\u045e\u043d\u0430\u0447\u044b",
    "6 p.m.": "6 \u043f\u0430\u043f\u0430\u045e\u0434\u043d\u0456",
    "April": "\u041a\u0440\u0430\u0441\u0430\u0432\u0456\u043a",
    "August": "\u0416\u043d\u0456\u0432\u0435\u043d\u044c",
    "Available %s": "\u0414\u0430\u0441\u0442\u0443\u043f\u043d\u044b\u044f %s",
    "Cancel": "\u0421\u043a\u0430\u0441\u0430\u0432\u0430\u0446\u044c",
    "Choose": "\u0410\u0431\u0440\u0430\u0446\u044c",
    "Choose a Date": "\u0410\u0431\u044f\u0440\u044b\u0446\u0435 \u0434\u0430\u0442\u0443",
    "Choose a Time": "\u0410\u0431\u044f\u0440\u044b\u0446\u0435 \u0447\u0430\u0441",
    "Choose a time": "\u0410\u0431\u044f\u0440\u044b\u0446\u0435 \u0447\u0430\u0441",
    "Choose all": "\u0410\u0431\u0440\u0430\u0446\u044c \u0443\u0441\u0435",
    "Chosen %s": "\u0410\u0431\u0440\u0430\u043b\u0456 %s",
    "Click to choose all %s at once.": "\u041a\u0430\u0431 \u0430\u0431\u0440\u0430\u0446\u044c \u0443\u0441\u0435 %s, \u043f\u0441\u0442\u0440\u044b\u043a\u043d\u0456\u0446\u0435 \u0442\u0443\u0442.",
    "Click to remove all chosen %s at once.": "\u041a\u0430\u0431 \u043f\u0440\u044b\u0431\u0440\u0430\u0446\u044c \u0443\u0441\u0435 %s, \u043f\u0441\u0442\u0440\u044b\u043a\u043d\u0456\u0446\u0435 \u0442\u0443\u0442.",
    "December": "\u0421\u043d\u0435\u0436\u0430\u043d\u044c",
    "February": "\u041b\u044e\u0442\u044b",
    "Filter": "\u041f\u0440\u0430\u0441\u0435\u044f\u0446\u044c",
    "Hide": "\u0421\u0445\u0430\u0432\u0430\u0446\u044c",
    "January": "\u0421\u0442\u0443\u0434\u0437\u0435\u043d\u044c",
    "July": "\u041b\u0456\u043f\u0435\u043d\u044c",
    "June": "\u0427\u044d\u0440\u0432\u0435\u043d\u044c",
    "March": "\u0421\u0430\u043a\u0430\u0432\u0456\u043a",
    "May": "\u0422\u0440\u0430\u0432\u0435\u043d\u044c",
    "Midnight": "\u041f\u043e\u045e\u043d\u0430\u0447",
    "Noon": "\u041f\u043e\u045e\u0434\u0437\u0435\u043d\u044c",
    "Note: You are %s hour ahead of server time.": [
      "\u0417\u0430\u045e\u0432\u0430\u0433\u0430: \u0412\u0430\u0448 \u0447\u0430\u0441 \u0441\u043f\u044f\u0448\u0430\u0435\u0446\u0446\u0430 \u043d\u0430 %s \u0433 \u0430\u0434\u043d\u043e\u0441\u043d\u0430 \u0447\u0430\u0441\u0443 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u044b.",
      "\u0417\u0430\u045e\u0432\u0430\u0433\u0430: \u0412\u0430\u0448 \u0447\u0430\u0441 \u0441\u043f\u044f\u0448\u0430\u0435\u0446\u0446\u0430 \u043d\u0430 %s \u0433 \u0430\u0434\u043d\u043e\u0441\u043d\u0430 \u0447\u0430\u0441\u0443 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u044b.",
      "\u0417\u0430\u045e\u0432\u0430\u0433\u0430: \u0412\u0430\u0448 \u0447\u0430\u0441 \u0441\u043f\u044f\u0448\u0430\u0435\u0446\u0446\u0430 \u043d\u0430 %s \u0433 \u0430\u0434\u043d\u043e\u0441\u043d\u0430 \u0447\u0430\u0441\u0443 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u044b.",
      "\u0417\u0430\u045e\u0432\u0430\u0433\u0430: \u0412\u0430\u0448 \u0447\u0430\u0441 \u0441\u043f\u044f\u0448\u0430\u0435\u0446\u0446\u0430 \u043d\u0430 %s \u0433 \u0430\u0434\u043d\u043e\u0441\u043d\u0430 \u0447\u0430\u0441\u0443 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u044b."
    ],
    "Note: You are %s hour behind server time.": [
      "\u0417\u0430\u045e\u0432\u0430\u0433\u0430: \u0412\u0430\u0448 \u0447\u0430\u0441 \u0430\u0434\u0441\u0442\u0430\u0435 \u043d\u0430 %s \u0433 \u0430\u0434 \u0447\u0430\u0441\u0443 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u044b.",
      "\u0417\u0430\u045e\u0432\u0430\u0433\u0430: \u0412\u0430\u0448 \u0447\u0430\u0441 \u0430\u0434\u0441\u0442\u0430\u0435 \u043d\u0430 %s \u0433 \u0430\u0434 \u0447\u0430\u0441\u0443 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u044b.",
      "\u0417\u0430\u045e\u0432\u0430\u0433\u0430: \u0412\u0430\u0448 \u0447\u0430\u0441 \u0430\u0434\u0441\u0442\u0430\u0435 \u043d\u0430 %s \u0433 \u0430\u0434 \u0447\u0430\u0441\u0443 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u044b.",
      "\u0417\u0430\u045e\u0432\u0430\u0433\u0430: \u0412\u0430\u0448 \u0447\u0430\u0441 \u0430\u0434\u0441\u0442\u0430\u0435 \u043d\u0430 %s \u0433 \u0430\u0434 \u0447\u0430\u0441\u0443 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u044b."
    ],
    "November": "\u041b\u0456\u0441\u0442\u0430\u043f\u0430\u0434",
    "Now": "\u0426\u044f\u043f\u0435\u0440",
    "October": "\u041a\u0430\u0441\u0442\u0440\u044b\u0447\u043d\u0456\u043a",
    "Remove": "\u041f\u0440\u044b\u0431\u0440\u0430\u0446\u044c",
    "Remove all": "\u041f\u0440\u044b\u0431\u0440\u0430\u0446\u044c \u0443\u0441\u0451",
    "September": "\u0412\u0435\u0440\u0430\u0441\u0435\u043d\u044c",
    "Show": "\u041f\u0430\u043a\u0430\u0437\u0430\u0446\u044c",
    "This is the list of available %s. You may choose some by selecting them in the box below and then clicking the \"Choose\" arrow between the two boxes.": "\u0421\u044c\u043f\u0456\u0441 \u0434\u0430\u0441\u0442\u0443\u043f\u043d\u044b\u0445 %s. \u041a\u0430\u0431 \u043d\u0435\u0448\u0442\u0430 \u0430\u0431\u0440\u0430\u0446\u044c, \u043f\u0430\u0437\u043d\u0430\u0447\u0446\u0435 \u043f\u0430\u0442\u0440\u044d\u0431\u043d\u0430\u0435 \u045e \u043f\u043e\u043b\u0456 \u043d\u0456\u0436\u044d\u0439 \u0456 \u043f\u0441\u0442\u0440\u044b\u043a\u043d\u0456\u0446\u0435 \u043f\u0430 \u0441\u0442\u0440\u044d\u043b\u0446\u044b \u00ab\u0410\u0431\u0440\u0430\u0446\u044c\u00bb \u043c\u0456\u0436 \u0434\u0432\u0443\u043c\u0430 \u043f\u0430\u043b\u044f\u043c\u0456.",
    "This is the list of chosen %s. You may remove some by selecting them in the box below and then clicking the \"Remove\" arrow between the two boxes.": "\u0421\u044c\u043f\u0456\u0441 \u0430\u0431\u0440\u0430\u043d\u044b\u0445 %s. \u041a\u0430\u0431 \u043d\u0435\u0448\u0442\u0430 \u043f\u0440\u044b\u0431\u0440\u0430\u0446\u044c, \u043f\u0430\u0437\u043d\u0430\u0447\u0446\u0435 \u043f\u0430\u0442\u0440\u044d\u0431\u043d\u0430\u0435 \u045e \u043f\u043e\u043b\u0456 \u043d\u0456\u0436\u044d\u0439 \u0456 \u043f\u0441\u0442\u0440\u044b\u043a\u043d\u0456\u0446\u0435 \u043f\u0430 \u0441\u0442\u0440\u044d\u043b\u0446\u044b \u00ab\u041f\u0440\u044b\u0431\u0440\u0430\u0446\u044c\u00bb \u043c\u0456\u0436 \u0434\u0432\u0443\u043c\u0430 \u043f\u0430\u043b\u044f\u043c\u0456.",
    "Today": "\u0421\u0451\u043d\u044c\u043d\u044f",
    "Tomorrow": "\u0417\u0430\u045e\u0442\u0440\u0430",
    "Type into this box to filter down the list of available %s.": "\u041a\u0430\u0431 \u043f\u0440\u0430\u0441\u0435\u044f\u0446\u044c \u0434\u0430\u0441\u0442\u0443\u043f\u043d\u044b\u044f %s, \u0434\u0440\u0443\u043a\u0443\u0439\u0446\u0435 \u045e \u0433\u044d\u0442\u044b\u043c \u043f\u043e\u043b\u0456.",
    "Yesterday": "\u0423\u0447\u043e\u0440\u0430",
    "You have selected an action, and you haven't made any changes on individual fields. You're probably looking for the Go button rather than the Save button.": "\u0410\u0431\u0440\u0430\u043b\u0456 \u0434\u0437\u0435\u044f\u043d\u044c\u043d\u0435, \u0430 \u045e \u043f\u0430\u043b\u044f\u0445 \u043d\u0456\u0447\u043e\u0433\u0430 \u043d\u0435 \u0437\u044c\u043c\u044f\u043d\u044f\u043b\u0456. \u041c\u0430\u0436\u043b\u0456\u0432\u0430, \u0432\u044b \u0445\u0430\u0446\u0435\u043b\u0456 \u043d\u0430\u0446\u0456\u0441\u043d\u0443\u0446\u044c \u043a\u043d\u043e\u043f\u043a\u0443 \u00ab\u0412\u044b\u043a\u0430\u043d\u0430\u0446\u044c\u00bb, \u0430 \u043d\u044f \u043a\u043d\u043e\u043f\u043a\u0443 \u00ab\u0417\u0430\u0445\u0430\u0432\u0430\u0446\u044c\u00bb.",
    "You have selected an action, but you haven't saved your changes to individual fields yet. Please click OK to save. You'll need to re-run the action.": "\u0410\u0431\u0440\u0430\u043b\u0456 \u0434\u0437\u0435\u044f\u043d\u044c\u043d\u0435,\u00a0\u0430\u043b\u0435 \u043d\u0435 \u0437\u0430\u0445\u0430\u0432\u0430\u043b\u0456 \u0437\u044c\u043c\u0435\u043d\u044b \u045e \u043f\u044d\u045e\u043d\u044b\u0445 \u043f\u0430\u043b\u044f\u0445. \u041a\u0430\u0431 \u0437\u0430\u0445\u0430\u0432\u0430\u0446\u044c, \u043d\u0430\u0446\u0456\u0441\u044c\u043d\u0456\u0446\u0435 \u00ab\u0414\u043e\u0431\u0440\u0430\u00bb. \u0414\u0437\u0435\u044f\u043d\u044c\u043d\u0435 \u043f\u043e\u0442\u044b\u043c \u0442\u0440\u044d\u0431\u0430 \u0431\u0443\u0434\u0437\u0435 \u0437\u0430\u043f\u0443\u0441\u044c\u0446\u0456\u0446\u044c \u043d\u0430\u043d\u043e\u0432\u0430.",
    "You have unsaved changes on individual editable fields. If you run an action, your unsaved changes will be lost.": "\u0423 \u043f\u044d\u045e\u043d\u044b\u0445 \u043f\u0430\u043b\u044f\u0445 \u0437\u0430\u0441\u0442\u0430\u043b\u0456\u0441\u044f \u043d\u0435\u0437\u0430\u0445\u0430\u0432\u0430\u043d\u044b\u044f \u0437\u044c\u043c\u0435\u043d\u044b. \u041a\u0430\u043b\u0456 \u0432\u044b\u043a\u0430\u043d\u0430\u0446\u044c \u0434\u0437\u0435\u044f\u043d\u044c\u043d\u0435, \u043d\u0435\u0437\u0430\u0445\u0430\u0432\u0430\u043d\u0430\u0435 \u0441\u0442\u0440\u0430\u0446\u0456\u0446\u0446\u0430.",
    "one letter Friday\u0004F": "\u041f",
    "one letter Monday\u0004M": "\u041f",
    "one letter Saturday\u0004S": "\u0421",
    "one letter Sunday\u0004S": "\u041d",
    "one letter Thursday\u0004T": "\u0427",
    "one letter Tuesday\u0004T": "\u0410",
    "one letter Wednesday\u0004W": "\u0421"
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


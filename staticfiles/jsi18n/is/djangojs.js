

(function(globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    var v=(n % 10 != 1 || n % 100 == 11);
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
      " %(sel)s  \u00ed %(cnt)s  valin",
      " %(sel)s  \u00ed %(cnt)s  valin"
    ],
    "6 a.m.": "6 f.h.",
    "6 p.m.": "6 e.h.",
    "April": "apr\u00edl",
    "August": "\u00e1g\u00fast",
    "Available %s": "F\u00e1anleg %s",
    "Cancel": "H\u00e6tta vi\u00f0",
    "Choose": "Veldu",
    "Choose a Date": "Veldu dagsetningu",
    "Choose a Time": "Veldu t\u00edma",
    "Choose a time": "Veldu t\u00edma",
    "Choose all": "Velja \u00f6ll",
    "Chosen %s": "Valin %s",
    "Click to choose all %s at once.": "Smelltu til a\u00f0 velja allt %s \u00ed einu.",
    "Click to remove all chosen %s at once.": "Smelltu til a\u00f0 fjarl\u00e6gja allt vali\u00f0 %s \u00ed einu.",
    "December": "desember",
    "February": "febr\u00faar",
    "Filter": "S\u00eda",
    "Hide": "Fela",
    "January": "jan\u00faar",
    "July": "j\u00fal\u00ed",
    "June": "j\u00fan\u00ed",
    "March": "mars",
    "May": "ma\u00ed",
    "Midnight": "Mi\u00f0n\u00e6tti",
    "Noon": "H\u00e1degi",
    "Note: You are %s hour ahead of server time.": [
      "Athuga\u00f0u a\u00f0 \u00fe\u00fa ert %s klukkustund \u00e1 undan t\u00edma vef\u00fej\u00f3ns.",
      "Athuga\u00f0u a\u00f0 \u00fe\u00fa ert %s klukkustundum \u00e1 undan t\u00edma vef\u00fej\u00f3ns."
    ],
    "Note: You are %s hour behind server time.": [
      "Athuga\u00f0u a\u00f0 \u00fe\u00fa ert %s klukkustund \u00e1 eftir t\u00edma vef\u00fej\u00f3ns.",
      "Athuga\u00f0u a\u00f0 \u00fe\u00fa ert %s klukkustundum \u00e1 eftir t\u00edma vef\u00fej\u00f3ns."
    ],
    "November": "n\u00f3vember",
    "Now": "N\u00fana",
    "October": "okt\u00f3ber",
    "Remove": "Fjarl\u00e6gja",
    "Remove all": "Ey\u00f0a \u00f6llum",
    "September": "september",
    "Show": "S\u00fdna",
    "This is the list of available %s. You may choose some by selecting them in the box below and then clicking the \"Choose\" arrow between the two boxes.": "\u00deetta er listi af \u00fev\u00ed %s sem er \u00ed bo\u00f0i. \u00de\u00fa getur \u00e1kve\u00f0i\u00f0 hluti me\u00f0 \u00fev\u00ed a\u00f0 velja \u00fe\u00e1 \u00ed boxinu a\u00f0 ne\u00f0an og \u00fdta svo \u00e1 \"Velja\" \u00f6rina milli boxana tveggja.",
    "This is the list of chosen %s. You may remove some by selecting them in the box below and then clicking the \"Remove\" arrow between the two boxes.": "\u00deetta er listinn af v\u00f6ldu %s. \u00de\u00fa getur fjarl\u00e6gt hluti me\u00f0 \u00fev\u00ed a\u00f0 velja \u00fe\u00e1 \u00ed boxinu a\u00f0 ne\u00f0an og \u00fdta svo \u00e1 \"Ey\u00f0a\" \u00f6rina \u00e1 milli boxana tveggja.",
    "Today": "\u00cd dag",
    "Tomorrow": "\u00c1 morgun",
    "Type into this box to filter down the list of available %s.": "Skrifa\u00f0u \u00ed boxi\u00f0 til a\u00f0 s\u00eda listann af \u00fev\u00ed %s sem er \u00ed bo\u00f0i.",
    "Yesterday": "\u00cd g\u00e6r",
    "You have selected an action, and you haven't made any changes on individual fields. You're probably looking for the Go button rather than the Save button.": "\u00de\u00fa hefur vali\u00f0 a\u00f0ger\u00f0 en hefur ekki gert breytingar \u00e1 reitum. \u00de\u00fa ert l\u00edklega a\u00f0 leita a\u00f0 'Fara' hnappnum frekar en 'Vista' hnappnum.",
    "You have selected an action, but you haven't saved your changes to individual fields yet. Please click OK to save. You'll need to re-run the action.": "\u00de\u00fa hefur vali\u00f0 a\u00f0ger\u00f0 en hefur ekki vista\u00f0 breytingar \u00e1 reitum. Vinsamlegast veldu '\u00cd lagi' til a\u00f0 vista. \u00de\u00fa \u00fearft a\u00f0 endurkeyra a\u00f0ger\u00f0ina.",
    "You have unsaved changes on individual editable fields. If you run an action, your unsaved changes will be lost.": "Enn eru \u00f3vista\u00f0ar breytingar \u00ed reitum. Ef \u00fe\u00fa keyrir a\u00f0ger\u00f0 munu breytingar ekki ver\u00f0a vista\u00f0ar.",
    "one letter Friday\u0004F": "F",
    "one letter Monday\u0004M": "M",
    "one letter Saturday\u0004S": "L",
    "one letter Sunday\u0004S": "S",
    "one letter Thursday\u0004T": "F",
    "one letter Tuesday\u0004T": "\u00de",
    "one letter Wednesday\u0004W": "M"
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
    "DATE_FORMAT": "j. F Y",
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
    "DECIMAL_SEPARATOR": ",",
    "FIRST_DAY_OF_WEEK": 0,
    "MONTH_DAY_FORMAT": "j. F",
    "NUMBER_GROUPING": 3,
    "SHORT_DATETIME_FORMAT": "m/d/Y P",
    "SHORT_DATE_FORMAT": "j.n.Y",
    "THOUSAND_SEPARATOR": ".",
    "TIME_FORMAT": "H:i",
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


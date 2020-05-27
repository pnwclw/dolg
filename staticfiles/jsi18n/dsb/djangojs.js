

(function(globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    var v=(n%100==1 ? 0 : n%100==2 ? 1 : n%100==3 || n%100==4 ? 2 : 3);
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
      "%(sel)s z %(cnt)s wubrany",
      "%(sel)s z %(cnt)s wubranej",
      "%(sel)s z %(cnt)s wubrane",
      "%(sel)s z %(cnt)s wubranych"
    ],
    "6 a.m.": "6:00 g\u00f3\u017a. dopo\u0142dnja",
    "6 p.m.": "6:00 w\u00f3tpo\u0142dnja",
    "April": "Apryl",
    "August": "Awgust",
    "Available %s": "K dispoziciji stojece %s",
    "Cancel": "P\u015betergnu\u015b",
    "Choose": "Wubra\u015b",
    "Choose a Date": "Wubje\u0155\u015bo datum",
    "Choose a Time": "Wubje\u0155\u015bo cas",
    "Choose a time": "Wubje\u0155\u015bo cas",
    "Choose all": "W\u0161ykne wubra\u015b",
    "Chosen %s": "Wubrane %s",
    "Click to choose all %s at once.": "Klikni\u015bo, aby w\u0161ykne %s naraz wubra\u0142.",
    "Click to remove all chosen %s at once.": "Klikni\u015bo, aby w\u0161ykne wubrane %s naraz w\u00f3tp\u00f3ra\u0142.",
    "December": "December",
    "February": "Februar",
    "Filter": "Filtrowa\u015b",
    "Hide": "Schowa\u015b",
    "January": "Januar",
    "July": "Julij",
    "June": "Junij",
    "March": "M\u011brc",
    "May": "Maj",
    "Midnight": "Po\u0142noc",
    "Noon": "Po\u0142dnjo",
    "Note: You are %s hour ahead of server time.": [
      "Gl\u011bdaj\u015bo: Wa\u0161 cas jo w\u00f3 %s g\u00f3\u017ainu p\u015b\u00e9d serwerowym casom.",
      "Gl\u011bdaj\u015bo: Wa\u0161 cas jo w\u00f3 %s g\u00f3\u017ainje p\u015b\u00e9d serwerowym casom.",
      "Gl\u011bdaj\u015bo: Wa\u0161 cas jo w\u00f3 %s g\u00f3\u017ainy p\u015b\u00e9d serwerowym casom.",
      "Gl\u011bdaj\u015bo: Wa\u0161 cas jo w\u00f3 %s g\u00f3\u017ain p\u015b\u00e9d serwerowym casom."
    ],
    "Note: You are %s hour behind server time.": [
      "Gl\u011bdaj\u015bo: Wa\u0161 cas jo w\u00f3 %s g\u00f3\u017ainu za serwerowym casom.",
      "Gl\u011bdaj\u015bo: Wa\u0161 cas jo w\u00f3 %s g\u00f3\u017ainje za serwerowym casom.",
      "Gl\u011bdaj\u015bo: Wa\u0161 cas jo w\u00f3 %s g\u00f3\u017ainy za serwerowym casom.",
      "Gl\u011bdaj\u015bo: Wa\u0161 cas jo w\u00f3 %s g\u00f3\u017ain za serwerowym casom."
    ],
    "November": "Nowember",
    "Now": "N\u011bnto",
    "October": "Oktober",
    "Remove": "W\u00f3tp\u00f3ra\u015b",
    "Remove all": "W\u0161ykne w\u00f3tp\u00f3ra\u015b",
    "September": "September",
    "Show": "Pokaza\u015b",
    "This is the list of available %s. You may choose some by selecting them in the box below and then clicking the \"Choose\" arrow between the two boxes.": "To jo lis\u0107ina k dispoziciji stojecych %s. Klikni\u015bo na \u0161ypku \u201eWubra\u015b\u201c mjazy ka\u0161\u0107ikoma, aby n\u011bkotare z nich w sl\u011bdujucem ka\u0161\u0107iku wubra\u0142.  ",
    "This is the list of chosen %s. You may remove some by selecting them in the box below and then clicking the \"Remove\" arrow between the two boxes.": "To jo lis\u0107ina wubranych %s. Klikni\u015bo na \u0161ypku \u201eW\u00f3tp\u00f3ra\u015b\u201c mjazy ka\u0161\u0107ikoma, aby n\u011bkotare z nich w sl\u011bdujucem ka\u0161\u0107iku w\u00f3tp\u00f3ra\u0142.",
    "Today": "\u0179insa",
    "Tomorrow": "Wit\u015be",
    "Type into this box to filter down the list of available %s.": "Zapi\u0161\u0107o do to\u015b togo p\u00f3la, aby zapiski z lis\u0107iny k dispoziciji stojecych %s wufiltrowa\u0142. ",
    "Yesterday": "Cora",
    "You have selected an action, and you haven't made any changes on individual fields. You're probably looking for the Go button rather than the Save button.": "S\u0107o akciju wubra\u0142, ale njejs\u0107o jadnotliwe p\u00f3la zm\u011bni\u0142. Nejskerjej pyta\u015bo skerjej za t\u0142oca\u0161kom Start ako za t\u0142oca\u0161kom Sk\u0142adowa\u015b.",
    "You have selected an action, but you haven't saved your changes to individual fields yet. Please click OK to save. You'll need to re-run the action.": "S\u0107o akciju wubra\u0142, ale njejs\u0107o hy\u0161\u0107i sw\u00f3je zm\u011bny za jadnotliwe p\u00f3la sk\u0142adowa\u0142, P\u0161osym klikni\u015bo na W p\u00f3r\u011b\u017ae, aby sk\u0142adowa\u0142. Musy\u015bo akciju znowego wuwjas\u0107.",
    "You have unsaved changes on individual editable fields. If you run an action, your unsaved changes will be lost.": "Ma\u015bo njesk\u0142adowane zm\u011bny za jadnotliwe wob\u017a\u011b\u0142ujobne p\u00f3la. Jolic akciju wuwje\u017ao\u015bo, se wa\u0161e njesk\u0142adowane zm\u011bny zgubiju.",
    "one letter Friday\u0004F": "P\u011b",
    "one letter Monday\u0004M": "P\u00f3",
    "one letter Saturday\u0004S": "So",
    "one letter Sunday\u0004S": "Nj",
    "one letter Thursday\u0004T": "St",
    "one letter Tuesday\u0004T": "Wa",
    "one letter Wednesday\u0004W": "Sr"
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


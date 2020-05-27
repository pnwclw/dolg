

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
    "6 a.m.": "6:00 hod\u017a. dopo\u0142dnja",
    "6 p.m.": "6 hod\u017a. popo\u0142dnju",
    "April": "Apryl",
    "August": "Awgust",
    "Available %s": "%s k dispoziciji",
    "Cancel": "P\u0159etorhny\u0107",
    "Choose": "Wubra\u0107",
    "Choose a Date": "Wubjer\u0107e datum",
    "Choose a Time": "Wubjer\u0107e \u010das",
    "Choose a time": "Wubjer\u0107e \u010das",
    "Choose all": "W\u0161\u011b wubra\u0107",
    "Chosen %s": "Wubrane %s",
    "Click to choose all %s at once.": "Klik\u0144\u0107e, zo by\u0161\u0107e w\u0161\u011b %s naraz wubra\u0142.",
    "Click to remove all chosen %s at once.": "Klik\u0144\u0107e, zo by\u0161\u0107e w\u0161\u011b wubrane %s naraz wotstroni\u0142.",
    "December": "December",
    "February": "Februar",
    "Filter": "Filtrowa\u0107",
    "Hide": "Schowa\u0107",
    "January": "Januar",
    "July": "Julij",
    "June": "Junij",
    "March": "M\u011brc",
    "May": "Meja",
    "Midnight": "Po\u0142n\u00f3c",
    "Noon": "p\u0159ipo\u0142dnjo",
    "Note: You are %s hour ahead of server time.": [
      "Ked\u017abu: Wa\u0161 \u010das je wo %s hod\u017ainu p\u0159ed serwerowym \u010dasom.",
      "Ked\u017abu: Wa\u0161 \u010das je wo %s hod\u017ain p\u0159ed serwerowym \u010dasom.",
      "Ked\u017abu: Wa\u0161 \u010das je wo %s hod\u017ainy p\u0159ed serwerowym \u010dasom.",
      "Ked\u017abu: Wa\u0161 \u010das je wo %s hod\u017ain p\u0159ed serwerowym \u010dasom."
    ],
    "Note: You are %s hour behind server time.": [
      "Ked\u017abu: Wa\u0161 \u010das je wo %s hod\u017ainu za serwerowym \u010dasom.",
      "Ked\u017abu: Wa\u0161 \u010das je wo %s hod\u017ainje za serwerowym \u010dasom.",
      "Ked\u017abu: Wa\u0161 \u010das je wo %s hod\u017ainy za serwerowym \u010dasom.",
      "Ked\u017abu: Wa\u0161 \u010das je wo %s hod\u017ain za serwerowym \u010dasom."
    ],
    "November": "Nowember",
    "Now": "N\u011btko",
    "October": "Oktober",
    "Remove": "Wotstroni\u0107",
    "Remove all": "W\u0161\u011b wotstroni\u0107",
    "September": "September",
    "Show": "Pokaza\u0107",
    "This is the list of available %s. You may choose some by selecting them in the box below and then clicking the \"Choose\" arrow between the two boxes.": "To je lis\u0107ina k dispoziciji stejacych %s. M\u00f3\u017ee\u0107e n\u011bkotre z nich w sl\u011bdowacym ka\u0161\u0107iku wubra\u0107 a potom na \u0161ipk \u201eWubra\u0107\u201c mjez ka\u0161\u0107ikomaj klikny\u0107.",
    "This is the list of chosen %s. You may remove some by selecting them in the box below and then clicking the \"Remove\" arrow between the two boxes.": "To je lis\u0107ina wubranych %s. M\u00f3\u017ee\u0107e n\u011bkotre z nich wotstroni\u0107, hdy\u017e je w sl\u011bdowacym ka\u0161\u0107iku wub\u011bra\u0107e a potom na \u0161ipk \u201eWotstroni\u0107\u201c mjez ka\u0161\u0107ikomaj kliknje\u0107e.",
    "Today": "D\u017aensa",
    "Tomorrow": "Jut\u0159e",
    "Type into this box to filter down the list of available %s.": "Zapisaj\u0107e do tutoho ka\u0161\u0107ika, zo by\u0161\u0107e n\u011bkotre z lis\u0107iny k dispoziciji stejacych %s wufiltrowa\u0142.",
    "Yesterday": "W\u010dera",
    "You have selected an action, and you haven't made any changes on individual fields. You're probably looking for the Go button rather than the Save button.": "S\u0107e akciju wubra\u0142, a njejs\u0107e \u017eane zm\u011bny na jednotliwych polach p\u0159ewjed\u0142. Pytaj\u0107e najskerje za t\u0142\u00f3\u010datkom \u201eP\u00f3s\u0142a\u0107\u201c m\u011bsto t\u0142\u00f3\u010datka \u201eSk\u0142adowa\u0107\u201c.",
    "You have selected an action, but you haven't saved your changes to individual fields yet. Please click OK to save. You'll need to re-run the action.": "S\u0107e akciju wubra\u0142, ale njejs\u0107e hi\u0161\u0107e swoje zm\u011bny na jednoliwych polach sk\u0142adowa\u0142. Pro\u0161u klik\u0144\u0107e na \u201eW porjadku, zo by\u0161\u0107e sk\u0142adowa\u0142. Dyrbi\u0107e akciju znowa wuwjes\u0107.",
    "You have unsaved changes on individual editable fields. If you run an action, your unsaved changes will be lost.": "Ma\u0107e njesk\u0142adowane zm\u011bny za jednotliwe wobd\u017a\u011b\u0142ujomne pola. Jeli akciju wuwjed\u017ae\u0107e, so wa\u0161e njesk\u0142adowane zm\u011bny zhubja.",
    "one letter Friday\u0004F": "Pj",
    "one letter Monday\u0004M": "P\u00f3",
    "one letter Saturday\u0004S": "So",
    "one letter Sunday\u0004S": "Nj",
    "one letter Thursday\u0004T": "\u0160t",
    "one letter Tuesday\u0004T": "Wu",
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


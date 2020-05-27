

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
      "%(sel)s de %(cnt)s elektita",
      "%(sel)s de %(cnt)s elektitaj"
    ],
    "6 a.m.": "6 a.t.m.",
    "6 p.m.": "6 ptm",
    "April": "aprilo",
    "August": "au\u0306gusto",
    "Available %s": "Disponebla %s",
    "Cancel": "Malmendu",
    "Choose": "Elekti",
    "Choose a Date": "Elektu daton",
    "Choose a Time": "Elektu horon",
    "Choose a time": "Elektu tempon",
    "Choose all": "Elekti \u0109iuj",
    "Chosen %s": "Elektita %s",
    "Click to choose all %s at once.": "Klaku por tuj elekti \u0109iuj %s.",
    "Click to remove all chosen %s at once.": "Klaku por tuj forigi \u0109iujn %s elektitajn.",
    "December": "decembro",
    "February": "februaro",
    "Filter": "Filtru",
    "Hide": "Ka\u015du",
    "January": "januaro",
    "July": "julio",
    "June": "junio",
    "March": "marto",
    "May": "majo",
    "Midnight": "Noktomezo",
    "Noon": "Tagmezo",
    "Note: You are %s hour ahead of server time.": [
      "Noto: Vi estas %s horo anta\u016d la servila horo.",
      "Noto: Vi estas %s horoj anta\u016d la servila horo."
    ],
    "Note: You are %s hour behind server time.": [
      "Noto: Vi estas %s horo post la servila horo.",
      "Noto: Vi estas %s horoj post la servila horo."
    ],
    "November": "novembro",
    "Now": "Nun",
    "October": "oktobro",
    "Remove": "Forigu",
    "Remove all": "Forigu \u0109iujn",
    "September": "septembro",
    "Show": "Montru",
    "This is the list of available %s. You may choose some by selecting them in the box below and then clicking the \"Choose\" arrow between the two boxes.": "Tio \u0109i estas la listo de disponeblaj %s. Vi povas forigi kelkajn elektante ilin en la suba skatolo kaj tiam klakante la \"Elekti\" sagon inter la du skatoloj.",
    "This is the list of chosen %s. You may remove some by selecting them in the box below and then clicking the \"Remove\" arrow between the two boxes.": "Tio \u0109i estas la listo de elektitaj %s. Vi povas forigi kelkajn elektante ilin en la suba skatolo kaj tiam klakante la \"Forigi\" sagon inter la du skatoloj.",
    "Today": "Hodia\u016d",
    "Tomorrow": "Morga\u016d",
    "Type into this box to filter down the list of available %s.": "Entipu en \u0109i-tiu skatolo por filtri la liston de haveblaj %s.",
    "Yesterday": "Hiera\u016d",
    "You have selected an action, and you haven't made any changes on individual fields. You're probably looking for the Go button rather than the Save button.": "Vi elektas agon, kaj vi ne faris ajnajn \u015dan\u011dojn \u0109e unuopaj kampoj. Vi  ver\u015dajne ser\u0109as la Iru-butonon prefere ol la \u015cirmu-butono.",
    "You have selected an action, but you haven't saved your changes to individual fields yet. Please click OK to save. You'll need to re-run the action.": "Vi elektas agon, sed vi ne \u015dirmis viajn \u015dan\u011dojn al individuaj kampoj \u011dis nun. Bonvolu klaku BONA por \u015dirmi. Vi devos ripeton la agon",
    "You have unsaved changes on individual editable fields. If you run an action, your unsaved changes will be lost.": "Vi havas ne\u015dirmitajn \u015dan\u011dojn je unuopaj redakteblaj kampoj. Se vi faros agon, viaj ne\u015dirmitaj \u015dan\u011doj perdi\u011dos.",
    "one letter Friday\u0004F": "v",
    "one letter Monday\u0004M": "l",
    "one letter Saturday\u0004S": "s",
    "one letter Sunday\u0004S": "d",
    "one letter Thursday\u0004T": "\u0135",
    "one letter Tuesday\u0004T": "m",
    "one letter Wednesday\u0004W": "m"
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
    "DATETIME_FORMAT": "j\\-\\a \\d\\e F Y\\, \\j\\e H:i",
    "DATETIME_INPUT_FORMATS": [
      "%Y-%m-%d %H:%M:%S",
      "%Y-%m-%d %H:%M",
      "%Y-%m-%d",
      "%Y.%m.%d %H:%M:%S",
      "%Y.%m.%d %H:%M",
      "%Y.%m.%d",
      "%d/%m/%Y %H:%M:%S",
      "%d/%m/%Y %H:%M",
      "%d/%m/%Y",
      "%y-%m-%d %H:%M:%S",
      "%y-%m-%d %H:%M",
      "%y-%m-%d",
      "%Y-%m-%d %H:%M:%S.%f"
    ],
    "DATE_FORMAT": "j\\-\\a \\d\\e F Y",
    "DATE_INPUT_FORMATS": [
      "%Y-%m-%d",
      "%y-%m-%d",
      "%Y %m %d",
      "%d-a de %b %Y",
      "%d %b %Y",
      "%d-a de %B %Y",
      "%d %B %Y",
      "%d %m %Y"
    ],
    "DECIMAL_SEPARATOR": ",",
    "FIRST_DAY_OF_WEEK": 1,
    "MONTH_DAY_FORMAT": "j\\-\\a \\d\\e F",
    "NUMBER_GROUPING": 3,
    "SHORT_DATETIME_FORMAT": "Y-m-d H:i",
    "SHORT_DATE_FORMAT": "Y-m-d",
    "THOUSAND_SEPARATOR": "\u00a0",
    "TIME_FORMAT": "H:i",
    "TIME_INPUT_FORMATS": [
      "%H:%M:%S",
      "%H:%M",
      "%H:%M:%S.%f"
    ],
    "YEAR_MONTH_FORMAT": "F \\d\\e Y"
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


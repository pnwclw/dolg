

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
      "%(sel)s van %(cnt)s gekies",
      "%(sel)s van %(cnt)s gekies"
    ],
    "6 a.m.": "06:00",
    "6 p.m.": "18:00",
    "April": "April",
    "August": "Augustus",
    "Available %s": "Beskikbare %s",
    "Cancel": "Kanselleer",
    "Choose": "Kies",
    "Choose a Date": "Kies \u2019n datum",
    "Choose a Time": "Kies \u2019n tyd",
    "Choose a time": "Kies \u2018n tyd",
    "Choose all": "Kies almal",
    "Chosen %s": "Gekose %s",
    "Click to choose all %s at once.": "Klik om al die %s gelyktydig te kies.",
    "Click to remove all chosen %s at once.": "Klik om al die %s gelyktydig te verwyder.",
    "December": "Desember",
    "February": "Februarie",
    "Filter": "Filteer",
    "Hide": "Versteek",
    "January": "Januarie",
    "July": "Julie",
    "June": "Junie",
    "March": "Maart",
    "May": "Mei",
    "Midnight": "Middernag",
    "Noon": "Middag",
    "Note: You are %s hour ahead of server time.": [
      "Let wel: U is %s uur voor die bedienertyd.",
      "Let wel: U is %s ure voor die bedienertyd."
    ],
    "Note: You are %s hour behind server time.": [
      "Let wel: U is %s uur agter die bedienertyd.",
      "Let wel: U is %s ure agter die bedienertyd."
    ],
    "November": "November",
    "Now": "Nou",
    "October": "Oktober",
    "Remove": "Verwyder",
    "Remove all": "Verwyder almal",
    "September": "September",
    "Show": "Wys",
    "This is the list of available %s. You may choose some by selecting them in the box below and then clicking the \"Choose\" arrow between the two boxes.": "Hierdie is die lys beskikbare %s. Kies gerus deur hulle in die boksie hieronder te merk en dan die \u201cKies\u201d-knoppie tussen die boksies te klik.",
    "This is the list of chosen %s. You may remove some by selecting them in the box below and then clicking the \"Remove\" arrow between the two boxes.": "Hierdie is die lys gekose %s. Verwyder gerus deur hulle in die boksie hieronder te merk en dan die \u201cVerwyder\u201d-knoppie tussen die boksies te klik.",
    "Today": "Vandag",
    "Tomorrow": "M\u00f4re",
    "Type into this box to filter down the list of available %s.": "Tik in hierdie blokkie om die lys beskikbare %s te filtreer.",
    "Yesterday": "Gister",
    "You have selected an action, and you haven't made any changes on individual fields. You're probably looking for the Go button rather than the Save button.": "U het \u2019n aksie gekies en het nie enige veranderinge aan individuele velde aangebring nie. U soek waarskynlik na die Gaan-knoppie eerder as die Stoor-knoppie.",
    "You have selected an action, but you haven't saved your changes to individual fields yet. Please click OK to save. You'll need to re-run the action.": "U het \u2019n aksie gekies, maar nog nie die veranderinge aan individuele velde gestoor nie. Klik asb. OK om te stoor. Dit sal nodig wees om weer die aksie uit te voer.",
    "You have unsaved changes on individual editable fields. If you run an action, your unsaved changes will be lost.": "Daar is ongestoorde veranderinge op individuele redigeerbare velde. Deur nou \u2019n aksie uit te voer, sal ongestoorde veranderinge verlore gaan.",
    "one letter Friday\u0004F": "V",
    "one letter Monday\u0004M": "M",
    "one letter Saturday\u0004S": "S",
    "one letter Sunday\u0004S": "S",
    "one letter Thursday\u0004T": "D",
    "one letter Tuesday\u0004T": "D",
    "one letter Wednesday\u0004W": "W"
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


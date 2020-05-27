

(function(globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    var v=(n%10==1 && n%100!=11 ? 0 : n != 0 ? 1 : 2);
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
      "%(sel)s no %(cnt)s izv\u0113l\u0113ts",
      "%(sel)s no %(cnt)s izv\u0113l\u0113ti",
      "%(sel)s no %(cnt)s izv\u0113l\u0113ti"
    ],
    "6 a.m.": "06.00",
    "6 p.m.": "6:00",
    "April": "apr\u012blis",
    "August": "augusts",
    "Available %s": "Pieejams %s",
    "Cancel": "Atcelt",
    "Choose": "Izv\u0113lies",
    "Choose a Date": "Izv\u0113lies datumu",
    "Choose a Time": "Izv\u0113lies laiku",
    "Choose a time": "Izv\u0113lieties laiku",
    "Choose all": "Izv\u0113l\u0113ties visu",
    "Chosen %s": "Izv\u0113lies %s",
    "Click to choose all %s at once.": "Izv\u0113lies, lai pievienotu visas %s izv\u0113les vien\u0101 reiz\u0113.",
    "Click to remove all chosen %s at once.": "Izv\u0113lies, lai iz\u0146emtu visas %s izv\u0113les vien\u0101 reiz\u0113.",
    "December": "decembris",
    "February": "febru\u0101ris",
    "Filter": "Filtrs",
    "Hide": "Sl\u0113pt",
    "January": "janv\u0101ris",
    "July": "j\u016blijs",
    "June": "j\u016bnijs",
    "March": "marts",
    "May": "maijs",
    "Midnight": "Pusnakts",
    "Noon": "Pusdienas laiks",
    "Note: You are %s hour ahead of server time.": [
      "Piez\u012bme: Tavs laiks ir %s stundas pirms servera laika.",
      "Piez\u012bme: Tavs laiks ir %s stundu pirms servera laika.",
      "Piez\u012bme: Tavs laiks ir %s stundas pirms servera laika."
    ],
    "Note: You are %s hour behind server time.": [
      "Piez\u012bme: Tavs laiks ir %s stundas p\u0113c servera laika.",
      "Piez\u012bme: Tavs laiks ir %s stundu p\u0113c servera laika.",
      "Piez\u012bme: Tavs laiks ir %s stundas p\u0113c servera laika."
    ],
    "November": "novembris",
    "Now": "Tagad",
    "October": "oktobris",
    "Remove": "Iz\u0146emt",
    "Remove all": "Iz\u0146emt visu",
    "September": "septembris",
    "Show": "Par\u0101d\u012bt",
    "This is the list of available %s. You may choose some by selecting them in the box below and then clicking the \"Choose\" arrow between the two boxes.": "\u0160is ir saraksts ar pieejamajiem %s. Tev ir j\u0101izv\u0113las atbilsto\u0161\u0101s v\u0113rt\u012bbas atz\u012bm\u0113jot izv\u0113l\u0113s zem\u0101k eso\u0161aj\u0101 sarakst\u0101 un p\u0113c tam spie\u017eot pogu \"Izv\u0113l\u0113ties\", lai p\u0101rvietotu starp izv\u0113\u013cu sarakstiem.",
    "This is the list of chosen %s. You may remove some by selecting them in the box below and then clicking the \"Remove\" arrow between the two boxes.": "\u0160is ir saraksts ar izv\u0113l\u0113tajiem %s. Tev ir j\u0101izv\u0113las atbilsto\u0161\u0101s v\u0113rt\u012bbas atz\u012bm\u0113jot izv\u0113l\u0113s zem\u0101k eso\u0161aj\u0101 sarakst\u0101 un p\u0113c tam spie\u017eot pogu \"Iz\u0146emt\", lai iz\u0146emtu no izv\u0113l\u0113to ierakstu saraksta.",
    "Today": "\u0160odien",
    "Tomorrow": "R\u012bt",
    "Type into this box to filter down the list of available %s.": "Raksti \u0161aj\u0101 log\u0101, lai filtr\u0113tu zem\u0101k eso\u0161o sarakstu ar pieejamajiem %s.",
    "Yesterday": "Vakar",
    "You have selected an action, and you haven't made any changes on individual fields. You're probably looking for the Go button rather than the Save button.": "J\u016bs esat izv\u0113l\u0113jies veikt darb\u012bbu un neesat izmain\u012bjis nevienu lauku. J\u016bs dro\u0161i vien mekl\u0113jat pogu 'Aiziet' nevis 'Saglab\u0101t'.",
    "You have selected an action, but you haven't saved your changes to individual fields yet. Please click OK to save. You'll need to re-run the action.": "J\u016bs esat izv\u0113l\u0113jies veikt darb\u012bbu un neesat saglab\u0101jis veikt\u0101s izmai\u0146as. L\u016bdzu nospie\u017eat OK, lai saglab\u0101tu. Jums n\u0101ksies \u0161o darb\u012bbu izpild\u012bt v\u0113lreiz.",
    "You have unsaved changes on individual editable fields. If you run an action, your unsaved changes will be lost.": "J\u016bs neesat saglab\u0101jis izmai\u0146as redi\u0123\u0113jamiem laukiem. Ja j\u016bs tagad izpild\u012bsiet izv\u0113l\u0113to darb\u012bbu, \u0161\u012bs izmai\u0146as netiks saglab\u0101tas.",
    "one letter Friday\u0004F": "Pk",
    "one letter Monday\u0004M": "Pr",
    "one letter Saturday\u0004S": "Se",
    "one letter Sunday\u0004S": "Sv",
    "one letter Thursday\u0004T": "C",
    "one letter Tuesday\u0004T": "O",
    "one letter Wednesday\u0004W": "T"
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
    "DATETIME_FORMAT": "Y. \\g\\a\\d\\a j. F, H:i",
    "DATETIME_INPUT_FORMATS": [
      "%Y-%m-%d %H:%M:%S",
      "%Y-%m-%d %H:%M:%S.%f",
      "%Y-%m-%d %H:%M",
      "%d.%m.%Y %H:%M:%S",
      "%d.%m.%Y %H:%M:%S.%f",
      "%d.%m.%Y %H:%M",
      "%d.%m.%Y",
      "%d.%m.%y %H:%M:%S",
      "%d.%m.%y %H:%M:%S.%f",
      "%d.%m.%y %H:%M",
      "%d.%m.%y %H.%M.%S",
      "%d.%m.%y %H.%M.%S.%f",
      "%d.%m.%y %H.%M",
      "%d.%m.%y",
      "%Y-%m-%d"
    ],
    "DATE_FORMAT": "Y. \\g\\a\\d\\a j. F",
    "DATE_INPUT_FORMATS": [
      "%Y-%m-%d",
      "%d.%m.%Y",
      "%d.%m.%y"
    ],
    "DECIMAL_SEPARATOR": ",",
    "FIRST_DAY_OF_WEEK": 1,
    "MONTH_DAY_FORMAT": "j. F",
    "NUMBER_GROUPING": 3,
    "SHORT_DATETIME_FORMAT": "j.m.Y H:i",
    "SHORT_DATE_FORMAT": "j.m.Y",
    "THOUSAND_SEPARATOR": "\u00a0",
    "TIME_FORMAT": "H:i",
    "TIME_INPUT_FORMATS": [
      "%H:%M:%S",
      "%H:%M:%S.%f",
      "%H:%M",
      "%H.%M.%S",
      "%H.%M.%S.%f",
      "%H.%M"
    ],
    "YEAR_MONTH_FORMAT": "Y. \\g. F"
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




(function(globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    var v=(n==1 ? 0 : n==2 ? 1 : n<7 ? 2 : n<11 ? 3 : 4);
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
      "%(sel)s de %(cnt)s  roghnaithe",
      "%(sel)s de %(cnt)s  roghnaithe",
      "%(sel)s de %(cnt)s  roghnaithe",
      "%(sel)s de %(cnt)s  roghnaithe",
      "%(sel)s de %(cnt)s  roghnaithe"
    ],
    "6 a.m.": "6 a.m.",
    "6 p.m.": "6in",
    "April": "Aibre\u00e1n",
    "August": "L\u00fanasa",
    "Available %s": "%s ar f\u00e1il",
    "Cancel": "Cealaigh",
    "Choose": "Roghnaigh",
    "Choose a Date": "Roghnaigh D\u00e1ta",
    "Choose a Time": "Roghnaigh Am",
    "Choose a time": "Roghnaigh am",
    "Choose all": "Roghnaigh ioml\u00e1n",
    "Chosen %s": "Roghn\u00f3far %s",
    "Click to choose all %s at once.": "Clice\u00e1il anseo chun %s go l\u00e9ir a roghn\u00fa.",
    "Click to remove all chosen %s at once.": "Clice\u00e1il anseo chun %s go l\u00e9ir roghnaithe a scroiseadh.",
    "December": "Nollaig",
    "February": "Feabhra",
    "Filter": "Scagaire",
    "Hide": "Folaigh",
    "January": "Ean\u00e1ir",
    "July": "I\u00fail",
    "June": "Meitheamh",
    "March": "M\u00e1rta",
    "May": "Bealtaine",
    "Midnight": "Me\u00e1n o\u00edche",
    "Noon": "N\u00f3in",
    "Note: You are %s hour ahead of server time.": [
      "Tabhair faoi deara: T\u00e1 t\u00fa %s uair a chloig roimh am an frioth\u00e1la\u00ed.",
      "Tabhair faoi deara: T\u00e1 t\u00fa %s uair a chloig roimh am an frioth\u00e1la\u00ed.",
      "Tabhair faoi deara: T\u00e1 t\u00fa %s uair a chloig roimh am an frioth\u00e1la\u00ed.",
      "Tabhair faoi deara: T\u00e1 t\u00fa %s uair a chloig roimh am an frioth\u00e1la\u00ed.",
      "Tabhair faoi deara: T\u00e1 t\u00fa %s uair a chloig roimh am an frioth\u00e1la\u00ed."
    ],
    "Note: You are %s hour behind server time.": [
      "Tabhair faoi deara: T\u00e1 t\u00fa %s uair a chloig taobh thiar am an frioth\u00e1la\u00ed.",
      "Tabhair faoi deara: T\u00e1 t\u00fa %s uair a chloig taobh thiar am an frioth\u00e1la\u00ed.",
      "Tabhair faoi deara: T\u00e1 t\u00fa %s uair a chloig taobh thiar am an frioth\u00e1la\u00ed.",
      "Tabhair faoi deara: T\u00e1 t\u00fa %s uair a chloig taobh thiar am an frioth\u00e1la\u00ed.",
      "Tabhair faoi deara: T\u00e1 t\u00fa %s uair a chloig taobh thiar am an frioth\u00e1la\u00ed."
    ],
    "November": "Samhain",
    "Now": "Anois",
    "October": "Deireadh F\u00f3mhair",
    "Remove": "Bain amach",
    "Remove all": "Scrois gach ceann",
    "September": "Me\u00e1n F\u00f3mhair",
    "Show": "Taispe\u00e1n",
    "This is the list of available %s. You may choose some by selecting them in the box below and then clicking the \"Choose\" arrow between the two boxes.": "Is \u00e9 seo an liosta %s ar f\u00e1il. Is f\u00e9idir leat a roghn\u00fa roinnt ag roghn\u00fa acu sa bhosca th\u00edos agus ansin clice\u00e1il ar an saighead \"Roghnaigh\" idir an d\u00e1 bosca\u00ed.",
    "This is the list of chosen %s. You may remove some by selecting them in the box below and then clicking the \"Remove\" arrow between the two boxes.": "Is \u00e9 seo an liosta de %s roghnaithe. Is f\u00e9idir leat iad a bhaint amach m\u00e1 roghnaionn t\u00fa cuid acu sa bhosca th\u00edos agus ansin clice\u00e1il ar an saighead \"Bain\" idir an d\u00e1 bosca\u00ed.",
    "Today": "Inniu",
    "Tomorrow": "Am\u00e1rach",
    "Type into this box to filter down the list of available %s.": "Scr\u00edobh isteach sa bhosca seo a scagadh s\u00edos ar an liosta de %s ar f\u00e1il.",
    "Yesterday": "Inn\u00e9",
    "You have selected an action, and you haven't made any changes on individual fields. You're probably looking for the Go button rather than the Save button.": "T\u00e1 gn\u00edomh roghnaithe agat, ach n\u00edl do aithrithe sabhailte ar cuid de na r\u00e9\u00edmse. Is d\u00f3cha go bhfuil t\u00fa ag iarraidh an cnaipe T\u00e9 n\u00e1 an cnaipe S\u00e1bh\u00e1il.",
    "You have selected an action, but you haven't saved your changes to individual fields yet. Please click OK to save. You'll need to re-run the action.": "T\u00e1 gn\u00edomh roghnaithe agat, ach n\u00edl do aithrithe sabhailte ar cuid de na r\u00e9\u00edmse. Clic OK chun iad a s\u00e1bh\u00e1il.  Caithfidh t\u00fa an gn\u00edomh a rith ar\u00eds.",
    "You have unsaved changes on individual editable fields. If you run an action, your unsaved changes will be lost.": "T\u00e1 aithrithe nach bhfuil sabhailte ar chuid do na r\u00e9imse.  M\u00e1 ritheann t\u00fa gn\u00edomh, caillfidh t\u00fa do chuid aithrithe.",
    "one letter Friday\u0004F": "A",
    "one letter Monday\u0004M": "L",
    "one letter Saturday\u0004S": "S",
    "one letter Sunday\u0004S": "D",
    "one letter Thursday\u0004T": "D",
    "one letter Tuesday\u0004T": "M",
    "one letter Wednesday\u0004W": "C"
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
    "DATE_FORMAT": "j F Y",
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
    "MONTH_DAY_FORMAT": "j F",
    "NUMBER_GROUPING": 0,
    "SHORT_DATETIME_FORMAT": "m/d/Y P",
    "SHORT_DATE_FORMAT": "j M Y",
    "THOUSAND_SEPARATOR": ",",
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


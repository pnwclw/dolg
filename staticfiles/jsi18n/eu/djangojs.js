

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
      "%(cnt)s-etik %(sel)s aukeratuta",
      "%(cnt)s-etik %(sel)s aukeratuta"
    ],
    "6 a.m.": "6 a.m.",
    "6 p.m.": "6 p.m.",
    "April": "Apirila",
    "August": "Abuztua",
    "Available %s": "%s erabilgarri",
    "Cancel": "Atzera",
    "Choose": "Aukeratu",
    "Choose a Date": "Aukeratu data bat",
    "Choose a Time": "Aukeratu ordu bat",
    "Choose a time": "Aukeratu ordu bat",
    "Choose all": "Denak aukeratu",
    "Chosen %s": "%s aukeratuak",
    "Click to choose all %s at once.": "Egin klik %s guztiak batera aukeratzeko.",
    "Click to remove all chosen %s at once.": "Egin klik aukeratutako %s guztiak kentzeko.",
    "December": "Abendua",
    "February": "Otsaila",
    "Filter": "Filtroa",
    "Hide": "Izkutatu",
    "January": "Urtarrila",
    "July": "Uztaila",
    "June": "Ekaina",
    "March": "Martxoa",
    "May": "Maiatza",
    "Midnight": "Gauerdia",
    "Noon": "Eguerdia",
    "Note: You are %s hour ahead of server time.": [
      "Oharra: zerbitzariaren denborarekiko ordu %s aurrerago zaude",
      "Oharra: zerbitzariaren denborarekiko %s ordu aurrerago zaude"
    ],
    "Note: You are %s hour behind server time.": [
      "Oharra: zerbitzariaren denborarekiko ordu %s atzerago zaude. ",
      "Oharra: zerbitzariaren denborarekiko %s ordu atzerago zaude. "
    ],
    "November": "Azaroa",
    "Now": "Orain",
    "October": "Urria",
    "Remove": "Kendu",
    "Remove all": "Kendu guztiak",
    "September": "Iraila",
    "Show": "Erakutsi",
    "This is the list of available %s. You may choose some by selecting them in the box below and then clicking the \"Choose\" arrow between the two boxes.": "Hau da aukeran dauden %s zerrenda. Hauetako zenbait aukera ditzakezu azpiko \nkaxan hautatu eta kutxen artean dagoen \"Aukeratu\" gezian klik eginez.",
    "This is the list of chosen %s. You may remove some by selecting them in the box below and then clicking the \"Remove\" arrow between the two boxes.": "Hau da aukeratutako %s zerrenda. Hauetako zenbait ezaba ditzakezu azpiko kutxan hautatu eta bi kutxen artean dagoen \"Ezabatu\" gezian klik eginez.",
    "Today": "Gaur",
    "Tomorrow": "Bihar",
    "Type into this box to filter down the list of available %s.": "Idatzi kutxa honetan erabilgarri dauden %s objektuak iragazteko.",
    "Yesterday": "Atzo",
    "You have selected an action, and you haven't made any changes on individual fields. You're probably looking for the Go button rather than the Save button.": "Ekintza bat hautatu duzu, baina ez duzu inongo aldaketarik egin eremuetan. Litekeena da, Gorde botoia beharrean Aurrera botoiaren bila aritzea.",
    "You have selected an action, but you haven't saved your changes to individual fields yet. Please click OK to save. You'll need to re-run the action.": "Ekintza bat hautatu duzu, baina oraindik ez duzu eremuetako aldaketak gorde. Mesedez, sakatu OK gordetzeko. Ekintza berriro exekutatu beharko duzu.",
    "You have unsaved changes on individual editable fields. If you run an action, your unsaved changes will be lost.": "Gorde gabeko aldaketak dauzkazu eremuetan. Ekintza bat exekutatzen baduzu, gorde gabeko aldaketak galduko dira.",
    "one letter Friday\u0004F": "O",
    "one letter Monday\u0004M": "A",
    "one letter Saturday\u0004S": "L",
    "one letter Sunday\u0004S": "I",
    "one letter Thursday\u0004T": "O",
    "one letter Tuesday\u0004T": "A",
    "one letter Wednesday\u0004W": "A"
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
    "DATETIME_FORMAT": "Y\\k\\o N j\\a, H:i",
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
    "DATE_FORMAT": "Y\\k\\o N j\\a",
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
    "FIRST_DAY_OF_WEEK": 1,
    "MONTH_DAY_FORMAT": "F\\r\\e\\n j\\a",
    "NUMBER_GROUPING": 3,
    "SHORT_DATETIME_FORMAT": "Y-m-d H:i",
    "SHORT_DATE_FORMAT": "Y-m-d",
    "THOUSAND_SEPARATOR": ".",
    "TIME_FORMAT": "H:i",
    "TIME_INPUT_FORMATS": [
      "%H:%M:%S",
      "%H:%M:%S.%f",
      "%H:%M"
    ],
    "YEAR_MONTH_FORMAT": "Y\\k\\o F"
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


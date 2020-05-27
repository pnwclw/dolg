

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
      "%(sel)s av %(cnt)s vald",
      "%(sel)s av %(cnt)s valde"
    ],
    "6 a.m.": "06:00",
    "Available %s": "Tilgjengelege %s",
    "Cancel": "Avbryt",
    "Choose": "Vel",
    "Choose a time": "Velg eit klokkeslett",
    "Choose all": "Velg alle",
    "Chosen %s": "Valde %s",
    "Click to choose all %s at once.": "Klikk for \u00e5 velja alle %s samtidig.",
    "Click to remove all chosen %s at once.": "Klikk for \u00e5 fjerna alle valte %s samtidig.",
    "Filter": "Filter",
    "Hide": "Skjul",
    "Midnight": "Midnatt",
    "Noon": "12:00",
    "Now": "No",
    "Remove": "Slett",
    "Remove all": "Fjern alle",
    "Show": "Vis",
    "This is the list of available %s. You may choose some by selecting them in the box below and then clicking the \"Choose\" arrow between the two boxes.": "Dette er lista over tilgjengelege %s. Du kan velja nokon ved \u00e5 markera dei i boksen under og so klikka p\u00e5 \u00abVelg\u00bb-pila mellom dei to boksane.",
    "This is the list of chosen %s. You may remove some by selecting them in the box below and then clicking the \"Remove\" arrow between the two boxes.": "Dette er lista over valte %s. Du kan fjerna nokon ved \u00e5 markera dei i boksen under og so klikka p\u00e5 \u00abFjern\u00bb-pila mellom dei to boksane.",
    "Today": "I dag",
    "Tomorrow": "I morgon",
    "Type into this box to filter down the list of available %s.": "Skriv i dette feltet for \u00e5 filtrera ned lista av tilgjengelege %s.",
    "Yesterday": "I g\u00e5r",
    "You have selected an action, and you haven't made any changes on individual fields. You're probably looking for the Go button rather than the Save button.": "Du har vald ei handling og du har ikkje gjort endringar i individuelle felt. Du ser sannsynlegvis etter G\u00e5 vidare-knappen - ikkje Lagre-knappen.",
    "You have selected an action, but you haven't saved your changes to individual fields yet. Please click OK to save. You'll need to re-run the action.": "Du har vald ei handling, men du har framleis ikkje lagra endringar for individuelle felt. Klikk OK for \u00e5 lagre. Du m\u00e5 gjere handlinga p\u00e5 nytt.",
    "You have unsaved changes on individual editable fields. If you run an action, your unsaved changes will be lost.": "Det er endringar som ikkje er lagra i individuelt redigerbare felt. Endringar som ikkje er lagra vil g\u00e5 tapt."
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
    "DATETIME_FORMAT": "j. F Y H:i",
    "DATETIME_INPUT_FORMATS": [
      "%Y-%m-%d %H:%M:%S",
      "%Y-%m-%d %H:%M:%S.%f",
      "%Y-%m-%d %H:%M",
      "%Y-%m-%d",
      "%Y-%m-%d",
      "%d.%m.%Y %H:%M:%S",
      "%d.%m.%Y %H:%M:%S.%f",
      "%d.%m.%Y %H:%M",
      "%d.%m.%Y",
      "%d.%m.%y %H:%M:%S",
      "%d.%m.%y %H:%M:%S.%f",
      "%d.%m.%y %H:%M",
      "%d.%m.%y"
    ],
    "DATE_FORMAT": "j. F Y",
    "DATE_INPUT_FORMATS": [
      "%Y-%m-%d",
      "%d.%m.%Y",
      "%d.%m.%y"
    ],
    "DECIMAL_SEPARATOR": ",",
    "FIRST_DAY_OF_WEEK": 1,
    "MONTH_DAY_FORMAT": "j. F",
    "NUMBER_GROUPING": 3,
    "SHORT_DATETIME_FORMAT": "d.m.Y H:i",
    "SHORT_DATE_FORMAT": "d.m.Y",
    "THOUSAND_SEPARATOR": "\u00a0",
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




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
      "%(sel)s av %(cnt)s valgt",
      "%(sel)s av %(cnt)s valgt"
    ],
    "6 a.m.": "06:00",
    "6 p.m.": "18:00",
    "April": "April",
    "August": "August",
    "Available %s": "Tilgjengelige %s",
    "Cancel": "Avbryt",
    "Choose": "Velg",
    "Choose a Date": "Velg en dato",
    "Choose a Time": "Velg et klokkeslett",
    "Choose a time": "Velg et klokkeslett",
    "Choose all": "Velg alle",
    "Chosen %s": "Valgte %s",
    "Click to choose all %s at once.": "Klikk for \u00e5 velge alle %s samtidig",
    "Click to remove all chosen %s at once.": "Klikk for \u00e5 fjerne alle valgte %s samtidig",
    "December": "Desember",
    "February": "Februar",
    "Filter": "Filter",
    "Hide": "Skjul",
    "January": "Januar",
    "July": "Juli",
    "June": "Juni",
    "March": "Mars",
    "May": "Mai",
    "Midnight": "Midnatt",
    "Noon": "12:00",
    "Note: You are %s hour ahead of server time.": [
      "Merk: Du er %s time foran server-tid.",
      "Merk: Du er %s timer foran server-tid."
    ],
    "Note: You are %s hour behind server time.": [
      "Merk: Du er %s time bak server-tid.",
      "Merk: Du er %s timer bak server-tid."
    ],
    "November": "November",
    "Now": "N\u00e5",
    "October": "Oktober",
    "Remove": "Slett",
    "Remove all": "Fjern alle",
    "September": "September",
    "Show": "Vis",
    "This is the list of available %s. You may choose some by selecting them in the box below and then clicking the \"Choose\" arrow between the two boxes.": "Dette er listen over tilgjengelige %s. Du kan velge noen ved \u00e5 markere de i boksen under og s\u00e5 klikke p\u00e5 \"Velg\"-pilen mellom de to boksene.",
    "This is the list of chosen %s. You may remove some by selecting them in the box below and then clicking the \"Remove\" arrow between the two boxes.": "Dette er listen over valgte %s. Du kan fjerne noen ved \u00e5 markere de i boksen under og s\u00e5 klikke p\u00e5 \"Fjern\"-pilen mellom de to boksene.",
    "Today": "I dag",
    "Tomorrow": "I morgen",
    "Type into this box to filter down the list of available %s.": "Skriv i dette feltet for \u00e5 filtrere ned listen av tilgjengelige %s.",
    "Yesterday": "I g\u00e5r",
    "You have selected an action, and you haven't made any changes on individual fields. You're probably looking for the Go button rather than the Save button.": "Du har valgt en handling, og har ikke gjort noen endringer i individuelle felter. Du ser mest sannsynlig etter G\u00e5-knappen, ikke Lagre-knappen.",
    "You have selected an action, but you haven't saved your changes to individual fields yet. Please click OK to save. You'll need to re-run the action.": "Du har valgt en handling, men du har ikke lagret dine endringer i individuelle felter enda. Vennligst trykk OK for \u00e5 lagre. Du m\u00e5 utf\u00f8re handlingen p\u00e5 nytt.",
    "You have unsaved changes on individual editable fields. If you run an action, your unsaved changes will be lost.": "Du har ulagrede endringer i individuelle felter. Hvis du utf\u00f8rer en handling, vil dine ulagrede endringer g\u00e5 tapt.",
    "one letter Friday\u0004F": "F",
    "one letter Monday\u0004M": "M",
    "one letter Saturday\u0004S": "L",
    "one letter Sunday\u0004S": "S",
    "one letter Thursday\u0004T": "T",
    "one letter Tuesday\u0004T": "T",
    "one letter Wednesday\u0004W": "O"
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


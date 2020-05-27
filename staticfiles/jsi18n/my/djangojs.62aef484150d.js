

(function(globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    var v=0;
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
      "%(cnt)s \u1019\u103e %(sel)s \u101b\u103d\u1031\u1038\u1001\u103b\u101a\u103a\u1015\u103c\u102e\u1038"
    ],
    "6 a.m.": "\u1019\u1014\u1000\u103a\u1046\u1014\u102c\u101b\u102e",
    "Available %s": "%s \u1000\u102d\u102f\u101b\u101a\u1030\u1014\u102d\u102f\u1004\u103a",
    "Cancel": "\u1015\u101a\u103a\u1016\u103b\u1000\u103a",
    "Choose": "\u101b\u103d\u1031\u1038",
    "Choose a time": "\u1021\u1001\u103b\u102d\u1014\u103a\u101b\u103d\u1031\u1038\u1015\u102b",
    "Choose all": "\u1021\u102c\u1038\u101c\u1036\u102f\u1038\u101b\u103d\u1031\u1038",
    "Chosen %s": "%s \u101b\u103d\u1031\u1038\u1015\u103c\u102e\u1038",
    "Click to choose all %s at once.": "%s \u1021\u102c\u1038\u101c\u1036\u102f\u1038\u1000\u102d\u102f\u1010\u1005\u103a\u1000\u103c\u102d\u1019\u103a\u1010\u100a\u103a\u1038\u1016\u103c\u1004\u103a\u1037\u101b\u103d\u1031\u1038\u1001\u103b\u101a\u103a\u101b\u1014\u103a\u1000\u101c\u1005\u103a\u1014\u103e\u102d\u1015\u103a\u104b",
    "Click to remove all chosen %s at once.": "%s \u1021\u102c\u1038\u101c\u1036\u102f\u1038\u1000\u102d\u102f\u1010\u1005\u103a\u1000\u103c\u102d\u1019\u103a\u1010\u100a\u103a\u1038\u1016\u103c\u1004\u103a\u1037\u1016\u101a\u103a\u101b\u103e\u102c\u1038\u101b\u1014\u103a\u1000\u101c\u1005\u103a\u1014\u103e\u102d\u1015\u103a\u104b",
    "Filter": "\u1005\u102e\u1005\u1005\u103a\u1019\u103e\u102f",
    "Hide": "\u1016\u102f\u1036\u1038\u1000\u103d\u101a\u103a",
    "Midnight": "\u101e\u1014\u103a\u1038\u1001\u1031\u102b\u1004\u103a",
    "Noon": "\u1019\u103d\u1014\u103a\u1038\u1010\u100a\u103a\u1037",
    "Now": "\u101a\u1001\u102f",
    "Remove": "\u1016\u101a\u103a\u101b\u103e\u102c\u1038",
    "Remove all": "\u1021\u102c\u1038\u101c\u1036\u102f\u1038\u1016\u101a\u103a\u101b\u103e\u102c\u1038",
    "Show": "\u1015\u103c\u101e",
    "This is the list of available %s. You may choose some by selecting them in the box below and then clicking the \"Choose\" arrow between the two boxes.": "%s \u101e\u100a\u103a\u101b\u101a\u1030\u1014\u102d\u102f\u1004\u103a\u101e\u1031\u102c\u1005\u102c\u101b\u1004\u103a\u1038\u1016\u103c\u1005\u103a\u104b \u1021\u1031\u102c\u1000\u103a\u1016\u1031\u102c\u103a\u1015\u103c\u1015\u102b\u1018\u1030\u1038\u1019\u103b\u102c\u1038\u1010\u103d\u1004\u103a\u1021\u1001\u103b\u102d\u102f\u1037\u1000\u102d\u102f\u101b\u103d\u1031\u1038\u1001\u103b\u101a\u103a\u1014\u102d\u102f\u1004\u103a\u1015\u103c\u102e\u1038\u1018\u1030\u1038\u1014\u103e\u1005\u103a\u1001\u102f\u1000\u103c\u102c\u1038\u101b\u103e\u102d\"\u101b\u103d\u1031\u1038\"\u1019\u103b\u102c\u1038\u1000\u102d\u102f\u1000\u101c\u1005\u103a\u1014\u103e\u102d\u1015\u103a\u104b",
    "This is the list of chosen %s. You may remove some by selecting them in the box below and then clicking the \"Remove\" arrow between the two boxes.": "%s \u101e\u100a\u103a\u101b\u101a\u1030\u1014\u102d\u102f\u1004\u103a\u101e\u1031\u102c\u1005\u102c\u101b\u1004\u103a\u1038\u1016\u103c\u1005\u103a\u104b \u1021\u1031\u102c\u1000\u103a\u1016\u1031\u102c\u103a\u1015\u103c\u1015\u102b\u1018\u1030\u1038\u1019\u103b\u102c\u1038\u1010\u103d\u1004\u103a\u1021\u1001\u103b\u102d\u102f\u1037\u1000\u102d\u102f\u1016\u101a\u103a\u101b\u103e\u102c\u1038\u1014\u102d\u102f\u1004\u103a\u1015\u103c\u102e\u1038\u1018\u1030\u1038\u1014\u103e\u1005\u103a\u1001\u102f\u1000\u103c\u102c\u1038\u101b\u103e\u102d\"\u1016\u101a\u103a\u101b\u103e\u102c\u1038\"\u1000\u102d\u102f\u1000\u101c\u1005\u103a\u1014\u103e\u102d\u1015\u103a\u104b",
    "Today": "\u101a\u1014\u1031\u1037",
    "Tomorrow": "\u1019\u1014\u1000\u103a\u1016\u103c\u1014\u103a",
    "Type into this box to filter down the list of available %s.": "\u101a\u1001\u102f\u1018\u1030\u1038\u1011\u1032\u1010\u103d\u1004\u103a\u1005\u102c\u101e\u102c\u1038\u101b\u102d\u102f\u1000\u103a\u1011\u100a\u1037\u103a\u1015\u103c\u102e\u1038 %s \u101b\u101a\u1030\u1014\u102d\u102f\u1004\u103a\u101e\u1031\u102c\u1005\u102c\u101b\u1004\u103a\u1038\u1000\u102d\u102f\u1005\u102d\u1005\u1005\u103a\u1014\u102d\u102f\u1004\u103a\u104b",
    "Yesterday": "\u1019\u1014\u1031\u1037"
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




(function(globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    var v=(n==1 || n==11) ? 0 : (n==2 || n==12) ? 1 : (n > 2 && n < 20) ? 2 : 3;
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
      "Chaidh %(sel)s \u00e0 %(cnt)s a thaghadh",
      "Chaidh %(sel)s \u00e0 %(cnt)s a thaghadh",
      "Chaidh %(sel)s \u00e0 %(cnt)s a thaghadh",
      "Chaidh %(sel)s \u00e0 %(cnt)s a thaghadh"
    ],
    "6 a.m.": "6m",
    "6 p.m.": "6f",
    "April": "An Giblean",
    "August": "An L\u00f9nastal",
    "Available %s": "%s ri am faighinn",
    "Cancel": "Sguir dheth",
    "Choose": "Tagh",
    "Choose a Date": "Tagh ceann-l\u00e0",
    "Choose a Time": "Tagh \u00e0m",
    "Choose a time": "Tagh \u00e0m",
    "Choose all": "Tagh na h-uile",
    "Chosen %s": "%s a chaidh a thaghadh",
    "Click to choose all %s at once.": "Briog gus a h-uile %s a thaghadh aig an aon \u00e0m.",
    "Click to remove all chosen %s at once.": "Briog gus a h-uile %s a chaidh a thaghadh a thoirt air falbh.",
    "December": "An D\u00f9bhlachd",
    "February": "An Gearran",
    "Filter": "Criathraich",
    "Hide": "Falaich",
    "January": "Am Faoilleach",
    "July": "An t-Iuchar",
    "June": "An t-\u00d2gmhios",
    "March": "Am M\u00e0rt",
    "May": "An C\u00e8itean",
    "Midnight": "Meadhan-oidhche",
    "Noon": "Meadhan-latha",
    "Note: You are %s hour ahead of server time.": [
      "An aire: Tha thu %s uair a th\u00ecde air thoiseach \u00e0m an fhrithealaiche.",
      "An aire: Tha thu %s uair a th\u00ecde air thoiseach \u00e0m an fhrithealaiche.",
      "An aire: Tha thu %s uairean a th\u00ecde air thoiseach \u00e0m an fhrithealaiche.",
      "An aire: Tha thu %s uair a th\u00ecde air thoiseach \u00e0m an fhrithealaiche."
    ],
    "Note: You are %s hour behind server time.": [
      "An aire: Tha thu %s uair a th\u00ecde air dheireadh \u00e0m an fhrithealaiche.",
      "An aire: Tha thu %s uair a th\u00ecde air dheireadh \u00e0m an fhrithealaiche.",
      "An aire: Tha thu %s uairean a th\u00ecde air dheireadh \u00e0m an fhrithealaiche.",
      "An aire: Tha thu %s uair a th\u00ecde air dheireadh \u00e0m an fhrithealaiche."
    ],
    "November": "An t-Samhain",
    "Now": "An-dr\u00e0sta",
    "October": "An D\u00e0mhair",
    "Remove": "Thoir air falbh",
    "Remove all": "Thoir air falbh na h-uile",
    "September": "An t-Sultain",
    "Show": "Seall",
    "This is the list of available %s. You may choose some by selecting them in the box below and then clicking the \"Choose\" arrow between the two boxes.": "Seo liosta de %s a tha ri am faighinn. Gus feadhainn a thaghadh, tagh iad sa bhogsa gu h-\u00ecosal agus briog air an t-saighead \u201cTagh\u201d eadar an d\u00e0 bhogsa an uair sin.",
    "This is the list of chosen %s. You may remove some by selecting them in the box below and then clicking the \"Remove\" arrow between the two boxes.": "Seo liosta de %s a chaidh a thaghadh. Gus feadhainn a thoirt air falbh, tagh iad sa bhogsa gu h-\u00ecosal agus briog air an t-saighead \u201cThoir air falbh\u201d eadar an d\u00e0 bhogsa an uair sin.",
    "Today": "An-diugh",
    "Tomorrow": "A-m\u00e0ireach",
    "Type into this box to filter down the list of available %s.": "Sgr\u00ecobh sa bhogsa seo gus an liosta de %s ri am faighinn a chriathradh.",
    "Yesterday": "An-d\u00e8",
    "You have selected an action, and you haven't made any changes on individual fields. You're probably looking for the Go button rather than the Save button.": "Thagh thu gn\u00ecomh agus cha do rinn thu atharrachadh air ran fa leth sam bith. \u2019S d\u00f2cha gu bheil thu airson am putan \u201cSiuthad\u201d a chleachdadh seach am putan \u201cS\u00e0bhail\u201d.",
    "You have selected an action, but you haven't saved your changes to individual fields yet. Please click OK to save. You'll need to re-run the action.": "Thagh thu gn\u00ecomh ach cha do sh\u00e0bhail thu na dh\u2019atharraich thu ann an raointean fa leth. Briog air \u201cCeart ma-th\u00e0\u201d gus seo a sh\u00e0bhaladh. Feumaidh tu an gn\u00ecomh a ruith a-rithist.",
    "You have unsaved changes on individual editable fields. If you run an action, your unsaved changes will be lost.": "Tha atharraichean gun s\u00e0bhaladh agad ann an raon no dh\u00e0 fa leth a ghabhas deasachadh. Ma ruitheas tu gn\u00ecomh, th\u00e8id na dh\u2019atharraich thu gun a sh\u00e0bhaladh air chall.",
    "one letter Friday\u0004F": "hA",
    "one letter Monday\u0004M": "Lu",
    "one letter Saturday\u0004S": "Sa",
    "one letter Sunday\u0004S": "D\u00f2",
    "one letter Thursday\u0004T": "Da",
    "one letter Tuesday\u0004T": "M\u00e0",
    "one letter Wednesday\u0004W": "Ci"
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
    "DATETIME_FORMAT": "j F Y h:ia",
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
    "FIRST_DAY_OF_WEEK": 1,
    "MONTH_DAY_FORMAT": "j F",
    "NUMBER_GROUPING": 0,
    "SHORT_DATETIME_FORMAT": "j M Y h:ia",
    "SHORT_DATE_FORMAT": "j M Y",
    "THOUSAND_SEPARATOR": ",",
    "TIME_FORMAT": "h:ia",
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


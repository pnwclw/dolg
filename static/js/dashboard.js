function disableSubmitButton(location) {
  let text = $('[type=submit]', location).text();
  $('[type=submit]', location).html('<text class="d-none">');
  $('[type=submit] text', location).text(text);
  $('[type=submit]', location).prepend('<span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>').attr('disabled','disabled');
  $('.invalid-feedback', location).remove();
  $('.is-invalid', location).removeClass('is-invalid');
}

function enableSubmitButton(location) {
  let text = $('[type=submit] text', location).text();
  $('[type=submit]', location).html("");
  $('[type=submit]', location).text(text);
  $('[type=submit]').removeAttr('disabled');
}

function processForm(location) {
  let d = {}
  $.each($(location).serializeArray(), function() {
    d[this.name] = this.value;
  });
  return d;
}

function processErrors(error, location=null) {
  if (error.content.error.non_field_errors) {
    error = error.content.error.non_field_errors.join('\n');
  } else if (error.message.startsWith('500')) {
    error = gettext("Internal server error. Please try again or contact support.");
  } else if (error.message.startsWith('429')) {
    error = gettext("Too many requests. Try again later or contact support");
  } else if (error.message.startsWith('404')) {
    error = gettext("Not found. Try again later or contact support");
  } else if (error.message.startsWith('403')) {
    Swal.fire({
      icon: 'warning',
      title: gettext('Session expired'),
      text: gettext('You will be redirected to login page'),
      customClass: {
        confirmButton: 'btn btn-theme bg-primary-1',
      }
    }).then(function(result) {
      document.location.reload();
    });
  } else if (location) {
    for (let [key, value] of Object.entries(error.content.error)) {
      $(`[name=${key}]`, location).after(`<div class="invalid-feedback">${value.join('<br>')}</div>`).addClass('is-invalid');
    }
    error = gettext("Please correct the data");
  }
  Swal.fire({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 5000,
    icon: 'error',
    title: error,
    onOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  });
}


function updateState() {
  client.action(schema, ['state', 'list']).then(function(result) {
    $('#balance-table tbody').empty();
    for (let [key, value] of Object.entries(result.balance)) {
      let last_tr = $('#balance-table tbody tr:last');
      if ($('th', last_tr).text() == value.name) {
        $('th', last_tr).attr('rowspan', 2).addClass('align-middle');
          $('#balance-table tbody').append(`<tr><td class="text-right">${parseFloat(value.amount)} ${value.value_type}</td></tr>`);
      } else {
        $('#balance-table tbody').append(`<tr><th scope="row">${value.name}</th><td class="text-right">${parseFloat(value.amount)} ${value.value_type}</td></tr>`);
      }
    }

    $("#currentRate").text("1 BXF = " + result.token.price + " EUR");
    $("#rateUpdateTime").text(gettext('Updated on') + ' ' + moment(result.token.created).format('LLL'));
    window.rate = result.token.price;
    $("#id_amount_eur").attr("min", 50);
    $("#id_amount_bxf").attr("min", 50 / result.token.price);

    $("#currentRank").html(result.affiliate.rank);
    $("#currentTurnover").text(`${result.affiliate.team_turnover.name}: ${result.affiliate.team_turnover.amount} ${result.affiliate.team_turnover.value_type}`);
  }).catch(function(error){
    processErrors(error);
  });
}






const coreapi = window.coreapi;
const schema = window.schema;
let auth = new coreapi.auth.SessionAuthentication({
  csrfCookieName: 'csrftoken',
  csrfHeaderName: 'X-CSRFToken',
});
let client = new coreapi.Client({auth: auth});



$(document).ready(function(){
  updateState();
  setInterval(updateState, 60 * 1000);
});


$(".order-form input").on('change paste keyup', function() {
  let rate = window.rate;
  if ($(this).is("#id_amount_eur")) {
    $("#id_amount_bxf", '.order-form').val(Math.floor($(this).val() / rate * 1000000000) / 1000000000);
  } else {
    $("#id_amount_eur", '.order-form').val(Math.floor($(this).val() * rate * 100) / 100);
  }
});



$(".order-form").on('submit', function(e) {
  disableSubmitButton('.order-form');
  let data = processForm('.order-form');
  let params = {"amount": data.amount_bxf};

  client.action(schema, ['order', 'create'], params).then(function(result) {
    enableSubmitButton('.order-form');
    window.open(`https://pay.blackfort.exchange/pay?merchant_id=b76716db-426a-4a3f-b2bf-8d94b1e2ec21&order_amount=${data.amount_eur}&order_currency=EUR&item_name=&widget_type=0&payment_id=${result.id}&pos_id=dashboard`, gettext('Buy BXF'), 'height=690,width=585');
  }).catch(function(error) {
    enableSubmitButton('.order-form');
    processErrors(error, '.order-form');
  });
  return false;
});

$('.sidenav-toggler').click(function(e){
  let ds = $(document).width()
  let ws = $('.sidenav').width();
  ds = Math.min(256, ds);
  if (!$(this).hasClass('change')) {
    $('.sidenav').width(ds);
    $('.sidenav-toggler').css('left','0px');
  } else {
    $('.sidenav').width('0px');
    $('.sidenav-toggler').css('left','1rem');
  }
  $('.sidenav-toggler').toggleClass('change');
  e.stopPropagation();
});
$('.sidenav .nav-link').click(function(e){
  $('.sidenav').width('0px');
  $('.sidenav-toggler').toggleClass('change');
  $('.sidenav-toggler').css('left','1rem');
  e.stopPropagation();
});
$('body').click(function(e) {
  if(!$(e.target).parents('.sidenav'))
  {
    $('.sidenav').width('0px');
    $('.sidenav-toggler').css('left','1rem');
    $('.sidenav-toggler').toggleClass('change');
  }
});
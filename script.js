$('#menu-btn').click(function(){
  $('nav .navigation ul').addClass('active')
});

$('#menu-close').click(function(){
  $('nav .navigation ul').removeClass('active')
});

$('#back').click(function(){
  window.history.back();
});
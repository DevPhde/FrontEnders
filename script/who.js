$(function () {
    function rescaleCaptcha() {
      let form = $('.form_').parent().width();
      let scale;
      if(form == 352){
        scale = 0.9;
      } else if (form < 346) {
        scale = 0.69
      } else{
        scale = 1.0
      }
  
      $('.g-recaptcha').css('transform', 'scale(' + scale + ')');
      $('.g-recaptcha').css('-webkit-transform', 'scale(' + scale + ')');
      $('.g-recaptcha').css('transform-origin', '0 0');
      $('.g-recaptcha').css('-webkit-transform-origin', '0 0');
    }
  
    rescaleCaptcha();
    $(window).resize(function () { rescaleCaptcha(); });
  });
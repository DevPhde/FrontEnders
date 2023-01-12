import { Routes } from "./routing/routes.js"

const form = document.querySelector("[data-form]")

form.addEventListener('submit', (e) => {
    e.preventDefault()
    Routes.LoginAuth()
})

if (sessionStorage.getItem('Hash')) {
    Routes.DashboardRedirect(true)
}

$(function () {
    function rescaleCaptcha() {
      let form = $('.form_').parent().width();
      let scale;
      if(form == 352){
        scale = 0.9;
      } else if (form < 352) {
        scale = 0.7
      } else {
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
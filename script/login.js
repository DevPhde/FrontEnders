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
      let main = $('main').parent().width()
      let scale = 1
      if (form < 265) scale = 0.7
      if (form < 340) scale = 0.7
      if (form < 230) scale = 0.6
      if (form < 205) scale = 0.5
      if (form < 170) scale = 0.47
      $('.g-recaptcha').css('transform', 'scale(' + scale + ')');
      $('.g-recaptcha').css('-webkit-transform', 'scale(' + scale + ')');
      $('.g-recaptcha').css('transform-origin', '0 0');
      $('.g-recaptcha').css('-webkit-transform-origin', '0 0');
    }
  
    rescaleCaptcha();
    $(window).resize(function () { rescaleCaptcha(); });
  
  });
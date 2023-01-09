import { Routes } from "./routing/routes.js";

let currentTab = 0;
showTab(currentTab);

function showTab(n) {
  let x = document.getElementsByClassName("step");
  x[n].style.display = "block";
  if (n == 0) {
    document.getElementById("cancelBtn").style.display = "none";
  } else if (n == 3) {
    document.getElementById("cancelBtn").style.display = "none";
  } else {
    document.getElementById("cancelBtn").style.display = "inline";
  }
  if (n == (x.length - 2)) {
    document.getElementById("nextBtn").innerHTML = "Finalizar";
  } else {
    document.getElementById("nextBtn").innerHTML = "Avançar";
  }
  fixStepIndicator(n)
}

window.nextPrev = async function nextPrev(n) {
  let x = document.getElementsByClassName("step");
  if (n == 1 && !validateForm()) {
    return false
  }
  if (currentTab == 0) {
    removerror("emailError")
    const result = await Routes.VerifyEmailToRecoveryPassword()
    if (!result){
      return false
    } 
  }
  if (currentTab == 1) {
    removerror("tokenError")
    const result = await Routes.VerifyToken()
    if (!result) return false
  }
  if (currentTab == 2) {
    removerror("PasswordError")
    const result = await Routes.NewPassword()
    if(!result) return false
  }
  x[currentTab].style.display = "none";
  currentTab = currentTab + n;
  if (currentTab == 3) {
    document.getElementsByClassName("stepIndicator")[currentTab].className += " finish";
    document.getElementById("cancelBtn").style.display = "none";
    document.getElementById("nextBtn").style.display = "none";

  }
  if (currentTab >= x.length) {

    return false;
  }
  showTab(currentTab);
}

function validateForm() {
  let x, y, i, valid = true;
  x = document.getElementsByClassName("step");
  y = x[currentTab].getElementsByTagName("input");
  for (i = 0; i < y.length; i++) {
    if (y[i].value == "") {
      y[i].className += " invalid";
      valid = false;
    }
  }
  if (valid) {
    document.getElementsByClassName("stepIndicator")[currentTab].className += " finish";
  }
  return valid;
}

function fixStepIndicator(n) {
  let i, x = document.getElementsByClassName("stepIndicator");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  x[n].className += " active";
}

let ResendCount = 3;
window.tokenResend = function tokenResend() {
  const resendToken = document.getElementById("resend_token")
  if (ResendCount > 0){
    ResendCount--
    Routes.TokenResend()  
  } else {
    resendToken.disabled = true
    alert('Limite máximo de reenvios atingido.')
  }
  
}

window.loginRedirect = function loginRedirect() {
  sessionStorage.clear()
  Routes.Login()
}

window.cancelRecovery = function cancelRecovery() {
  Routes.Logout(false)
  sessionStorage.clear()
  window.location.reload(true)
}

function removerror(param){
  const pError = document.getElementById(param);
  pError.innerHTML = "";
}


$(function () {
  function rescaleCaptcha() {
    let form = $('.form_').parent().width();
    let scale;
    console.log("form=> " +form)
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
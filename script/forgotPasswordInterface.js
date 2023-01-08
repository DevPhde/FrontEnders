import { Routes } from "./routing/routes.js";

let currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form...
  let x = document.getElementsByClassName("step");
  x[n].style.display = "block";
  //... and fix the Previous/Next buttons:
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
  //... and run a function that will display the correct step indicator:
  fixStepIndicator(n)
}
const newPassword = document.getElementById("PasswordError")
const newPassword_conffirm = document.getElementById("newPassword_conffirm")

window.nextPrev = async function nextPrev(n) {
  // This function will figure out which tab to display
  let x = document.getElementsByClassName("step");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) {
    return false
  }
  if (currentTab == 0) {
    const result = await Routes.VerifyEmailToRecoveryPassword()
    if (!result) return false
  }
  if (currentTab == 1) {
    const result = await Routes.VerifyToken()
    if (!result) return false
  }
  if (currentTab == 2) {
    const result = await Routes.NewPassword()
    if(!result) return false
  }
  // if ()
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab == 3) {
    document.getElementsByClassName("stepIndicator")[currentTab].className += " finish";
    document.getElementById("cancelBtn").style.display = "none";
    document.getElementById("nextBtn").style.display = "none";

  }
  if (currentTab >= x.length) {

    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  let x, y, i, valid = true;
  x = document.getElementsByClassName("step");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("stepIndicator")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  let i, x = document.getElementsByClassName("stepIndicator");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  x[n].className += " active";
}

let ResendCount = 3;
window.tokenResend = function tokenResend() {
  const resendToken = document.getElementById("resend_token")
  if (ResendCount > 0){
    ResendCount--
    console.log(ResendCount)
    Routes.TokenResend()  
  } else {
    resendToken.disabled = true
    alert('Limite máximo de reenvios atingido.')
  }
  
}

window.loginRedirect = function loginRedirect() {
  Routes.Login()
}

window.cancelRecovery = function cancelRecovery() {
  Routes.Logout(false)
  sessionStorage.clear()
  window.location.reload(true) // reload page
}
// Website Loaded Message
console.log("Samson Auto Electricians Website Loaded");

// Welcome Popup
window.onload = function () {
  alert("Welcome to Samson Auto Electricians");
};

// WhatsApp Contact Button
function contactUs() {
  window.location.href =
    "https://wa.me/263773483701";
}

// Dark Mode Toggle
function darkMode() {
  document.body.classList.toggle("dark");
}

// Auto Update Year
document.getElementById("year").innerHTML =
  new Date().getFullYear();

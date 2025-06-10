// Add event listener to login form submission
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  
  // Redirect to ngo-dashboard.html
  window.location.href = "user-dashboard.html";
});

// Add event listener to login form submission
document.getElementById("ngoLoginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Please fill out all fields.");
    return;
  }
  
  // Redirect to ngo-dashboard.html
  window.location.href = "ngo-dashboard.html";
});

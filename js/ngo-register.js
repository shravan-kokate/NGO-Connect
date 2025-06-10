document.addEventListener("DOMContentLoaded", () => {
  const verifyButton = document.getElementById("verifyBtn");
  const form = document.getElementById("ngoRegisterForm");

  // Mock verification logic for the DARPAN certificate
  verifyButton.addEventListener("click", () => {
    const darpanCert = document.getElementById("darpanCert").files[0];
    if (darpanCert) {
      alert("DARPAN certificate uploaded successfully. Verification in progress...");
      // Mock verification process (replace with actual API call if available)
      setTimeout(() => {
        alert("Verification successful!");
      }, 2000);
    } else {
      alert("Please upload a DARPAN certificate before verification.");
    }
  });

  // Form validation before submission
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form submission for demonstration
    alert("Thank you for registering your NGO. We'll review your details shortly.");
    form.reset();
  });
});

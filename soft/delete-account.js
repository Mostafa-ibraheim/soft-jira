const mockDatabase = JSON.parse(localStorage.getItem("mockDatabase")) || {};

document.getElementById("deleteAccountForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("delete-email").value;
  const password = document.getElementById("delete-password").value;

  if (mockDatabase[email] && mockDatabase[email] === password) {
    delete mockDatabase[email];
    localStorage.setItem("mockDatabase", JSON.stringify(mockDatabase));
    alert("Account deleted successfully!");
    window.location.href = "register.html"; 
  } else {
    alert("Incorrect email or password. Please try again.");
  }
});

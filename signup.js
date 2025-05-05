// Toggle signup section
function toggleSignup() {
    const signupSection = document.getElementById("signup-section");
    signupSection.classList.toggle("hidden");
    signupSection.scrollIntoView({ behavior: "smooth" });
  }
  
  // Show/hide password
  function togglePassword(id) {
    const input = document.getElementById(id);
    input.type = input.type === "password" ? "text" : "password";
  }
  
  // Handle signup
  document.querySelector("#signup-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    const isValidLength = password.length === 10;
    const hasAtSymbol = /@/.test(password);
    const hasAlphabet = /[A-Za-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
  
    if (!isValidLength || !hasAtSymbol || !hasAlphabet || !hasNumber) {
      alert("Password must be exactly 10 characters and include @, at least one letter, and one number.");
      return;
    }
  
  
  
    const users = JSON.parse(localStorage.getItem("users")) || {};
  
    if (users[email]) {
      alert("This email is already registered.");
      return;
    }
  
    users[email] = password;
    localStorage.setItem("users", JSON.stringify(users));
  
    alert("Signup successful! You can now log in.");
    document.getElementById("signup-section").classList.add("hidden");
  });
  
  // Handle login
  document.querySelector("#login-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
  
    const users = JSON.parse(localStorage.getItem("users")) || {};
  
    if (users[email] && users[email] === password) {
     // Successful login
    } else {
      alert("Incorrect email or password.");
    }
    document.getElementById("login-form").addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent actual form submission
  
      // Show the popup
      const popup = document.getElementById("login-popup");
      popup.classList.remove("hidden");
      popup.classList.add("show");
  
      // Hide after 3 seconds
      setTimeout(() => {
          popup.classList.remove("show");
          popup.classList.add("hidden");
      }, 3000);
  });
  
  });
  function Order(event) {
    event.preventDefault(); // Prevent form from submitting
  
    const popup = document.getElementById("orderPopup");
    popup.classList.remove("hidden");
    popup.classList.add("show");
  
    // Hide popup and redirect after 2 seconds
    setTimeout(() => {
      popup.classList.remove("show");
      popup.classList.add("hidden");
  
      // Redirect to bakery.html
      window.location.href = "bakery.html";
    }, 2000);
  }
  
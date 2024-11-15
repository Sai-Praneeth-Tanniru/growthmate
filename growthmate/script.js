function login() {
    const loginType = document.getElementById("login-type").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    if (loginType === "admin") {
      alert("Logging in as Admin");
      // Perform admin login logic here
    } else if (loginType === "user") {
      alert("Logging in as User");
      // Perform user login logic here
    } else {
      alert("Please select a login type.");
    }
  }
  
// Listen for input on the password field to update strength indicator
document.getElementById('password').addEventListener('input', function() {
    const password = this.value;
    const strengthIndicator = document.getElementById('strengthIndicator');
    let strength = checkPasswordStrength(password);
    strengthIndicator.textContent = 'Strength: ' + strength;
  });
  
  // Function to determine password strength
  function checkPasswordStrength(password) {
    let strength = 'Weak';
    if (password.length >= 8) {
      strength = 'Moderate';
    }
    if (password.length >= 8 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password) && /[\W_]/.test(password)) {
      strength = 'Strong';
    }
    return strength;
  }
  
  // Handle form submission for signup
  document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const error = document.getElementById('error');
    error.textContent = '';
  
    // Validate that passwords match
    if (password !== confirmPassword) {
      error.textContent = 'Passwords do not match!';
      return;
    }
  
    // Save the user data to localStorage (simulate signup)
    localStorage.setItem('user', JSON.stringify({ username, password }));
    
    alert('Signup Successful! You can now login.');
    // Redirect the user to the login page (index.html)
    window.location.href = 'index.html';
  });
  
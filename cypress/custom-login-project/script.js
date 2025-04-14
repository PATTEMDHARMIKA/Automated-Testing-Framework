document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const error = document.getElementById('error');

  if (username === 'admin' && password === 'admin123') {
    window.location.href = 'success.html';
  } else {
    error.textContent = 'Invalid username or password!';
  }
});
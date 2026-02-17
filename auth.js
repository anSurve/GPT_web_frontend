// auth.js

const AUTH_KEY = 'agastya_auth_user';

function login(email) {
    const user = {
        email: email,
        name: email.split('@')[0],
        loginTime: new Date().toISOString()
    };
    localStorage.setItem(AUTH_KEY, JSON.stringify(user));
    window.location.href = 'dashboard.html';
}

function logout() {
    localStorage.removeItem(AUTH_KEY);
    window.location.href = 'index.html';
}

function checkAuth() {
    const token = localStorage.getItem("id_token");
    if (!token) {
        window.location.href = 'login.html';
    }
    return true;
}

function handleLogin(event) {
    event.preventDefault();
    const emailInput = document.getElementById('email');
    if (emailInput && emailInput.value) {
        login(emailInput.value);
    }
}

function handleGoogleLogin() {
    login('google_user@example.com');
}

// Attach event listeners if on login page
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('form');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    const googleBtn = document.querySelector('.google-btn');
    if (googleBtn) {
        googleBtn.addEventListener('click', handleGoogleLogin);
    }
});

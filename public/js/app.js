document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value.trim();

            if (username && password) {
                const response = await fetch('/api/users/login', {
                    method: 'POST',
                    body: JSON.stringify({ username, password }),
                    headers: { 'Content-Type': 'application/json' },
                });

                if (response.ok) {
                    document.location.replace('/');
                } else {
                    alert('Failed to log in.');
                }
            }
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value.trim();

            if (username && password) {
                const response = await fetch('/api/users/signup', {
                    method: 'POST',
                    body: JSON.stringify({ username, password }),
                    headers: { 'Content-Type': 'application/json' },
                });

                if (response.ok) {
                    document.location.replace('/');
                } else {
                    alert('Failed to sign up.');
                }
            }
        });
    }
});

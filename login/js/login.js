document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    if (!loginForm) return;

    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        try {
            const response = await fetch('http://localhost:3000/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            const result = await response.json();

            if (result.twoFactorRequired) {
                localStorage.setItem('2fa_user_id', result.userId);
                window.location.href = '2fa-verify.html';
            } else if (response.ok) {
                localStorage.setItem('authToken', result.token);
                window.location.href = "../app/bemvindo.html";
            } else {
                alert(`Erro: ${result.message}`);
            }
        } catch (error) {
            alert('Erro de conexão com a API.');
        }
    });
});
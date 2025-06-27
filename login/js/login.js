document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    if (!loginForm) {
        console.error('Formulário de login não encontrado!');
        return;
    }

    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        // Corrigido para pegar o campo com id 'email'
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const loginData = { email, password };

        try {
            const response = await fetch('http://localhost:3000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginData)
            });

            const result = await response.json();

            if (response.ok) {
                alert(result.message); // "Login bem-sucedido!"
                
                // Guarda a "chave" de acesso no navegador
                localStorage.setItem('authToken', result.token);

                // Redireciona para a tela de boas-vindas
                window.location.href = "../app/bemvindo.html";
            } else {
                // Mostra o erro que veio da API (ex: "Credenciais inválidas.")
                alert(`Erro: ${result.message}`);
            }
        } catch (error) {
            console.error('Erro de conexão:', error);
            alert('Não foi possível conectar à API. Verifique se o backend está rodando.');
        }
    });
});
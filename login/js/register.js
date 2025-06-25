const registerForm = document.getElementById('register-form');

registerForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = registerForm.name.value;
    const email = registerForm.email.value;
    const password = registerForm.password.value;

    const registerData = { name, email, password };

    try {
        // Envia os dados para a sua API local
        const response = await fetch('http://localhost:3000/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(registerData)
        });

        const result = await response.json();

        if (response.ok) {
            alert(result.message); // "Usuário criado com sucesso!"
            window.location.href = 'index.html'; // Leva para o login
        } else {
            let errorMessage = result.message || 'Ocorreu um erro.';
            if (result.errors) {
                errorMessage = result.errors.map(e => e.message).join('\n');
            }
            alert(`Erro no cadastro:\n${errorMessage}`);
        }
    } catch (error) {
        alert('Erro: Não foi possível conectar à API. Verifique se o backend está rodando.');
    }
});
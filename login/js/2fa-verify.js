document.addEventListener('DOMContentLoaded', () => {
    const verifyForm = document.getElementById('2fa-verify-form');
    if (!verifyForm) {
        console.error('Formulário de verificação 2FA não encontrado!');
        return;
    }

    // Pega o ID do usuário que foi salvo no localStorage na tela de login
    const userId = localStorage.getItem('2fa_user_id');

    if (!userId) {
        alert('Erro: ID de usuário para verificação não encontrado. Por favor, tente fazer o login novamente.');
        verifyForm.querySelector('button').disabled = true;
        return;
    }

    verifyForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const tokenInput = document.getElementById('2fa-token');
        const token = tokenInput.value;

        if (!token || token.length !== 6 || !/^\d+$/.test(token)) {
            alert('Por favor, insira um código válido de 6 dígitos.');
            return;
        }

        try {
            // Envia o ID do usuário e o código para a API verificar
            const response = await fetch('http://localhost:3000/api/2fa/verify-login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userId, token })
            });

            const result = await response.json();

            if (response.ok) {
                alert(result.message); // "Verificação bem-sucedida!"
                
                // Limpa o ID temporário e guarda o token de acesso final
                localStorage.removeItem('2fa_user_id');
                localStorage.setItem('authToken', result.token);

                // Redireciona para o dashboard
                window.location.href = '../app/bemvindo.html';
            } else {
                alert(`Erro: ${result.message}`);
                tokenInput.value = ''; // Limpa o campo para nova tentativa
            }
        } catch (error) {
            alert('Erro de conexão com a API. Verifique se o backend está rodando.');
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const resetForm = document.getElementById('reset-form');

    // Pega o token da URL da página
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    if (!token) {
        alert('Token de redefinição não encontrado. Por favor, use o link enviado para o seu e-mail.');
        resetForm.querySelector('button').disabled = true;
        return;
    }

    resetForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        
        const password = document.getElementById('new-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (password !== confirmPassword) {
            alert('As senhas não coincidem.');
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/api/auth/reset-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ token, password })
            });

            const result = await response.json();

            if (response.ok) {
                alert(result.message);
                window.location.href = '../login/index.html'; // Volta para o login
            } else {
                alert(`Erro: ${result.message}`);
            }
        } catch (error) {
            alert('Erro ao conectar com o servidor. Tente novamente.');
        }
    });
});
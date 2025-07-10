document.addEventListener('DOMContentLoaded', async () => {
    const toggleBtn = document.getElementById('toggle-2fa-btn');
    const authToken = localStorage.getItem('authToken');

    if (!authToken) {
        window.location.href = '../login/index.html';
        return;
    }

    try {
        const userResponse = await fetch('http://localhost:3000/api/users/me', {
            headers: { 'Authorization': `Bearer ${authToken}` }
        });

        if (!userResponse.ok) throw new Error('Falha ao buscar dados do usuário.');

        const user = await userResponse.json();

        toggleBtn.textContent = user.twoFactorEnabled ? 'Desativar 2FA' : 'Ativar 2FA';
        toggleBtn.style.backgroundColor = user.twoFactorEnabled ? '#e74c3c' : '#27ae60';

        toggleBtn.addEventListener('click', async () => {
            const response = await fetch('http://localhost:3000/api/2fa/toggle', {
                method: 'POST',
                headers: { 'Authorization': `Bearer ${authToken}` }
            });
            const result = await response.json();
            alert(result.message);
            window.location.reload();
        });

    } catch (error) {
        console.error(error);
        alert('Não foi possível carregar as informações de segurança.');
    }
});
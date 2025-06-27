document.addEventListener('DOMContentLoaded', () => {
    const recoverForm = document.getElementById('recover-form');

    recoverForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const button = recoverForm.querySelector('button');

        if (email === '') {
            alert('Por favor, digite seu e-mail.');
            return;
        }

        button.disabled = true;
        button.innerText = 'Enviando...';

        try {
            const response = await fetch('http://localhost:3000/api/auth/forgot-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            });

            const result = await response.json();
            alert(result.message);
            button.innerText = 'Enviado!';
            
        } catch (error) {
            alert('Erro ao conectar com o servidor. Tente novamente.');
            button.disabled = false;
            button.innerText = 'Enviar Link';
        }
    });
});
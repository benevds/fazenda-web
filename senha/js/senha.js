const recoverForm = document.getElementById('recover-form');

recoverForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = recoverForm.email.value;

    if (email === '') {
        alert('Por favor, digite seu e-mail.');
        return;
    }

    alert(`Se um usuário com o e-mail "${email}" existir, um link de recuperação foi enviado.`);

    recoverForm.querySelector('button').disabled = true;
    recoverForm.querySelector('button').innerText = 'Enviado!';
});
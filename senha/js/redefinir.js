const resetForm = document.getElementById('reset-form');

resetForm.addEventListener('submit', (event) => {
    event.preventDefault(); 
    const newPassword = resetForm['new-password'].value;
    const confirmPassword = resetForm['confirm-password'].value;

    if (newPassword === '' || confirmPassword === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    if (newPassword !== confirmPassword) {
        alert('As senhas não coincidem. Tente novamente.');
        return;
    }
    
    alert('Senha redefinida com sucesso!');

    window.location.href = '../login/index.html';
});
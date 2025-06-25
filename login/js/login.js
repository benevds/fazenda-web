const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (event) => {
    // Impede o comportamento padrão do formulário (que é recarregar a página)
    event.preventDefault(); 

    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === '' || password === '') {
        alert('Por favor, preencha todos os campos.');
    } else {
        // Futuramente, aqui você adicionaria a lógica para verificar o login com um servidor
        alert(`Login simulado com sucesso!\nUsuário: ${username}`);
        
        window.location.href = "../app/bemvindo.html";
    }
});
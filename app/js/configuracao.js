const setupForm = document.getElementById('setup-form');

setupForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede que a página simplesmente recarregue

    // Pega os dados que você digitou no formulário
    const farmName = document.getElementById('farm-name').value;
    const farmArea = document.getElementById('farm-area').value;
    const cattleBreed = document.getElementById('cattle-breed').value;

    if (!farmName || !farmArea || !cattleBreed) {
        alert('Por favor, preencha todos os dados da fazenda.');
        return;
    }

    // Mostra um alerta de sucesso
    alert('Configuração salva com sucesso! Preparando seu Dashboard...');

    // E AQUI ACONTECE A MÁGICA:
    // Esta linha manda o navegador para a tela do Dashboard
    window.location.href = 'tela.html'; 
});
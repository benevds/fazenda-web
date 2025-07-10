document.addEventListener('DOMContentLoaded', () => {

    const modal = document.getElementById('add-forage-modal');
    const addForageBtn = document.getElementById('add-forage-btn');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const newForageForm = document.getElementById('new-forage-form');
    const forageCardsContainer = document.getElementById('forage-cards-container');

    // Funções para abrir e fechar o modal
    function openModal() {
        modal.style.display = 'flex';
    }

    function closeModal() {
        modal.style.display = 'none';
        newForageForm.reset();
    }

    // Eventos de Clique
    addForageBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal();
    });

    closeModalBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Evento de Cadastro da Nova Forragem
    newForageForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // 1. Pega os dados do formulário
        const name = document.getElementById('forage-name').value;
        const type = document.getElementById('forage-type').value;
        const protein = document.getElementById('forage-protein').value;

        // 2. SIMULAÇÃO: Mostra um alerta e adiciona na tela
        alert('Forragem cadastrada com sucesso! (Simulação)');
        
        // 3. Cria o HTML para o novo card
        const newCardHTML = `
            <div class="forage-card">
                <div class="forage-icon" style="background-color: #e6f7ff;"><i class="fas fa-seedling" style="color: #1890ff;"></i></div>
                <div class="forage-info">
                    <h3>${name}</h3>
                    <p>Tipo: ${type}</p>
                </div>
                <div class="forage-stats">
                    <span>${protein}% PB</span>
                    <span class="quality-high">Alta Qualidade</span>
                </div>
            </div>
        `;

        // 4. Adiciona o novo card ao container
        forageCardsContainer.insertAdjacentHTML('beforeend', newCardHTML);

        // 5. Fecha o modal
        closeModal();
    });
});
document.addEventListener('DOMContentLoaded', () => {

    const modal = document.getElementById('add-pasture-modal');
    const addPastureBtn = document.getElementById('add-pasture-btn');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const newPastureForm = document.getElementById('new-pasture-form');
    
    const myPasturesGrid = document.getElementById('my-pastures-grid');
    const partnerPasturesGrid = document.getElementById('partner-pastures-grid');

    // Campos do formulário
    const pastureTypeSelect = document.getElementById('pasture-type');
    const partnerFields = document.getElementById('partner-fields');

    // Funções para abrir e fechar o modal
    const openModal = () => modal.style.display = 'flex';
    const closeModal = () => {
        modal.style.display = 'none';
        newPastureForm.reset();
        partnerFields.style.display = 'none'; // Esconde os campos de parceiro
    };

    // Eventos de Clique
    addPastureBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal();
    });
    closeModalBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => (e.target === modal) && closeModal());

    // Mostra/esconde campos de parceiro dinamicamente
    pastureTypeSelect.addEventListener('change', () => {
        if (pastureTypeSelect.value === 'parceiro') {
            partnerFields.style.display = 'block';
        } else {
            partnerFields.style.display = 'none';
        }
    });

    // Evento de Cadastro da Nova Área
    newPastureForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // 1. Pega os dados do formulário
        const name = document.getElementById('pasture-name').value;
        const type = document.getElementById('pasture-type').value;
        const capacity = document.getElementById('pasture-capacity').value;

        alert(`Área "${name}" cadastrada com sucesso! (Simulação)`);
        
        // 2. Cria o HTML para o novo card
        let newCardHTML = '';
        if (type === 'proprio') {
            newCardHTML = `
                <div class="pasture-card">
                    <div class="pasture-card-header">
                        <h3>${name}</h3>
                        <span class="status status-engorda">Em Descanso</span>
                    </div>
                    <div class="pasture-card-body">
                        <p><i class="fas fa-cow"></i> <strong>Lote Atual:</strong> Vazio</p>
                        <p><i class="fas fa-ruler-horizontal"></i> <strong>Capacidade:</strong> 0 / ${capacity} cabeças</p>
                        <p><i class="far fa-calendar-alt"></i> <strong>Descansando há:</strong> 0 dias</p>
                    </div>
                </div>
            `;
            myPasturesGrid.insertAdjacentHTML('beforeend', newCardHTML);
        } else { // Se for de parceiro
            const partnerName = document.getElementById('partner-name').value;
            const partnerCost = document.getElementById('partner-cost').value;
            newCardHTML = `
                <div class="pasture-card partner">
                    <div class="pasture-card-header">
                        <h3>${name}</h3>
                        <span class="status status-engorda">Disponível</span>
                    </div>
                    <div class="pasture-card-body">
                        <p><i class="fas fa-cow"></i> <strong>Lote Atual:</strong> Vazio</p>
                        <p><i class="fas fa-handshake"></i> <strong>Parceiro:</strong> ${partnerName}</p>
                        <p><i class="fas fa-dollar-sign"></i> <strong>Custo:</strong> R$ ${partnerCost} / cabeça / mês</p>
                    </div>
                </div>
            `;
            partnerPasturesGrid.insertAdjacentHTML('beforeend', newCardHTML);
        }

        // 3. Fecha o modal
        closeModal();
    });
});
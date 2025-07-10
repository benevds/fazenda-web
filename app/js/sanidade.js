document.addEventListener('DOMContentLoaded', () => {

    const modal = document.getElementById('add-occurrence-modal');
    const addOccurrenceBtn = document.getElementById('add-occurrence-btn');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const newOccurrenceForm = document.getElementById('new-occurrence-form');
    const vaccineTableBody = document.getElementById('vaccine-table-body');

    // Funções para abrir e fechar o modal
    function openModal() {
        modal.style.display = 'flex';
    }

    function closeModal() {
        modal.style.display = 'none';
        newOccurrenceForm.reset();
    }

    // Eventos de Clique
    addOccurrenceBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal();
    });

    closeModalBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Evento de Registro da Nova Ocorrência
    newOccurrenceForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // 1. Pega os dados do formulário
        const animal = document.getElementById('occurrence-animal').value;
        const type = document.getElementById('occurrence-type').value;
        const description = document.getElementById('occurrence-description').value;
        const date = document.getElementById('occurrence-date').value;

        console.log('Nova ocorrência registrada:', { animal, type, description, date });
        
        // 2. SIMULAÇÃO: Mostra um alerta
        alert('Ocorrência registrada com sucesso! (Simulação)');
        
        // 3. Se for uma vacina, adiciona na tabela da tela
        if (type === 'Vacinação') {
            const formattedDate = new Date(date).toLocaleDateString('pt-BR', {timeZone: 'UTC'});
            const newRow = `
                <tr>
                    <td>${description}</td>
                    <td>${animal}</td>
                    <td>${formattedDate}</td>
                    <td><span class="status status-pronto">Agendado</span></td>
                </tr>
            `;
            vaccineTableBody.innerHTML += newRow;
        }

        // 4. Fecha o modal
        closeModal();
    });
});
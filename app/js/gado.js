document.addEventListener('DOMContentLoaded', () => {

    // --- Elementos do Modal ---
    const modal = document.getElementById('add-animal-modal');
    const addAnimalBtn = document.getElementById('add-animal-btn');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const newAnimalForm = document.getElementById('new-animal-form');
    const cattleTableBody = document.getElementById('cattle-table-body');

    // --- Funções para abrir e fechar o modal ---
    function openModal() {
        modal.style.display = 'flex';
    }

    function closeModal() {
        modal.style.display = 'none';
        newAnimalForm.reset(); // Limpa o formulário ao fechar
    }

    // --- Eventos de Clique ---
    addAnimalBtn.addEventListener('click', (event) => {
        event.preventDefault(); // Impede o link de navegar
        openModal();
    });

    closeModalBtn.addEventListener('click', closeModal);

    // Fecha o modal se clicar fora da caixa de conteúdo
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // --- Evento de Cadastro do Novo Animal ---
    newAnimalForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o formulário de recarregar a página

        // 1. Pega os dados dos campos do formulário
        const brinco = document.getElementById('animal-brinco').value;
        const raca = document.getElementById('animal-raca').value;
        const idade = document.getElementById('animal-idade').value;
        const peso = document.getElementById('animal-peso').value;
        const status = document.getElementById('animal-status').value;

        console.log('Dados do novo animal:', { brinco, raca, idade, peso, status });
        
        // 2. SIMULAÇÃO: Não vamos guardar no banco, como você pediu.
        // Apenas mostramos um alerta e adicionamos na tabela da tela.
        alert('Animal cadastrado com sucesso! (Isso é uma simulação)');
        
        // 3. Adiciona a nova linha na tabela
        const newRow = `
            <tr>
                <td>${brinco}</td>
                <td>${raca}</td>
                <td>${idade} meses</td>
                <td>${peso}</td>
                <td>${status}</td>
                <td class="action-buttons">
                    <a href="#" title="Editar"><i class="fas fa-edit"></i></a>
                    <a href="#" title="Histórico"><i class="fas fa-history"></i></a>
                    <a href="#" title="Excluir"><i class="fas fa-trash"></i></a>
                </td>
            </tr>
        `;
        cattleTableBody.innerHTML += newRow; // Adiciona a nova linha no final da tabela

        // 4. Fecha o modal
        closeModal();
    });
});
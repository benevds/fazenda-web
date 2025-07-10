document.addEventListener('DOMContentLoaded', () => {

    const modal = document.getElementById('add-sale-modal');
    const addSaleBtn = document.getElementById('add-sale-btn');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const newSaleForm = document.getElementById('new-sale-form');
    const salesGrid = document.getElementById('sales-grid');

    // Inputs do formulário para cálculo
    const saleWeightInput = document.getElementById('sale-weight');
    const salePriceInput = document.getElementById('sale-price');
    const saleTotalValue = document.getElementById('sale-total-value');

    // Funções para abrir e fechar o modal
    const openModal = () => modal.style.display = 'flex';
    const closeModal = () => {
        modal.style.display = 'none';
        newSaleForm.reset();
        saleTotalValue.textContent = 'R$ 0,00'; // Reseta o valor total
    };

    // Eventos de Clique
    addSaleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal();
    });
    closeModalBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => (e.target === modal) && closeModal());

    // Função para calcular o valor total da venda
    function calculateTotal() {
        const weight = parseFloat(saleWeightInput.value) || 0;
        const pricePerArroba = parseFloat(salePriceInput.value) || 0;
        
        if (weight > 0 && pricePerArroba > 0) {
            const arrobas = weight / 15; // 1 arroba = 15 kg
            const total = arrobas * pricePerArroba;
            
            // Formata para moeda brasileira
            saleTotalValue.textContent = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        } else {
            saleTotalValue.textContent = 'R$ 0,00';
        }
    }

    // Adiciona o cálculo em tempo real
    saleWeightInput.addEventListener('input', calculateTotal);
    salePriceInput.addEventListener('input', calculateTotal);

    // Evento de Registro da Nova Venda
    newSaleForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // 1. Pega os dados do formulário
        const lote = document.getElementById('sale-lote').value;
        const buyer = document.getElementById('sale-buyer').value;
        const totalValue = saleTotalValue.textContent; // Pega o valor já formatado

        // 2. SIMULAÇÃO: Mostra um alerta
        alert(`Venda para "${buyer}" registrada com sucesso! (Simulação)`);
        
        // 3. Cria o HTML para o novo card de venda
        const newCardHTML = `
            <div class="sale-card">
                <div class="sale-header">
                    <span class="sale-date">${new Date().toLocaleDateString('pt-BR')}</span>
                    <span class="sale-value">${totalValue}</span>
                </div>
                <div class="sale-body">
                    <h3>${lote}</h3>
                    <p>Comprador: ${buyer}</p>
                </div>
                <div class="sale-footer">
                    <span>-</span>
                    <span>-</span>
                </div>
            </div>
        `;

        // 4. Adiciona o novo card ao grid
        salesGrid.insertAdjacentHTML('beforeend', newCardHTML);

        // 5. Fecha o modal
        closeModal();
    });
});
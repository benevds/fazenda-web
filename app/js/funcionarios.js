document.addEventListener('DOMContentLoaded', () => {

    // --- Seletores dos Modais ---
    const addEmployeeModal = document.getElementById('add-employee-modal');
    const assignTaskModal = document.getElementById('assign-task-modal');

    // --- Botões Principais ---
    const addEmployeeBtn = document.getElementById('add-employee-btn');
    const closeEmployeeModalBtn = document.getElementById('close-employee-modal-btn');
    const closeTaskModalBtn = document.getElementById('close-task-modal-btn');

    // --- Formulários ---
    const newEmployeeForm = document.getElementById('new-employee-form');
    const newTaskForm = document.getElementById('new-task-form');
    
    // --- Containers ---
    const employeeGrid = document.getElementById('employee-grid');
    const assignTaskTitle = document.getElementById('assign-task-title');
    let currentEmployeeCard = null; // Guarda o card do funcionário para adicionar a tarefa

    // --- Funções de Controle dos Modais ---
    const openModal = (modal) => modal.style.display = 'flex';
    const closeModal = (modal) => modal.style.display = 'none';

    // --- Event Listeners ---

    // Abrir modal de adicionar funcionário
    addEmployeeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(addEmployeeModal);
    });

    // Fechar modais
    closeEmployeeModalBtn.addEventListener('click', () => closeModal(addEmployeeModal));
    closeTaskModalBtn.addEventListener('click', () => closeModal(assignTaskModal));

    // Abrir modal de atribuir tarefa
    employeeGrid.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-assign-task')) {
            const employeeName = e.target.dataset.employee;
            assignTaskTitle.innerText = `Atribuir Tarefa para ${employeeName}`;
            currentEmployeeCard = e.target.closest('.employee-card');
            openModal(assignTaskModal);
        }
    });

    // Cadastrar novo funcionário
    newEmployeeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('employee-name').value;
        const role = document.getElementById('employee-role').value;

        alert(`Funcionário "${name}" cadastrado com sucesso! (Simulação)`);

        const newEmployeeCardHTML = `
            <div class="employee-card">
                <div class="employee-header">
                    <img src="https://placehold.co/80x80/777/FFFFFF?text=${name.substring(0,2).toUpperCase()}" alt="Avatar ${name}">
                    <div class="employee-info">
                        <h3>${name}</h3>
                        <p>${role}</p>
                    </div>
                </div>
                <div class="employee-tasks">
                    <h4>Tarefas Atuais:</h4>
                    <ul>
                        <li><i class="fas fa-check-circle"></i> Nenhuma tarefa atribuída.</li>
                    </ul>
                </div>
                <button class="btn-assign-task" data-employee="${name}">Atribuir Nova Tarefa</button>
            </div>
        `;
        employeeGrid.insertAdjacentHTML('beforeend', newEmployeeCardHTML);
        newEmployeeForm.reset();
        closeModal(addEmployeeModal);
    });

    // Atribuir nova tarefa
    newTaskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const description = document.getElementById('task-description').value;
        
        alert(`Tarefa "${description}" atribuída com sucesso! (Simulação)`);

        if (currentEmployeeCard) {
            const taskList = currentEmployeeCard.querySelector('.employee-tasks ul');
            // Remove a mensagem "Nenhuma tarefa" se for a primeira
            if (taskList.innerText.includes('Nenhuma tarefa')) {
                taskList.innerHTML = '';
            }
            taskList.innerHTML += `<li><i class="fas fa-check-circle"></i> ${description}</li>`;
        }
        
        newTaskForm.reset();
        closeModal(assignTaskModal);
    });
});
document.addEventListener('DOMContentLoaded', () => {

    // --- Elementos do Perfil e Token de Autenticação ---
    const profileGreeting = document.getElementById('profile-greeting');
    const profileName = document.getElementById('profile-name');
    const profileEmail = document.getElementById('profile-email');
    const authToken = localStorage.getItem('authToken');

    // --- Função para buscar e mostrar os dados do usuário ---
    async function fetchAndDisplayUser() {
        // Se não tem o "crachá" (token), chuta o usuário para a tela de login
        if (!authToken) {
            window.location.href = '../login/index.html';
            return;
        }

        try {
            // Pede para a API as informações do dono do crachá
            const response = await fetch('http://localhost:3000/api/users/me', {
                headers: {
                    'Authorization': `Bearer ${authToken}`
                }
            });

            if (response.ok) {
                const user = await response.json();
                // Preenche o menu de perfil com os dados reais
                if (profileGreeting) profileGreeting.textContent = `Olá, ${user.name.split(' ')[0]}!`;
                if (profileName) profileName.textContent = user.name;
                if (profileEmail) profileEmail.textContent = user.email;
            } else {
                // Se o crachá for inválido (expirou, etc.), limpa e manda para o login
                localStorage.removeItem('authToken');
                window.location.href = '../login/index.html';
            }
        } catch (error) {
            console.error('Erro ao buscar dados do usuário:', error);
        }
    }

    // Chama a função para buscar os dados assim que a página carrega
    fetchAndDisplayUser();


    // --- Lógica para arrastar os cards de lotes ---
    const slider = document.getElementById('featured-lots');
    if (slider) {
        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.classList.add('active');
            slider.style.cursor = 'grabbing';
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });
        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('active');
            slider.style.cursor = 'grab';
        });
        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('active');
            slider.style.cursor = 'grab';
        });
        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2;
            slider.scrollLeft = scrollLeft - walk;
        });
    }

    // --- Lógica para o Menu de Perfil ---
    const profileBtn = document.getElementById('user-profile-btn');
    const dropdown = document.getElementById('profile-dropdown');
    const logoutBtn = document.getElementById('logout-btn');

    if (profileBtn && dropdown) {
        profileBtn.addEventListener('click', (event) => {
            event.stopPropagation();
            dropdown.classList.toggle('show');
        });
    }
    
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (event) => {
            event.preventDefault();
            localStorage.clear(); // Limpa todos os dados guardados
            alert('Você saiu do sistema.');
            window.location.href = '../login/index.html';
        });
    }

    // Fecha o menu se clicar em qualquer lugar fora dele
    window.addEventListener('click', (e) => {
        if (dropdown && !profileBtn.contains(e.target) && !dropdown.contains(e.target)) {
            dropdown.classList.remove('show');
        }
    });
});
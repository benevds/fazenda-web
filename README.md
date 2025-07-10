Smartfarm – Gestão Inteligente de Gado de Corte
📖 Sobre o Projeto
Smartfarm é uma aplicação web completa para a gestão de fazendas de gado de corte. O sistema foi desenvolvido para fornecer controle total sobre o rebanho, otimização de tempo e espaço, e toda a logística necessária para uma produção de carne bovina eficiente e lucrativa, transformando dados em decisões estratégicas.

Este projeto é um monorepo composto por duas partes principais e independentes:

fazenda-web (Frontend): A interface do usuário, construída com HTML, CSS e JavaScript puros, onde o gestor interage com o sistema de forma visual e intuitiva.

fazenda-api (Backend): O cérebro do sistema, uma API RESTful robusta construída com Node.js e Express, responsável por toda a lógica de negócio, segurança e comunicação com o banco de dados.

✨ Funcionalidades Implementadas e Funcionando
O sistema possui uma base sólida e segura, com um fluxo de usuário completo, desde o cadastro até a interação com o dashboard principal e módulos de gestão.

Segurança e Autenticação (Backend)
✅ Fluxo de Autenticação Completo: Cadastro, Login, Recuperação de Senha e Autenticação de Dois Fatores (2FA) estão 100% funcionais.

🔐 Criptografia de Senhas: Utilização de bcrypt para gerar hashes seguros das senhas, garantindo que nunca sejam armazenadas em texto puro.

🔑 Autenticação por Token (JWT): Após o login, a API gera um JSON Web Token que é usado para proteger e autenticar o acesso às áreas restritas do sistema.

🛡️ Autenticação de Dois Fatores (2FA): Implementação completa do fluxo de 2FA com speakeasy e qrcode, permitindo que o usuário ative uma camada extra de segurança usando um app autenticador (como Google Authenticator).

📧 Envio de E-mail Real: O fluxo de "Esqueci minha senha" envia um e-mail de verdade para o usuário com um link de redefinição de token, utilizando Nodemailer (configurado para serviços como Gmail ou Mailtrap).

🔎 Logs e Auditoria: O sistema registra todas as tentativas de login (bem-sucedidas ou não) e ações críticas (cadastro, login 2FA) em tabelas de LoginAttempt e AuditLog para total rastreabilidade.

📈 Prevenção de Ataques: A rota de login é protegida com express-rate-limit para bloquear tentativas de força bruta.

✔️ Validação de Dados: Uso da biblioteca Zod para validar todos os dados que chegam na API, garantindo a integridade das informações.

Interface e Experiência do Usuário (Frontend)
🖥️ Telas de Autenticação e Gestão: Todas as telas, desde o login até os módulos de gestão, possuem um design consistente e responsivo.

🚀 Fluxo de Onboarding e Navegação Completa: O usuário é guiado desde o login, passando por telas de boas-vindas e configuração inicial, até chegar a um dashboard totalmente navegável.

👤 Dashboard Dinâmico e Personalizado:

O nome do usuário logado é buscado na API e exibido no cabeçalho.

Possui um menu de perfil interativo com informações do usuário e um botão de "Sair" funcional que limpa a sessão.

Apresenta uma seção de "Lotes em Destaque" com cards interativos e arrastáveis com o mouse.

📄 Módulos de Gestão Prontos (UI/UX): As telas de Gado de Corte, Tempo e Espaço, Pasto e Alimento, Sanidade, Funcionários e Vendas foram criadas com um layout de alto nível, utilizando cards e modais interativos para uma experiência de usuário moderna e intuitiva.

🛠️ Pilha de Tecnologias (Tech Stack)
Frontend (fazenda-web)
HTML5

CSS3 (Estilização pura)

JavaScript (ES6+)

Font Awesome (Ícones)

Backend (fazenda-api)
Node.js e Express.js

Prisma (ORM) e SQLite (Banco de Dados)

Segurança: bcrypt, jsonwebtoken, zod, express-rate-limit, speakeasy, qrcode

Envio de E-mail: nodemailer

Desenvolvimento: nodemon, dotenv

📁 Estrutura do Projeto
.
├── 📂 fazenda-api/
│   ├── 📂 prisma/
│   │   ├── schema.prisma
│   │   └── dev.db
│   ├── 📂 src/
│   │   ├── 📂 controllers/
│   │   │   ├── auth.controller.js
│   │   │   └── 2fa.controller.js
│   │   ├── 📂 middleware/
│   │   │   └── auth.middleware.js
│   │   ├── 📂 routes/
│   │   │   ├── auth.routes.js
│   │   │   └── 2fa.routes.js
│   │   ├── 📂 services/
│   │   │   └── email.service.js
│   │   └── server.js
│   ├── .env
│   └── package.json
│
└── 📂 fazenda-web/
    ├── 📂 app/
    │   ├── index.html (Dashboard)
    │   ├── gado.html
    │   ├── espaco.html
    │   ├── alimento.html
    │   ├── sanidade.html
    │   ├── funcionarios.html
    │   ├── vendas.html
    │   ├── seguranca.html
    │   ├── 📂 css/
    │   └── 📂 js/
    ├── 📂 login/
    │   ├── index.html
    │   ├── register.html
    │   ├── 2fa-verify.html
    │   ├── 📂 css/
    │   └── 📂 js/
    └── 📂 senha/
        ├── index.html
        ├── redefinir.html
        ├── 📂 css/
        └── 📂 js/

🚀 Como Executar o Projeto Localmente
Pré-requisitos
Node.js: Versão 18 ou superior.

Um App Autenticador no seu celular (Ex: Google Authenticator).

1. Configurando e Rodando o Backend (fazenda-api)
Abra um terminal e siga os passos:

# 1. Navegue até a pasta da API
cd fazenda-api/backend

# 2. Instale todas as dependências
npm install

# 3. Crie e aplique o schema no banco de dados
npx prisma migrate dev --name init

# 4. Inicie o servidor da API
npm start

A API estará rodando em http://localhost:3000. Deixe este terminal aberto.

2. Executando o Frontend (fazenda-web)
Recomendação: Use a extensão "Live Server" do Visual Studio Code.

Clique com o botão direito no arquivo fazenda-web/login/index.html e selecione "Open with Live Server".

🔮 Próximos Passos
Conectar os formulários dos módulos de gestão (Gado, Pasto, etc.) com rotas CRUD na API.

Implementar a lógica para buscar e exibir os dados reais do banco de dados nas tabelas e cards do frontend.

Proteger as rotas da API com o middleware de autenticação JWT já criado.
FazendaWeb – Gestão Inteligente do Boi de Corte
📖 Sobre o Projeto
FazendaWeb é uma aplicação web completa para a gestão de fazendas de gado de corte. O sistema foi desenvolvido para fornecer controle total sobre o rebanho, otimização de tempo e espaço, e toda a logística necessária para uma produção de carne bovina eficiente e lucrativa.

Este projeto é um monorepo composto por duas partes principais:

fazenda-web (Frontend): A interface do usuário, construída com HTML, CSS e JavaScript puro, onde o gestor interage com o sistema.

fazenda-api (Backend): O cérebro do sistema, uma API RESTful robusta construída com Node.js e Express, responsável por toda a lógica de negócio, segurança e comunicação com o banco de dados.

✨ Funcionalidades Implementadas
Atualmente, o foco do sistema está na fundação de segurança e na estrutura inicial do aplicativo.

Autenticação e Segurança
✅ Cadastro de Usuários: Permite que novos gestores criem suas contas de forma segura.

✅ Login de Usuários: Autenticação segura utilizando senhas criptografadas.

✅ Fluxo de Recuperação de Senha: Telas prontas para a lógica de "Esqueci minha senha".

🔐 Criptografia de Senhas: As senhas são processadas com bcrypt antes de serem salvas, garantindo que nunca sejam armazenadas em texto puro.

🛡️ Validação de Dados: Utilização da biblioteca Zod no backend para garantir que os dados recebidos (ex: e-mail, senha) estejam no formato correto antes de serem processados.

📈 Monitoramento de Tentativas de Login: A API bloqueia o excesso de tentativas de login de um mesmo IP para prevenir ataques de força bruta, usando express-rate-limit.

🔎 Logs de Auditoria: O sistema registra eventos importantes, como cadastros e logins bem-sucedidos, para futuras auditorias de segurança.

🔑 Autenticação baseada em Token (JWT): Após o login, o usuário recebe um JSON Web Token para autenticar suas requisições nas partes seguras do sistema.

Interface do Usuário (Frontend)
🖥️ Telas de Autenticação: Telas de Login, Cadastro e Recuperação de Senha com um design limpo e temático.

🚀 Fluxo de Onboarding: Um guia de boas-vindas e configuração inicial para novos usuários, melhorando a experiência inicial.

📊 Dashboard Principal: Uma tela de dashboard organizada que serve como hub central do aplicativo, pronta para receber os módulos de gestão.

🛠️ Pilha de Tecnologias (Tech Stack)
Frontend (fazenda-web)
HTML5

CSS3 (Estilização pura)

JavaScript (ES6+)

Font Awesome (Para ícones)

Backend (fazenda-api)
Node.js: Ambiente de execução JavaScript no servidor.

Express.js: Framework para a construção da API.

Prisma: ORM moderno para a comunicação com o banco de dados.

SQLite: Banco de dados relacional baseado em arquivo, para desenvolvimento local.

Bibliotecas de Segurança:

bcrypt: Criptografia de senhas.

jsonwebtoken: Geração de tokens de acesso.

zod: Validação de esquemas.

express-rate-limit: Prevenção de ataques de força bruta.

cors: Habilita a comunicação segura entre frontend e backend.

dotenv: Gerenciamento de variáveis de ambiente.

Nodemon: Ferramenta para reiniciar o servidor automaticamente durante o desenvolvimento.

📁 Estrutura do Projeto
.
├── 📂 fazenda-api/         # O Backend (API)
│   ├── 📂 prisma/
│   │   ├── schema.prisma   # Modelo do banco de dados
│   │   └── dev.db          # Arquivo do banco de dados SQLite
│   ├── 📂 src/
│   │   ├── 📂 controllers/
│   │   │   └── auth.controller.js
│   │   ├── 📂 routes/
│   │   │   └── auth.routes.js
│   │   └── server.js       # Ponto de entrada da API
│   ├── .env                # Variáveis de ambiente
│   └── package.json
│
└── 📂 fazenda-web/         # O Frontend (Interface)
    ├── 📂 app/             # Telas internas do sistema
    │   ├── bem-vindo.html
    │   ├── configuracao-inicial.html
    │   ├── index.html      # Dashboard
    │   ├── 📂 css/
    │   └── 📂 js/
    ├── 📂 login/           # Telas de login e cadastro
    │   ├── index.html
    │   ├── register.html
    │   ├── 📂 css/
    │   └── 📂 js/
    └── 📂 senha/           # Telas de recuperação de senha
        ├── index.html
        ├── redefinir.html
        ├── 📂 css/
        └── 📂 js/

🚀 Como Executar o Projeto Localmente
Pré-requisitos
Node.js: Versão 18 ou superior.

NPM: Instalado junto com o Node.js.

1. Configurando e Rodando o Backend (fazenda-api)
Abra um terminal e siga os passos:

# 1. Navegue até a pasta da API
cd fazenda-api

# 2. Instale todas as dependências do projeto
npm install

# 3. Crie o banco de dados SQLite com base no schema
# (Este comando só precisa ser rodado uma vez)
npx prisma migrate dev --name init

# 4. Inicie o servidor da API
npm start

Após esses passos, a API estará rodando em http://localhost:3000. Deixe este terminal aberto.

2. Executando o Frontend (fazenda-web)
O frontend não precisa de instalação. Basta abrir os arquivos HTML no navegador.

Abra o arquivo fazenda-web/login/index.html no seu navegador de preferênci a.

Recomendação: Use a extensão "Live Server" do Visual Studio Code. Clique com o botão direito no arquivo index.html e selecione "Open with Live Server" para ter a melhor experiência.

🔮 Próximos Passos
Implementar a lógica completa do fluxo de "Esqueci minha senha".

Desenvolver o CRUD (Criar, Ler, Atualizar, Deletar) para a entidade Gado de Corte.

Criar as telas correspondentes no frontend para gerenciar o rebanho.

Proteger as rotas da API com o middleware de autenticação JWT.
# FazendaWeb – Gestão Inteligente do Boi de Corte

## 📖 Sobre o Projeto
FazendaWeb é uma aplicação web completa para a gestão de fazendas de gado de corte. O sistema foi desenvolvido para fornecer controle total sobre o rebanho, otimização de tempo e espaço, e toda a logística necessária para uma produção de carne bovina eficiente e lucrativa.

Este projeto é um monorepo composto por duas partes principais:

- **fazenda-web (Frontend)**: A interface do usuário, construída com HTML, CSS e JavaScript puro, onde o gestor interage com o sistema.
- **fazenda-api (Backend)**: O cérebro do sistema, uma API RESTful robusta construída com Node.js e Express, responsável por toda a lógica de negócio, segurança e comunicação com o banco de dados.

## ✨ Funcionalidades Implementadas

### Autenticação e Segurança
- ✅ Cadastro de Usuários
- ✅ Login de Usuários
- ✅ Fluxo de Recuperação de Senha
- 🔐 Criptografia de Senhas (bcrypt)
- 🛡️ Validação de Dados (Zod)
- 📈 Monitoramento de Tentativas de Login (express-rate-limit)
- 🔎 Logs de Auditoria
- 🔑 Autenticação baseada em Token (JWT)

### Interface do Usuário (Frontend)
- 🖥️ Telas de Autenticação
- 🚀 Fluxo de Onboarding
- 📊 Dashboard Principal

## 🛠️ Pilha de Tecnologias

### Frontend (fazenda-web)
- HTML5, CSS3, JavaScript (ES6+)
- Font Awesome

### Backend (fazenda-api)
- Node.js, Express.js, Prisma, SQLite
- Bibliotecas: bcrypt, jsonwebtoken, zod, express-rate-limit, cors, dotenv, nodemon

## 📁 Estrutura do Projeto

```
.
├── 📂 fazenda-api/
│   ├── 📂 prisma/
│   │   ├── schema.prisma
│   │   └── dev.db
│   ├── 📂 src/
│   │   ├── 📂 controllers/
│   │   │   └── auth.controller.js
│   │   ├── 📂 routes/
│   │   │   └── auth.routes.js
│   │   └── server.js
│   ├── .env
│   └── package.json
└── 📂 fazenda-web/
    ├── 📂 app/
    │   ├── bem-vindo.html
    │   ├── configuracao-inicial.html
    │   ├── index.html
    │   ├── 📂 css/
    │   └── 📂 js/
    ├── 📂 login/
    │   ├── index.html
    │   ├── register.html
    │   ├── 📂 css/
    │   └── 📂 js/
    └── 📂 senha/
        ├── index.html
        ├── redefinir.html
        ├── 📂 css/
        └── 📂 js/
```

## 🚀 Como Executar o Projeto Localmente

### Pré-requisitos
- Node.js: Versão 18 ou superior
- NPM: Instalado junto com o Node.js

### 1. Backend (fazenda-api)
```bash
cd fazenda-api/backend
npm install
npx prisma migrate dev --name init
npm start
```
A API estará rodando em `http://localhost:3000`.

### 2. Frontend (fazenda-web)
Abra o arquivo `fazenda-web/login/index.html` no navegador.

Recomendado: use o Live Server do VS Code.

## 🔮 Próximos Passos
- Desenvolver o CRUD para Gado de Corte
- Criar telas para gerenciamento do rebanho
- Proteger rotas da API com JWT
- Implementar demais funcionalidades de gestão
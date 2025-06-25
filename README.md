# Germinah

Sistema inteligente de irrigação automatizada com foco em sustentabilidade, acessibilidade e impacto social.

O projeto foi desenvolvido inicialmente como um protótipo para a FETEPS 2025 (Feira Tecnológica Paula Souza), mas tem potencial de ser implementado em hortas escolares, projetos sociais e sistemas de cultivo urbano.

## Tecnologias utilizadas

- ⚛️ **React** – Interface web responsiva e instalável (PWA)
- 🔥 **Firebase Realtime Database** – Armazenamento e comunicação em tempo real
- 📡 **ESP32 (futuramente)** – Controle físico da bomba d'água e leitura de sensores ambientais
- 🌐 **PWA (Progressive Web App)** – Para instalação como app em celulares e desktops

## Funcionalidades previstas

- [x] Interface simples e responsiva
- [x] Comunicação com Firebase em tempo real
- [ ] Controle da bomba remotamente
- [ ] Leitura de sensores (umidade, temperatura, etc.)
- [ ] Histórico de irrigação
- [ ] Acesso offline via PWA
- [ ] Autenticação de usuários (admin/usuário comum)
- [ ] Painel de monitoramento visual (gráficos, alertas)

## Como rodar localmente

1. Clone o repositório:
```bash
git clone https://github.com/jairrogerr/Germinah.git
cd Germinah
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o app:
```bash
npm start
```
O app será servido em http://localhost:3000

Para testar o PWA corretamente:
```bash
npm run build
npx serve -s build
```

## 🔧 Configuração do Firebase

Para executar este projeto com seu próprio Firebase, siga os passos abaixo:

### 1. Crie um projeto no Firebase
Acesse: https://console.firebase.google.com/

Clique em "Adicionar Projeto" e siga as instruções

Dê um nome ao projeto (ex: Hortinteligente) e finalize a criação

### 2. Ative o Firestore (Banco de Dados)
No painel do Firebase, vá até Firestore Database

Clique em Criar banco de dados

Selecione o modo de segurança (modo de teste para desenvolvimento)

Escolha a região e finalize

### 3. Registre seu aplicativo Web
Vá em Configurações do projeto (ícone de engrenagem) > Geral

Role até a seção Seus apps

Clique no ícone </> para adicionar um app Web

Dê um nome (ex: hortinteligente-web) e clique em Registrar app

Copie as configurações fornecidas (o firebaseConfig)

### 4. Configure seu arquivo .env
Crie um arquivo .env na raiz do projeto com as seguintes variáveis:

```bash
VITE_API_KEY=SUA_API_KEY
VITE_AUTH_DOMAIN=SEU_AUTH_DOMAIN
VITE_PROJECT_ID=SEU_PROJECT_ID
VITE_STORAGE_BUCKET=SEU_STORAGE_BUCKET
VITE_MESSAGING_SENDER_ID=SEU_MESSAGING_SENDER_ID
VITE_APP_ID=SEU_APP_ID
```
⚠️ O prefixo VITE_ é obrigatório se você estiver usando Vite como bundler (o que é comum em projetos com React modernos).

Porém, caso seu projeto esteja dando erro, talvez o Vite não esteja instalado, e se não conseguir instalar, tente a alternativa 2:

```bash
REACT_APP_FIREBASE_API_KEY=
REACT_APP_FIREBASE_AUTH_DOMAIN=
REACT_APP_FIREBASE_DATABASE_URL=
REACT_APP_FIREBASE_PROJECT_ID=
REACT_APP_FIREBASE_STORAGE_BUCKET=
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=
REACT_APP_FIREBASE_APP_ID=
```

### 5. Use as variáveis no firebaseConfig.js
No seu código, importe as variáveis do .env assim:

```bash
// No arquivo firebaseConfig.js

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID
};

const app = initializeApp(firebaseConfig);
export default app;
```

Caso você esteja utilizando a alternativa 2, apenas substitua o código:

```bash
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};
```

### 6. Adicione o .env ao .gitignore
No arquivo .gitignore, certifique-se de incluir:

```bash
.env
```

Isso evita que suas credenciais sejam expostas publicamente no repositório.

## Sobre o nome
Germinah vem da ideia de germinar consciência sustentável através da tecnologia. A proposta é criar uma ponte entre inovação e meio ambiente, de forma acessível e replicável.

## Licença
Em definição. Por enquanto, uso educacional.

## Autor
Desenvolvido por Jair Roger, estudante técnico em Administração, desenvolvedor autodidata e empreendedor.
Contato: @jairrogerr em todas as redes sociais.

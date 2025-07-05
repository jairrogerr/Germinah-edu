# 🔧 Configurando o Firebase – Germinah Edu

Este guia irá te mostrar como configurar um projeto gratuito no [Firebase](https://firebase.google.com/) para que o aplicativo [Germinah Edu](https://germinah-edu.vercel.app/) funcione corretamente com controle remoto da bomba de irrigação.

## ✅ O que você vai precisar

- Uma conta Google
- Acesso à internet
- Um navegador moderno
- Editor de código (como VS Code)

## 🧪 Etapa 1: Criar o projeto no Firebase

1. Acesse: [https://console.firebase.google.com](https://console.firebase.google.com)
2. Clique em **“Adicionar projeto”**
3. Dê um nome, como `GerminahEdu`
4. Desative a opção “Google Analytics” (opcional)
5. Clique em **“Criar”**

## 📱 Etapa 2: Registrar o app web

1. Após criar o projeto, clique no ícone `</>` para **adicionar um app web**
2. Dê um nome, como `germinah-app`
3. Marque a opção **“Configurar Firebase Hosting”** como *desmarcada*
4. Clique em **Registrar app**
5. Copie o **código de configuração** que o Firebase gerar (será usado no próximo passo)

## 📦 Etapa 3: Ativar o Realtime Database

1. No menu lateral, clique em **“Realtime Database”**
2. Clique em **“Criar banco de dados”**
3. Selecione a região (pode deixar a padrão)
4. Escolha o modo: **Iniciar em modo de teste** *(importante!)*
5. Clique em “Ativar”

> ⚠️ Atenção: o modo de teste permite leitura/escrita por 30 dias. Depois disso, será necessário ajustar as regras manualmente.

## 🧠 Etapa 4: Estrutura dos dados esperada no banco

O aplicativo espera os seguintes campos no banco de dados:

```json
{
  "sensor": {
    "temperatura": 0,
    "umidade": 0,
    "bomba": "desligada"
  }
}
````

Você pode criar isso manualmente em:

* Firebase Console → Realtime Database → clique em “+” para adicionar esses campos

## 🧩 Etapa 5: Colar as credenciais no projeto

1. No Firebase Console, vá em **Configurações do Projeto (ícone de engrenagem no menu lateral)**
2. Vá até **“Suas apps” > `germinah-app`**
3. Copie o trecho de configuração que será assim:

```js
const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_DOMINIO.firebaseapp.com",
  databaseURL: "https://SEU_DOMINIO.firebaseio.com",
  projectId: "SEU_PROJECT_ID",
  storageBucket: "SEU_BUCKET.appspot.com",
  messagingSenderId: "ID",
  appId: "APP_ID"
};
```

4. No seu código React, abra o arquivo:

```bash
Website/src/firebase.js
```

5. Substitua as chaves falsas pelas suas:

```js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_DOMINIO.firebaseapp.com",
  databaseURL: "https://SEU_DOMINIO.firebaseio.com",
  projectId: "SEU_PROJECT_ID",
  storageBucket: "SEU_BUCKET.appspot.com",
  messagingSenderId: "ID",
  appId: "APP_ID"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
```

## 🚀 Etapa 6: Testar o app

1. Rode o app localmente:

```bash
cd Website/
npm install
npm start
```

2. Acesse: `http://localhost:3000/dashboard`
3. Clique no botão para testar a interação com a bomba.

Se o protótipo estiver ligado e configurado com o mesmo banco, a bomba será ativada!

## 🧩 Etapa (opcional): Resetar o status da bomba

Você pode criar um botão extra ou usar o console do Firebase para mudar:

```json
"bomba": "ligada" → "desligada"
```

## 🔐 Importante sobre segurança

Esse projeto é apenas para **fins educacionais**. **Nunca use essas configurações em produção** sem autenticação e regras de segurança específicas.

## 📮 Dúvidas?

Abra uma issue no repositório ou entre em contato com a equipe Germinah:

* Site: [germinah-edu.vercel.app](https://germinah-edu.vercel.app)
* Instagram: [@germinah\_oficial](https://instagram.com/germinah_oficial)

> “Tecnologia acessível para um futuro sustentável.” 🌿
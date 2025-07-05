# 🌱 Germinah Edu

**Germinah Edu** é uma iniciativa educacional do projeto [Germinah](https://germinah.vercel.app/) que disponibiliza gratuitamente os arquivos da **versão 1** do sistema: um sistema de irrigação vertical automatizado com Arduino e um app básico em React conectado ao Firebase.  

Este repositório foi criado para que **escolas, ONGs, estudantes e entusiastas** possam aprender, replicar e evoluir o sistema em seus próprios projetos, feiras de ciências, clubes de tecnologia ou espaços de inovação.

## 📁 Estrutura do Repositório

```bash
Germinah-Edu/
├── Arduino/               # Código embarcado para o sistema de irrigação
│   └── germinah_edu.ino
│
├── Website/               # Interface em React com integração ao Firebase
│   └── public/
│   └── src/
│       └── pages/         # As páginas que você verá na sua tela
│       └── App.js
│       └── firebase.js
│
├── docs/                  # Documentação técnica, guias, diagramas e configuração
│   └── firebase-config.md
│   └── guia-montagem.pdf
│   └── estrutura-vertical.png
│   └── perguntas-frequentes.md
│
├── README.md              # Este arquivo
├── LICENSE                # Licença de uso (CC BY-NC 4.0)
└── .gitignore
````

## 🧠 O que é o Germinah v1?

A **versão 1** do Germinah consiste em:

* Sistema de irrigação vertical com garrafas PET
* Sensor de umidade conectado a um Arduino
* Bomba d’água acionada automaticamente com base na umidade do solo
* Aplicativo web simples (React + Firebase) para controlar a bomba e monitorar o status remotamente

## 🚀 Como usar

### 1. Montar o sistema físico (Arduino)

* Abra a pasta `Arduino/`
* Siga o esquema de ligação elétrica
* Faça upload do código `germinah_edu.ino` para seu Arduino
* Detalhes na documentação em `docs/guia-montagem.pdf`

### 2. Configurar o Firebase

* Siga o guia `docs/firebase-config.md` para criar um projeto gratuito no Firebase
* Substitua as credenciais no arquivo `Website/src/firebase.js`

### 3. Rodar o app web localmente

```bash
cd Website/
npm install
npm run dev
```

## 📚 Para quem é este projeto?

* Escolas técnicas ou regulares
* ONGs com foco em tecnologia ou meio ambiente
* Professores de robótica e informática
* Estudantes de ensino médio ou superior
* Qualquer pessoa que queira aprender sobre Arduino, sensores, automação e web

## 📜 Licença

Este projeto é distribuído sob a licença **CC BY-NC 4.0**.
Você pode usar, modificar e distribuir **livremente para fins educacionais**.
**Não é permitido uso comercial sem autorização dos autores.**

## ❤️ Apoie o Germinah

Se você usou esse projeto na sua escola ou comunidade, mande uma mensagem pra gente!
Estamos construindo uma rede de impacto com base na educação e tecnologia acessível.

* 🌐 Site oficial: [germinah-edu.vercel.app](https://germinah-edu.vercel.app)
* 📧 Email: [germinah@exemplo.com](mailto:germinah@exemplo.com)
* 📸 Instagram: [@germinah\_oficial](https://instagram.com/germinah_oficial)

> “Enquanto houver água e terra, há um futuro a ser cultivado.” 🌿
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

## Sobre o nome
Germinah vem da ideia de germinar consciência sustentável através da tecnologia. A proposta é criar uma ponte entre inovação e meio ambiente, de forma acessível e replicável.

## Licença
Em definição. Por enquanto, uso educacional.

## Autor
Desenvolvido por Jair Roger, estudante técnico em Administração, desenvolvedor autodidata e empreendedor.
Contato: @jairrogerr em todas as redes sociais.
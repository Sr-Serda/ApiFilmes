
---




# NoirFlix - Back-End 🎬

Este é o back-end do projeto **NoirFlix**, uma API para gerenciamento de filmes, categorias e fornecimento de dados consumidos pelo front-end.

## 🛠️ Tecnologias Utilizadas
- **Node.js** e **Express** para a criação da API;
- **Estrutura MVC** Para facilitar a troca de informações entre a interface do usuário aos dados no banco, fazendo com que as respostas sejam mais rápidas e dinâmicas
- **MongoDB** para o banco de dados (gerenciado com **Mongoose**);
- **Vercel** para deploy do back-end;
- **Dotenv** para o gerenciamento seguro de variáveis de ambiente.

## 🚀 Funcionalidades Principais
- Endpoints para gerenciar filmes e categorias;
- Integração com banco de dados MongoDB para armazenamento dos dados;
- Suporte a operações CRUD (Create, Read, Update, Delete).

## 📦 Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seuusuario/noirflix-backend.git

2. Instale as Dependências:
   ```bash
   npm install
3. Crie um arquivo .env com a sua string de conexão do MongoDB:
   ```bash
   DB_CONNECTION_STRING=mongodb+srv://<usuário>:<senha>@cluster.mongodb.net/<database>?retryWrites=true&w=majority
4. Execute o Servidor
   ```bash
   npm start

## 🌐 Deploy
  O back-end está disponível online na Vercel:
  https://api-filmes-ofc.vercel.app/

## 🔗 Links Úteis
Repositório do Front-End: https://github.com/Sr-Serda/NoirFlix

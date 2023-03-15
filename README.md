# Blogs API

API desenvolvida em Node.js com Express para gerenciamento de blogs.

## Funcionalidades

- Cadastro de usuários
- Login de usuários
- Criação, edição e exclusão de posts
- Criação, edição e exclusão de categorias
- Visualização de todos os posts e de um post específico
- Visualização de todos as categorias e de uma categoria específica

## Tecnologias utilizadas

- Node.js
- Express
- mySQL
- Sequelize
- JWT
- JavaScript

## Como executar

1. Clone o repositório: `git clone https://github.com/marcelloSantoroDev/blogs-api.git`
2. Instale as dependências: `npm install`

## Rotas

### Usuários

| Método | Rota | Parâmetros | Descrição |
|--------|------|------------|-----------|
| POST | /users | name, email, password | Cadastra um novo usuário |
| POST | /login | email, password | Faz login na API e retorna um token JWT |

### Posts

| Método | Rota | Parâmetros | Descrição |
|--------|------|------------|-----------|
| GET | /posts | - | Retorna todos os posts |
| GET | /posts/:id | - | Retorna o post com o ID especificado |
| POST | /posts | title, content, category | Cria um novo post |
| PUT | /posts/:id | title, content, category | Edita o post com o ID especificado |
| DELETE | /posts/:id | - | Deleta o post com o ID especificado |

### Categorias

| Método | Rota | Parâmetros | Descrição |
|--------|------|------------|-----------|
| GET | /categories | - | Retorna todas as categorias |
| GET | /categories/:id | - | Retorna a categoria com o ID especificado |
| POST | /categories | name | Cria uma nova categoria |
| PUT | /categories/:id | name | Edita a categoria com o ID especificado |
| DELETE | /categories/:id | - | Deleta a categoria com o ID especificado |

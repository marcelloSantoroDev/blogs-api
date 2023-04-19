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

# Blogs API

API developed in Node.js with Express for blog management.

## Features

- User registration
- User login
- Creation, editing, and deletion of posts
- Creation, editing, and deletion of categories
- Retrieval of all posts and a specific post
- Retrieval of all categories and a specific category

## Technologies Used

- Node.js
- Express
- mySQL
- Sequelize
- JWT
- JavaScript

## How to Run

1. Clone the repository: `git clone https://github.com/marcelloSantoroDev/blogs-api.git`
2. Install dependencies: `npm install`

## Routes

### Users

| Method | Route | Parameters | Description |
|--------|-------|------------|-------------|
| POST   | /users | name, email, password | Registers a new user |
| POST   | /login | email, password | Logs a user in to the API and returns a JWT token |

### Posts

| Method | Route | Parameters | Description |
|--------|-------|------------|-------------|
| GET    | /posts | - | Returns all posts |
| GET    | /posts/:id | - | Returns the post with the specified ID |
| POST   | /posts | title, content, category | Creates a new post |
| PUT    | /posts/:id | title, content, category | Edits the post with the specified ID |
| DELETE | /posts/:id | - | Deletes the post with the specified ID |

### Categories

| Method | Route | Parameters | Description |
|--------|-------|------------|-------------|
| GET    | /categories | - | Returns all categories |
| GET    | /categories/:id | - | Returns the category with the specified ID |
| POST   | /categories | name | Creates a new category |
| PUT    | /categories/:id | name | Edits the category with the specified ID |
| DELETE | /categories/:id | - | Deletes the category with the specified ID |


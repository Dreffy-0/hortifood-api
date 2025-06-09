# Sistema de Gerenciamento de Entregas

Este projeto é um back-end desenvolvido com NestJS e TypeORM para gerenciar clientes, fornecedores, produtos, pedidos, entregadores, avaliações e entregas.

## 📋 Integrantes

- Frederico Augusto Ferreira Araújo Ferraz – UC23100834  
- Gabriel Viana de Carvalho - UC23100545
- Jeann Felipe Moreira Leite – UC23101904

---

## 🚀 Instruções para execução

### 1. Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18 ou superior recomendada)  
- [Yarn](https://yarnpkg.com/) ou [npm](https://www.npmjs.com/)  
- Banco de dados SQLite (utilizado automaticamente)

---

### 2. Instalar dependências

```bash
yarn install
# ou
npm install
```

---

### 3. Executar o projeto

```bash
yarn start:dev
# ou
npm run start:dev
```

---

### 4. Testar requisições

Utilize o arquivo `requisicoes.http` na raiz do projeto para testar os endpoints com o plugin "REST Client" no VSCode.

---

## 🧱 Estrutura do Projeto

- `src/cliente`: CRUD de clientes  
- `src/fornecedor`: Cadastro de fornecedores  
- `src/produto`: Cadastro e gerenciamento de estoque  
- `src/pedido`: Registro de pedidos  
- `src/avaliacao`: Avaliação de produtos  
- `src/entregador`: Cadastro de entregadores  
- `src/entrega`: Confirmação de entrega

---

## ⚙️ Configurações extras

Nenhuma configuração adicional necessária. O banco `db.sqlite` será criado automaticamente na raiz do projeto.

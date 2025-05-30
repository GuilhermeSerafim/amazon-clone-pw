# 🛒 Amazon Clone

Um clone visual e funcional do site da Amazon desenvolvido com Angular, Angular Material e JSON Server. O projeto simula uma experiência de e-commerce, incluindo carrosséis, busca, categorias, carrinho de compras e integração com backend fake.

## 🚀 Funcionalidades

- 🏠 Página inicial com ofertas por categoria (Summer Essentials)
- 🔎 Filtro de busca por nome do produto
- 🛍️ Adição de produtos ao carrinho com badge dinâmico
- ➕ Incremento e decremento de quantidade de itens
- 🗑️ Remoção de produtos do carrinho
- 📦 Detalhes de entrega, preços e promoções
- 🎨 Interface responsiva inspirada na Amazon original

## 🧰 Tecnologias Utilizadas

- [Angular 19](https://angular.io/)
- [Angular Material](https://material.angular.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [JSON Server](https://github.com/typicode/json-server)
- [SCSS](https://sass-lang.com/)

Claro! Aqui está a versão mais objetiva dessa seção:

---

## 🚀 Como rodar o projeto

1. Clone o repositório e acesse a pasta:

```bash
git clone https://github.com/seu-usuario/amazon-clone.git
cd amazon-clone
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o mock backend:

```bash
json-server --watch db.json --port 3000
```

4. Rode o projeto Angular:

```bash
ng serve
```

> Mock endpoints disponíveis: `/users`, `/itemsCart`, `/totalItemsInCart` em `http://localhost:3000`

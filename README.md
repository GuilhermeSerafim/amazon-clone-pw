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

## 🚀 Como rodar o projeto

1. Clone o repositório e acesse a pasta:

```bash
git clone https://github.com/GuilhermeSerafim/amazon-clone-pw.git
cd amazon-clone-pw
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o mock backend:

```bash
npx --no-install json-server db.json --port 3000
```

4. Em outro terminal, na pasta do projeto, rode o Angular:

```bash
npm start
```

> Mock endpoints disponíveis: `/users`, `/itemsCart`, `/totalItemsInCart` em `http://localhost:3000`

## Contexto e limites

Trabalho acadêmico de Programação Web no SENAC. A interface usa a Amazon como referência visual; os nomes e imagens de terceiros não implicam afiliação.

O backend é uma simulação local com JSON Server, não uma integração com a Amazon ou um serviço de pagamentos. O manifesto declara JSON Server `^1.0.0-beta.3`; os comandos acima usam as ferramentas locais após a instalação. Execute frontend e backend em terminais separados.

Os arquivos de teste do projeto podem ser executados pelo script `npm test`.

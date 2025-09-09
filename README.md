# Sneaker Store

Projeto Frontend de uma loja de Tênis esportivos usando next.js e Tailwind CSS

---

## Tecnologias usadas


- **Next.js** — framework React para aplicações web com renderização híbrida (SSR/SSG) e otimizações automáticas.
- **Tailwind CSS** — utilitários de CSS para estilização rápida e responsiva.
- **lucide-react** — biblioteca de ícones.
- **Node.js ** — gerenciador de pacotes.



## Pré-requisitos

- Node.js (versão recomendada: >= 18)
- npm, pnpm ou yarn

---

## Instalação

Na raiz do projeto, rode:

```bash
# npm install
```

---

## Rodar no navegador

Para iniciar o servidor:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

Abra http://localhost:3000 no navegador para ver a aplicação.

O arquivo principal da página e o  `app/page.tsx`.

---


## Tailwind


- O efeito hover dos cards, foi feito apenas colocando  `hover:scale-105`:


---

## Lucide


- **Lucide**: os ícones são usados como componentes React, por exemplo:

```jsx
import { ShoppingCart } from 'lucide-react';

<ShoppingCart size={20} />
```

---

## Documentações

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [lucide icon set](https://lucide.dev)

---


## Funcionalidades `SneakerStore`()

- **'use client'** — declara o arquivo como Client Component (necessário para usar o `useState`).
- **Barra de busca (`useState`)** — guarda o termo digitado no input (`searchTerm`).
- **Filtragem** — memoriza o resultado com `useMemo` para evitar recalcular em toda renderização:

```js
const filteredSneakers = useMemo(() =>
  sneakers.filter(s => s.name.toLowerCase().includes(searchTerm.toLowerCase())),
  [searchTerm]
);
```

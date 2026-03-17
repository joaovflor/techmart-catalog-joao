# TechMart E-commerce Catalog Interface

Welcome to the TechMart E-commerce Catalog, a premium and futuristic Next.js application designed to maximize the user's psychological purchase desire through a cinematic streaming-platform style UI. 

Created as a demonstration of high-level Front-End Architecture and UX engineering.

## 🚀 Architectural Decisions

*   **Framework:** Next.js 14+ with App Router to leverage React Server Components for performance, and layout nesting for predictable UI rendering.
*   **Styling Strategy:** Pure CSS Modules (`.module.css`) to enforce component-level scoping without massive runtime overhead, ensuring buttery smooth CSS-driven animations (e.g. `transform`, `opacity`) avoiding layout thrashing.
*   **Data Fetching:** Hybrid approach. Server Components (`app/page.tsx`, `app/products/page.tsx` and `app/products/[id]/page.tsx`) import `data/products.json` directly via `lib/api.ts` — compatible with Vercel's serverless environment and avoiding `fs.readFileSync` or absolute-URL `fetch` issues. Next.js Route Handlers (`app/api/products/route.ts`) remain available for client-side consumption.
*   **Loading UI:** Streaming-style custom Skeleton Loaders replacing generic spinners, built with `app/loading.tsx`. This retains the exact structural grid of the final layout to prevent "layout jumps" and increase perceived loading speed.
*   **Error Boundaries:** High-tech themed custom error UIs (`app/error.tsx`) that guide the user to gracefully retry the operation instead of showing a raw stack trace.
*   **Performance:** Animations strictly utilize `opacity` and `transform` managed by the GPU. Media is loaded eagerly/lazily appropriately using native HTML attributes. 

## 🧠 UX & Psychology Techniques Used

1.  **Immersive "Streaming" Layout:** The product grid abandoned the typical grid layout for horizontal carousels and full-bleed hero videos, making products feel like blockbusters.
2.  **Visual Hierarchy:** The hero section focuses on the single most premium product (NeoVision Ultra 8K) utilizing dark overlays against bright neon action buttons.
3.  **Active Scarcity:** Real-time (simulated) calculation of stock adds psychological pressure. Badges animate (pulse) aggressively when stock is under 5 (`isLowStock` boolean check).
4.  **Micro-Interactions (Motion Feedback):** Hovering over cards employs a layered 3D depth transform, a subtle screen-mode tracking glow under the cursor, and sliding chevrons in the "Ver detalhes" button predicting that the interaction will cause navigation.
5.  **Perceived Value framing:** Premium dark-mode (Slate + Cyan) instead of standard white e-commerce templates associates the tech products with high-end luxury.

## ⚙️ How to Run Locally

### Prerequisites
- Node.js version 18.17 or higher.

### Installation

1.  Clone the repository and install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

2.  Start the development server:
    ```bash
    npm run dev
    # or
    yarn dev
    ```

3.  Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🧪 Testes

### Testes unitários

O projeto inclui testes com **Jest** e **React Testing Library** cobrindo os componentes `ProductCard` e `ProductFilters`.

Para rodar todos os testes:
```bash
npm run test
```

Para rodar um arquivo específico:
```bash
# Testa renderização e badges de estoque do ProductCard
npx jest ProductCard

# Testa busca, filtro por categoria e integração com router do ProductFilters
npx jest ProductFilters
```

**Casos cobertos — ProductCard** (`__tests__/ProductCard.test.tsx`):
- `renders product information correctly` — verifica nome (`NeoVision Ultra 8K`), marca (`TechMart`) e preço formatado (`R$ 16.999,00`)
- `displays low stock badge when stock is below 5` — exibe badge `"Restam apenas 4"` quando `stock: 4`
- `displays out of stock badge when stock is 0` — exibe badge `"Esgotado"` quando `stock: 0`

**Casos cobertos — ProductFilters** (`__tests__/ProductFilters.test.tsx`):
- `renders the search input` — o campo com placeholder `"Buscar produto..."` está presente no DOM
- `renders "Todos" category button as active by default` — botão `"Todos"` possui a classe `active` quando nenhuma categoria está selecionada
- `calls router.push with search param when typing` — ao digitar `"NeoVision"`, chama `router.push('/products?search=NeoVision')`
- `calls router.push with category param when clicking a category` — ao clicar em `"Notebooks"`, chama `router.push('/products?category=Notebooks')`
- `calls router.push without category param when clicking "Todos"` — ao clicar em `"Todos"` com categoria ativa, chama `router.push('/products?')`

### Testando os estados da aplicação

#### Loading state (skeleton)

O skeleton é exibido automaticamente enquanto o Server Component carrega. Para torná-lo visível por mais tempo, adicione um delay artificial no início de `getProducts` em `lib/api.ts`:

```ts
export async function getProducts() {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // <- adicionar
  return productsData;
}
```

Acesse `/products` e observe o grid de skeletons antes dos cards carregarem. Remova a linha para restaurar o carregamento imediato.

#### Tratamento de erro

Para simular uma falha na API e ver a tela de erro com o botão "Tentar novamente", adicione esta linha no início de `getProducts` em `lib/api.ts`:

```ts
export async function getProducts() {
  throw new Error('Simulação de falha na API'); // <- adicionar
  // ...
}
```

Acesse `/products` — a mensagem de erro amigável será exibida. Remova a linha para restaurar o funcionamento normal.

## 🌐 Deployment (Vercel)
This Next.js 14 project is inherently optimized for Vercel. 

**Vercel Deployment Link:**
*https://techmart-catalog-joao-q9usfd9v4-joaovflors-projects.vercel.app/*

1. Push to GitHub.
2. Import the project in Vercel.
3. Ensure the Build Command is `next build` and Framework Preset is Next.js.
4. Deploy! The application uses exclusively static assets and App Router handlers without serverless external dependencies.

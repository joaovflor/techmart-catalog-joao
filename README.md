# TechMart E-commerce Catalog Interface

Welcome to the TechMart E-commerce Catalog, a premium and futuristic Next.js application designed to maximize the user's psychological purchase desire through a cinematic streaming-platform style UI. 

Created as a demonstration of high-level Front-End Architecture and UX engineering.

## 🚀 Architectural Decisions

*   **Framework:** Next.js 14+ with App Router to leverage React Server Components for performance, and layout nesting for predictable UI rendering.
*   **Styling Strategy:** Pure CSS Modules (`.module.css`) to enforce component-level scoping without massive runtime overhead, ensuring buttery smooth CSS-driven animations (e.g. `transform`, `opacity`) avoiding layout thrashing.
*   **Data Fetching:** Hybrid approach. We use Next.js Route Handlers (`app/api/products/route.ts`) to serve a mock JSON database. The Server Components (`app/page.tsx` and `app/products/[id]/page.tsx`) consume these APIs natively through `fetch` without overhead for the client, avoiding `fs.readFileSync` problems on platforms like Vercel.
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

**Casos cobertos — ProductCard:**
- Renderiza nome, marca e preço corretamente
- Exibe badge "Restam apenas N" quando estoque < 5
- Exibe badge "Esgotado" quando estoque = 0

**Casos cobertos — ProductFilters:**
- Renderiza o campo de busca
- Botão "Todos" aparece ativo por padrão (sem filtro aplicado)
- Ao digitar no input, chama `router.push` com `?search=`
- Ao clicar em uma categoria, chama `router.push` com `?category=`
- Ao clicar em "Todos", remove o filtro de categoria da URL

### Testando os estados da aplicação

#### Loading state (skeleton)

O skeleton é exibido automaticamente enquanto os dados são buscados. Para torná-lo visível por mais tempo, descomente a linha de delay em `app/api/products/route.ts`:

```ts
// descomente esta linha:
await new Promise((resolve) => setTimeout(resolve, 800));
```

Acesse `/products` e observe o grid de skeletons antes dos cards carregarem.

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
*(Insert standard Vercel deploy URL here upon integration, e.g., https://techmart-catalog-demo.vercel.app)*

1. Push to GitHub.
2. Import the project in Vercel.
3. Ensure the Build Command is `next build` and Framework Preset is Next.js.
4. Deploy! The application uses exclusively static assets and App Router handlers without serverless external dependencies.

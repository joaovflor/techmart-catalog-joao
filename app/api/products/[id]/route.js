// ─────────────────────────────────────────────────────────────────────────────
// app/api/products/[id]/route.js — Endpoint: GET /api/products/:id
//
// TAREFA:
//   1. Ler o parâmetro `id` de params
//   2. Encontrar o produto correspondente em products.json
//   3. Retornar o produto encontrado como JSON
//   4. Retornar status 404 com mensagem de erro se o produto não existir
//
// Exemplo de resposta — produto encontrado (200):
//   { "product": { id, name, price, ... } }
//
// Exemplo de resposta — não encontrado (404):
//   { "error": "Produto não encontrado" }
// ─────────────────────────────────────────────────────────────────────────────

import products from '@/data/products.json';

export async function GET(request, { params }) {
  // TODO: encontre o produto pelo params.id e retorne a resposta correta
}

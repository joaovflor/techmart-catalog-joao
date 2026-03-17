// ─────────────────────────────────────────────────────────────────────────────
// app/api/products/route.js — Endpoint: GET /api/products
//
// TAREFA:
//   Retornar a lista completa de produtos do arquivo data/products.json
//
// DICA: Importe o JSON diretamente com import (não use fs.readFileSync —
//       isso pode causar erros no build da Vercel).
//
// Exemplo de resposta esperada:
//   { "products": [ { id, name, price, ... }, ... ] }
// ─────────────────────────────────────────────────────────────────────────────

import products from '@/data/products.json';

export async function GET() {
  // TODO: retorne os produtos como JSON
}

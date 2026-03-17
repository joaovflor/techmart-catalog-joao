const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export async function getProducts() {
  const res = await fetch(`${BASE_URL}/api/products`, { cache: 'no-store' });

  if (!res.ok) {
    throw new Error('Falha ao buscar produtos');
  }

  const data = await res.json();
  return data.products;
}

export async function getProduct(id: number | string) {
  const products = await getProducts();
  const parsedId = typeof id === 'string' ? parseInt(id, 10) : id;
  return products.find((p: { id: number }) => p.id === parsedId) || null;
}

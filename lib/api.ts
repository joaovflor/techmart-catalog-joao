import productsData from '@/data/products.json';

export async function getProducts() {
  return productsData;
}

export async function getProduct(id: number | string) {
  const parsedId = typeof id === 'string' ? parseInt(id, 10) : id;
  return productsData.find((p: { id: number }) => p.id === parsedId) || null;
}

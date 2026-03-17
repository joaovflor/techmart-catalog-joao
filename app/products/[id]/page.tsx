import { notFound } from 'next/navigation';
import ProductDetail from '@/components/ProductDetail/ProductDetail';

import { getProduct } from '@/lib/api';

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}

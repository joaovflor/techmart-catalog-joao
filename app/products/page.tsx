import ProductCard from '@/components/ProductCard/ProductCard';
import { getProducts } from '@/lib/api';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './page.module.css';

const PAGE_SIZE = 8;

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page } = await searchParams;
  const currentPage = Math.max(1, parseInt(page || '1', 10));
  const products = await getProducts();
  const totalPages = Math.ceil(products.length / PAGE_SIZE);
  const paginated = products.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1 className={styles.title}>Catálogo</h1>
        <p className={styles.subtitle}>{products.length} produtos disponíveis</p>
      </div>

      <div className={styles.grid}>
        {paginated.map((product: any) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className={styles.pagination}>
          {currentPage > 1 ? (
            <Link href={`/products?page=${currentPage - 1}`} className={styles.pageBtn}>
              <ChevronLeft size={18} /> Anterior
            </Link>
          ) : (
            <span className={`${styles.pageBtn} ${styles.disabled}`}>
              <ChevronLeft size={18} /> Anterior
            </span>
          )}

          <div className={styles.pageNumbers}>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <Link
                key={p}
                href={`/products?page=${p}`}
                className={`${styles.pageNumber} ${p === currentPage ? styles.active : ''}`}
              >
                {p}
              </Link>
            ))}
          </div>

          {currentPage < totalPages ? (
            <Link href={`/products?page=${currentPage + 1}`} className={styles.pageBtn}>
              Próxima <ChevronRight size={18} />
            </Link>
          ) : (
            <span className={`${styles.pageBtn} ${styles.disabled}`}>
              Próxima <ChevronRight size={18} />
            </span>
          )}
        </div>
      )}
    </div>
  );
}

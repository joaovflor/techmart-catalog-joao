import ProductCard from '@/components/ProductCard/ProductCard';
import ProductFilters from '@/components/ProductFilters/ProductFilters';
import { getProducts } from '@/lib/api';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './page.module.css';

const PAGE_SIZE = 8;

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; search?: string; category?: string }>;
}) {
  const { page, search, category } = await searchParams;
  const currentPage = Math.max(1, parseInt(page || '1', 10));
  const allProducts = await getProducts();

  const filtered = allProducts.filter((p: any) => {
    const matchesSearch = !search || p.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = !category || p.category === category;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.headerTop}>
          <div>
            <h1 className={styles.title}>Catálogo</h1>
            <p className={styles.subtitle}>
              {filtered.length} produto{filtered.length !== 1 ? 's' : ''} encontrado{filtered.length !== 1 ? 's' : ''}
            </p>
          </div>
          <ProductFilters currentSearch={search || ''} currentCategory={category || ''} slot="search" />
        </div>
        <ProductFilters currentSearch={search || ''} currentCategory={category || ''} slot="categories" />
      </div>

      {paginated.length > 0 ? (
        <div className={styles.grid}>
          {paginated.map((product: any) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      ) : (
        <div className={styles.empty}>
          <p>Nenhum produto encontrado para os filtros aplicados.</p>
        </div>
      )}

      {totalPages > 1 && (
        <div className={styles.pagination}>
          {currentPage > 1 ? (
            <Link href={`/products?page=${currentPage - 1}${search ? `&search=${search}` : ''}${category ? `&category=${category}` : ''}`} className={styles.pageBtn}>
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
                href={`/products?page=${p}${search ? `&search=${search}` : ''}${category ? `&category=${category}` : ''}`}
                className={`${styles.pageNumber} ${p === currentPage ? styles.active : ''}`}
              >
                {p}
              </Link>
            ))}
          </div>

          {currentPage < totalPages ? (
            <Link href={`/products?page=${currentPage + 1}${search ? `&search=${search}` : ''}${category ? `&category=${category}` : ''}`} className={styles.pageBtn}>
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

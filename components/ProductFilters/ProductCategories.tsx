'use client';

import { useRouter } from 'next/navigation';
import styles from './ProductFilters.module.css';

const CATEGORIES = [
  'Todos', 'TVs', 'Notebooks', 'Smartphones', 'Áudio',
  'Tablets', 'Wearables', 'Smart Home', 'Câmeras',
  'Games', 'Armazenamento', 'Monitores', 'Redes', 'Drones',
];

interface ProductCategoriesProps {
  currentSearch: string;
  currentCategory: string;
}

export default function ProductCategories({ currentSearch, currentCategory }: ProductCategoriesProps) {
  const router = useRouter();

  function updateParams(updates: Record<string, string>) {
    const params = new URLSearchParams();
    const merged = { search: currentSearch, category: currentCategory, ...updates };
    Object.entries(merged).forEach(([key, value]) => {
      if (value) params.set(key, value);
    });
    params.delete('page');
    router.push(`/products?${params.toString()}`);
  }

  return (
    <div className={styles.categories} role="group" aria-label="Filtrar por categoria">
      {CATEGORIES.map((cat) => {
        const isActive = cat === 'Todos' ? !currentCategory : currentCategory === cat;
        return (
          <button
            key={cat}
            onClick={() => updateParams({ category: cat === 'Todos' ? '' : cat })}
            className={`${styles.catBtn} ${isActive ? styles.active : ''}`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}

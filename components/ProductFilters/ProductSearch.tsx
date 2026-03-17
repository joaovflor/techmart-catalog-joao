'use client';

import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';
import styles from './ProductFilters.module.css';

interface ProductSearchProps {
  currentSearch: string;
  currentCategory: string;
}

export default function ProductSearch({ currentSearch, currentCategory }: ProductSearchProps) {
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
    <div className={styles.searchBar}>
      <Search size={16} className={styles.searchIcon} />
      <input
        type="text"
        placeholder="Buscar produto..."
        defaultValue={currentSearch}
        onChange={(e) => updateParams({ search: e.target.value })}
        className={styles.searchInput}
        aria-label="Buscar produto"
      />
    </div>
  );
}

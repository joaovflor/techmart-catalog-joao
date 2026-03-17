// components/ProductCard/ProductCard.tsx
import Link from 'next/link';
import { Star, ChevronRight } from 'lucide-react';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  id: number;
  name: string;
  brand: string;
  price: number;
  rating: number;
  stock: number;
  image_url: string;
  priority?: boolean;
}

export default function ProductCard({ id, name, brand, price, rating, stock, image_url, priority }: ProductCardProps) {
  const isLowStock = stock < 5;
  const isOutOfStock = stock === 0;

  return (
    <Link
      href={`/products/${id}`}
      className={`${styles.card} ${priority ? styles.cardPriority : ''}`}
      prefetch={true}
    >
      <div className={styles.imageContainer}>
        {/* We use standard img to avoid Next.js Image component configuration overhead for mock URLs if not pre-authorized,
            but in production we'd use next/image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image_url} alt={name} className={styles.image} loading={priority ? 'eager' : 'lazy'} />

        <div className={styles.overlay}></div>

        {isLowStock && !isOutOfStock && (
          <div className={styles.badgeUrgency}>Restam apenas {stock}</div>
        )}
        {isOutOfStock && (
          <div className={styles.badgeOut}>Esgotado</div>
        )}
        <div className={styles.ratingBadge}>
          <Star className={styles.starIcon} size={14} fill="currentColor" />
          <span>{rating.toFixed(1)}</span>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.brand}>{brand}</div>
        <h3 className={styles.title}>{name}</h3>

        <div className={styles.footer}>
          <div className={styles.priceContainer}>
            <span className={styles.pricePrefix}>A partir de</span>
            <span className={styles.price}>
              R$ {price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
          </div>

          <div className={styles.actionBtn}>
            Ver detalhes
            <ChevronRight size={16} className={styles.actionIcon} />
          </div>
        </div>
      </div>
      <div className={styles.glow} />
    </Link>
  );
}

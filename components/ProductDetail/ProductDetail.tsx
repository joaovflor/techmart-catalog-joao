import { Star, ShieldCheck, Truck, Zap } from 'lucide-react';
import styles from './ProductDetail.module.css';
import FadeUp from '@/components/Animations/FadeUp';
import StaggerContainer, { StaggerItem } from '@/components/Animations/StaggerContainer';

interface ProductDetailProps {
  product: {
    id: number;
    name: string;
    brand: string;
    price: number;
    rating: number;
    stock: number;
    image_url: string;
    description: string;
    available: boolean;
  };
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const isLowStock = product.stock > 0 && product.stock <= 5;
  const isOutOfStock = product.stock === 0 || !product.available;

  return (
    <div className={styles.container}>
      <div className={styles.imageSection}>
        <FadeUp delay={0.2}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={product.image_url} alt={product.name} className={styles.image} />
          <div className={styles.imageOverlay} />
          <div className={styles.brandBadge}>{product.brand}</div>
        </FadeUp>
      </div>

      <div className={styles.contentSection}>
        <FadeUp delay={0.3}>
          <div className={styles.header}>
            <div className={styles.badges}>
              <div className={styles.rating}>
                <Star size={16} fill="currentColor" color="#fbbf24" />
                <span>{product.rating.toFixed(1)}</span>
              </div>
              {isLowStock && <div className={`${styles.badge} ${styles.badgeUrgency}`}>Últimas un.</div>}
              {isOutOfStock && <div className={`${styles.badge} ${styles.badgeOut}`}>Esgotado</div>}
            </div>
            <h1 className={styles.title}>{product.name}</h1>
          </div>
        </FadeUp>

        <FadeUp delay={0.4}>
          <div className={styles.priceContainer}>
            <div className={styles.priceWrap}>
              <span className={styles.currency}>R$</span>
              <span className={styles.price}>
                {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </span>
            </div>
            <div className={styles.installments}>
              em até 12x de R$ {(product.price / 12).toLocaleString('pt-BR', { minimumFractionDigits: 2 })} sem juros
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.5}>
          <div className={styles.description}>
            <h3>Sobre o Produto</h3>
            <p>{product.description}</p>
          </div>
        </FadeUp>

        <StaggerContainer staggerDelay={0.15} className={styles.features}>
          <StaggerItem className={styles.featureItem}>
            <div className={styles.featureIcon}><ShieldCheck size={20} /></div>
            <span>Garantia de 1 Ano TechMart</span>
          </StaggerItem>
          <StaggerItem className={styles.featureItem}>
            <div className={styles.featureIcon}><Truck size={20} /></div>
            <span>Frete Expresso Grátis Brasil</span>
          </StaggerItem>
          <StaggerItem className={styles.featureItem}>
            <div className={styles.featureIcon}><Zap size={20} /></div>
            <span>Entrega Full - Receba amanhã</span>
          </StaggerItem>
        </StaggerContainer>

        <FadeUp delay={0.7}>
          <div className={styles.actions}>
            <button className={styles.buyBtn} disabled={isOutOfStock}>
              {isOutOfStock ? 'Indisponível' : 'Comprar Agora'}
            </button>

            <button className={styles.secondaryBtn} disabled={isOutOfStock}>
              Adicionar ao Carrinho
            </button>
          </div>
        </FadeUp>
      </div>
    </div>
  );
}

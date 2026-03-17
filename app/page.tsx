import ProductCard from '@/components/ProductCard/ProductCard';
import styles from './page.module.css';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { getProducts } from '@/lib/api';
import FadeUp from '@/components/Animations/FadeUp';
import StaggerContainer, { StaggerItem } from '@/components/Animations/StaggerContainer';

export default async function Home() {
  const products = await getProducts();
  const heroProduct = products.find((p: any) => p.id === 1) || products[0];
  const featured = products.slice(0, 3);

  return (
    <div className={styles.main}>
      {/* Cinematic Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroVideoWrapper}>
          <video
            autoPlay
            muted
            loop
            playsInline
            className={styles.heroVideo}
            poster={heroProduct.image_url}
          >
            <source src="/Hero.mp4" type="video/mp4" />
          </video>
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroVignette}></div>
        </div>

        <div className={styles.heroContent}>
          <FadeUp delay={0.2} yOffset={50}>
            <div className={styles.heroTag}>Exclusividade TechMart</div>
            <h1 className={styles.heroTitle}>{heroProduct.name}</h1>
            <p className={styles.heroDesc}>{heroProduct.description}</p>
          </FadeUp>

          <FadeUp delay={0.4} yOffset={30}>
            <div className={styles.heroPrice}>
              R$ {heroProduct.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </div>
          </FadeUp>

          <FadeUp delay={0.6} yOffset={20}>
            <div className={styles.heroActions}>
              <Link href={`/products/${heroProduct.id}`} className={styles.primaryBtn}>
                Comprar Agora
              </Link>
              <Link href={`/products/${heroProduct.id}`} className={styles.secondaryBtn}>
                Detalhes <ChevronRight size={18} />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Catalog Section */}
      <section className={styles.catalogSection}>
        <FadeUp delay={0.2}>
          <div className={styles.catalogHeader}>
            <h2 className={styles.catalogTitle}>Catálogo</h2>
            <p className={styles.catalogDesc}>Conheça alguns dos produtos disponíveis na TechMart.</p>
          </div>
        </FadeUp>

        <StaggerContainer staggerDelay={0.15} className={styles.catalogGrid}>
          {featured.map((product: any) => (
            <StaggerItem key={product.id}>
              <ProductCard {...product} priority={true} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeUp delay={0.3}>
          <div className={styles.catalogCtaWrapper}>
            <Link href="/products" className={styles.primaryBtn}>
              Ver Catálogo Completo <ChevronRight size={18} />
            </Link>
          </div>
        </FadeUp>
      </section>
    </div>
  );
}

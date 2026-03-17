import ProductCard from '@/components/ProductCard/ProductCard';
import styles from './page.module.css';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { getProducts } from '@/lib/api';
import FadeUp from '@/components/Animations/FadeUp';
import StaggerContainer, { StaggerItem } from '@/components/Animations/StaggerContainer';

export default async function Home() {
  const products = await getProducts();

  // Categorize for different carousels
  const destaques = products.filter((p: any) => p.rating >= 4.8);
  const audio = products.filter((p: any) => p.category === 'Áudio');
  const lowStock = products.filter((p: any) => p.stock < 5 && p.stock > 0);

  // The hero product
  const heroProduct = products.find((p: any) => p.id === 1) || products[0];

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

      {/* Catalog Section - Streaming Style Carousels */}
      <div className={styles.catalogWrapper}>
        <section className={styles.carouselSection}>
          <FadeUp delay={0.2}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Destaques e Mais Bem Avaliados</h2>
              <Link href="/categorias/destaques" className={styles.viewAll}>
                Ver todos <ChevronRight size={16} />
              </Link>
            </div>
          </FadeUp>

          <div className={styles.carousel}>
            <StaggerContainer staggerDelay={0.15} className={styles.carouselTrack}>
              {destaques.map((product: any) => (
                <StaggerItem key={product.id} className={styles.carouselItem}>
                  <ProductCard {...product} priority={true} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <section className={styles.carouselSection}>
          <FadeUp delay={0.2}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Últimas Unidades - Corra!</h2>
            </div>
          </FadeUp>

          <div className={styles.carousel}>
            <StaggerContainer staggerDelay={0.15} className={styles.carouselTrack}>
              {lowStock.map((product: any) => (
                <StaggerItem key={product.id} className={styles.carouselItem}>
                  <ProductCard {...product} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <section className={styles.carouselSection}>
          <FadeUp delay={0.2}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Imersão Sonora</h2>
            </div>
          </FadeUp>

          <div className={styles.carousel}>
            <StaggerContainer staggerDelay={0.15} className={styles.carouselTrack}>
              {audio.map((product: any) => (
                <StaggerItem key={product.id} className={styles.carouselItem}>
                  <ProductCard {...product} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      </div>
    </div>
  );
}

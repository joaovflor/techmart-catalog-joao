// components/Skeleton/Skeleton.tsx
import styles from './Skeleton.module.css';

interface SkeletonProps {
    type?: 'card' | 'hero' | 'detail' | 'text';
    count?: number;
}

export default function Skeleton({ type = 'card', count = 1 }: SkeletonProps) {
    const Skeletons = Array.from({ length: count }).map((_, index) => {
        switch (type) {
            case 'card':
                return (
                    <div key={index} className={styles.skeletonCard}>
                        <div className={`${styles.pulse} ${styles.image}`} />
                        <div className={styles.content}>
                            <div className={`${styles.pulse} ${styles.brand}`} />
                            <div className={`${styles.pulse} ${styles.title}`} />
                            <div className={`${styles.pulse} ${styles.title} ${styles.short}`} />
                            <div className={styles.footer}>
                                <div className={`${styles.pulse} ${styles.price}`} />
                                <div className={`${styles.pulse} ${styles.button}`} />
                            </div>
                        </div>
                    </div>
                );
            case 'hero':
                return <div key={index} className={`${styles.pulse} ${styles.hero}`} />;
            case 'detail':
                return (
                    <div key={index} className={styles.detailContainer}>
                        <div className={`${styles.pulse} ${styles.heroImage}`} />
                        <div className={styles.detailContent}>
                            <div className={`${styles.pulse} ${styles.brand}`} />
                            <div className={`${styles.pulse} ${styles.titleLg}`} />
                            <div className={`${styles.pulse} ${styles.titleLg} ${styles.short}`} />
                            <div className={`${styles.pulse} ${styles.price}`} style={{ height: '3rem', width: '50%', marginTop: '2rem' }} />
                            <div className={`${styles.pulse} ${styles.desc}`} style={{ marginTop: '2rem' }} />
                            <div className={`${styles.pulse} ${styles.desc}`} />
                            <div className={`${styles.pulse} ${styles.desc} ${styles.short}`} />
                        </div>
                    </div>
                );
            default:
                return <div key={index} className={`${styles.pulse} ${styles.text}`} />;
        }
    });

    return <>{Skeletons}</>;
}

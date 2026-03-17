import Skeleton from '@/components/Skeleton/Skeleton';
import styles from './page.module.css';

export default function Loading() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div style={{ width: 160, height: 40, borderRadius: 8, background: 'rgba(255,255,255,0.06)', animation: 'pulse 1.5s ease-in-out infinite' }} />
        <div style={{ width: 120, height: 20, borderRadius: 6, marginTop: 8, background: 'rgba(255,255,255,0.04)', animation: 'pulse 1.5s ease-in-out infinite' }} />
      </div>
      <div className={styles.grid}>
        <Skeleton type="card" count={8} />
      </div>
    </div>
  );
}

import Link from 'next/link';
import { Search, ShoppingCart, User, ChevronDown } from 'lucide-react';
import styles from './Header.module.css';
import NavLinks from './NavLinks';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href="/" className={styles.logoGroup}>
                    <div className={styles.logoIcon}>
                        <div className={styles.logoShapes}></div>
                    </div>
                    <span className={styles.logoText}>TechMart</span>
                </Link>

                <NavLinks />

                <div className={styles.actions}>

                    <button className={styles.iconButton} aria-label="Carrinho">
                        <ShoppingCart size={20} />
                    </button>

                    <div className={styles.userMenu}>
                        <button className={styles.iconButton} aria-label="Usuário">
                            <User size={20} />
                        </button>
                        <ChevronDown size={14} className={styles.chevron} />
                    </div>
                </div>
            </div>
        </header>
    );
}

import Link from 'next/link';
import { Search, ShoppingCart, User, ChevronDown } from 'lucide-react';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href="/" className={styles.logoGroup}>
                    <div className={styles.logoIcon}>
                        <div className={styles.logoShapes}></div>
                    </div>
                    <span className={styles.logoText}>FuturaElectro</span>
                </Link>

                <nav className={styles.nav}>
                    <Link href="/" className={styles.navLinkActive}>Inicio</Link>
                    <Link href="/ofertas" className={styles.navLink}>Ofertas</Link>
                    <Link href="/novidades" className={styles.navLink}>Novidades</Link>
                    <Link href="/categorias" className={styles.navLink}>Categorias</Link>
                </nav>

                <div className={styles.actions}>
                    <div className={styles.searchBar}>
                        <Search className={styles.searchIcon} size={18} />
                        <input type="text" placeholder="Buscar por produto..." className={styles.searchInput} />
                    </div>

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

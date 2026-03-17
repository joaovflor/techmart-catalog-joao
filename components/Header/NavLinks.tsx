'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

const links = [
  { href: '/', label: 'Início' },
  { href: '/products', label: 'Catálogo' },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      {links.map(({ href, label }) => {
        const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href);
        return (
          <Link
            key={href}
            href={href}
            className={isActive ? styles.navLinkActive : styles.navLink}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}

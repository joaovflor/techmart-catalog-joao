import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header/Header';

export const metadata: Metadata = {
  title: 'FuturaElectro - The Next Era of Tech',
  description: 'A premium, cinematic technology marketplace.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}

'use client';

import { useEffect } from 'react';
import { AlertTriangle, RefreshCcw } from 'lucide-react';

export default function ProductsError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div style={{
      minHeight: '70vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      textAlign: 'center',
    }}>
      <div style={{
        background: 'rgba(239, 68, 68, 0.1)',
        border: '1px solid rgba(239, 68, 68, 0.3)',
        borderRadius: '50%',
        width: '80px',
        height: '80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '2rem',
        color: '#fca5a5',
        boxShadow: '0 0 30px rgba(239, 68, 68, 0.2)',
      }}>
        <AlertTriangle size={40} />
      </div>

      <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#f8fafc' }}>
        Falha ao carregar o catálogo
      </h2>
      <p style={{ color: '#94a3b8', maxWidth: '400px', marginBottom: '3rem', fontSize: '1.1rem', lineHeight: '1.6' }}>
        Não foi possível buscar os produtos. Verifique sua conexão ou tente novamente em instantes.
      </p>

      <button
        onClick={reset}
        style={{
          background: 'var(--grad-primary)',
          color: 'white',
          border: 'none',
          padding: '1rem 2.5rem',
          borderRadius: '8px',
          fontSize: '1rem',
          fontWeight: '600',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          boxShadow: 'var(--shadow-neon)',
        }}
      >
        <RefreshCcw size={18} />
        Tentar novamente
      </button>
    </div>
  );
}

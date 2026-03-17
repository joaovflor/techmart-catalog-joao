'use client'; // Error components must be Client Components

import { useEffect } from 'react';
import { AlertTriangle, RefreshCcw } from 'lucide-react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
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
                boxShadow: '0 0 30px rgba(239, 68, 68, 0.2)'
            }}>
                <AlertTriangle size={40} />
            </div>

            <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#f8fafc' }}>
                Desvio na Conexão Neural
            </h2>
            <p style={{ color: '#94a3b8', maxWidth: '400px', marginBottom: '3rem', fontSize: '1.1rem', lineHeight: '1.6' }}>
                Encontramos uma interferência no sistema ao buscar os dados do catálogo. Nossos drones já estão investigando.
            </p>

            <button
                onClick={() => reset()}
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
                    transition: 'all 0.3s ease',
                }}
                onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.filter = 'brightness(1.1)';
                }}
                onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.filter = 'brightness(1)';
                }}
            >
                <RefreshCcw size={18} />
                Tentar novamente
            </button>
        </div>
    );
}

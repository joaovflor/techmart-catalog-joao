import Skeleton from '@/components/Skeleton/Skeleton';

export default function Loading() {
    return (
        <div style={{ padding: '0 2rem', maxWidth: '1400px', margin: '140px auto' }}>
            <Skeleton type="hero" />
            <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem', overflow: 'hidden' }}>
                <div style={{ flex: '0 0 320px', minWidth: '320px' }}><Skeleton type="card" /></div>
                <div style={{ flex: '0 0 320px', minWidth: '320px' }}><Skeleton type="card" /></div>
                <div style={{ flex: '0 0 320px', minWidth: '320px' }}><Skeleton type="card" /></div>
                <div style={{ flex: '0 0 320px', minWidth: '320px' }}><Skeleton type="card" /></div>
            </div>
        </div>
    );
}

import { render, screen } from '@testing-library/react';
import ProductCard from '@/components/ProductCard/ProductCard';

describe('ProductCard Component', () => {
    const mockProduct = {
        id: 1,
        name: 'NeoVision Ultra 8K',
        brand: 'TechMart',
        price: 16999.0,
        rating: 4.9,
        stock: 4,
        image_url: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1'
    };

    it('renders product information correctly', () => {
        render(<ProductCard {...mockProduct} />);

        // Assert name
        expect(screen.getByText('NeoVision Ultra 8K')).toBeInTheDocument();

        // Assert brand
        expect(screen.getByText('TechMart')).toBeInTheDocument();

        // Assert formatted price
        expect(screen.getByText('R$ 16.999,00')).toBeInTheDocument();
    });

    it('displays low stock badge when stock is below 5', () => {
        render(<ProductCard {...mockProduct} />);

        // The stock is 4, which is < 5, so it should display "Restam apenas 4"
        expect(screen.getByText('Restam apenas 4')).toBeInTheDocument();
    });

    it('displays out of stock badge when stock is 0', () => {
        const outOfStockProduct = { ...mockProduct, stock: 0 };
        render(<ProductCard {...outOfStockProduct} />);

        expect(screen.getByText('Esgotado')).toBeInTheDocument();
    });
});

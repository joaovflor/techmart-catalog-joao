import { render, screen, fireEvent } from '@testing-library/react';
import ProductFilters from '@/components/ProductFilters/ProductFilters';

const mockPush = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({ push: mockPush }),
}));

const defaultProps = { currentSearch: '', currentCategory: '' };

describe('ProductFilters', () => {
  beforeEach(() => {
    mockPush.mockClear();
  });

  it('renders the search input', () => {
    render(<ProductFilters {...defaultProps} />);
    expect(screen.getByPlaceholderText('Buscar produto...')).toBeInTheDocument();
  });

  it('renders "Todos" category button as active by default', () => {
    render(<ProductFilters {...defaultProps} />);
    const todosBtn = screen.getByRole('button', { name: 'Todos' });
    expect(todosBtn).toHaveClass('active');
  });

  it('calls router.push with search param when typing', () => {
    render(<ProductFilters {...defaultProps} />);
    const input = screen.getByPlaceholderText('Buscar produto...');
    fireEvent.change(input, { target: { value: 'NeoVision' } });
    expect(mockPush).toHaveBeenCalledWith('/products?search=NeoVision');
  });

  it('calls router.push with category param when clicking a category', () => {
    render(<ProductFilters {...defaultProps} />);
    const notebooksBtn = screen.getByRole('button', { name: 'Notebooks' });
    fireEvent.click(notebooksBtn);
    expect(mockPush).toHaveBeenCalledWith('/products?category=Notebooks');
  });

  it('calls router.push without category param when clicking "Todos"', () => {
    render(<ProductFilters currentSearch="" currentCategory="Notebooks" />);
    const todosBtn = screen.getByRole('button', { name: 'Todos' });
    fireEvent.click(todosBtn);
    expect(mockPush).toHaveBeenCalledWith('/products?');
  });
});

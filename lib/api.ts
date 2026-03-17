import products from '@/data/products.json';

// Simulate an API call delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function getProducts() {
    // Uncomment the delay to test loading states
    // await delay(800);

    // Future API implementation:
    // const res = await fetch('https://api.techmart.com/products');
    // return res.json();

    return products;
}

export async function getProduct(id: number | string) {
    // Uncomment the delay to test loading states
    // await delay(800);

    // Future API implementation:
    // const res = await fetch(`https://api.techmart.com/products/${id}`);
    // return res.json();

    const parsedId = typeof id === 'string' ? parseInt(id, 10) : id;
    const product = products.find(p => p.id === parsedId);
    return product || null;
}

import { NextResponse } from 'next/server';
import products from '@/data/products.json';

export async function GET() {
    // Simulate slight network delay
    await new Promise((resolve) => setTimeout(resolve, 800));
    return NextResponse.json({ products });
}

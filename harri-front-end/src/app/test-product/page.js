'use client';

import { useRouter } from 'next/navigation';

export default function TestProductPage() {
  const router = useRouter();

  const testProducts = [
    { id: 1, title: 'Test Ürün 1' },
    { id: 2, title: 'Test Ürün 2' },
    { id: 3, title: 'Test Ürün 3' }
  ];

  return (
    <div style={{ padding: '40px' }}>
      <h1>Test Ürünler</h1>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {testProducts.map(product => (
          <div
            key={product.id}
            onClick={() => router.push(`/product/${product.id}`)}
            style={{
              padding: '20px',
              border: '1px solid #ddd',
              borderRadius: '8px',
              cursor: 'pointer',
              background: '#f9f9f9'
            }}
          >
            <h3>{product.title}</h3>
            <p>ID: {product.id}</p>
            <button>Ürün Detayına Git</button>
          </div>
        ))}
      </div>
    </div>
  );
}


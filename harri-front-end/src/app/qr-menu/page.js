'use client';

import { useState } from 'react';
import Header from '@layout/header';
import Footer from '@layout/footer';
import ProductCard from '@components/shop/product-card';
import ShopBreadcrumb from '@components/common/breadcrumb/shop-breadcrumb';
import placeholder from '@assets/img/slider/13/slider-1.png';

export default function QRMenuPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;

  // QR Menü ürünleri - Web siteleri sayfasındaki gibi
  const [products] = useState(() => Array.from({ length: 500 }).map((_, i) => {
    const price = 49.99 + (i % 50);
    const discount = i % 7 === 0 ? 10 : 0;
    return {
      _id: `qr-menu-${i + 1}`,
      title: `QR Menü Tema ${i + 1}`,
      image: placeholder,
      originalPrice: Number(price.toFixed(2)),
      discount,
      price: discount > 0 ? Number((price * (1 - discount / 100)).toFixed(2)) : Number(price.toFixed(2)),
      itemInfo: i % 5 === 0 ? 'latest-product' : '',
      type: 'qr-menu',
      demoUrl: `https://example.com/demo/qr-menu/${i + 1}`,
      brand: { name: 'Harri' },
      colors: ['blue','green','black']
    };
  }));

  const pageCount = Math.ceil(products.length / pageSize);
  const currentProducts = products.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPagination = () => {
    const pages = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(pageCount, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`pagination-btn ${currentPage === i ? 'active' : ''}`}
          style={{
            padding: '8px 12px',
            margin: '0 4px',
            border: 'none',
            borderRadius: '8px',
            background: currentPage === i ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'rgba(255,255,255,0.1)',
            color: currentPage === i ? '#fff' : '#333',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)'
          }}
        >
          {i}
        </button>
      );
    }

    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginTop: '40px' }}>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          style={{
            padding: '8px 12px',
            border: 'none',
            borderRadius: '8px',
            background: 'rgba(255,255,255,0.1)',
            color: currentPage === 1 ? '#ccc' : '#333',
            cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)'
          }}
        >
          ← Önceki
        </button>
        
        {startPage > 1 && (
          <>
            <button onClick={() => handlePageChange(1)} className="pagination-btn">1</button>
            {startPage > 2 && <span>...</span>}
          </>
        )}
        
        {pages}
        
        {endPage < pageCount && (
          <>
            {endPage < pageCount - 1 && <span>...</span>}
            <button onClick={() => handlePageChange(pageCount)} className="pagination-btn">{pageCount}</button>
          </>
        )}
        
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === pageCount}
          style={{
            padding: '8px 12px',
            border: 'none',
            borderRadius: '8px',
            background: 'rgba(255,255,255,0.1)',
            color: currentPage === pageCount ? '#ccc' : '#333',
            cursor: currentPage === pageCount ? 'not-allowed' : 'pointer',
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)'
          }}
        >
          Sonraki →
        </button>
      </div>
    );
  };

  return (
    <>
      <Header style_2={true} />
      <ShopBreadcrumb />
      
      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '30px 0',
        marginBottom: '40px'
      }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <div style={{
                background: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(20px)',
                borderRadius: '20px',
                padding: '30px',
                border: '1px solid rgba(255,255,255,0.2)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
              }}>
                <h2 style={{
                  color: '#fff',
                  textAlign: 'center',
                  marginBottom: '30px',
                  fontSize: '28px',
                  fontWeight: '700'
                }}>
                  QR Menü Tasarımları
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ürün Kartları */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-11">
            <div className="row g-4 justify-content-center">
              {currentProducts.map(product => (
                <div key={product._id} className="col-12 col-sm-6 col-md-6 col-lg-4">
                  <div style={{
                    background: 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(20px)',
                    borderRadius: '20px',
                    padding: '20px',
                    border: '1px solid rgba(255,255,255,0.2)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                  }}>
                  <ProductCard product={product} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sayfalama */}
      {renderPagination()}
      
      <Footer />
    </>
  );
}
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { add_to_wishlist } from '../../redux/features/wishlist-slice';

export default function ProductCard({ product }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const router = useRouter();
  const dispatch = useDispatch();
  const { wishlist } = useSelector((state) => state.wishlist);
  
  const isWishlisted = wishlist.some(item => item._id === (product.id || product._id) || item.id === (product.id || product._id));

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const handleProductClick = () => {
    // Ürün detay sayfasına yönlendir
    const productId = product.id || product._id;
    console.log('Product clicked:', productId, product.title);
    router.push(`/product/${productId}`);
  };

  const handleAddToWishlist = (e) => {
    e.stopPropagation();
    const productId = product.id || product._id;
    dispatch(add_to_wishlist({
      _id: productId,
      id: productId,
      title: product.title,
      price: product.price,
      originalPrice: product.originalPrice || product.price,
      discount: product.discount || 0,
      image: product.images[0],
      images: product.images
    }));
  };

  return (
    <>
      <div 
        style={{
          background: '#fff',
          borderRadius: '16px',
          border: '1px solid #eee',
          padding: '20px',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          transition: 'all 0.3s ease',
          position: 'relative',
          overflow: 'hidden',
          minHeight: '480px'
        }}
        onMouseEnter={e => {
          e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
          e.currentTarget.style.borderColor = '#4F8EF7';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
          e.currentTarget.style.borderColor = '#eee';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        {/* Product Image Container */}
        <div style={{ 
          position: 'relative', 
          marginBottom: '16px', 
          cursor: 'pointer',
          borderRadius: '8px',
          overflow: 'hidden'
        }} onClick={handleProductClick}>
          
          {/* Main Image */}
          <img
            src={product.images[currentImageIndex]}
            alt={product.title}
            style={{
              width: '100%',
              height: '320px',
              objectFit: 'cover',
              borderRadius: '12px',
              transition: 'all 0.3s ease'
            }}
          />
          
          {/* Navigation Arrows - Sadece hover'da görünür */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '8px',
            transform: 'translateY(-50%)',
            opacity: 0,
            transition: 'opacity 0.3s ease',
            pointerEvents: 'none'
          }} className="nav-arrow-left">
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              style={{
                background: 'rgba(0,0,0,0.6)',
                color: '#fff',
                border: 'none',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontSize: '16px',
                pointerEvents: 'auto'
              }}
            >
              ‹
            </button>
          </div>
          
          <div style={{
            position: 'absolute',
            top: '50%',
            right: '8px',
            transform: 'translateY(-50%)',
            opacity: 0,
            transition: 'opacity 0.3s ease',
            pointerEvents: 'none'
          }} className="nav-arrow-right">
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              style={{
                background: 'rgba(0,0,0,0.6)',
                color: '#fff',
                border: 'none',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontSize: '16px',
                pointerEvents: 'auto'
              }}
            >
              ›
            </button>
          </div>

          {/* Image Navigation Dots */}
          <div style={{
            position: 'absolute',
            bottom: '12px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '6px',
            background: 'rgba(0,0,0,0.3)',
            padding: '6px 12px',
            borderRadius: '20px'
          }}>
            {product.images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex(idx);
                }}
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: currentImageIndex === idx ? '#4F8EF7' : 'rgba(255,255,255,0.7)',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </div>

          {/* Wishlist Button */}
          <button
            onClick={handleAddToWishlist}
            style={{
              position: 'absolute',
              top: '12px',
              left: '12px',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              border: 'none',
              background: 'rgba(255,255,255,0.95)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
              zIndex: 2
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.1)';
            }}
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill={isWishlisted ? '#ff3d57' : 'none'}
              stroke={isWishlisted ? '#ff3d57' : '#333'}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ transition: 'all 0.3s ease' }}
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </button>

          {/* Discount Badge */}
          {product.discount > 0 && (
            <div style={{
              position: 'absolute',
              top: '12px',
              right: '12px',
              background: 'linear-gradient(135deg, #ff3d57, #ff6b7a)',
              color: '#fff',
              padding: '6px 12px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: 700,
              boxShadow: '0 2px 8px rgba(255,61,87,0.3)'
            }}>
              %{product.discount} İndirim
            </div>
          )}

          {/* Hover Effect for Navigation Arrows */}
          <style jsx>{`
            div:hover .nav-arrow-left,
            div:hover .nav-arrow-right {
              opacity: 1 !important;
            }
          `}</style>
        </div>

        {/* Product Info */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <h3 style={{
            fontSize: '18px',
            fontWeight: 700,
            marginBottom: '12px',
            color: '#333',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            height: '48px',
            lineHeight: '24px'
          }}>
            {product.title}
          </h3>

          {/* Features */}
          <div style={{ 
            flex: 1,
            fontSize: '14px',
            color: '#666',
            marginBottom: '16px',
            lineHeight: '20px'
          }}>
            {product.features && product.features.slice(0, 3).map((feature, idx) => (
              <div key={idx} style={{ marginBottom: '6px', display: 'flex', alignItems: 'center' }}>
                <span style={{ color: '#4F8EF7', marginRight: '8px', fontSize: '12px' }}>●</span>
                {feature}
              </div>
            ))}
          </div>

          {/* Price and Button */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 'auto'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {product.discount > 0 && (
                <span style={{
                  textDecoration: 'line-through',
                  color: '#999',
                  fontSize: '13px',
                  marginBottom: '2px'
                }}>
                  {product.originalPrice.toLocaleString('tr-TR')} TL
                </span>
              )}
              <span style={{
                fontWeight: 700,
                fontSize: '20px',
                color: '#333'
              }}>
                ₺{product.price.toLocaleString('tr-TR')} <span style={{ fontSize: '12px', color: '#6b7280', fontWeight: '500' }}>+KDV</span>
              </span>
            </div>

            <button
              onClick={handleProductClick}
              style={{
                padding: '12px 20px',
                background: 'linear-gradient(135deg, #4F8EF7, #43C59E)',
                color: '#fff',
                borderRadius: '10px',
                fontWeight: 700,
                fontSize: '15px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 8px rgba(79,142,247,0.3)'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(79,142,247,0.4)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(79,142,247,0.3)';
              }}
            >
              Sipariş Ver
            </button>
          </div>
        </div>
      </div>

    </>
  );
}
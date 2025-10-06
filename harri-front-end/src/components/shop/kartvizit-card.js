'use client';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import placeholder from '@assets/img/slider/13/slider-1.png';

const Slider = dynamic(() => import('react-slick'), { ssr: false });
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function KartvizitCard({ product }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  const openModal = (image) => {
    setCurrentImage(image);
    setModalOpen(true);
  };

  return (
    <>
      <div className="product__item p-relative">
        <div className="product__thumb">
          <div style={{ width: '100%', marginBottom: 12, position: 'relative' }}>
            <img
              src={product.images[0]}
              alt={product.title}
              style={{
                width: '100%',
                height: '220px',
                objectFit: 'cover',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
              onClick={() => openModal(product.images[0])}
            />
            {product.discount > 0 && (
              <div style={{
                position: 'absolute',
                top: 10,
                right: 10,
                background: '#ff3d57',
                color: '#fff',
                padding: '4px 8px',
                borderRadius: '4px',
                fontSize: '14px',
                fontWeight: 600
              }}>
                %{product.discount} İndirim
              </div>
            )}
          </div>
        </div>

        <div className="product__content" style={{textAlign:'left',padding:'8px 4px'}}>
          <h3 className="product__title" style={{
            fontSize: '16px',
            fontWeight: 500,
            marginBottom: '8px',
            color: '#333',
            height: '40px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical'
          }}>
            {product.title}
          </h3>
          <div className="product__price" style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '12px'
          }}>
            <div style={{display: 'flex', flexDirection: 'column'}}>
              {product.discount > 0 && (
                <span style={{
                  textDecoration: 'line-through',
                  color: '#999',
                  fontSize: '14px',
                  marginBottom: '2px'
                }}>
                  {product.originalPrice.toLocaleString('tr-TR')} TL
                </span>
              )}
              <span style={{
                fontWeight: 700,
                fontSize: '18px',
                color: '#333'
              }}>
                {product.price.toLocaleString('tr-TR')} TL
              </span>
            </div>
            <button
              onClick={() => window.location.href = product.demoUrl}
              style={{
                padding: '8px 16px',
                background: '#4F8EF7',
                color: '#fff',
                borderRadius: '4px',
                fontWeight: 500,
                fontSize: '14px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#3d7de6'}
              onMouseLeave={e => e.currentTarget.style.background = '#4F8EF7'}
            >
              İncele
            </button>
          </div>
        </div>

        {product.discount > 0 && (
          <div className="product__badge d-flex flex-column flex-wrap">
            <span className="product__badge-item has-offer">
              -{product.discount}%
            </span>
          </div>
        )}
      </div>

      {modalOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.75)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px'
          }}
          onClick={() => setModalOpen(false)}
        >
          <img
            src={currentImage}
            alt="Büyük Görsel"
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              borderRadius: '16px',
              boxShadow: '0 4px 32px rgba(0,0,0,0.25)'
            }}
          />
        </div>
      )}
    </>
  );
}
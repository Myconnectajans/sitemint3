"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { add_to_wishlist } from '../../redux/features/wishlist-slice';
import Link from 'next/link';

const Slider2 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const dispatch = useDispatch();
  const { wishlist } = useSelector((state) => state.wishlist);

  const sliderData = [
    {
      id: 1,
      title: "Kurumsal Kartvizit",
      description: "Şık ve etkili kartvizit tasarımı",
      image: "/assets/img/product/product-1.jpg",
      price: 999,
      originalPrice: 1999,
      discount: 50
    },
    {
      id: 2,
      title: "Doktor Kartviziti",
      description: "Sağlık sektörü için özel tasarım",
      image: "/assets/img/product/product-2.jpg",
      price: 999,
      originalPrice: 1999,
      discount: 50
    },
    {
      id: 3,
      title: "Avukat Kartviziti",
      description: "Hukuk bürosu için profesyonel tasarım",
      image: "/assets/img/product/product-3.jpg",
      price: 999,
      originalPrice: 1999,
      discount: 50
    },
    {
      id: 4,
      title: "Mühendis Kartviziti",
      description: "Teknik sektör için modern tasarım",
      image: "/assets/img/product/product-4.jpg",
      price: 999,
      originalPrice: 1999,
      discount: 50
    },
    {
      id: 5,
      title: "Psikolog Kartviziti",
      description: "Sağlık sektörü için özel tasarım",
      image: "/assets/img/product/product-5.jpg",
      price: 999,
      originalPrice: 1999,
      discount: 50
    },
    {
      id: 6,
      title: "Diş Hekimi Kartviziti",
      description: "Diş hekimliği için özel tasarım",
      image: "/assets/img/product/product-6.jpg",
      price: 999,
      originalPrice: 1999,
      discount: 50
    },
    {
      id: 7,
      title: "Klasik Kartvizit",
      description: "Geleneksel ve şık tasarım",
      image: "/assets/img/product/product-7.jpg",
      price: 599,
      originalPrice: 1299,
      discount: 54
    },
    {
      id: 8,
      title: "Özel Kartvizit",
      description: "Kişiye özel tasarım çözümü",
      image: "/assets/img/product/product-8.jpg",
      price: 899,
      originalPrice: 1799,
      discount: 50
    }
  ];

  const nextSlide = () => {
    const maxSlides = Math.max(0, sliderData.length - 4);
    setCurrentSlide(prev => {
      if (prev >= maxSlides) {
        return 0;
      }
      return prev + 1;
    });
  };

  const prevSlide = () => {
    const maxSlides = Math.max(0, sliderData.length - 4);
    setCurrentSlide(prev => {
      if (prev <= 0) {
        return maxSlides;
      }
      return prev - 1;
    });
  };

  const handleAddToWishlist = (item) => {
    dispatch(add_to_wishlist({
      id: `slider2-${item.id}`,
      img: item.image,
      title: item.title,
      price: item.price,
    }));
  };

  const isWishlisted = (itemId) => {
    return wishlist.some(item => item.id === `slider2-${itemId}`);
  };

  const visibleProducts = sliderData.slice(currentSlide, currentSlide + 4);

  return (
    <section style={{
      background: '#fafafa',
      padding: '100px 0',
      margin: '0',
      width: '100%',
      overflow: 'hidden'
    }}>
      <div className="container">
        {/* Başlık */}
        <div style={{
          marginBottom: '60px',
          textAlign: 'left'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: '#0a0a0a',
            margin: '0 0 12px 0',
            letterSpacing: '-0.02em'
          }}>
            Profesyonel Kartvizitler
          </h2>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
            marginTop: '16px',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <span style={{
              fontSize: '14px',
              color: '#1e3a8a',
              background: '#f0f4ff',
              padding: '6px 12px',
              borderRadius: '20px',
              fontWeight: '500'
            }}>✓ Çift taraflı kalın kartvizit</span>
            <span style={{
              fontSize: '14px',
              color: '#1e3a8a',
              background: '#f0f4ff',
              padding: '6px 12px',
              borderRadius: '20px',
              fontWeight: '500'
            }}>✓ Kabartmalı yazılar</span>
            <span style={{
              fontSize: '14px',
              color: '#1e3a8a',
              background: '#f0f4ff',
              padding: '6px 12px',
              borderRadius: '20px',
              fontWeight: '500'
            }}>✓ Selofanlı kaplama</span>
            <span style={{
              fontSize: '14px',
              color: '#1e3a8a',
              background: '#f0f4ff',
              padding: '6px 12px',
              borderRadius: '20px',
              fontWeight: '500'
            }}>✓ 15 gün içerisinde teslimat</span>
            <span style={{
              fontSize: '14px',
              color: '#1e3a8a',
              background: '#f0f4ff',
              padding: '6px 12px',
              borderRadius: '20px',
              fontWeight: '500'
            }}>✓ Modern tasarım garantili</span>
            <span style={{
              fontSize: '14px',
              color: '#1e3a8a',
              background: '#f0f4ff',
              padding: '6px 12px',
              borderRadius: '20px',
              fontWeight: '500'
            }}>✓ Premium kalite kağıt</span>
            <span style={{
              fontSize: '14px',
              color: '#1e3a8a',
              background: '#f0f4ff',
              padding: '6px 12px',
              borderRadius: '20px',
              fontWeight: '500'
            }}>✓ Güvenli alışveriş</span>
            <span style={{
              fontSize: '14px',
              color: '#1e3a8a',
              background: '#f0f4ff',
              padding: '6px 12px',
              borderRadius: '20px',
              fontWeight: '500'
            }}>✓ Ücretsiz tasarım desteği</span>
            <span style={{
              fontSize: '14px',
              color: '#1e3a8a',
              background: '#f0f4ff',
              padding: '6px 12px',
              borderRadius: '20px',
              fontWeight: '500'
            }}>✓ 100% müşteri memnuniyeti</span>
            <span style={{
              fontSize: '14px',
              color: '#1e3a8a',
              background: '#f0f4ff',
              padding: '6px 12px',
              borderRadius: '20px',
              fontWeight: '500'
            }}>✓ Profesyonel görünüm</span>
          </div>
        </div>

        {/* Slider Container */}
        <div style={{
          position: 'relative',
          background: 'transparent',
          padding: '0 80px',
          margin: '0',
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          {/* Ürün Kartları */}
          <div style={{
            display: 'flex',
            gap: '24px',
            justifyContent: 'center',
            alignItems: 'flex-start',
            flexWrap: 'nowrap',
            overflow: 'hidden'
          }}>
            {visibleProducts.map((item) => (
              <div 
                key={item.id}
                style={{
                  width: '240px',
                  height: '360px',
                  background: '#ffffff',
                  borderRadius: '16px',
                  padding: '0',
                  margin: '0',
                  border: '1px solid #e5e7eb',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.08)';
                  e.currentTarget.style.borderColor = '#d1d5db';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = '#e5e7eb';
                }}
              >
                {/* Görsel */}
                <Link href={`/product/${item.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div style={{
                    height: '200px',
                    background: `url(${item.image}) center/cover`,
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    {/* İndirim Badge */}
                    {item.discount > 0 && (
                      <div style={{
                        position: 'absolute',
                        top: '12px',
                        left: '12px',
                        background: '#dc2626',
                        color: '#ffffff',
                        padding: '4px 10px',
                        borderRadius: '6px',
                        fontSize: '12px',
                        fontWeight: '600',
                        zIndex: 2
                      }}>
                        -{item.discount}%
                      </div>
                    )}
                  </div>
                </Link>

                {/* Favorileme Butonu */}
                <button
                  onClick={() => handleAddToWishlist(item)}
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: '#ffffff',
                    border: '1px solid #e5e7eb',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s ease',
                    zIndex: 3
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#0a0a0a';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#e5e7eb';
                  }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill={isWishlisted(item.id) ? '#0a0a0a' : 'none'}
                    stroke={isWishlisted(item.id) ? '#0a0a0a' : '#6b7280'}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </button>

                {/* İçerik */}
                <div style={{
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  flex: 1
                }}>
                  <div>
                    <h3 style={{
                      fontSize: '16px',
                      fontWeight: '600',
                      color: '#0a0a0a',
                      margin: '0 0 12px 0',
                      lineHeight: '1.4'
                    }}>
                      {item.title}
                    </h3>
                  </div>

                  <div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: '12px',
                      borderTop: '1px solid #f3f4f6',
                      marginBottom: '12px'
                    }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'baseline',
                      gap: '8px'
                    }}>
                      <span style={{
                        fontSize: '20px',
                        fontWeight: '700',
                        color: '#0a0a0a'
                      }}>
                        ₺{item.price.toLocaleString('tr-TR')}
                      </span>
                      <span style={{
                        fontSize: '14px',
                        color: '#9ca3af',
                        textDecoration: 'line-through'
                      }}>
                        ₺{item.originalPrice.toLocaleString('tr-TR')}
                      </span>
                    </div>
                    </div>

                    <Link href={`/product/${item.id}`}>
                      <button style={{
                        width: '100%',
                        padding: '10px',
                        background: '#1e3a8a',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '8px',
                        fontSize: '14px',
                        fontWeight: '500',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#1d4ed8';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#1e3a8a';
                      }}>
                      Sipariş Ver
                    </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            style={{
              position: 'absolute',
              left: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '50px',
              height: '50px',
              background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '2px solid rgba(0, 0, 0, 0.08)',
              borderRadius: '16px',
              color: '#000000',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.6)',
              transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
              zIndex: 10
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-50%) translateY(-4px)';
              e.target.style.background = 'linear-gradient(135deg, #ffffff 0%, #ffffff 100%)';
              e.target.style.borderColor = 'rgba(0, 0, 0, 0.12)';
              e.target.style.boxShadow = '0 20px 60px -10px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(-50%)';
              e.target.style.background = 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)';
              e.target.style.borderColor = 'rgba(0, 0, 0, 0.08)';
              e.target.style.boxShadow = '0 10px 40px -10px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.6)';
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <button
            onClick={nextSlide}
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '50px',
              height: '50px',
              background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '2px solid rgba(0, 0, 0, 0.08)',
              borderRadius: '16px',
              color: '#000000',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.6)',
              transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
              zIndex: 10
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-50%) translateY(-4px)';
              e.target.style.background = 'linear-gradient(135deg, #ffffff 0%, #ffffff 100%)';
              e.target.style.borderColor = 'rgba(0, 0, 0, 0.12)';
              e.target.style.boxShadow = '0 20px 60px -10px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(-50%)';
              e.target.style.background = 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)';
              e.target.style.borderColor = 'rgba(0, 0, 0, 0.08)';
              e.target.style.boxShadow = '0 10px 40px -10px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.6)';
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1200px) {
          button[onclick] {
            display: none !important;
          }
          div[style*="padding: 0 80px"] {
            padding: 0 40px !important;
          }
        }
        @media (max-width: 992px) {
          div[style*="width: 240px"] {
            width: calc(50% - 12px) !important;
            min-width: 200px !important;
          }
          div[style*="display: flex"][style*="gap: 24px"] {
            gap: 16px !important;
          }
          div[style*="padding: 0 80px"] {
            padding: 0 20px !important;
          }
        }
        @media (max-width: 768px) {
          div[style*="width: 240px"] {
            width: 100% !important;
            max-width: 300px !important;
            margin: 0 auto !important;
          }
          div[style*="display: flex"][style*="gap: 24px"] {
            flex-direction: column !important;
            align-items: center !important;
            gap: 16px !important;
          }
          div[style*="padding: 0 80px"] {
            padding: 0 15px !important;
          }
          span[style*="fontSize: 14px"] {
            font-size: 12px !important;
            padding: 4px 8px !important;
          }
        }
        @media (max-width: 480px) {
          h2[style*="fontSize: 2.5rem"] {
            font-size: 2rem !important;
          }
          div[style*="padding: 100px 0"] {
            padding: 60px 0 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Slider2;

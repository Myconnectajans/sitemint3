"use client";
import React, { useState } from "react";

const ModernSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderData = [
    {
      id: 1,
      title: "Premium Web Sitesi",
      description: "Modern ve profesyonel web tasarımı",
      image: "/assets/img/product/product-1.jpg",
      price: "₺2,999",
      originalPrice: "₺4,999"
    },
    {
      id: 2,
      title: "Kurumsal Kartvizit",
      description: "Şık ve etkili kartvizit tasarımı",
      image: "/assets/img/product/product-2.jpg",
      price: "₺999",
      originalPrice: "₺1,999"
    },
    {
      id: 3,
      title: "QR Menü Sistemi",
      description: "Temassız menü çözümü",
      image: "/assets/img/product/product-3.jpg",
      price: "₺499",
      originalPrice: "₺999"
    },
    {
      id: 4,
      title: "E-ticaret Paketi",
      description: "Kapsamlı online mağaza",
      image: "/assets/img/product/product-4.jpg",
      price: "₺4,999",
      originalPrice: "₺7,999"
    },
    {
      id: 5,
      title: "Logo Tasarımı",
      description: "Profesyonel logo çözümü",
      image: "/assets/img/product/product-5.jpg",
      price: "₺799",
      originalPrice: "₺1,499"
    },
    {
      id: 6,
      title: "Sosyal Medya Paketi",
      description: "Kapsamlı sosyal medya yönetimi",
      image: "/assets/img/product/product-6.jpg",
      price: "₺1,999",
      originalPrice: "₺3,499"
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

  // Görüntülenecek ürünleri hesapla
  const visibleProducts = sliderData.slice(currentSlide, currentSlide + 4);

  return (
    <section style={{
      background: '#ffffff',
      padding: '60px 0',
      margin: '0',
      width: '100%',
      overflow: 'hidden'
    }}>
      <div className="container">
        {/* Başlık */}
        <div style={{
          marginBottom: '40px',
          textAlign: 'left'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '800',
            color: '#1a1a1a',
            margin: '0',
            letterSpacing: '0.5px'
          }}>
            Özel Seçenekler
          </h2>
        </div>

        {/* Slider Container */}
        <div style={{
          position: 'relative',
          background: '#ffffff',
          borderRadius: '0',
          padding: '0',
          margin: '0'
        }}>
          {/* Ürün Kartları */}
          <div style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            {visibleProducts.map((item) => (
              <div 
                key={item.id}
                style={{
                  width: '280px',
                  background: '#ffffff',
                  borderRadius: '12px',
                  padding: '0',
                  margin: '0',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  border: '1px solid #f0f0f0',
                  overflow: 'hidden',
                  height: '300px',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {/* Görsel */}
                <div style={{
                  height: '180px',
                  background: `url(${item.image}) center/cover`,
                  borderRadius: '12px 12px 0 0',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    background: '#ff4757',
                    color: '#ffffff',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontWeight: '600'
                  }}>
                    %{Math.round((1 - parseFloat(item.price.replace('₺', '').replace(',', '')) / parseFloat(item.originalPrice.replace('₺', '').replace(',', ''))) * 100)}
                  </div>
                </div>

                {/* İçerik */}
                <div style={{
                  padding: '20px',
                  flex: '1',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}>
                  <div>
                    <h3 style={{
                      fontSize: '16px',
                      fontWeight: '700',
                      color: '#1a1a1a',
                      margin: '0 0 8px 0',
                      lineHeight: '1.3'
                    }}>
                      {item.title}
                    </h3>
                    <p style={{
                      fontSize: '13px',
                      color: '#666',
                      margin: '0 0 12px 0',
                      lineHeight: '1.4'
                    }}>
                      {item.description}
                    </p>
                  </div>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}>
                    <div>
                      <span style={{
                        fontSize: '18px',
                        fontWeight: '700',
                        color: '#2ed573'
                      }}>
                        {item.price}
                      </span>
                      <span style={{
                        fontSize: '14px',
                        color: '#999',
                        textDecoration: 'line-through',
                        marginLeft: '8px'
                      }}>
                        {item.originalPrice}
                      </span>
                    </div>
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
              left: '-60px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '50px',
              height: '50px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              border: 'none',
              borderRadius: '50%',
              color: '#ffffff',
              fontSize: '20px',
              fontWeight: '700',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)',
              transition: 'all 0.3s ease',
              zIndex: '10'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-50%) scale(1.1)';
              e.target.style.boxShadow = '0 12px 35px rgba(102, 126, 234, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(-50%) scale(1)';
              e.target.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.3)';
            }}
          >
            ‹
          </button>

          <button
            onClick={nextSlide}
            style={{
              position: 'absolute',
              right: '-60px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '50px',
              height: '50px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              border: 'none',
              borderRadius: '50%',
              color: '#ffffff',
              fontSize: '20px',
              fontWeight: '700',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)',
              transition: 'all 0.3s ease',
              zIndex: '10'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-50%) scale(1.1)';
              e.target.style.boxShadow = '0 12px 35px rgba(102, 126, 234, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(-50%) scale(1)';
              e.target.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.3)';
            }}
          >
            ›
          </button>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1200px) {
          button[onclick] {
            display: none !important;
          }
        }
        @media (max-width: 768px) {
          div[style*="width: 280px"] {
            width: 100% !important;
            max-width: 300px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ModernSlider;
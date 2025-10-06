'use client';
import React, { useRef } from "react";
import { useRouter } from 'next/navigation';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const PopularProducts = () => {
  const router = useRouter();

  // Web Sitesi Template'leri - Gerçek Veriler
  const websiteTemplates = [
    {
      id: 1,
      title: "Kurumsal Web Sitesi",
      price: 2999,
      originalPrice: 3999,
      discount: 25,
      features: ["Responsive Tasarım", "SEO Optimizasyonu", "Hızlı Yükleme", "Modern UI/UX"],
      category: "website",
      profession: "Kurumsal",
      colorPalette: "Modern",
      images: ["/assets/img/product/product-1.jpg", "/assets/img/product/product-2.jpg", "/assets/img/product/product-3.jpg"],
      link: "/web-siteleri"
    },
    {
      id: 2,
      title: "E-ticaret Platformu",
      price: 4999,
      originalPrice: 5999,
      discount: 17,
      features: ["Online Ödeme", "Ürün Yönetimi", "Sipariş Takibi", "Güvenli Alışveriş"],
      category: "website",
      profession: "E-ticaret",
      colorPalette: "Modern",
      images: ["/assets/img/product/product-2.jpg", "/assets/img/product/product-3.jpg", "/assets/img/product/product-4.jpg"],
      link: "/web-siteleri"
    },
    {
      id: 3,
      title: "Restoran Web Sitesi",
      price: 1999,
      originalPrice: 2499,
      discount: 20,
      features: ["Menü Yönetimi", "Rezervasyon Sistemi", "Online Sipariş", "Mobil Uyumlu"],
      category: "website",
      profession: "Restoran",
      colorPalette: "Modern",
      images: ["/assets/img/product/product-3.jpg", "/assets/img/product/product-4.jpg", "/assets/img/product/product-5.jpg"],
      link: "/web-siteleri"
    },
    {
      id: 4,
      title: "Portfolio Web Sitesi",
      price: 1499,
      originalPrice: 1999,
      discount: 25,
      features: ["Galeri Sistemi", "İletişim Formu", "Blog Modülü", "Sosyal Medya Entegrasyonu"],
      category: "website",
      profession: "Portfolio",
      colorPalette: "Modern",
      images: ["/assets/img/product/product-4.jpg", "/assets/img/product/product-5.jpg", "/assets/img/product/product-1.jpg"],
      link: "/web-siteleri"
    },
    {
      id: 5,
      title: "Blog Web Sitesi",
      price: 999,
      originalPrice: 1299,
      discount: 23,
      features: ["İçerik Yönetimi", "SEO Optimizasyonu", "Yorum Sistemi", "RSS Besleme"],
      category: "website",
      profession: "Blog",
      colorPalette: "Modern",
      images: ["/assets/img/product/product-5.jpg", "/assets/img/product/product-1.jpg", "/assets/img/product/product-2.jpg"],
      link: "/web-siteleri"
    },
    {
      id: 6,
      title: "Haber Web Sitesi",
      price: 2499,
      originalPrice: 2999,
      discount: 17,
      features: ["Haber Yönetimi", "Kategori Sistemi", "Arama Fonksiyonu", "Mobil Uyumlu"],
      category: "website",
      profession: "Haber",
      colorPalette: "Modern",
      images: ["/assets/img/product/product-1.jpg", "/assets/img/product/product-2.jpg", "/assets/img/product/product-3.jpg"],
      link: "/web-siteleri"
    },
    {
      id: 7,
      title: "Eğitim Web Sitesi",
      price: 3499,
      originalPrice: 3999,
      discount: 13,
      features: ["Öğrenci Paneli", "Sınav Sistemi", "Video Entegrasyonu", "Sertifika Sistemi"],
      category: "website",
      profession: "Eğitim",
      colorPalette: "Modern",
      images: ["/assets/img/product/product-2.jpg", "/assets/img/product/product-3.jpg", "/assets/img/product/product-4.jpg"],
      link: "/web-siteleri"
    },
    {
      id: 8,
      title: "Sağlık Web Sitesi",
      price: 2999,
      originalPrice: 3499,
      discount: 14,
      features: ["Randevu Sistemi", "Hasta Paneli", "Online Konsültasyon", "Güvenli Veri"],
      category: "website",
      profession: "Sağlık",
      colorPalette: "Modern",
      images: ["/assets/img/product/product-3.jpg", "/assets/img/product/product-4.jpg", "/assets/img/product/product-5.jpg"],
      link: "/web-siteleri"
    },
    {
      id: 9,
      title: "Spa Web Sitesi",
      price: 1799,
      originalPrice: 2299,
      discount: 22,
      features: ["Hizmet Galerisi", "Randevu Sistemi", "Online Ödeme", "Mobil Uyumlu"],
      category: "website",
      profession: "Spa",
      colorPalette: "Modern",
      images: ["/assets/img/product/product-4.jpg", "/assets/img/product/product-5.jpg", "/assets/img/product/product-1.jpg"],
      link: "/web-siteleri"
    },
    {
      id: 10,
      title: "Otel Web Sitesi",
      price: 3999,
      originalPrice: 4999,
      discount: 20,
      features: ["Oda Rezervasyonu", "Online Ödeme", "Müşteri Paneli", "Çoklu Dil Desteği"],
      category: "website",
      profession: "Otel",
      colorPalette: "Modern",
      images: ["/assets/img/product/product-5.jpg", "/assets/img/product/product-1.jpg", "/assets/img/product/product-2.jpg"],
      link: "/web-siteleri"
    }
  ];

  // Kartvizit Tasarımları - Gerçek Veriler
  const businessCardDesigns = [
    {
      id: 1001,
      title: "Modern Kartvizit",
      price: 5,
      originalPrice: 8,
      discount: 38,
      features: ["Yüksek Kalite Baskı", "Profesyonel Tasarım", "Hızlı Teslimat", "Özelleştirilebilir"],
      category: "kartvizit",
      profession: "Modern",
      colorPalette: "Modern",
      images: ["/assets/img/product/product-6.jpg", "/assets/img/product/product-7.jpg", "/assets/img/product/product-8.jpg"],
      link: "/kartvizitler"
    },
    {
      id: 1002,
      title: "Klasik Kartvizit",
      price: 5,
      originalPrice: 8,
      discount: 38,
      features: ["Geleneksel Tasarım", "Kurumsal Görünüm", "Profesyonel Baskı", "Hızlı Teslimat"],
      category: "kartvizit",
      profession: "Klasik",
      colorPalette: "Modern",
      images: ["/assets/img/product/product-7.jpg", "/assets/img/product/product-8.jpg", "/assets/img/product/product-9.jpg"],
      link: "/kartvizitler"
    },
    {
      id: 1003,
      title: "Minimal Kartvizit",
      price: 5,
      originalPrice: 8,
      discount: 38,
      features: ["Sade Tasarım", "Modern Görünüm", "Profesyonel Baskı", "Hızlı Teslimat"],
      category: "kartvizit",
      profession: "Minimal",
      colorPalette: "Modern",
      images: ["/assets/img/product/product-8.jpg", "/assets/img/product/product-9.jpg", "/assets/img/product/product-10.jpg"],
      link: "/kartvizitler"
    },
    {
      id: 1004,
      title: "Lüks Kartvizit",
      price: 8,
      originalPrice: 12,
      discount: 33,
      features: ["Premium Malzeme", "Lüks Tasarım", "Özel Baskı", "Hızlı Teslimat"],
      category: "kartvizit",
      profession: "Lüks",
      colorPalette: "Modern",
      images: ["/assets/img/product/product-9.jpg", "/assets/img/product/product-10.jpg", "/assets/img/product/product-6.jpg"],
      link: "/kartvizitler"
    },
    {
      id: 1005,
      title: "Renkli Kartvizit",
      price: 6,
      originalPrice: 9,
      discount: 33,
      features: ["Renkli Tasarım", "Dikkat Çekici", "Profesyonel Baskı", "Hızlı Teslimat"],
      category: "kartvizit",
      profession: "Renkli",
      colorPalette: "Modern",
      images: ["/assets/img/product/product-10.jpg", "/assets/img/product/product-6.jpg", "/assets/img/product/product-7.jpg"],
      link: "/kartvizitler"
    },
    {
      id: 1006,
      title: "Siyah-Beyaz Kartvizit",
      price: 4,
      originalPrice: 6,
      discount: 33,
      features: ["Klasik Renk", "Profesyonel Görünüm", "Ekonomik Fiyat", "Hızlı Teslimat"],
      category: "kartvizit",
      profession: "Siyah-Beyaz",
      colorPalette: "Modern",
      images: ["/assets/img/product/product-6.jpg", "/assets/img/product/product-7.jpg", "/assets/img/product/product-8.jpg"],
      link: "/kartvizitler"
    },
    {
      id: 1007,
      title: "Vintage Kartvizit",
      price: 7,
      originalPrice: 10,
      discount: 30,
      features: ["Vintage Tasarım", "Retro Görünüm", "Özel Baskı", "Hızlı Teslimat"],
      category: "kartvizit",
      profession: "Vintage",
      colorPalette: "Modern",
      images: ["/assets/img/product/product-7.jpg", "/assets/img/product/product-8.jpg", "/assets/img/product/product-9.jpg"],
      link: "/kartvizitler"
    },
    {
      id: 1008,
      title: "Şeffaf Kartvizit",
      price: 10,
      originalPrice: 15,
      discount: 33,
      features: ["Şeffaf Malzeme", "Modern Tasarım", "Özel Baskı", "Hızlı Teslimat"],
      category: "kartvizit",
      profession: "Şeffaf",
      colorPalette: "Modern",
      images: ["/assets/img/product/product-8.jpg", "/assets/img/product/product-9.jpg", "/assets/img/product/product-10.jpg"],
      link: "/kartvizitler"
    },
    {
      id: 1009,
      title: "Metal Kartvizit",
      price: 15,
      originalPrice: 20,
      discount: 25,
      features: ["Metal Malzeme", "Lüks Görünüm", "Özel Baskı", "Hızlı Teslimat"],
      category: "kartvizit",
      profession: "Metal",
      colorPalette: "Modern",
      images: ["/assets/img/product/product-9.jpg", "/assets/img/product/product-10.jpg", "/assets/img/product/product-6.jpg"],
      link: "/kartvizitler"
    },
    {
      id: 1010,
      title: "Ahşap Kartvizit",
      price: 12,
      originalPrice: 18,
      discount: 33,
      features: ["Ahşap Malzeme", "Doğal Görünüm", "Özel Baskı", "Hızlı Teslimat"],
      category: "kartvizit",
      profession: "Ahşap",
      colorPalette: "Modern",
      images: ["/assets/img/product/product-10.jpg", "/assets/img/product/product-6.jpg", "/assets/img/product/product-7.jpg"],
      link: "/kartvizitler"
    }
  ];

  // QR Menü Tasarımları - Gerçek Veriler
  const qrMenuDesigns = [
    {
      id: 2001,
      title: "Restoran QR Menüsü",
      price: 299,
      originalPrice: 399,
      discount: 25,
      features: ["Dijital Menü", "QR Kod Entegrasyonu", "Güncel Fiyatlar", "Mobil Uyumlu"],
      category: "qr-menu",
      profession: "Restoran",
      colorPalette: "Modern",
      images: ["/assets/img/product/product-6.jpg", "/assets/img/product/product-7.jpg", "/assets/img/product/product-8.jpg"],
      link: "/qr-menuler"
    },
    {
      id: 2002,
      title: "Cafe QR Menüsü",
      price: 199,
      originalPrice: 299,
      discount: 33,
      features: ["Kahve Menüsü", "QR Kod Entegrasyonu", "Güncel Fiyatlar", "Mobil Uyumlu"],
      category: "qr-menu",
      profession: "Cafe",
      colorPalette: "Modern",
      images: ["/assets/img/product/product-7.jpg", "/assets/img/product/product-8.jpg", "/assets/img/product/product-9.jpg"],
      link: "/qr-menuler"
    },
    {
      id: 2003,
      title: "Bar QR Menüsü",
      price: 249,
      originalPrice: 349,
      discount: 29,
      features: ["İçecek Menüsü", "QR Kod Entegrasyonu", "Güncel Fiyatlar", "Mobil Uyumlu"],
      category: "qr-menu",
      profession: "Bar",
      colorPalette: "Modern",
      images: ["/assets/img/product/product-8.jpg", "/assets/img/product/product-9.jpg", "/assets/img/product/product-10.jpg"],
      link: "/qr-menuler"
    },
    {
      id: 2004,
      title: "Pizza QR Menüsü",
      price: 179,
      originalPrice: 279,
      discount: 36,
      features: ["Pizza Menüsü", "QR Kod Entegrasyonu", "Güncel Fiyatlar", "Mobil Uyumlu"],
      category: "qr-menu",
      profession: "Pizza",
      colorPalette: "Modern",
      images: ["/assets/img/product/product-9.jpg", "/assets/img/product/product-10.jpg", "/assets/img/product/product-6.jpg"],
      link: "/qr-menuler"
    },
    {
      id: 2005,
      title: "Burger QR Menüsü",
      price: 159,
      originalPrice: 259,
      discount: 39,
      features: ["Burger Menüsü", "QR Kod Entegrasyonu", "Güncel Fiyatlar", "Mobil Uyumlu"],
      category: "qr-menu",
      profession: "Burger",
      colorPalette: "Modern",
      images: ["/assets/img/product/product-10.jpg", "/assets/img/product/product-6.jpg", "/assets/img/product/product-7.jpg"],
      link: "/qr-menuler"
    },
    {
      id: 2006,
      title: "Döner QR Menüsü",
      price: 149,
      originalPrice: 249,
      discount: 40,
      features: ["Döner Menüsü", "QR Kod Entegrasyonu", "Güncel Fiyatlar", "Mobil Uyumlu"],
      category: "qr-menu",
      profession: "Döner",
      colorPalette: "Modern",
      images: ["/assets/img/product/product-6.jpg", "/assets/img/product/product-7.jpg", "/assets/img/product/product-8.jpg"],
      link: "/qr-menuler"
    },
    {
      id: 2007,
      title: "Balık QR Menüsü",
      price: 299,
      originalPrice: 399,
      discount: 25,
      features: ["Balık Menüsü", "QR Kod Entegrasyonu", "Güncel Fiyatlar", "Mobil Uyumlu"],
      category: "qr-menu",
      profession: "Balık",
      colorPalette: "Modern",
      images: ["/assets/img/product/product-7.jpg", "/assets/img/product/product-8.jpg", "/assets/img/product/product-9.jpg"],
      link: "/qr-menuler"
    },
    {
      id: 2008,
      title: "Tatlı QR Menüsü",
      price: 129,
      originalPrice: 229,
      discount: 44,
      features: ["Tatlı Menüsü", "QR Kod Entegrasyonu", "Güncel Fiyatlar", "Mobil Uyumlu"],
      category: "qr-menu",
      profession: "Tatlı",
      colorPalette: "Modern",
      images: ["/assets/img/product/product-8.jpg", "/assets/img/product/product-9.jpg", "/assets/img/product/product-10.jpg"],
      link: "/qr-menuler"
    },
    {
      id: 2009,
      title: "İçecek QR Menüsü",
      price: 99,
      originalPrice: 199,
      discount: 50,
      features: ["İçecek Menüsü", "QR Kod Entegrasyonu", "Güncel Fiyatlar", "Mobil Uyumlu"],
      category: "qr-menu",
      profession: "İçecek",
      colorPalette: "Modern",
      images: ["/assets/img/product/product-9.jpg", "/assets/img/product/product-10.jpg", "/assets/img/product/product-6.jpg"],
      link: "/qr-menuler"
    },
    {
      id: 2010,
      title: "Kahvaltı QR Menüsü",
      price: 169,
      originalPrice: 269,
      discount: 37,
      features: ["Kahvaltı Menüsü", "QR Kod Entegrasyonu", "Güncel Fiyatlar", "Mobil Uyumlu"],
      category: "qr-menu",
      profession: "Kahvaltı",
      colorPalette: "Modern",
      images: ["/assets/img/product/product-10.jpg", "/assets/img/product/product-6.jpg", "/assets/img/product/product-7.jpg"],
      link: "/qr-menuler"
    }
  ];

  const handleCategoryClick = (link) => {
    router.push(link);
  };

  const handleProductClick = (product) => {
    router.push(product.link);
  };

  return (
    <>
      <style jsx>{`
        .jsx-5ad2749d49465def {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
          width: 0 !important;
          height: 0 !important;
          overflow: hidden !important;
        }
        span[class*="jsx-5ad2749d49465def"] {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
        }
        .swiper {
          background: #ffffff !important;
          box-shadow: none !important;
          border: none !important;
        }
        .swiper-wrapper {
          background: #ffffff !important;
          box-shadow: none !important;
          border: none !important;
        }
        .swiper-slide {
          background: #ffffff !important;
          box-shadow: none !important;
          border: none !important;
        }
        .swiper-slide-active {
          background: #ffffff !important;
          box-shadow: none !important;
          border: none !important;
        }
        .swiper-slide-next {
          background: #ffffff !important;
          box-shadow: none !important;
          border: none !important;
        }
        .swiper-slide-prev {
          background: #ffffff !important;
          box-shadow: none !important;
          border: none !important;
        }
        .swiper-container {
          background: #ffffff !important;
          box-shadow: none !important;
          border: none !important;
        }
        .swiper-container::before,
        .swiper-container::after {
          display: none !important;
        }
        .swiper::before,
        .swiper::after {
          display: none !important;
        }
        .swiper-wrapper::before,
        .swiper-wrapper::after {
          display: none !important;
        }
        .swiper-slide::before,
        .swiper-slide::after {
          display: none !important;
        }
        .swiper-slide-active::before,
        .swiper-slide-active::after {
          display: none !important;
        }
        .swiper-slide-next::before,
        .swiper-slide-next::after {
          display: none !important;
        }
        .swiper-slide-prev::before,
        .swiper-slide-prev::after {
          display: none !important;
        }
        .websites-swiper,
        .cards-swiper,
        .qr-swiper {
          background: #ffffff !important;
          box-shadow: none !important;
          border: none !important;
        }
        .websites-swiper::before,
        .websites-swiper::after,
        .cards-swiper::before,
        .cards-swiper::after,
        .qr-swiper::before,
        .qr-swiper::after {
          display: none !important;
        }
        @media (max-width: 768px) {
          .swiper-button-prev, .swiper-button-next {
            display: none !important;
          }
        }
        @media (max-width: 1024px) {
          .swiper-button-prev, .swiper-button-next {
            display: none !important;
          }
        }
      `}</style>
      <section className="product__popular-area pb-20" style={{ 
        paddingTop: '100px',
        background: '#ffffff',
        position: 'relative'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row">
            <div className="col-12">
              <div className="section__title-wrapper-13 mb-60 text-center">
                <div style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: '#fff',
                  padding: '8px 20px',
                  borderRadius: '25px',
                  fontSize: '14px',
                  fontWeight: '600',
                  marginBottom: '20px',
                  letterSpacing: '0.5px'
                }}>
                  ✨ POPÜLER ÜRÜNLER
                </div>
                <h3 className="section__title-13" style={{
                  fontSize: '42px',
                  fontWeight: '800',
                  background: 'linear-gradient(135deg, #2c3e50 0%, #667eea 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '20px',
                  letterSpacing: '-0.5px'
                }}>
                  En Çok Tercih Edilen Ürünler
                </h3>
                <p style={{
                  fontSize: '18px',
                  color: '#6c757d',
                  maxWidth: '700px',
                  margin: '0 auto',
                  lineHeight: '1.6',
                  fontWeight: '400'
                }}>
                  Müşterilerimizin en çok beğendiği ve tercih ettiği ürünlerimizi keşfedin. 
                  Her kategori için özenle seçilmiş en kaliteli tasarımlar.
                </p>
              </div>
            </div>
          </div>

          {/* Bölüm 1: Popüler Web Siteleri */}
          <div style={{ 
            marginBottom: '100px',
            background: '#ffffff'
          }}>
            {/* Popüler Web Siteleri Başlığı ve Tümünü Görüntüle Butonu */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '40px'
            }}>
              <h3 style={{
                fontSize: '36px',
                fontWeight: '800',
                color: '#2c3e50',
                margin: '0',
                letterSpacing: '-0.5px'
              }}>
                Popüler Web Siteleri
              </h3>
              <button
                onClick={() => handleCategoryClick('/shop')}
                style={{
                  padding: '12px 24px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '25px',
                  fontWeight: '700',
                  fontSize: '14px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
                  letterSpacing: '0.5px'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.4)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.3)';
                }}
              >
                Tümünü Görüntüle →
              </button>
            </div>

            {/* Popüler Web Siteleri Ürün Carousel */}
            <div style={{ 
              position: 'relative', 
              background: '#ffffff',
              boxShadow: 'none',
              border: 'none',
              overflow: 'hidden'
            }}>
              <Swiper
                modules={[]}
                slidesPerView={3}
                spaceBetween={30}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 25,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
                className="websites-swiper"
                style={{ 
                  padding: '0', 
                  background: '#ffffff',
                  boxShadow: 'none',
                  border: 'none',
                  margin: '0'
                }}
              >
                {websiteTemplates.slice(0, 9).map((product) => (
                  <SwiperSlide key={product.id} style={{ 
                    background: '#ffffff',
                    boxShadow: 'none',
                    border: 'none',
                    margin: '0',
                    padding: '0'
                  }}>
                    <div 
                      onClick={() => handleProductClick(product)}
                      style={{
                        background: '#fff',
                        borderRadius: '16px',
                        padding: '24px',
                        boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column'
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.transform = 'translateY(-8px)';
                        e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.2)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.12)';
                      }}
                    >
                      
                      {/* Ürün Görseli */}
                      <div style={{
                        width: '100%',
                        height: '220px',
                        background: '#f8f9fa',
                        borderRadius: '12px',
                        marginBottom: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                        position: 'relative',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                      }}>
                        {product.images && product.images[0] ? (
                          <img 
                            src={product.images[0]} 
                            alt={product.title}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              borderRadius: '12px'
                            }}
                          />
                        ) : (
                          <div style={{ 
                            fontSize: '48px', 
                            color: '#6c757d',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}>
                            🏢
                          </div>
                        )}
                      </div>

                      {/* Ürün Adı */}
                      <h6 style={{
                        fontSize: '18px',
                        fontWeight: '700',
                        color: '#2c3e50',
                        marginBottom: '8px',
                        lineHeight: '1.4'
                      }}>
                        {product.title}
                      </h6>

                      {/* Adet Bilgisi */}
                      <p style={{
                        fontSize: '14px',
                        color: '#6c757d',
                        marginBottom: '12px',
                        fontWeight: '500'
                      }}>
                        100 adet
                      </p>

                      {/* Fiyat ve KDV */}
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        marginBottom: '12px'
                      }}>
                        <span style={{
                          fontSize: '20px',
                          fontWeight: '800',
                          color: '#2c3e50'
                        }}>
                          {product.price},00 TL
                        </span>
                        <span style={{
                          fontSize: '14px',
                          color: '#6c757d',
                          fontWeight: '500'
                        }}>
                          +KDV
                        </span>
                      </div>

                      {/* 5 Yıldız Puanlama */}
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        marginTop: 'auto'
                      }}>
                        <div style={{ display: 'flex', gap: '3px' }}>
                          {[1, 2, 3, 4, 5].map((star) => (
                            <span key={star} style={{
                              fontSize: '16px',
                              color: '#ffc107'
                            }}>
                              ★
                            </span>
                          ))}
                        </div>
                        <span style={{
                          fontSize: '14px',
                          color: '#6c757d',
                          fontWeight: '500'
                        }}>
                          (44)
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Modern Navigasyon Butonları - Dışarıda */}
              <button
                className="swiper-button-prev swiper-button-prev-websites"
                style={{
                  position: 'absolute',
                  left: '-80px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '50px',
                  height: '50px',
                  background: 'transparent',
                  border: 'none',
                  borderRadius: '0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  zIndex: 10,
                  boxShadow: 'none'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                }}
              >
                <span style={{ 
                  fontSize: '24px', 
                  color: '#000',
                  fontWeight: '700'
                }}>‹</span>
              </button>
              
              <button
                className="swiper-button-next swiper-button-next-websites"
                style={{
                  position: 'absolute',
                  right: '-80px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '50px',
                  height: '50px',
                  background: 'transparent',
                  border: 'none',
                  borderRadius: '0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  zIndex: 10,
                  boxShadow: 'none'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                }}
              >
                <span style={{ 
                  fontSize: '24px', 
                  color: '#000',
                  fontWeight: '700'
                }}>›</span>
              </button>
            </div>
          </div>

          {/* Bölüm 2: Popüler Kartvizitler */}
          <div style={{ 
            marginBottom: '100px',
            background: '#ffffff'
          }}>
            {/* Popüler Kartvizitler Başlığı ve Tümünü Görüntüle Butonu */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '40px'
            }}>
              <h3 style={{
                fontSize: '36px',
                fontWeight: '800',
                color: '#2c3e50',
                margin: '0',
                letterSpacing: '-0.5px'
              }}>
                Popüler Kartvizitler
              </h3>
              <button
                onClick={() => handleCategoryClick('/kartvizitler')}
                style={{
                  padding: '12px 24px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '25px',
                  fontWeight: '700',
                  fontSize: '14px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
                  letterSpacing: '0.5px'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.4)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.3)';
                }}
              >
                Tümünü Görüntüle →
              </button>
            </div>

            {/* Popüler Kartvizitler Ürün Carousel */}
            <div style={{ 
              position: 'relative', 
              background: '#ffffff',
              boxShadow: 'none',
              border: 'none',
              overflow: 'hidden'
            }}>
              <Swiper
                modules={[]}
                slidesPerView={3}
                spaceBetween={30}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 25,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
                className="cards-swiper"
                style={{ 
                  padding: '0', 
                  background: '#ffffff',
                  boxShadow: 'none',
                  border: 'none',
                  margin: '0'
                }}
              >
                {businessCardDesigns.slice(0, 9).map((product) => (
                  <SwiperSlide key={product.id} style={{ 
                    background: '#ffffff',
                    boxShadow: 'none',
                    border: 'none',
                    margin: '0',
                    padding: '0'
                  }}>
                    <div 
                      onClick={() => handleProductClick(product)}
                      style={{
                        background: '#fff',
                        borderRadius: '16px',
                        padding: '24px',
                        boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column'
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.transform = 'translateY(-8px)';
                        e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.2)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.12)';
                      }}
                    >
                      
                      {/* Ürün Görseli */}
                      <div style={{
                        width: '100%',
                        height: '220px',
                        background: '#f8f9fa',
                        borderRadius: '12px',
                        marginBottom: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                        position: 'relative',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                      }}>
                        {product.images && product.images[0] ? (
                          <img 
                            src={product.images[0]} 
                            alt={product.title}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              borderRadius: '12px'
                            }}
                          />
                        ) : (
                          <div style={{ 
                            fontSize: '48px', 
                            color: '#6c757d',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}>
                            💼
                          </div>
                        )}
                      </div>

                      {/* Ürün Adı */}
                      <h6 style={{
                        fontSize: '18px',
                        fontWeight: '700',
                        color: '#2c3e50',
                        marginBottom: '8px',
                        lineHeight: '1.4'
                      }}>
                        {product.title}
                      </h6>

                      {/* Adet Bilgisi */}
                      <p style={{
                        fontSize: '14px',
                        color: '#6c757d',
                        marginBottom: '12px',
                        fontWeight: '500'
                      }}>
                        100 adet
                      </p>

                      {/* Fiyat ve KDV */}
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        marginBottom: '12px'
                      }}>
                        <span style={{
                          fontSize: '20px',
                          fontWeight: '800',
                          color: '#2c3e50'
                        }}>
                          {product.price},00 TL
                        </span>
                        <span style={{
                          fontSize: '14px',
                          color: '#6c757d',
                          fontWeight: '500'
                        }}>
                          +KDV
                        </span>
                      </div>

                      {/* 5 Yıldız Puanlama */}
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        marginTop: 'auto'
                      }}>
                        <div style={{ display: 'flex', gap: '3px' }}>
                          {[1, 2, 3, 4, 5].map((star) => (
                            <span key={star} style={{
                              fontSize: '16px',
                              color: '#ffc107'
                            }}>
                              ★
                            </span>
                          ))}
                        </div>
                        <span style={{
                          fontSize: '14px',
                          color: '#6c757d',
                          fontWeight: '500'
                        }}>
                          (44)
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Modern Navigasyon Butonları - Dışarıda */}
              <button
                className="swiper-button-prev swiper-button-prev-cards"
                style={{
                  position: 'absolute',
                  left: '-80px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '50px',
                  height: '50px',
                  background: 'transparent',
                  border: 'none',
                  borderRadius: '0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  zIndex: 10,
                  boxShadow: 'none'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                }}
              >
                <span style={{ 
                  fontSize: '24px', 
                  color: '#000',
                  fontWeight: '700'
                }}>‹</span>
              </button>
              
              <button
                className="swiper-button-next swiper-button-next-cards"
                style={{
                  position: 'absolute',
                  right: '-80px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '50px',
                  height: '50px',
                  background: 'transparent',
                  border: 'none',
                  borderRadius: '0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  zIndex: 10,
                  boxShadow: 'none'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                }}
              >
                <span style={{ 
                  fontSize: '24px', 
                  color: '#000',
                  fontWeight: '700'
                }}>›</span>
              </button>
            </div>
          </div>

          {/* Bölüm 3: Popüler QR Menüler */}
          <div style={{ 
            marginBottom: '100px',
            background: '#ffffff'
          }}>
            {/* Popüler QR Menüler Başlığı ve Tümünü Görüntüle Butonu */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '40px'
            }}>
              <h3 style={{
                fontSize: '36px',
                fontWeight: '800',
                color: '#2c3e50',
                margin: '0',
                letterSpacing: '-0.5px'
              }}>
                Popüler QR Menüler
              </h3>
              <button
                onClick={() => handleCategoryClick('/qr-menuler')}
                style={{
                  padding: '12px 24px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '25px',
                  fontWeight: '700',
                  fontSize: '14px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
                  letterSpacing: '0.5px'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.4)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.3)';
                }}
              >
                Tümünü Görüntüle →
              </button>
            </div>

            {/* Popüler QR Menüler Ürün Carousel */}
            <div style={{ 
              position: 'relative', 
              background: '#ffffff',
              boxShadow: 'none',
              border: 'none',
              overflow: 'hidden'
            }}>
              <Swiper
                modules={[]}
                slidesPerView={3}
                spaceBetween={30}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 25,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
                className="qr-swiper"
                style={{ 
                  padding: '0', 
                  background: '#ffffff',
                  boxShadow: 'none',
                  border: 'none',
                  margin: '0'
                }}
              >
                {qrMenuDesigns.slice(0, 9).map((product) => (
                  <SwiperSlide key={product.id} style={{ 
                    background: '#ffffff',
                    boxShadow: 'none',
                    border: 'none',
                    margin: '0',
                    padding: '0'
                  }}>
                    <div 
                      onClick={() => handleProductClick(product)}
                      style={{
                        background: '#fff',
                        borderRadius: '16px',
                        padding: '24px',
                        boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column'
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.transform = 'translateY(-8px)';
                        e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.2)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.12)';
                      }}
                    >
                      
                      {/* Ürün Görseli */}
                      <div style={{
                        width: '100%',
                        height: '220px',
                        background: '#f8f9fa',
                        borderRadius: '12px',
                        marginBottom: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                        position: 'relative',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                      }}>
                        {product.images && product.images[0] ? (
                          <img 
                            src={product.images[0]} 
                            alt={product.title}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              borderRadius: '12px'
                            }}
                          />
                        ) : (
                          <div style={{ 
                            fontSize: '48px', 
                            color: '#6c757d',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}>
                            📱
                          </div>
                        )}
                      </div>

                      {/* Ürün Adı */}
                      <h6 style={{
                        fontSize: '18px',
                        fontWeight: '700',
                        color: '#2c3e50',
                        marginBottom: '8px',
                        lineHeight: '1.4'
                      }}>
                        {product.title}
                      </h6>

                      {/* Adet Bilgisi */}
                      <p style={{
                        fontSize: '14px',
                        color: '#6c757d',
                        marginBottom: '12px',
                        fontWeight: '500'
                      }}>
                        100 adet
                      </p>

                      {/* Fiyat ve KDV */}
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        marginBottom: '12px'
                      }}>
                        <span style={{
                          fontSize: '20px',
                          fontWeight: '800',
                          color: '#2c3e50'
                        }}>
                          {product.price},00 TL
                        </span>
                        <span style={{
                          fontSize: '14px',
                          color: '#6c757d',
                          fontWeight: '500'
                        }}>
                          +KDV
                        </span>
                      </div>

                      {/* 5 Yıldız Puanlama */}
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        marginTop: 'auto'
                      }}>
                        <div style={{ display: 'flex', gap: '3px' }}>
                          {[1, 2, 3, 4, 5].map((star) => (
                            <span key={star} style={{
                              fontSize: '16px',
                              color: '#ffc107'
                            }}>
                              ★
                            </span>
                          ))}
                        </div>
                        <span style={{
                          fontSize: '14px',
                          color: '#6c757d',
                          fontWeight: '500'
                        }}>
                          (44)
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Modern Navigasyon Butonları - Dışarıda */}
              <button
                className="swiper-button-prev swiper-button-prev-qr"
                style={{
                  position: 'absolute',
                  left: '-80px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '50px',
                  height: '50px',
                  background: 'transparent',
                  border: 'none',
                  borderRadius: '0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  zIndex: 10,
                  boxShadow: 'none'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                }}
              >
                <span style={{ 
                  fontSize: '24px', 
                  color: '#000',
                  fontWeight: '700'
                }}>‹</span>
              </button>
              
              <button
                className="swiper-button-next swiper-button-next-qr"
                style={{
                  position: 'absolute',
                  right: '-80px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '50px',
                  height: '50px',
                  background: 'transparent',
                  border: 'none',
                  borderRadius: '0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  zIndex: 10,
                  boxShadow: 'none'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                }}
              >
                <span style={{ 
                  fontSize: '24px', 
                  color: '#000',
                  fontWeight: '700'
                }}>›</span>
              </button>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default PopularProducts;
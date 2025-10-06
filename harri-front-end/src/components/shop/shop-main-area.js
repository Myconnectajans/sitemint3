'use client';
import { useState } from "react";
import placeholder from '@assets/img/slider/13/slider-1.png';
import qrMenuImage from '@assets/img/product/product-3.jpg';
import React from "react";
// internal
import Wrapper from "@layout/wrapper";
import Header from "@layout/header";
import ShopCta from "@components/cta";
import Footer from "@layout/footer";
import ShopBreadcrumb from "@components/common/breadcrumb/shop-breadcrumb";
import ShopArea from "@components/shop/shop-area";
import ErrorMessage from "@components/error-message/error";
import { useGetShowingProductsQuery } from "src/redux/features/productApi";
import ShopLoader from "@components/loader/shop-loader";

export default function ShopMainArea({ Category, category, brand, priceMin, max, priceMax, color, hideFilters, isQRMenu, isWebSite, isBusinessCard }) {
  const [accepted, setAccepted] = useState(true); // Varsayılan olarak kabul edilmiş
  const { data: products, isError, isLoading } = useGetShowingProductsQuery();
  const [shortValue,setShortValue] = useState("");

  // generate mock products to use when API is empty or errors
  const createMockProducts = (count = 500) => {
    // QR menü için sadece 20 ürün
    if (isQRMenu) {
      count = 20;
    }
    // Web Siteleri için 500 ürün
    if (isWebSite) {
      count = 500;
    }
    // Kartvizitler için 1000 ürün
    if (isBusinessCard) {
      count = 1000;
    }
    return Array.from({ length: count }).map((_, idx) => {
      const i = idx + 1;
      // special pricing for kartvizit and magnet categories
      if (category === 'kartvizit' || category === 'magnet') {
        const originalPrice = 3499;
        const mainPrice = 2499;
        // 3 mockup görseli
        const mockImages = [placeholder, placeholder, placeholder];
        return {
          _id: `kartvizit-${i}`,
          title: `Modern Kartvizit ${i}`,
          images: mockImages,
          originalPrice,
          discount: Math.round(((originalPrice - mainPrice) / originalPrice) * 100),
          price: mainPrice,
          itemInfo: i % 5 === 0 ? 'latest-product' : '',
          type: 'kartvizit',
          demoUrl: `https://example.com/demo/kartvizit/${i}`,
          brand: { name: 'Harri' },
          colors: ['mavi','yeşil','siyah','beyaz','kırmızı','sarı']
        };
      }

      // QR Menü için özel fiyatlandırma
      if (isQRMenu) {
        const originalPrice = 2599;
        const price = 1499;
        const discount = Math.round(((originalPrice - price) / originalPrice) * 100);
        
        return {
          _id: `qr-menu-${i}`,
          title: `QR Menü Tema ${i}`,
          images: [qrMenuImage, qrMenuImage, qrMenuImage],
          originalPrice,
          discount,
          price,
          itemInfo: i % 5 === 0 ? 'latest-product' : '',
          type: 'qr-menu',
          demoUrl: `https://example.com/demo/qr-menu/${i}`,
          brand: { name: 'Harri' },
          colors: ['blue','green','black']
        };
      }

      // Web Siteleri için özel fiyatlandırma
      if (isWebSite) {
        const originalPrice = 3999;
        const price = 2299;
        const discount = Math.round(((originalPrice - price) / originalPrice) * 100);
        
        return {
          _id: `website-${i}`,
          title: `Web Site Teması ${i}`,
          images: [placeholder, placeholder, placeholder],
          originalPrice,
          discount,
          price,
          itemInfo: i % 5 === 0 ? 'latest-product' : '',
          type: 'website',
          demoUrl: `https://example.com/demo/website/${i}`,
          brand: { name: 'Harri' },
          colors: ['blue','green','black']
        };
      }

      // Kartvizitler için özel fiyatlandırma
      if (isBusinessCard) {
        const originalPrice = 1999;
        const price = 999;
        const discount = Math.round(((originalPrice - price) / originalPrice) * 100);
        
        return {
          _id: `mock-${i}`,
          title: `Profesyonel Kartvizit ${i}`,
          images: [placeholder, placeholder, placeholder],
          originalPrice,
          discount,
          price,
          itemInfo: i % 5 === 0 ? 'latest-product' : '',
          type: 'business-card',
          demoUrl: `https://example.com/demo/businesscard/${i}`,
          brand: { name: 'Harri' },
          colors: ['blue','green','black']
        };
      }

      const price = 49.99 + (i % 50);
      const discount = i % 7 === 0 ? 10 : 0;
      return {
        _id: `mock-${i}`,
        title: `Modern Tema ${i}`,
        images: [placeholder, placeholder, placeholder],
        originalPrice: Number(price.toFixed(2)),
        discount,
        price: discount > 0 ? Number((price * (1 - discount / 100)).toFixed(2)) : Number(price.toFixed(2)),
        itemInfo: i % 5 === 0 ? 'latest-product' : '',
        type: 'website',
        demoUrl: `https://example.com/demo/${i}`,
        brand: { name: 'Harri' },
        colors: ['blue','green','black']
      };
    });
  };
  const mockProducts = createMockProducts(500);

  // selectShortHandler
  const selectShortHandler = (e) => {
    setShortValue(e.value);
  };

  // decide what to render
  let content = null;
  if (!accepted) {
    content = (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(0,0,0,0.35)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{
          background: '#fff',
          borderRadius: 16,
          boxShadow: '0 2px 24px rgba(0,0,0,0.12)',
          padding: '40px 32px',
          maxWidth: 480,
          textAlign: 'center',
        }}>
          <h2 style={{fontWeight:700, fontSize:22, marginBottom:18}}>Bilgilendirme</h2>
          <p style={{fontSize:16, marginBottom:32}}>
            Sitenizde size belirtilen tema üzerinden <b>Renk - Yazı - Logo - Görselleri</b> değiştirebilirsiniz.<br /><br />
            Satın alım sonrası karşınıza çıkacak formda tüm bilgileri doldurduktan sonra <b>3 gün içerisinde</b> siteniz istediğiniz değişiklikler yapılarak yayınlanacaktır.
          </p>
          <button
            onClick={() => setAccepted(true)}
            style={{
              padding: '12px 32px',
              background: 'linear-gradient(90deg, #4F8EF7 0%, #43C59E 100%)',
              color: '#fff',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: 18,
              border: 'none',
              boxShadow: '0 2px 8px rgba(79,142,247,0.12)',
              cursor: 'pointer',
              transition: 'background 0.2s',
            }}
          >
            Kabul Ediyorum
          </button>
        </div>
      </div>
    );
  } else {
    if (isLoading) {
      content = <ShopLoader loading={isLoading} />;
    }

    // choose data source: real products if available, otherwise use mocks
    const realProducts = products?.products ?? [];
    const displayedProducts = (!isLoading && (isError || realProducts.length === 0)) ? mockProducts : realProducts;

    if (!isLoading && displayedProducts.length > 0) {
      let all_products = displayedProducts;
      let product_items = all_products;
      if (Category) {
        product_items = product_items.filter(
          (product) =>
            product.parent.toLowerCase().replace("&", "").split(" ").join("-") ===
            Category
        );
      }
      if (category) {
        product_items = product_items.filter(
          (product) =>
            product.children &&
              product.children
                .toLowerCase()
                .replace("&", "")
                .split(" ")
                .join("-") === category
        );
      }
      if (brand) {
        product_items = product_items.filter(
          (product) =>
            product.brand.name.toLowerCase().replace("&", "").split(" ").join("-") ===
            brand
        );
      }
      if (color) {
        product_items = product_items.filter((product) =>
          product.colors.includes(color)
        );
      }
      if (priceMin || max || priceMax) {
        product_items = product_items.filter((product) => {
          const price = Number(product.originalPrice);
          const minPrice = Number(priceMin);
          const maxPrice = Number(max);
          if (!priceMax && priceMin && max) {
            return price >= minPrice && price <= maxPrice;
          }
          if (priceMax) {
            return price >= priceMax;
          }
        });
      }
      // selectShortHandler
      if (shortValue === "Short Filtering") {
        product_items = all_products
      }
      // Latest Product
      if (shortValue === "Latest Product") {
        product_items = all_products.filter(
          (product) => product.itemInfo === "latest-product"
        );
      }
      // Price low to high
      if (shortValue === "Price low to high") {
        product_items = all_products
          .slice()
          .sort((a, b) => Number(a.originalPrice) - Number(b.originalPrice));
      }
      // Price high to low
      if (shortValue === "Price high to low") {
        product_items = all_products
          .slice()
          .sort((a, b) => Number(b.originalPrice) - Number(a.originalPrice));
      }
      content = (
        <ShopArea
          products={product_items}
          all_products={all_products}
          shortHandler={selectShortHandler}
          hideFilters={hideFilters}
          isQRMenu={isQRMenu}
          isWebSite={isWebSite}
          isBusinessCard={isBusinessCard}
        />
      );
    }
  }

  return (
    <Wrapper>
      <Header style_2={true} />
      <ShopBreadcrumb />
      {/* QR Menü Özellikleri Banner */}
      {isQRMenu && (
        <section style={{
          background: '#ffffff',
          padding: '80px 0',
          borderBottom: '1px solid #e5e7eb'
        }}>
          <div className="container">
            <div style={{
              maxWidth: '1200px',
              margin: '0 auto',
              textAlign: 'center'
            }}>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: '#1e3a8a',
                marginBottom: '16px',
                letterSpacing: '-0.5px'
              }}>QR Menü Sisteminin Avantajları</h2>
              <p style={{
                fontSize: '1.125rem',
                color: '#6b7280',
                marginBottom: '60px',
                maxWidth: '700px',
                margin: '0 auto 60px'
              }}>Profesyonel QR menü sistemi ile işletmenizi dijital çağa taşıyın</p>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '32px',
                marginTop: '40px'
              }}>
                {[
                  { 
                    icon: (
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                        <path d="M2 17l10 5 10-5"/>
                        <path d="M2 12l10 5 10-5"/>
                      </svg>
                    ), 
                    title: 'Modern Tasarım',
                    desc: 'Profesyonel ve şık arayüz tasarımı'
                  },
                  { 
                    icon: (
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                        <circle cx="9" cy="7" r="4"/>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                      </svg>
                    ), 
                    title: 'Kullanıcı Dostu',
                    desc: 'Kolay kullanım ve hızlı gezinme'
                  },
                  { 
                    icon: (
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                      </svg>
                    ), 
                    title: 'Kolay Düzenleme',
                    desc: 'Ürün ekleme ve çıkarma özgürlüğü'
                  },
                  { 
                    icon: (
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                        <circle cx="8.5" cy="8.5" r="1.5"/>
                        <polyline points="21 15 16 10 5 21"/>
                      </svg>
                    ), 
                    title: 'Görsel Yönetimi',
                    desc: 'Ürün görsellerini istediğiniz gibi değiştirin'
                  },
                  { 
                    icon: (
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="12" y1="1" x2="12" y2="23"/>
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                      </svg>
                    ), 
                    title: 'Fiyat Kontrolü',
                    desc: 'Anlık fiyat güncelleme imkanı'
                  },
                  { 
                    icon: (
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                        <line x1="8" y1="21" x2="16" y2="21"/>
                        <line x1="12" y1="17" x2="12" y2="21"/>
                      </svg>
                    ), 
                    title: 'Mobil Uyumlu',
                    desc: 'Tüm cihazlarda mükemmel görünüm'
                  }
                ].map((feature, idx) => (
                  <div key={idx} style={{
                    background: '#ffffff',
                    padding: '32px 24px',
                    borderRadius: '12px',
                    border: '1px solid #e5e7eb',
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'default'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 12px 24px rgba(30, 58, 138, 0.1)';
                    e.currentTarget.style.borderColor = '#1e3a8a';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)';
                    e.currentTarget.style.borderColor = '#e5e7eb';
                  }}>
                    <div style={{
                      width: '64px',
                      height: '64px',
                      background: '#f0f4ff',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#1e3a8a',
                      margin: '0 auto 20px'
                    }}>
                      {feature.icon}
                    </div>
                    <h3 style={{
                      fontSize: '1.125rem',
                      fontWeight: '600',
                      color: '#1e3a8a',
                      marginBottom: '8px',
                      letterSpacing: '-0.3px'
                    }}>{feature.title}</h3>
                    <p style={{
                      fontSize: '0.9375rem',
                      color: '#6b7280',
                      lineHeight: '1.6',
                      margin: 0
                    }}>{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <style jsx>{`
            @media (max-width: 992px) {
              section {
                padding: 60px 0 !important;
              }
              h2 {
                font-size: 1.75rem !important;
              }
              p {
                font-size: 1rem !important;
              }
            }
            @media (max-width: 768px) {
              section {
                padding: 50px 0 !important;
              }
              h2 {
                font-size: 1.5rem !important;
              }
              div[style*="gridTemplateColumns"] {
                grid-template-columns: 1fr !important;
                gap: 24px !important;
              }
            }
          `}</style>
        </section>
      )}
      
      {/* Web Siteleri Özellikleri Banner */}
      {isWebSite && (
        <section style={{
          background: '#ffffff',
          padding: '80px 0',
          borderBottom: '1px solid #e5e7eb'
        }}>
          <div className="container">
            <div style={{
              maxWidth: '1200px',
              margin: '0 auto',
              textAlign: 'center'
            }}>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: '#1e3a8a',
                marginBottom: '16px',
                letterSpacing: '-0.5px'
              }}>Profesyonel Web Tasarım Avantajları</h2>
              <p style={{
                fontSize: '1.125rem',
                color: '#6b7280',
                marginBottom: '60px',
                maxWidth: '700px',
                margin: '0 auto 60px'
              }}>İşletmenizi dijital dünyada güçlü bir şekilde temsil edin</p>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '32px',
                marginTop: '40px'
              }}>
                {[
                  { 
                    icon: (
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                      </svg>
                    ), 
                    title: '3 İş Günü Teslimat',
                    desc: 'Siteniz hızlıca hazır ve yayında'
                  },
                  { 
                    icon: (
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                        <line x1="8" y1="21" x2="16" y2="21"/>
                        <line x1="12" y1="17" x2="12" y2="21"/>
                      </svg>
                    ), 
                    title: 'Mobil Uyumlu',
                    desc: 'Tüm cihazlarda mükemmel görünüm'
                  },
                  { 
                    icon: (
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                      </svg>
                    ), 
                    title: 'Güvenli Alışveriş',
                    desc: 'SSL sertifikası ve güvenli ödeme'
                  },
                  { 
                    icon: (
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12 6 12 12 16 14"/>
                      </svg>
                    ), 
                    title: 'İlk Yıl Bedava',
                    desc: 'Domain ve hosting hediye'
                  },
                  { 
                    icon: (
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                        <line x1="12" y1="22.08" x2="12" y2="12"/>
                      </svg>
                    ), 
                    title: 'Anahtar Teslim',
                    desc: 'Kurulum ve ayarlar dahil'
                  },
                  { 
                    icon: (
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                        <circle cx="12" cy="7" r="4"/>
                      </svg>
                    ), 
                    title: 'Teknik Destek',
                    desc: '7/24 müşteri hizmetleri desteği'
                  }
                ].map((feature, idx) => (
                  <div key={idx} style={{
                    background: '#ffffff',
                    padding: '32px 24px',
                    borderRadius: '12px',
                    border: '1px solid #e5e7eb',
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'default'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 12px 24px rgba(30, 58, 138, 0.1)';
                    e.currentTarget.style.borderColor = '#1e3a8a';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)';
                    e.currentTarget.style.borderColor = '#e5e7eb';
                  }}>
                    <div style={{
                      width: '64px',
                      height: '64px',
                      background: '#f0f4ff',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#1e3a8a',
                      margin: '0 auto 20px'
                    }}>
                      {feature.icon}
                    </div>
                    <h3 style={{
                      fontSize: '1.125rem',
                      fontWeight: '600',
                      color: '#1e3a8a',
                      marginBottom: '8px',
                      letterSpacing: '-0.3px'
                    }}>{feature.title}</h3>
                    <p style={{
                      fontSize: '0.9375rem',
                      color: '#6b7280',
                      lineHeight: '1.6',
                      margin: 0
                    }}>{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <style jsx>{`
            @media (max-width: 992px) {
              section {
                padding: 60px 0 !important;
              }
              h2 {
                font-size: 1.75rem !important;
              }
              p {
                font-size: 1rem !important;
              }
            }
            @media (max-width: 768px) {
              section {
                padding: 50px 0 !important;
              }
              h2 {
                font-size: 1.5rem !important;
              }
              div[style*="gridTemplateColumns"] {
                grid-template-columns: 1fr !important;
                gap: 24px !important;
              }
            }
          `}</style>
        </section>
      )}

      {/* Kartvizitler Özellikleri Banner */}
      {isBusinessCard && (
        <section style={{
          background: '#ffffff',
          padding: '80px 0',
          borderBottom: '1px solid #e5e7eb'
        }}>
          <div className="container">
            <div style={{
              maxWidth: '1200px',
              margin: '0 auto',
              textAlign: 'center'
            }}>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: '#1e3a8a',
                marginBottom: '16px',
                letterSpacing: '-0.5px'
              }}>Premium Kartvizit Özellikleri</h2>
              <p style={{
                fontSize: '1.125rem',
                color: '#6b7280',
                marginBottom: '60px',
                maxWidth: '700px',
                margin: '0 auto 60px'
              }}>Profesyonel kartvizit tasarımları ile fark yaratın</p>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '32px',
                marginTop: '40px'
              }}>
                {[
                  { 
                    icon: (
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                      </svg>
                    ), 
                    title: 'Çift Taraflı Kartvizit',
                    desc: 'Kalın ve premium kalite kağıt'
                  },
                  { 
                    icon: (
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                      </svg>
                    ), 
                    title: 'Kabartmalı Yazı',
                    desc: 'Özel kabartma baskı tekniği'
                  },
                  { 
                    icon: (
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                      </svg>
                    ), 
                    title: 'Selofanlı Kaplama',
                    desc: 'Su geçirmez koruyucu kaplama'
                  },
                  { 
                    icon: (
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                      </svg>
                    ), 
                    title: 'Hızlı Teslimat',
                    desc: '15 gün içerisinde teslim'
                  },
                  { 
                    icon: (
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                        <path d="M2 17l10 5 10-5"/>
                        <path d="M2 12l10 5 10-5"/>
                      </svg>
                    ), 
                    title: 'Modern Tasarım',
                    desc: 'Profesyonel ve şık görünüm'
                  },
                  { 
                    icon: (
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                        <circle cx="12" cy="7" r="4"/>
                      </svg>
                    ), 
                    title: 'Tasarım Desteği',
                    desc: 'Ücretsiz tasarım danışmanlığı'
                  }
                ].map((feature, idx) => (
                  <div key={idx} style={{
                    background: '#ffffff',
                    padding: '32px 24px',
                    borderRadius: '12px',
                    border: '1px solid #e5e7eb',
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'default'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 12px 24px rgba(30, 58, 138, 0.1)';
                    e.currentTarget.style.borderColor = '#1e3a8a';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)';
                    e.currentTarget.style.borderColor = '#e5e7eb';
                  }}>
                    <div style={{
                      width: '64px',
                      height: '64px',
                      background: '#f0f4ff',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#1e3a8a',
                      margin: '0 auto 20px'
                    }}>
                      {feature.icon}
                    </div>
                    <h3 style={{
                      fontSize: '1.125rem',
                      fontWeight: '600',
                      color: '#1e3a8a',
                      marginBottom: '8px',
                      letterSpacing: '-0.3px'
                    }}>{feature.title}</h3>
                    <p style={{
                      fontSize: '0.9375rem',
                      color: '#6b7280',
                      lineHeight: '1.6',
                      margin: 0
                    }}>{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <style jsx>{`
            @media (max-width: 992px) {
              section {
                padding: 60px 0 !important;
              }
              h2 {
                font-size: 1.75rem !important;
              }
              p {
                font-size: 1rem !important;
              }
            }
            @media (max-width: 768px) {
              section {
                padding: 50px 0 !important;
              }
              h2 {
                font-size: 1.5rem !important;
              }
              div[style*="gridTemplateColumns"] {
                grid-template-columns: 1fr !important;
                gap: 24px !important;
              }
            }
          `}</style>
        </section>
      )}
      
      {content}
      <ShopCta />
      <Footer />
    </Wrapper>
  );
}

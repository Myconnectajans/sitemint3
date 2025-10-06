import React, { useState } from "react";
// internal
import { Dots, Lists } from "@svg/index";
import NiceSelect from "@ui/NiceSelect";

export function ShowingResult({ show, total }) {
  return (
    <div className="shop__result">
      <p>Showing 1–{show} of {total} results</p>
    </div>
  );
}

export function ShopShortTab({ handleTab, isQRMenu }) {
  return (
    <div className="shop__sort-item">
      <div className="shop__sort-tab tp-tab">
        <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              onClick={() => handleTab('grid')}
              className={isQRMenu ? "nav-link" : "nav-link active"}
              id="nav-grid-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-grid"
              type="button"
              role="tab"
              aria-controls="nav-grid"
              aria-selected={!isQRMenu}
              tabIndex='-1'
            >
              <Dots />
            </button>
            <button
              onClick={() => handleTab('lists')}
              className={isQRMenu ? "nav-link active" : "nav-link"}
              id="nav-list-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-list"
              type="button"
              role="tab"
              aria-controls="nav-list"
              aria-selected={isQRMenu}
              tabIndex='-1'
            >
              <Lists />
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}

export function ShopShortSelect({shortHandler, isQRMenu, isWebSite, isBusinessCard, allProducts}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSort, setSelectedSort] = useState('Short Filtering');

  // QR Menü, Web Siteleri ve Kartvizitler için kategori seçenekleri
  const categories = isQRMenu 
    ? ['Restaurant', 'Cafe', 'Bar', 'Fast Food', 'Pastane', 'Hotel']
    : isWebSite
    ? ['Kurumsal', 'E-Ticaret', 'Blog', 'Portfolio', 'Restoran', 'Otel']
    : isBusinessCard
    ? ['Modern', 'Klasik', 'Minimal', 'Renkli', 'Corporate', 'Creative']
    : [];
  
  const colors = [
    { name: 'Kırmızı', hex: '#dc2626' },
    { name: 'Mavi', hex: '#2563eb' },
    { name: 'Yeşil', hex: '#16a34a' },
    { name: 'Sarı', hex: '#eab308' },
    { name: 'Turuncu', hex: '#ea580c' },
    { name: 'Mor', hex: '#9333ea' },
    { name: 'Pembe', hex: '#ec4899' },
    { name: 'Lacivert', hex: '#1e3a8a' },
    { name: 'Bordo', hex: '#7f1d1d' },
    { name: 'Siyah', hex: '#000000' },
    { name: 'Beyaz', hex: '#ffffff' },
    { name: 'Gri', hex: '#6b7280' }
  ];

  const handleReset = () => {
    setSelectedCategory('');
    setSelectedColor('');
    setSelectedSort('Short Filtering');
    setIsModalOpen(false);
  };

  const handleApplyFilters = () => {
    // Filtreleme mantığı burada olacak
    setIsModalOpen(false);
  };

  // QR Menü, Web Siteleri ve Kartvizitler için modal filtreleme
  if (isQRMenu || isWebSite || isBusinessCard) {
    return (
      <>
        {/* Filtreleme Butonu */}
        <div className="shop__sort-item">
          <button
            onClick={() => setIsModalOpen(true)}
            style={{
              background: '#1e3a8a',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              padding: '12px 20px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#1d4ed8';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#1e3a8a';
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="22,3 2,3 10,12.46 10,19 14,21 14,12.46 22,3"/>
            </svg>
            Filtrele
          </button>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '20px'
          }}>
            <div style={{
              background: '#ffffff',
              borderRadius: '16px',
              padding: '30px',
              maxWidth: '500px',
              width: '100%',
              maxHeight: '90vh',
              overflow: 'auto',
              boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
            }}>
              {/* Modal Header */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '25px',
                paddingBottom: '15px',
                borderBottom: '1px solid #e5e7eb'
              }}>
                <h3 style={{
                  color: '#1e3a8a',
                  fontSize: '20px',
                  fontWeight: '600',
                  margin: 0
                }}>
                  Filtreleme Seçenekleri
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontSize: '24px',
                    cursor: 'pointer',
                    color: '#6b7280',
                    padding: '0',
                    width: '30px',
                    height: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  ×
                </button>
              </div>

              {/* Kategori Seçimi */}
              <div style={{ marginBottom: '25px' }}>
                <h4 style={{
                  color: '#374151',
                  fontSize: '16px',
                  fontWeight: '600',
                  marginBottom: '15px'
                }}>
                  Kategori
                </h4>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px'
                }}>
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(selectedCategory === category ? '' : category)}
                      style={{
                        padding: '8px 16px',
                        background: selectedCategory === category ? '#1e3a8a' : '#f3f4f6',
                        color: selectedCategory === category ? '#ffffff' : '#374151',
                        border: '1px solid #e5e7eb',
                        borderRadius: '20px',
                        fontSize: '14px',
                        fontWeight: '500',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Renk Seçimi */}
              <div style={{ marginBottom: '25px' }}>
                <h4 style={{
                  color: '#374151',
                  fontSize: '16px',
                  fontWeight: '600',
                  marginBottom: '15px'
                }}>
                  Renk
                </h4>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '12px'
                }}>
                  {colors.map(color => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(selectedColor === color.name ? '' : color.name)}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '8px',
                        background: selectedColor === color.name ? '#f0f4ff' : '#ffffff',
                        border: selectedColor === color.name ? '2px solid #1e3a8a' : '2px solid #e5e7eb',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        transition: 'all 0.3s'
                      }}
                      onMouseEnter={(e) => {
                        if (color.name !== selectedColor) {
                          e.currentTarget.style.borderColor = '#1e3a8a';
                          e.currentTarget.style.transform = 'translateY(-2px)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (color.name !== selectedColor) {
                          e.currentTarget.style.borderColor = '#e5e7eb';
                          e.currentTarget.style.transform = 'translateY(0)';
                        }
                      }}>
                      <div style={{
                        width: '32px',
                        height: '32px',
                        background: color.hex,
                        borderRadius: '50%',
                        border: color.name === 'Beyaz' ? '1px solid #e5e7eb' : 'none',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                      }} />
                      <span style={{
                        fontSize: '11px',
                        fontWeight: '500',
                        color: '#1e3a8a',
                        textAlign: 'center'
                      }}>{color.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{
                display: 'flex',
                gap: '12px',
                marginTop: '32px',
                paddingTop: '24px',
                borderTop: '1px solid #e5e7eb'
              }}>
                <button
                  onClick={handleReset}
                  style={{
                    flex: 1,
                    padding: '12px',
                    background: '#f0f4ff',
                    color: '#1e3a8a',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#dbeafe';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#f0f4ff';
                  }}>
                  Sıfırla
                </button>
                <button
                  onClick={handleApplyFilters}
                  style={{
                    flex: 1,
                    padding: '12px',
                    background: '#1e3a8a',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#1d4ed8';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#1e3a8a';
                  }}>
                  Uygula
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
  
  // Normal dropdown for other pages
  return (
    <div className="shop__sort-item">
      <div className="shop__sort-select">
        <NiceSelect
          options={[
            { value: "Short Filtering", text: "Short Filtering" },
            { value: "Latest Product", text: "Latest Product" },
            { value: "Price low to high", text: "Price low to high" },
            { value: "Price high to low", text: "Price high to low" },
          ]}
          defaultCurrent={0}
          onChange={shortHandler}
          name="Sort by latest"
        />
      </div>
    </div>
  );
}
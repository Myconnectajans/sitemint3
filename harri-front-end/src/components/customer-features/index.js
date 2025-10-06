'use client';
import React from "react";

const CustomerFeatures = () => {
  const features = [
    {
      id: 1,
      icon: "🔒",
      title: "Güvenilir Alışveriş",
      description: "SSL sertifikalı güvenli ödeme sistemi",
      color: "#1a1a1a"
    },
    {
      id: 2,
      icon: "🎧",
      title: "Canlı Destek",
      description: "7/24 profesyonel müşteri hizmetleri",
      color: "#2d2d2d"
    },
    {
      id: 3,
      icon: "↩️",
      title: "3 Gün İçerisinde İade",
      description: "Memnuniyet garantisi ile güvenli alışveriş",
      color: "#404040"
    },
    {
      id: 4,
      icon: "💎",
      title: "Kolay Ödeme",
      description: "Tüm kredi kartları ve taksit seçenekleri",
      color: "#525252"
    }
  ];

  return (
    <>
      <section style={{ padding: '40px 0' }}>
        <div className="container">
          <div className="row g-4">
            {features.map((feature) => (
              <div key={feature.id} className="col-lg-3 col-md-6 col-sm-6">
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  padding: '30px',
                  background: '#ffffff',
                  borderRadius: '4px',
                  border: '2px solid #e8e8e8',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer',
                  height: '100%',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = '#f5f5f5';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                  e.currentTarget.style.boxShadow = '0 2px 6px rgba(0,0,0,0.15)';
                  e.currentTarget.style.borderColor = '#d0d0d0';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = '#ffffff';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
                  e.currentTarget.style.borderColor = '#e8e8e8';
                }}
                >
                  <div style={{
                    fontSize: '20px',
                    color: feature.color,
                    width: '45px',
                    height: '45px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#f8f8f8',
                    borderRadius: '3px',
                    border: '2px solid #e0e0e0',
                    flexShrink: 0
                  }}>
                    {feature.icon}
                  </div>
                  <div>
                    <h5 style={{
                      fontSize: '17px',
                      fontWeight: '700',
                      color: '#1a1a1a',
                      marginBottom: '8px',
                      letterSpacing: '0.3px'
                    }}>
                      {feature.title}
                    </h5>
                    <p style={{
                      fontSize: '15px',
                      color: '#4a4a4a',
                      margin: 0,
                      lineHeight: '1.5',
                      fontWeight: '400'
                    }}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomerFeatures;

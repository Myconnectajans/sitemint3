'use client';
import React from "react";

const SuccessStats = () => {
  const stats = [
    {
      id: 1,
      number: "10,000+",
      label: "Mutlu Müşteri",
      icon: "👥",
      color: "#2c3e50"
    },
    {
      id: 2,
      number: "50,000+",
      label: "Tamamlanan Proje",
      icon: "📊",
      color: "#34495e"
    },
    {
      id: 3,
      number: "99.9%",
      label: "Müşteri Memnuniyeti",
      icon: "⭐",
      color: "#7f8c8d"
    },
    {
      id: 4,
      number: "24/7",
      label: "Canlı Destek",
      icon: "🎧",
      color: "#95a5a6"
    }
  ];

  return (
    <>
      <section style={{ 
        padding: '60px 0',
        background: '#ffffff'
      }}>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 style={{
                fontSize: '30px',
                fontWeight: '800',
                color: '#1a1a1a',
                marginBottom: '10px',
                letterSpacing: '0.5px'
              }}>
                Rakamlarla Harri
              </h2>
              <p style={{
                fontSize: '16px',
                color: '#4a4a4a',
                maxWidth: '500px',
                margin: '0 auto',
                fontWeight: '400'
              }}>
                Başarılarımızı rakamlarla keşfedin
              </p>
            </div>
          </div>

          <div className="row g-4">
            {stats.map((stat) => (
              <div key={stat.id} className="col-lg-3 col-md-6 col-sm-6">
                <div style={{
                  background: '#ffffff',
                  borderRadius: '4px',
                  padding: '35px 25px',
                  textAlign: 'center',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer',
                  border: '2px solid #e8e8e8'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-1px)';
                  e.currentTarget.style.boxShadow = '0 2px 6px rgba(0,0,0,0.15)';
                  e.currentTarget.style.borderColor = '#d0d0d0';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
                  e.currentTarget.style.borderColor = '#e8e8e8';
                }}
                >
                  <div style={{
                    fontSize: '28px',
                    marginBottom: '16px',
                    width: '55px',
                    height: '55px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#f8f8f8',
                    borderRadius: '3px',
                    border: '2px solid #e0e0e0',
                    margin: '0 auto 16px'
                  }}>
                    {stat.icon}
                  </div>
                  
                  <div style={{
                    fontSize: '28px',
                    fontWeight: '800',
                    color: stat.color,
                    marginBottom: '8px',
                    lineHeight: '1',
                    letterSpacing: '0.5px'
                  }}>
                    {stat.number}
                  </div>
                  
                  <h4 style={{
                    fontSize: '15px',
                    fontWeight: '600',
                    color: '#4a4a4a',
                    margin: 0,
                    letterSpacing: '0.3px'
                  }}>
                    {stat.label}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SuccessStats;

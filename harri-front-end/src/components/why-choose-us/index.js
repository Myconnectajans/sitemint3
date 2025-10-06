'use client';
import React from "react";

const WhyChooseUs = () => {
  const reasons = [
    {
      id: 1,
      icon: "🎯",
      title: "Profesyonel Tasarım",
      description: "Her proje için özel tasarım çözümleri",
      features: ["Modern UI/UX", "Responsive Tasarım", "Özelleştirilebilir"]
    },
    {
      id: 2,
      icon: "⚡",
      title: "Hızlı Teslimat",
      description: "Projelerinizi zamanında teslim ediyoruz",
      features: ["24 Saat İçinde", "Kaliteli Baskı", "Ücretsiz Kargo"]
    },
    {
      id: 3,
      icon: "💎",
      title: "Yaratıcı Çözümler",
      description: "İşinizi öne çıkaracak yaratıcı fikirler",
      features: ["Özgün Tasarım", "Trend Çözümler", "Marka Kimliği"]
    },
    {
      id: 4,
      icon: "⭐",
      title: "Müşteri Memnuniyeti",
      description: "%100 müşteri memnuniyeti garantisi",
      features: ["7/24 Destek", "Ücretsiz Revizyon", "Kalite Garantisi"]
    }
  ];

  return (
    <>
      <section style={{ 
        padding: '80px 0',
        background: '#ffffff',
        position: 'relative',
        overflow: 'hidden'
      }}>
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 style={{
                fontSize: '32px',
                fontWeight: '800',
                color: '#1a1a1a',
                marginBottom: '12px',
                letterSpacing: '0.5px'
              }}>
                Neden Harri'yi Seçmelisiniz?
              </h2>
              <p style={{
                fontSize: '17px',
                color: '#4a4a4a',
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.6',
                fontWeight: '400'
              }}>
                Profesyonel tasarım çözümleri ile işinizi bir üst seviyeye taşıyın
              </p>
            </div>
          </div>

          <div className="row g-4">
            {reasons.map((reason) => (
              <div key={reason.id} className="col-lg-3 col-md-6 col-sm-6">
                <div style={{
                  background: '#ffffff',
                  borderRadius: '4px',
                  padding: '35px 25px',
                  border: '2px solid #e8e8e8',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer',
                  height: '100%',
                  textAlign: 'center',
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
                    fontSize: '28px',
                    marginBottom: '20px',
                    width: '65px',
                    height: '65px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#f8f8f8',
                    borderRadius: '3px',
                    border: '2px solid #e0e0e0',
                    margin: '0 auto 20px'
                  }}>
                    {reason.icon}
                  </div>
                  
                  <h4 style={{
                    fontSize: '19px',
                    fontWeight: '700',
                    color: '#1a1a1a',
                    marginBottom: '12px',
                    letterSpacing: '0.3px'
                  }}>
                    {reason.title}
                  </h4>
                  
                  <p style={{
                    fontSize: '15px',
                    color: '#4a4a4a',
                    marginBottom: '20px',
                    lineHeight: '1.6',
                    fontWeight: '400'
                  }}>
                    {reason.description}
                  </p>
                  
                  <div>
                    {reason.features.map((feature, idx) => (
                      <div key={idx} style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '8px',
                        fontSize: '14px',
                        color: '#4a4a4a',
                        fontWeight: '500'
                      }}>
                        <span style={{
                          color: '#2d5a27',
                          marginRight: '8px',
                          fontSize: '12px',
                          fontWeight: 'bold'
                        }}>✓</span>
                        {feature}
                      </div>
                    ))}
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

export default WhyChooseUs;

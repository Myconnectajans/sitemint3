"use client";
import React from "react";

const TrustSection = () => {
  const features = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: "Güvenli Ödeme",
      description: "256-bit SSL şifrelemesi ile güvenli ödeme altyapısı"
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
      title: "Hızlı Teslimat",
      description: "15 gün içinde teslimat garantisi"
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
      title: "Özel Tasarım",
      description: "Her proje için özel ve benzersiz tasarım"
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
      title: "7/24 Destek",
      description: "Her zaman yanınızda profesyonel destek"
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Hızlı Kurulum",
      description: "Sipariş sonrası anında başlayan hızlı kurulum süreci"
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Sorunsuz Teslimat",
      description: "Kalite kontrolden geçmiş garantili teslimat"
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14l-2-2m2 2l2-2m-2 2v-2.5" />
        </svg>
      ),
      title: "3 Gün İade",
      description: "3 gün içinde koşulsuz iade ve değişim hakkı"
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Fatura Garantisi",
      description: "Tüm alışverişlerinizde e-fatura ve garanti belgesi"
    }
  ];

  return (
    <section style={{
      background: '#ffffff',
      padding: '120px 0',
      borderTop: '1px solid #f0f0f0'
    }}>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#1e3a8a',
              marginBottom: '16px',
              letterSpacing: '-0.02em'
            }}>
              Neden Bizi Tercih Etmelisiniz?
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#6b7280',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Profesyonel hizmet kalitesi ve müşteri memnuniyeti odaklı yaklaşımımızla
            </p>
          </div>
        </div>

        <div className="row" style={{ gap: '24px 0' }}>
          {features.map((feature, index) => (
            <div key={index} className="col-lg-3 col-md-6 mb-4">
              <div style={{
                padding: '40px 30px',
                background: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: '16px',
                textAlign: 'center',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                height: '100%',
                cursor: 'default'
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
              }}>
                <div style={{
                  marginBottom: '24px',
                  color: '#1e3a8a',
                  display: 'inline-flex',
                  padding: '16px',
                  background: '#f0f4ff',
                  borderRadius: '12px'
                }}>
                  {feature.icon}
                </div>
                <h4 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  marginBottom: '12px',
                  color: '#1e3a8a'
                }}>
                  {feature.title}
                </h4>
                <p style={{
                  fontSize: '0.95rem',
                  color: '#6b7280',
                  lineHeight: '1.6',
                  margin: 0
                }}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;

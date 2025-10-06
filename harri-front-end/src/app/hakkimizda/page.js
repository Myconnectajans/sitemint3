'use client';

import Header from '@layout/header';
import Footer from '@layout/footer';
import Wrapper from '@layout/wrapper';

export default function HakkimizdaPage() {
  return (
    <Wrapper>
      <Header style_2={true} />
      
      {/* Hero Section */}
      <section style={{
        background: '#ffffff',
        padding: '120px 0 80px'
      }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div style={{ textAlign: 'center' }}>
                <h1 style={{
                  fontSize: '3.5rem',
                  fontWeight: '700',
                  marginBottom: '24px',
                  lineHeight: '1.2',
                  color: '#1e3a8a'
                }}>
                  Hazırdizayn Hakkında
                </h1>
                <p style={{
                  fontSize: '1.25rem',
                  marginBottom: '32px',
                  lineHeight: '1.6',
                  color: '#6b7280',
                  maxWidth: '800px',
                  margin: '0 auto 32px'
                }}>
                  Dijital dünyada işletmenizi öne çıkaran profesyonel çözümler sunuyoruz. 
                  Web tasarım, kartvizit ve QR menü hizmetlerimizle markanızı güçlendiriyoruz.
                </p>
                <div style={{
                  display: 'flex',
                  gap: '24px',
                  flexWrap: 'wrap',
                  justifyContent: 'center'
                }}>
                  <div style={{
                    background: '#ffffff',
                    padding: '16px 24px',
                    borderRadius: '12px',
                    border: '2px solid #1e3a8a'
                  }}>
                    <div style={{ fontSize: '2rem', fontWeight: '700', color: '#1e3a8a' }}>500+</div>
                    <div style={{ color: '#6b7280' }}>Mutlu Müşteri</div>
                  </div>
                  <div style={{
                    background: '#ffffff',
                    padding: '16px 24px',
                    borderRadius: '12px',
                    border: '2px solid #1e3a8a'
                  }}>
                    <div style={{ fontSize: '2rem', fontWeight: '700', color: '#1e3a8a' }}>1000+</div>
                    <div style={{ color: '#6b7280' }}>Tamamlanan Proje</div>
                  </div>
                  <div style={{
                    background: '#ffffff',
                    padding: '16px 24px',
                    borderRadius: '12px',
                    border: '2px solid #1e3a8a'
                  }}>
                    <div style={{ fontSize: '2rem', fontWeight: '700', color: '#1e3a8a' }}>5+</div>
                    <div style={{ color: '#6b7280' }}>Yıl Deneyim</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section style={{
        padding: '100px 0',
        background: '#ffffff'
      }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div style={{
                background: '#ffffff',
                padding: '48px',
                borderRadius: '16px',
                border: '1px solid #e5e7eb',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                height: '100%',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.1)';
                e.currentTarget.style.borderColor = '#1e3a8a';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
                e.currentTarget.style.borderColor = '#e5e7eb';
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: '#1e3a8a',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px'
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="6"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                  </svg>
                </div>
                <h3 style={{
                  fontSize: '2rem',
                  fontWeight: '700',
                  marginBottom: '20px',
                  color: '#1e3a8a'
                }}>
                  Misyonumuz
                </h3>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.7',
                  color: '#6b7280',
                  marginBottom: '20px'
                }}>
                  İşletmelerin dijital dönüşüm sürecinde yanlarında olarak, 
                  modern ve etkili çözümlerle markalarını güçlendirmelerine yardımcı oluyoruz.
                </p>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.7',
                  color: '#6b7280'
                }}>
                  Her projede müşteri memnuniyetini ön planda tutarak, 
                  kaliteli ve zamanında teslimat garantisi veriyoruz.
                </p>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div style={{
                background: '#ffffff',
                padding: '48px',
                borderRadius: '16px',
                border: '1px solid #e5e7eb',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                height: '100%',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.1)';
                e.currentTarget.style.borderColor = '#1e3a8a';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
                e.currentTarget.style.borderColor = '#e5e7eb';
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: '#1e3a8a',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px'
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </div>
                <h3 style={{
                  fontSize: '2rem',
                  fontWeight: '700',
                  marginBottom: '20px',
                  color: '#1e3a8a'
                }}>
                  Vizyonumuz
                </h3>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.7',
                  color: '#6b7280',
                  marginBottom: '20px'
                }}>
                  Türkiye'nin önde gelen dijital çözüm sağlayıcısı olmak ve 
                  sektörde kalite standartlarını yükseltmek için çalışıyoruz.
                </p>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.7',
                  color: '#6b7280'
                }}>
                  İnovatif yaklaşımımız ve müşteri odaklı hizmet anlayışımızla 
                  dijital dünyada fark yaratmayı hedefliyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{
        padding: '100px 0',
        background: '#f8f9fa'
      }}>
        <div className="container">
          <div style={{
            textAlign: 'center',
            marginBottom: '80px'
          }}>
            <h2 style={{
              fontSize: '3rem',
              fontWeight: '700',
              marginBottom: '20px',
              color: '#1e3a8a'
            }}>
              Hizmetlerimiz
            </h2>
            <p style={{
              fontSize: '1.25rem',
              color: '#6b7280',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              İşletmeniz için ihtiyacınız olan tüm dijital çözümleri tek çatı altında sunuyoruz
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div style={{
                background: '#ffffff',
                padding: '40px 32px',
                borderRadius: '16px',
                border: '1px solid #e5e7eb',
                textAlign: 'center',
                height: '100%',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(30, 58, 138, 0.15)';
                e.currentTarget.style.borderColor = '#1e3a8a';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = '#e5e7eb';
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: '#1e3a8a',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px'
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  marginBottom: '16px',
                  color: '#1e3a8a'
                }}>
                  Web Tasarım
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: '#6b7280',
                  lineHeight: '1.6'
                }}>
                  Modern, responsive ve kullanıcı dostu web siteleri tasarlıyoruz. 
                  SEO optimizasyonu ve hızlı yükleme garantisi ile.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div style={{
                background: '#ffffff',
                padding: '40px 32px',
                borderRadius: '16px',
                border: '1px solid #e5e7eb',
                textAlign: 'center',
                height: '100%',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(30, 58, 138, 0.15)';
                e.currentTarget.style.borderColor = '#1e3a8a';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = '#e5e7eb';
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: '#1e3a8a',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px'
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  marginBottom: '16px',
                  color: '#1e3a8a'
                }}>
                  Kartvizit Tasarım
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: '#6b7280',
                  lineHeight: '1.6'
                }}>
                  Profesyonel ve etkileyici kartvizit tasarımları. 
                  Çift taraflı, kabartmalı ve selofanlı seçeneklerle.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div style={{
                background: '#ffffff',
                padding: '40px 32px',
                borderRadius: '16px',
                border: '1px solid #e5e7eb',
                textAlign: 'center',
                height: '100%',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(30, 58, 138, 0.15)';
                e.currentTarget.style.borderColor = '#1e3a8a';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = '#e5e7eb';
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: '#1e3a8a',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px'
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                    <line x1="12" y1="18" x2="12.01" y2="18"></line>
                  </svg>
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  marginBottom: '16px',
                  color: '#1e3a8a'
                }}>
                  QR Menü
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: '#6b7280',
                  lineHeight: '1.6'
                }}>
                  Temassız menü çözümleri. Modern tasarım ve kullanıcı dostu arayüzle 
                  işletmenizi dijitalleştiriyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{
        padding: '100px 0',
        background: '#1e3a8a',
        position: 'relative'
      }}>
        <div className="container">
          <div style={{
            textAlign: 'center',
            marginBottom: '80px'
          }}>
            <h2 style={{
              fontSize: '3rem',
              fontWeight: '700',
              marginBottom: '20px',
              color: '#fff'
            }}>
              Neden Hazırdizayn?
            </h2>
            <p style={{
              fontSize: '1.25rem',
              color: '#e2e8f0',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Müşteri memnuniyetini ön planda tutan yaklaşımımızla fark yaratıyoruz
            </p>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
              <div style={{
                background: 'rgba(255,255,255,0.1)',
                padding: '32px 24px',
                borderRadius: '16px',
                textAlign: 'center',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.2)',
                height: '100%',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
              }}>
                <div style={{
                  marginBottom: '20px'
                }}>
                  <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                  </svg>
                </div>
                <h4 style={{
                  color: '#fff',
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  marginBottom: '12px'
                }}>
                  Hızlı Teslimat
                </h4>
                <p style={{
                  color: '#e2e8f0',
                  fontSize: '0.95rem',
                  lineHeight: '1.5'
                }}>
                  3 iş günü içerisinde projenizi teslim ediyoruz
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <div style={{
                background: 'rgba(255,255,255,0.1)',
                padding: '32px 24px',
                borderRadius: '16px',
                textAlign: 'center',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.2)',
                height: '100%',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
              }}>
                <div style={{
                  marginBottom: '20px'
                }}>
                  <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
                    <path d="M12 2a10 10 0 0 0-9 14c0 1.5 0 3 1 4s3 1 4 1h6c1 0 3 0 4-1s1-2.5 1-4a10 10 0 0 0-7-14z"></path>
                    <path d="M8 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM16 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
                  </svg>
                </div>
                <h4 style={{
                  color: '#fff',
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  marginBottom: '12px'
                }}>
                  Modern Tasarım
                </h4>
                <p style={{
                  color: '#e2e8f0',
                  fontSize: '0.95rem',
                  lineHeight: '1.5'
                }}>
                  En güncel tasarım trendlerini takip ediyoruz
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <div style={{
                background: 'rgba(255,255,255,0.1)',
                padding: '32px 24px',
                borderRadius: '16px',
                textAlign: 'center',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.2)',
                height: '100%',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
              }}>
                <div style={{
                  marginBottom: '20px'
                }}>
                  <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
                    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                    <polygon points="2 17 12 22 22 17 12 12 2 17"></polygon>
                    <polyline points="2 12 12 17 22 12"></polyline>
                  </svg>
                </div>
                <h4 style={{
                  color: '#fff',
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  marginBottom: '12px'
                }}>
                  Premium Kalite
                </h4>
                <p style={{
                  color: '#e2e8f0',
                  fontSize: '0.95rem',
                  lineHeight: '1.5'
                }}>
                  Yüksek kaliteli malzeme ve işçilik garantisi
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <div style={{
                background: 'rgba(255,255,255,0.1)',
                padding: '32px 24px',
                borderRadius: '16px',
                textAlign: 'center',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.2)',
                height: '100%',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
              }}>
                <div style={{
                  marginBottom: '20px'
                }}>
                  <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h4 style={{
                  color: '#fff',
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  marginBottom: '12px'
                }}>
                  Güvenli Alışveriş
                </h4>
                <p style={{
                  color: '#e2e8f0',
                  fontSize: '0.95rem',
                  lineHeight: '1.5'
                }}>
                  256-bit SSL şifreleme ile güvenli ödeme
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section style={{
        padding: '100px 0',
        background: '#ffffff'
      }}>
        <div className="container">
          <div style={{
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <h2 style={{
              fontSize: '3rem',
              fontWeight: '700',
              marginBottom: '24px',
              color: '#1e3a8a'
            }}>
              Projenizi Hayata Geçirelim
            </h2>
            <p style={{
              fontSize: '1.25rem',
              color: '#6b7280',
              marginBottom: '40px',
              lineHeight: '1.6'
            }}>
              Hayalinizdeki projeyi gerçekleştirmek için bizimle iletişime geçin. 
              Ücretsiz danışmanlık ve teklif alın.
            </p>
            <div style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <a 
                href="/iletisim"
                style={{
                  background: '#1e3a8a',
                  color: '#fff',
                  padding: '16px 32px',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '1.1rem',
                  transition: 'all 0.3s ease',
                  border: '2px solid #1e3a8a'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#ffffff';
                  e.currentTarget.style.color = '#1e3a8a';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#1e3a8a';
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                İletişime Geç
              </a>
              <a 
                href="tel:+905551234567"
                style={{
                  background: '#ffffff',
                  color: '#1e3a8a',
                  padding: '16px 32px',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '1.1rem',
                  border: '2px solid #1e3a8a',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#1e3a8a';
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#ffffff';
                  e.currentTarget.style.color = '#1e3a8a';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                📞 Hemen Ara
              </a>
            </div>
          </div>
    </div>
      </section>

      <Footer />
    </Wrapper>
  );
}
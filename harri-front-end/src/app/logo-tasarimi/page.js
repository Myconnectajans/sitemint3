'use client';
import { useState } from 'react';
import Wrapper from '@layout/wrapper';
import Header from '@layout/header';
import Footer from '@layout/footer';

export default function LogoTasarimi() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <Wrapper>
      <Header style_2={true} />
      
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
        padding: '100px 0',
        color: '#ffffff'
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{
              fontSize: '48px',
              fontWeight: '700',
              marginBottom: '20px',
              lineHeight: '1.2'
            }}>
              Markanızın Kimliği Profesyonel Logo Tasarımı İle Başlar
            </h1>
            <p style={{
              fontSize: '20px',
              marginBottom: '40px',
              opacity: '0.9',
              lineHeight: '1.6'
            }}>
              Profesyonel logo tasarımı ile markanızı güçlendirin. Yaratıcı tasarımlar, hızlı teslimat ve uygun fiyatlarla.
            </p>
            <button
              onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })}
              style={{
                background: '#ffffff',
                color: '#1e3a8a',
                border: 'none',
                padding: '16px 32px',
                borderRadius: '50px',
                fontSize: '18px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
              }}
            >
              Paketleri İncele
            </button>
          </div>
        </div>
      </section>

      {/* Logo Examples */}
      <section style={{
        padding: '80px 0',
        background: '#f8f9fa'
      }}>
        <div className="container">
          <div style={{
            textAlign: 'center',
            marginBottom: '60px'
          }}>
            <h2 style={{
              fontSize: '36px',
              fontWeight: '700',
              color: '#1e3a8a',
              marginBottom: '16px'
            }}>
              Örneklerimiz
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#6b7280',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Logo tasarım portföyümüzden seçilmiş örnekler. Her biri farklı sektör ve stil için özel olarak tasarlanmıştır.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '30px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {Array.from({ length: 50 }, (_, i) => (
              <div
                key={i}
                style={{
                  background: `linear-gradient(135deg, ${
                    ['#1e3a8a', '#3b82f6', '#6366f1', '#8b5cf6', '#a855f7', '#d946ef'][i % 6]
                  } 0%, ${
                    ['#3b82f6', '#6366f1', '#8b5cf6', '#a855f7', '#d946ef', '#1e3a8a'][i % 6]
                  } 100%)`,
                  borderRadius: '16px',
                  padding: '40px 20px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  minHeight: '160px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
                }}
              >
                <span style={{
                  fontSize: '48px',
                  fontWeight: '700',
                  color: '#ffffff',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                }}>
                  L{i + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" style={{
        padding: '80px 0',
        background: '#ffffff'
      }}>
        <div className="container">
          <div style={{
            textAlign: 'center',
            marginBottom: '60px'
          }}>
            <h2 style={{
              fontSize: '36px',
              fontWeight: '700',
              color: '#1e3a8a',
              marginBottom: '16px'
            }}>
              Logo Tasarım Paketleri
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#6b7280',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              İhtiyacınıza uygun logo tasarım paketini seçin. Tüm paketlerimiz profesyonel kalite garantisi ile gelir.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {/* Başlangıç Paket */}
            <div style={{
              background: '#ffffff',
              border: '2px solid #e5e7eb',
              borderRadius: '16px',
              padding: '40px 30px',
              textAlign: 'center',
              position: 'relative',
              transition: 'all 0.3s ease'
            }}>
              <h3 style={{
                fontSize: '24px',
                fontWeight: '700',
                color: '#1e3a8a',
                marginBottom: '16px'
              }}>
                Başlangıç
              </h3>
              <div style={{
                fontSize: '36px',
                fontWeight: '700',
                color: '#1e3a8a',
                marginBottom: '8px'
              }}>
                ₺599
              </div>
              <div style={{
                fontSize: '14px',
                color: '#6b7280',
                marginBottom: '30px'
              }}>
                +KDV
              </div>
              <p style={{
                fontSize: '16px',
                color: '#6b7280',
                marginBottom: '30px',
                lineHeight: '1.6'
              }}>
                Temel logo tasarımı için ideal paket
              </p>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: '0 0 30px 0',
                textAlign: 'left'
              }}>
                <li style={{ marginBottom: '12px', fontSize: '16px', color: '#374151' }}>✓ 2 Logo konsepti</li>
                <li style={{ marginBottom: '12px', fontSize: '16px', color: '#374151' }}>✓ 3 Revizyon hakkı</li>
                <li style={{ marginBottom: '12px', fontSize: '16px', color: '#374151' }}>✓ PNG & JPG formatları</li>
                <li style={{ marginBottom: '12px', fontSize: '16px', color: '#374151' }}>✓ 3-5 iş günü teslimat</li>
              </ul>
              <button style={{
                width: '100%',
                background: '#1e3a8a',
                color: '#ffffff',
                border: 'none',
                padding: '14px 24px',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}>
                Sepete Ekle
              </button>
            </div>

            {/* Profesyonel Paket */}
            <div style={{
              background: '#ffffff',
              border: '3px solid #1e3a8a',
              borderRadius: '16px',
              padding: '40px 30px',
              textAlign: 'center',
              position: 'relative',
              transform: 'scale(1.05)',
              transition: 'all 0.3s ease'
            }}>
              <div style={{
                position: 'absolute',
                top: '-12px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: '#1e3a8a',
                color: '#ffffff',
                padding: '6px 20px',
                borderRadius: '20px',
                fontSize: '14px',
                fontWeight: '600'
              }}>
                En Popüler
              </div>
              <h3 style={{
                fontSize: '24px',
                fontWeight: '700',
                color: '#1e3a8a',
                marginBottom: '16px'
              }}>
                Profesyonel
              </h3>
              <div style={{
                fontSize: '36px',
                fontWeight: '700',
                color: '#1e3a8a',
                marginBottom: '8px'
              }}>
                ₺999
              </div>
              <div style={{
                fontSize: '14px',
                color: '#6b7280',
                marginBottom: '30px'
              }}>
                +KDV
              </div>
              <p style={{
                fontSize: '16px',
                color: '#6b7280',
                marginBottom: '30px',
                lineHeight: '1.6'
              }}>
                İşletmeniz için kapsamlı logo paketi
              </p>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: '0 0 30px 0',
                textAlign: 'left'
              }}>
                <li style={{ marginBottom: '12px', fontSize: '16px', color: '#374151' }}>✓ 4 Logo konsepti</li>
                <li style={{ marginBottom: '12px', fontSize: '16px', color: '#374151' }}>✓ Sınırsız revizyon</li>
                <li style={{ marginBottom: '12px', fontSize: '16px', color: '#374151' }}>✓ Tüm formatlar (PNG, JPG, SVG, PDF)</li>
                <li style={{ marginBottom: '12px', fontSize: '16px', color: '#374151' }}>✓ 2-4 iş günü teslimat</li>
                <li style={{ marginBottom: '12px', fontSize: '16px', color: '#374151' }}>✓ Logo varyasyonları</li>
              </ul>
              <button style={{
                width: '100%',
                background: '#1e3a8a',
                color: '#ffffff',
                border: 'none',
                padding: '14px 24px',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}>
                Sepete Ekle
              </button>
            </div>

            {/* Elit Paket */}
            <div style={{
              background: '#ffffff',
              border: '2px solid #e5e7eb',
              borderRadius: '16px',
              padding: '40px 30px',
              textAlign: 'center',
              position: 'relative',
              transition: 'all 0.3s ease'
            }}>
              <h3 style={{
                fontSize: '24px',
                fontWeight: '700',
                color: '#1e3a8a',
                marginBottom: '16px'
              }}>
                Elit
              </h3>
              <div style={{
                fontSize: '36px',
                fontWeight: '700',
                color: '#1e3a8a',
                marginBottom: '8px'
              }}>
                ₺1499
              </div>
              <div style={{
                fontSize: '14px',
                color: '#6b7280',
                marginBottom: '30px'
              }}>
                +KDV
              </div>
              <p style={{
                fontSize: '16px',
                color: '#6b7280',
                marginBottom: '30px',
                lineHeight: '1.6'
              }}>
                Premium logo tasarımı ve marka kimliği
              </p>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: '0 0 30px 0',
                textAlign: 'left'
              }}>
                <li style={{ marginBottom: '12px', fontSize: '16px', color: '#374151' }}>✓ 6 Logo konsepti</li>
                <li style={{ marginBottom: '12px', fontSize: '16px', color: '#374151' }}>✓ Sınırsız revizyon</li>
                <li style={{ marginBottom: '12px', fontSize: '16px', color: '#374151' }}>✓ Tüm formatlar + kaynak dosyalar</li>
                <li style={{ marginBottom: '12px', fontSize: '16px', color: '#374151' }}>✓ 1-3 iş günü teslimat</li>
                <li style={{ marginBottom: '12px', fontSize: '16px', color: '#374151' }}>✓ Logo kullanım kılavuzu</li>
                <li style={{ marginBottom: '12px', fontSize: '16px', color: '#374151' }}>✓ 6 ay destek</li>
              </ul>
              <button style={{
                width: '100%',
                background: '#1e3a8a',
                color: '#ffffff',
                border: 'none',
                padding: '14px 24px',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}>
                Sepete Ekle
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{
        padding: '80px 0',
        background: '#f8f9fa'
      }}>
        <div className="container">
          <div style={{
            textAlign: 'center',
            marginBottom: '60px'
          }}>
            <h2 style={{
              fontSize: '36px',
              fontWeight: '700',
              color: '#1e3a8a',
              marginBottom: '16px'
            }}>
              Sık Sorulan Sorular
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#6b7280',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Logo tasarım süreci hakkında merak ettiğiniz soruların cevapları
            </p>
          </div>

          <div style={{
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            {[
              {
                question: "Logo tasarım süreci nasıl işliyor?",
                answer: "Logo tasarım süreci, öncelikle sizinle detaylı bir brifing alarak başlar. Ardından seçtiğiniz pakete göre belirli sayıda konsept hazırlanır. Revizyonlar yapıldıktan sonra son hali onayınıza sunulur ve teslimat gerçekleştirilir."
              },
              {
                question: "Hangi dosya formatlarında logo teslim edilir?",
                answer: "Başlangıç paketinde PNG ve JPG formatları, Profesyonel ve Elit paketlerde ise PNG, JPG, SVG ve PDF formatlarında teslim edilir. Elit pakette ayrıca kaynak dosyalar da dahildir."
              },
              {
                question: "Logo tasarımından memnun kalmazsam ne olur?",
                answer: "Tüm paketlerimizde revizyon hakları bulunmaktadır. Başlangıç paketinde 3 revizyon, diğer paketlerde sınırsız revizyon hakkınız vardır. Memnun kalana kadar çalışmaya devam ederiz."
              },
              {
                question: "Ödeme yaptıktan sonra ne kadar sürede logo teslim edilir?",
                answer: "Başlangıç paketinde 3-5 iş günü, Profesyonel pakette 2-4 iş günü, Elit pakette ise 1-3 iş günü içerisinde logo tasarımınız teslim edilir. Acil durumlar için özel çözümler sunabiliriz."
              }
            ].map((faq, index) => (
              <div key={index} style={{
                background: '#ffffff',
                borderRadius: '12px',
                marginBottom: '16px',
                overflow: 'hidden',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}>
                <button
                  onClick={() => toggleFaq(index)}
                  style={{
                    width: '100%',
                    background: 'none',
                    border: 'none',
                    padding: '20px 24px',
                    textAlign: 'left',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '18px',
                    fontWeight: '600',
                    color: '#1e3a8a'
                  }}
                >
                  {faq.question}
                  <span style={{
                    fontSize: '24px',
                    color: '#6b7280',
                    transform: openFaq === index ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease'
                  }}>
                    ▼
                  </span>
                </button>
                {openFaq === index && (
                  <div style={{
                    padding: '0 24px 20px 24px',
                    color: '#6b7280',
                    lineHeight: '1.6',
                    fontSize: '16px'
                  }}>
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </Wrapper>
  );
}
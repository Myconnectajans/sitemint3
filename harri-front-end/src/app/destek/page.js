'use client';
import Footer from "@layout/footer";
import Header from "@layout/header";
import Wrapper from "@layout/wrapper";

export default function Destek() {
  return (
    <Wrapper>
      <Header style_2={true} />
      <DestekArea />
      <Footer />
    </Wrapper>
  );
}

function DestekArea() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#ffffff'
    }}>
      {/* Hero Section */}
      <section style={{
        background: '#ffffff',
        padding: '100px 0 60px'
      }}>
        <div className="container">
          <div style={{
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <h1 style={{
              fontSize: '48px',
              fontWeight: '700',
              marginBottom: '20px',
              color: '#1e3a8a'
            }}>
              Müşteri Destek Merkezi
            </h1>
            <p style={{
              fontSize: '20px',
              color: '#6b7280',
              lineHeight: '1.6'
            }}>
              Size yardımcı olmak için buradayız! Sorularınız için bizimle iletişime geçin.
            </p>
          </div>
        </div>
      </section>

      {/* İletişim Formu */}
      <section style={{
        padding: '80px 0',
        background: '#f8f9fa'
      }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '50px'
          }}>
            <h2 style={{
              fontSize: '36px',
              fontWeight: '700',
              color: '#1e3a8a',
              marginBottom: '16px'
            }}>
              Bize Ulaşın
            </h2>
            <p style={{
              color: '#6b7280',
              fontSize: '18px'
            }}>
              Formu doldurarak sorularınızı bize iletebilirsiniz
            </p>
          </div>

          <div style={{
            background: '#ffffff',
            borderRadius: '16px',
            padding: '50px',
            border: '2px solid #e5e7eb'
          }}>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
              <div className="row g-3">
                <div className="col-md-6">
                  <label style={{
                    display: 'block',
                    marginBottom: '10px',
                    fontWeight: '600',
                    color: '#1e3a8a',
                    fontSize: '15px'
                  }}>
                    Adınız Soyadınız *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Adınız Soyadınız"
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      borderRadius: '8px',
                      border: '2px solid #e5e7eb',
                      fontSize: '15px',
                      transition: 'all 0.3s ease',
                      outline: 'none'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#1e3a8a'}
                    onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                  />
                </div>
                <div className="col-md-6">
                  <label style={{
                    display: 'block',
                    marginBottom: '10px',
                    fontWeight: '600',
                    color: '#1e3a8a',
                    fontSize: '15px'
                  }}>
                    E-posta Adresiniz *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="ornek@email.com"
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      borderRadius: '8px',
                      border: '2px solid #e5e7eb',
                      fontSize: '15px',
                      transition: 'all 0.3s ease',
                      outline: 'none'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#1e3a8a'}
                    onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                  />
                </div>
              </div>

              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '10px',
                  fontWeight: '600',
                  color: '#1e3a8a',
                  fontSize: '15px'
                }}>
                  Telefon Numaranız
                </label>
                <input
                  type="tel"
                  placeholder="+90 5XX XXX XX XX"
                  style={{
                    width: '100%',
                    padding: '14px 18px',
                    borderRadius: '8px',
                    border: '2px solid #e5e7eb',
                    fontSize: '15px',
                    transition: 'all 0.3s ease',
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#1e3a8a'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '10px',
                  fontWeight: '600',
                  color: '#1e3a8a',
                  fontSize: '15px'
                }}>
                  Konu *
                </label>
                <select
                  required
                  style={{
                    width: '100%',
                    padding: '14px 18px',
                    borderRadius: '8px',
                    border: '2px solid #e5e7eb',
                    fontSize: '15px',
                    transition: 'all 0.3s ease',
                    outline: 'none',
                    cursor: 'pointer',
                    background: '#ffffff'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#1e3a8a'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                >
                  <option value="">Konu Seçiniz</option>
                  <option value="genel">Genel Bilgi</option>
                  <option value="teknik">Teknik Destek</option>
                  <option value="satis">Satış ve Fiyatlandırma</option>
                  <option value="siparis">Sipariş Takibi</option>
                  <option value="iade">İade ve İptal</option>
                  <option value="diger">Diğer</option>
                </select>
              </div>

              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '10px',
                  fontWeight: '600',
                  color: '#1e3a8a',
                  fontSize: '15px'
                }}>
                  Mesajınız *
                </label>
                <textarea
                  required
                  rows="6"
                  placeholder="Mesajınızı buraya yazın..."
                  style={{
                    width: '100%',
                    padding: '14px 18px',
                    borderRadius: '8px',
                    border: '2px solid #e5e7eb',
                    fontSize: '15px',
                    transition: 'all 0.3s ease',
                    outline: 'none',
                    resize: 'vertical',
                    fontFamily: 'inherit'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#1e3a8a'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                ></textarea>
              </div>

              <button
                type="submit"
                style={{
                  background: '#1e3a8a',
                  color: '#ffffff',
                  border: '2px solid #1e3a8a',
                  padding: '16px 40px',
                  borderRadius: '8px',
                  fontSize: '17px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  width: 'fit-content'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#ffffff';
                  e.currentTarget.style.color = '#1e3a8a';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#1e3a8a';
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Mesajı Gönder
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* SSS Bölümü */}
      <section style={{
        padding: '80px 0',
        background: '#ffffff'
      }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '50px'
          }}>
            <h2 style={{
              fontSize: '36px',
              fontWeight: '700',
              color: '#1e3a8a',
              marginBottom: '16px'
            }}>
              Sıkça Sorulan Sorular
            </h2>
            <p style={{
              color: '#6b7280',
              fontSize: '18px'
            }}>
              En çok merak edilen soruların cevapları
            </p>
          </div>

          <div className="row g-4">
            {[
              {
                q: "Teslimat süresi ne kadar?",
                a: "Web siteleri için ortalama 3-5 iş günü, kartvizitler için 10-15 iş günü içinde teslimat yapılmaktadır."
              },
              {
                q: "Ödeme yöntemleri nelerdir?",
                a: "Kredi kartı, banka havalesi/EFT ve kapıda ödeme seçenekleri mevcuttur. Tüm ödemeleriniz güvenli altyapı ile korunmaktadır."
              },
              {
                q: "İade ve değişim politikanız nedir?",
                a: "Satın aldığınız ürünleri teslim tarihinden itibaren 14 gün içinde iade edebilirsiniz. Detaylar için İade ve İptal sayfamızı inceleyebilirsiniz."
              },
              {
                q: "Özel tasarım talep edebilir miyim?",
                a: "Evet! Özel tasarım talepleriniz için destek ekibimizle iletişime geçebilirsiniz. Size özel çözümler sunmaktan mutluluk duyarız."
              },
              {
                q: "Müşteri desteği çalışma saatleri nedir?",
                a: "Müşteri destek ekibimiz Pazartesi-Cuma 09:00-18:00, Cumartesi 10:00-16:00 saatleri arasında hizmetinizdedir."
              },
              {
                q: "Toplu sipariş için indirim var mı?",
                a: "Toplu siparişleriniz için özel fiyatlandırma yapıyoruz. Detaylı bilgi için satış ekibimizle iletişime geçebilirsiniz."
              }
            ].map((faq, i) => (
              <div key={i} className="col-md-6">
                <div style={{
                  background: '#ffffff',
                  borderRadius: '12px',
                  padding: '30px',
                  border: '2px solid #e5e7eb',
                  height: '100%',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#1e3a8a';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e5e7eb';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: '700',
                    color: '#1e3a8a',
                    marginBottom: '12px'
                  }}>
                    {faq.q}
                  </h3>
                  <p style={{
                    color: '#6b7280',
                    fontSize: '15px',
                    lineHeight: '1.7',
                    margin: 0
                  }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Çalışma Saatleri */}
      <section style={{
        padding: '60px 0',
        background: '#f8f9fa'
      }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            background: '#ffffff',
            borderRadius: '16px',
            padding: '40px',
            border: '2px solid #1e3a8a'
          }}>
            <h3 style={{
              fontSize: '28px',
              fontWeight: '700',
              color: '#1e3a8a',
              marginBottom: '24px'
            }}>
              Çalışma Saatleri
            </h3>
            <div style={{
              display: 'grid',
              gap: '12px',
              maxWidth: '400px',
              margin: '0 auto'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '12px',
                borderBottom: '1px solid #e5e7eb'
              }}>
                <span style={{ fontWeight: '600', color: '#1e3a8a' }}>Pazartesi - Cuma:</span>
                <span style={{ color: '#6b7280' }}>09:00 - 18:00</span>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '12px',
                borderBottom: '1px solid #e5e7eb'
              }}>
                <span style={{ fontWeight: '600', color: '#1e3a8a' }}>Cumartesi:</span>
                <span style={{ color: '#6b7280' }}>10:00 - 16:00</span>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '12px'
              }}>
                <span style={{ fontWeight: '600', color: '#1e3a8a' }}>Pazar:</span>
                <span style={{ color: '#dc2626', fontWeight: '600' }}>Kapalı</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

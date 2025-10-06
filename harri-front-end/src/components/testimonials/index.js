'use client';
import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Dr. Mehmet Yılmaz",
      profession: "Diş Hekimi",
      image: "👤",
      rating: 5,
      comment: "Kartvizitim sayesinde hasta sayım %40 arttı. Harri'nin profesyonel tasarımı gerçekten etkili oldu.",
      color: "#4F8EF7"
    },
    {
      id: 2,
      name: "Av. Ayşe Demir",
      profession: "Avukat",
      image: "👤",
      rating: 5,
      comment: "Modern ve güvenilir görünümü sayesinde müvekkil portföyüm genişledi. Çok memnunum!",
      color: "#43C59E"
    },
    {
      id: 3,
      name: "Psikolog Can Özkan",
      profession: "Psikolog",
      image: "👤",
      rating: 5,
      comment: "QR menü sistemi sayesinde hastalarım menüyü kolayca inceleyebiliyor. Harika bir çözüm!",
      color: "#ff6b6b"
    },
    {
      id: 4,
      name: "Mimar Elif Kaya",
      profession: "Mimar",
      image: "👤",
      rating: 5,
      comment: "Web sitem sayesinde proje tekliflerim 3 katına çıktı. Harri'ye teşekkürler!",
      color: "#ffa726"
    }
  ];

  return (
    <>
      <section style={{ 
        padding: '80px 0',
        background: '#ffffff',
        position: 'relative'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 style={{
                fontSize: '32px',
                fontWeight: '800',
                color: '#1a1a1a',
                marginBottom: '16px',
                letterSpacing: '0.5px'
              }}>
                Müşterilerimiz Ne Diyor?
              </h2>
              <p style={{
                fontSize: '17px',
                color: '#4a4a4a',
                maxWidth: '600px',
                margin: '0 auto',
                fontWeight: '400'
              }}>
                Başarı hikayelerimizi müşterilerimizden dinleyin
              </p>
            </div>
          </div>

          <div className="row g-4">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="col-lg-6 col-md-6 col-sm-12">
                <div style={{
                  background: '#ffffff',
                  borderRadius: '4px',
                  padding: '30px',
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
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                    <div style={{
                      fontSize: '40px',
                      marginRight: '15px',
                      width: '50px',
                      height: '50px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: '#f8f8f8',
                      borderRadius: '3px',
                      border: '2px solid #e0e0e0'
                    }}>
                      {testimonial.image}
                    </div>
                    <div>
                      <h5 style={{
                        fontSize: '17px',
                        fontWeight: '700',
                        color: '#1a1a1a',
                        marginBottom: '5px',
                        letterSpacing: '0.3px'
                      }}>
                        {testimonial.name}
                      </h5>
                      <p style={{
                        fontSize: '14px',
                        color: '#4a4a4a',
                        margin: 0,
                        fontWeight: '500'
                      }}>
                        {testimonial.profession}
                      </p>
                    </div>
                  </div>
                  
                  <div style={{ marginBottom: '15px' }}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} style={{
                        color: '#ffa500',
                        fontSize: '16px'
                      }}>⭐</span>
                    ))}
                  </div>
                  
                  <p style={{
                    fontSize: '15px',
                    color: '#4a4a4a',
                    lineHeight: '1.6',
                    fontStyle: 'italic',
                    margin: 0,
                    fontWeight: '400'
                  }}>
                    "{testimonial.comment}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;

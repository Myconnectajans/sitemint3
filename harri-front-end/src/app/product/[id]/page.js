'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import Header from '@layout/header';
import Footer from '@layout/footer';
import { add_cart_product } from 'src/redux/features/cartSlice';
import { notifySuccess } from '@utils/toast';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    title: '',
    email: '',
    website: '',
    address: '',
    color: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [productType, setProductType] = useState('kartvizit');

  // Mock product data
  const mockProducts = Array.from({ length: 2000 }, (_, i) => {
    const professions = [
      'Diş Hekimi', 'Avukat', 'Psikolog', 'İnşaat Mühendisi', 'Mimarlık',
      'Doktor', 'Hemşire', 'Eczacı', 'Veteriner', 'Fizyoterapist',
      'Muhasebeci', 'Finans Danışmanı', 'Bankacı', 'Sigorta Uzmanı', 'Yatırım Danışmanı',
      'Öğretmen', 'Eğitmen', 'Koç', 'Danışman', 'Psikolojik Danışman',
      'Mühendis', 'Yazılım Geliştirici', 'IT Uzmanı', 'Sistem Yöneticisi', 'Veri Analisti',
      'Tasarımcı', 'Grafik Tasarımcı', 'Web Tasarımcı', 'İç Mimar', 'Moda Tasarımcı',
      'Satış Temsilcisi', 'Pazarlama Uzmanı', 'Reklamcı', 'Halkla İlişkiler', 'İnsan Kaynakları',
      'Güvenlik Uzmanı', 'Polis', 'Asker', 'İtfaiyeci', 'Paramedik',
      'Spor Antrenörü', 'Fitness Eğitmeni', 'Yoga Eğitmeni', 'Pilates Eğitmeni', 'Dans Eğitmeni',
      'Sanatçı', 'Müzisyen', 'Fotoğrafçı', 'Videograf', 'Yazar',
      'Gastronomi', 'Şef', 'Restoran Sahibi', 'Kafe Sahibi', 'Etkinlik Organizatörü'
    ];
    
    const profession = professions[i % professions.length];
    const category = ['modern', 'klasik', 'minimal', 'renkli', 'corporate', 'creative'][i % 6];
    const isMagnet = i >= 1000;
    
    return {
      id: i + 1,
      _id: `kartvizit-${i + 1}`,
      title: isMagnet ? `${profession} Buzdolabı Magneti ${i + 1}` : `${profession} Kartviziti ${i + 1}`,
      price: isMagnet ? 49 : 999,
      originalPrice: isMagnet ? 99 : 1999,
      discount: 50,
      images: [
        '/assets/img/product/product-1.jpg',
        '/assets/img/product/product-2.jpg',
        '/assets/img/product/product-3.jpg'
      ],
      features: isMagnet ? [
        'Güçlü mıknatıs',
        'Yüksek kalite baskı',
        'Dayanıklı malzeme',
        'Özelleştirilebilir',
        'Canlı renkler',
        'Modern tasarım garantili',
        'Güvenli alışveriş'
      ] : [
        'Çift taraflı kalın kartvizit',
        'Kabartmalı yazılar',
        'Selofanlı kaplama',
        '15 gün içerisinde teslimat',
        'Modern tasarım garantili',
        'Premium kalite kağıt',
        'Güvenli alışveriş',
        'Ücretsiz tasarım desteği',
        '%100 müşteri memnuniyeti',
        'Profesyonel görünüm'
      ],
      profession: profession,
      category: category,
      type: isMagnet ? 'magnet' : 'kartvizit'
    };
  });

  useEffect(() => {
    const productId = parseInt(params.id);
    const foundProduct = mockProducts.find(p => p.id === productId);
    
    if (foundProduct) {
      setProduct(foundProduct);
      const productType = productId >= 1001 ? 'magnet' : 'kartvizit';
      setProductType(productType);
    } else {
      router.push('/');
    }
  }, [params.id, router]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddToCart = () => {
    if (product) {
      dispatch(add_cart_product({
        _id: product._id || product.id,
        id: product.id,
        title: product.title,
        price: product.price,
        originalPrice: product.originalPrice,
        discount: product.discount,
        image: product.images[0],
        images: product.images,
        orderQuantity: 1
      }));
      notifySuccess('Ürün sepete eklendi!');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const orderData = {
        product: product,
        customer: formData,
        orderDate: new Date().toISOString(),
        orderId: `ORD-${Date.now()}`
      };

      console.log('Sipariş verisi:', orderData);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      notifySuccess('Siparişiniz başarıyla alındı! Mail adresinize bildirim gönderildi.');
      router.push('/');
    } catch (error) {
      console.error('Sipariş hatası:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!product) {
    return (
      <>
        <Header style_2={true} />
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100vh',
          flexDirection: 'column',
          gap: '20px',
          background: '#ffffff'
        }}>
          <div style={{
            fontSize: '24px',
            fontWeight: '600',
            color: '#1e3a8a'
          }}>
            Ürün yükleniyor...
          </div>
        </div>
        <Footer />
      </>
    );
  }

  // KDV hesaplama
  const calculatePriceWithVAT = (price) => {
    const subtotal = price;
    const vat = subtotal * 0.20;
    const total = subtotal + vat;
    return { subtotal, vat, total };
  };

  const priceInfo = calculatePriceWithVAT(product.price);

  return (
    <>
      <Header style_2={true} />
      
      <div style={{ paddingTop: '100px', background: '#ffffff', minHeight: '100vh' }}>
        <div className="container" style={{ padding: '40px 20px', maxWidth: '1400px', margin: '0 auto' }}>
          <div className="row">
            {/* Sol Taraf - Ürün Görselleri */}
            <div className="col-lg-6">
              <div style={{
                background: '#fff',
                borderRadius: '20px',
                padding: '30px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                border: '1px solid #e5e7eb'
              }}>
                <div style={{ position: 'relative', marginBottom: '20px' }}>
                  <img
                    src={product.images[currentImageIndex]}
                    alt={product.title}
                    style={{
                      width: '100%',
                      height: '400px',
                      objectFit: 'cover',
                      borderRadius: '12px'
                    }}
                  />
                  
                  {/* Navigation Arrows */}
                  {product.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        style={{
                          position: 'absolute',
                          left: '15px',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          background: 'rgba(255,255,255,0.95)',
                          color: '#1e3a8a',
                          border: 'none',
                          borderRadius: '50%',
                          width: '50px',
                          height: '50px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer',
                          fontSize: '24px',
                          fontWeight: '700',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.background = '#1e3a8a';
                          e.currentTarget.style.color = '#fff';
                          e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.background = 'rgba(255,255,255,0.95)';
                          e.currentTarget.style.color = '#1e3a8a';
                          e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                        }}
                      >
                        ‹
                      </button>

                      <button
                        onClick={nextImage}
                        style={{
                          position: 'absolute',
                          right: '15px',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          background: 'rgba(255,255,255,0.95)',
                          color: '#1e3a8a',
                          border: 'none',
                          borderRadius: '50%',
                          width: '50px',
                          height: '50px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer',
                          fontSize: '24px',
                          fontWeight: '700',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.background = '#1e3a8a';
                          e.currentTarget.style.color = '#fff';
                          e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.background = 'rgba(255,255,255,0.95)';
                          e.currentTarget.style.color = '#1e3a8a';
                          e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                        }}
                      >
                        ›
                      </button>
                    </>
                  )}

                  {/* Image Dots */}
                  <div style={{
                    position: 'absolute',
                    bottom: '15px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    gap: '8px',
                    background: 'rgba(0,0,0,0.6)',
                    padding: '8px 16px',
                    borderRadius: '20px'
                  }}>
                    {product.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        style={{
                          width: '10px',
                          height: '10px',
                          borderRadius: '50%',
                          background: currentImageIndex === idx ? '#1e3a8a' : 'rgba(255,255,255,0.5)',
                          border: 'none',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease'
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Thumbnail Images */}
                <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                  {product.images.map((image, idx) => (
                    <img
                      key={idx}
                      src={image}
                      alt={`${product.title} ${idx + 1}`}
                      onClick={() => setCurrentImageIndex(idx)}
                      style={{
                        width: '80px',
                        height: '80px',
                        objectFit: 'cover',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        border: currentImageIndex === idx ? '3px solid #1e3a8a' : '3px solid #e5e7eb',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={e => {
                        if (currentImageIndex !== idx) {
                          e.currentTarget.style.transform = 'scale(1.05)';
                          e.currentTarget.style.borderColor = '#1e3a8a';
                        }
                      }}
                      onMouseLeave={e => {
                        if (currentImageIndex !== idx) {
                          e.currentTarget.style.transform = 'scale(1)';
                          e.currentTarget.style.borderColor = '#e5e7eb';
                        }
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Sağ Taraf - Ürün Bilgileri ve Sipariş Formu */}
            <div className="col-lg-6">
              <div style={{
                background: '#fff',
                borderRadius: '20px',
                padding: '30px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                border: '1px solid #e5e7eb'
              }}>
                {/* Ürün Bilgileri */}
                <div style={{ marginBottom: '30px' }}>
                  <h1 style={{
                    fontSize: '32px',
                    fontWeight: 700,
                    color: '#1e3a8a',
                    marginBottom: '16px'
                  }}>
                    {product.title}
                  </h1>
                  
                  <div style={{ marginBottom: '24px' }}>
                    {product.discount > 0 && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                        <span style={{
                          background: '#ef4444',
                          color: '#fff',
                          padding: '6px 16px',
                          borderRadius: '20px',
                          fontSize: '14px',
                          fontWeight: 600
                        }}>
                          %{product.discount} İndirim
                        </span>
                      </div>
                    )}

                    <div style={{
                      display: 'flex',
                      alignItems: 'baseline',
                      gap: '12px',
                      marginBottom: '16px'
                    }}>
                      {product.discount > 0 && (
                        <span style={{
                          textDecoration: 'line-through',
                          color: '#9ca3af',
                          fontSize: '20px'
                        }}>
                          ₺{product.originalPrice.toLocaleString('tr-TR')}
                        </span>
                      )}
                      <span style={{
                        fontSize: '32px',
                        fontWeight: 700,
                        color: '#1e3a8a'
                      }}>
                        ₺{product.price.toLocaleString('tr-TR')}
                      </span>
                      <span style={{ fontSize: '14px', color: '#6b7280', fontWeight: '500' }}>+KDV</span>
                    </div>

                    {/* KDV Detayı */}
                    <div style={{
                      background: '#f0f9ff',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      border: '1px solid #bae6fd'
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                        <span style={{ color: '#0369a1', fontSize: '14px' }}>Ürün Fiyatı:</span>
                        <span style={{ color: '#0369a1', fontSize: '14px', fontWeight: '600' }}>
                          ₺{priceInfo.subtotal.toLocaleString('tr-TR', { minimumFractionDigits: 2 })}
                        </span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                        <span style={{ color: '#0369a1', fontSize: '14px' }}>KDV (%20):</span>
                        <span style={{ color: '#0369a1', fontSize: '14px', fontWeight: '600' }}>
                          ₺{priceInfo.vat.toLocaleString('tr-TR', { minimumFractionDigits: 2 })}
                        </span>
                      </div>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        paddingTop: '8px',
                        borderTop: '1px solid #bae6fd'
                      }}>
                        <span style={{ color: '#0369a1', fontSize: '16px', fontWeight: '700' }}>Toplam:</span>
                        <span style={{ color: '#0369a1', fontSize: '18px', fontWeight: '700' }}>
                          ₺{priceInfo.total.toLocaleString('tr-TR', { minimumFractionDigits: 2 })}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div style={{ marginBottom: '30px' }}>
                    <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '16px', color: '#1e3a8a' }}>
                      Ürün Özellikleri
                    </h3>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(2, 1fr)',
                      gap: '10px'
                    }}>
                      {product.features.map((feature, idx) => (
                        <div key={idx} style={{
                          display: 'flex',
                          alignItems: 'center',
                          fontSize: '14px',
                          color: '#374151',
                          background: '#f0f4ff',
                          padding: '10px 12px',
                          borderRadius: '8px',
                          border: '1px solid #dbeafe'
                        }}>
                          <span style={{ color: '#10b981', marginRight: '8px', fontSize: '16px', fontWeight: '700' }}>✓</span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sipariş Formu */}
                <div style={{
                  background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
                  borderRadius: '16px',
                  padding: '28px',
                  color: '#fff'
                }}>
                  <h3 style={{
                    fontSize: '24px',
                    fontWeight: 700,
                    marginBottom: '20px',
                    textAlign: 'center',
                    color: '#fff'
                  }}>
                    Sipariş Bilgileri
                  </h3>

                  <style jsx>{`
                    input::placeholder,
                    textarea::placeholder {
                      color: rgba(255, 255, 255, 0.7) !important;
                      opacity: 1 !important;
                    }
                  `}</style>

                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label style={{ 
                          fontSize: '14px', 
                          fontWeight: 600, 
                          marginBottom: '6px', 
                          display: 'block',
                          color: '#fff'
                        }}>
                          Adınız *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          style={{
                            width: '100%',
                            padding: '12px 16px',
                            borderRadius: '10px',
                            border: '2px solid rgba(255,255,255,0.3)',
                            background: 'rgba(255,255,255,0.15)',
                            color: '#fff',
                            fontSize: '15px',
                            fontWeight: '500',
                            backdropFilter: 'blur(10px)'
                          }}
                          placeholder="Adınızı girin"
                        />
                      </div>

                      <div className="col-md-6">
                        <label style={{ 
                          fontSize: '14px', 
                          fontWeight: 600, 
                          marginBottom: '6px', 
                          display: 'block',
                          color: '#fff'
                        }}>
                          Soyadınız *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          style={{
                            width: '100%',
                            padding: '12px 16px',
                            borderRadius: '10px',
                            border: '2px solid rgba(255,255,255,0.3)',
                            background: 'rgba(255,255,255,0.15)',
                            color: '#fff',
                            fontSize: '15px',
                            fontWeight: '500',
                            backdropFilter: 'blur(10px)'
                          }}
                          placeholder="Soyadınızı girin"
                        />
                      </div>

                      <div className="col-md-6">
                        <label style={{ 
                          fontSize: '14px', 
                          fontWeight: 600, 
                          marginBottom: '6px', 
                          display: 'block',
                          color: '#fff'
                        }}>
                          Ünvan *
                        </label>
                        <input
                          type="text"
                          name="title"
                          value={formData.title}
                          onChange={handleInputChange}
                          required
                          style={{
                            width: '100%',
                            padding: '12px 16px',
                            borderRadius: '10px',
                            border: '2px solid rgba(255,255,255,0.3)',
                            background: 'rgba(255,255,255,0.15)',
                            color: '#fff',
                            fontSize: '15px',
                            fontWeight: '500',
                            backdropFilter: 'blur(10px)'
                          }}
                          placeholder="Ünvanınızı girin"
                        />
                      </div>

                      <div className="col-md-6">
                        <label style={{ 
                          fontSize: '14px', 
                          fontWeight: 600, 
                          marginBottom: '6px', 
                          display: 'block',
                          color: '#fff'
                        }}>
                          E-posta *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          style={{
                            width: '100%',
                            padding: '12px 16px',
                            borderRadius: '10px',
                            border: '2px solid rgba(255,255,255,0.3)',
                            background: 'rgba(255,255,255,0.15)',
                            color: '#fff',
                            fontSize: '15px',
                            fontWeight: '500',
                            backdropFilter: 'blur(10px)'
                          }}
                          placeholder="E-posta adresinizi girin"
                        />
                      </div>

                      <div className="col-md-12">
                        <label style={{ 
                          fontSize: '14px', 
                          fontWeight: 600, 
                          marginBottom: '6px', 
                          display: 'block',
                          color: '#fff'
                        }}>
                          Web Sitesi
                        </label>
                        <input
                          type="url"
                          name="website"
                          value={formData.website}
                          onChange={handleInputChange}
                          style={{
                            width: '100%',
                            padding: '12px 16px',
                            borderRadius: '10px',
                            border: '2px solid rgba(255,255,255,0.3)',
                            background: 'rgba(255,255,255,0.15)',
                            color: '#fff',
                            fontSize: '15px',
                            fontWeight: '500',
                            backdropFilter: 'blur(10px)'
                          }}
                          placeholder="Web sitenizi girin (opsiyonel)"
                        />
                      </div>

                      <div className="col-md-12">
                        <label style={{ 
                          fontSize: '14px', 
                          fontWeight: 600, 
                          marginBottom: '10px', 
                          display: 'block',
                          color: '#fff'
                        }}>
                          Renk Tercihi *
                        </label>
                        <div style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(auto-fit, minmax(65px, 1fr))',
                          gap: '8px'
                        }}>
                          {[
                            { name: 'Kırmızı', value: 'kırmızı', color: '#dc2626' },
                            { name: 'Mavi', value: 'mavi', color: '#2563eb' },
                            { name: 'Yeşil', value: 'yeşil', color: '#16a34a' },
                            { name: 'Sarı', value: 'sarı', color: '#eab308' },
                            { name: 'Turuncu', value: 'turuncu', color: '#ea580c' },
                            { name: 'Mor', value: 'mor', color: '#9333ea' },
                            { name: 'Pembe', value: 'pembe', color: '#ec4899' },
                            { name: 'Bordo', value: 'bordo', color: '#7f1d1d' },
                            { name: 'Lacivert', value: 'lacivert', color: '#1e3a8a' },
                            { name: 'Gri', value: 'gri', color: '#6b7280' },
                            { name: 'Siyah', value: 'siyah', color: '#1f2937' },
                            { name: 'Beyaz', value: 'beyaz', color: '#f9fafb' }
                          ].map((colorOption) => (
                            <button
                              key={colorOption.value}
                              type="button"
                              onClick={() => setFormData({ ...formData, color: colorOption.value })}
                              style={{
                                padding: '8px',
                                borderRadius: '10px',
                                border: formData.color === colorOption.value 
                                  ? '2px solid rgba(255,255,255,0.9)' 
                                  : '1.5px solid rgba(255,255,255,0.3)',
                                background: 'rgba(255,255,255,0.15)',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '5px',
                                transform: formData.color === colorOption.value ? 'scale(1.05)' : 'scale(1)'
                              }}
                            >
                              <div style={{
                                width: '24px',
                                height: '24px',
                                borderRadius: '50%',
                                background: colorOption.color,
                                border: colorOption.value === 'beyaz' ? '2px solid #ddd' : 'none',
                                boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
                              }} />
                              <span style={{
                                fontSize: '10px',
                                fontWeight: formData.color === colorOption.value ? 700 : 500,
                                color: '#fff'
                              }}>
                                {colorOption.name}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="col-12">
                        <label style={{ 
                          fontSize: '14px', 
                          fontWeight: 600, 
                          marginBottom: '6px', 
                          display: 'block',
                          color: '#fff'
                        }}>
                          Adres *
                        </label>
                        <textarea
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          required
                          rows="3"
                          style={{
                            width: '100%',
                            padding: '12px 16px',
                            borderRadius: '10px',
                            border: '2px solid rgba(255,255,255,0.3)',
                            background: 'rgba(255,255,255,0.15)',
                            color: '#fff',
                            fontSize: '15px',
                            fontWeight: '500',
                            backdropFilter: 'blur(10px)',
                            resize: 'vertical'
                          }}
                          placeholder="Tam adresinizi girin"
                        />
                      </div>
                    </div>

                    <div style={{ 
                      display: 'flex', 
                      gap: '12px', 
                      justifyContent: 'center', 
                      marginTop: '24px',
                      flexWrap: 'wrap'
                    }}>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        style={{
                          flex: 1,
                          minWidth: '160px',
                          padding: '14px 24px',
                          background: '#10b981',
                          color: '#fff',
                          border: 'none',
                          borderRadius: '12px',
                          fontWeight: 700,
                          fontSize: '15px',
                          cursor: isSubmitting ? 'not-allowed' : 'pointer',
                          opacity: isSubmitting ? 0.7 : 1,
                          boxShadow: '0 4px 15px rgba(16, 185, 129, 0.4)'
                        }}
                      >
                        {isSubmitting ? 'Gönderiliyor...' : '✓ Sipariş Ver'}
                      </button>

                      <button
                        type="button"
                        onClick={handleAddToCart}
                        style={{
                          flex: 1,
                          minWidth: '160px',
                          padding: '14px 24px',
                          background: 'rgba(255,255,255,0.2)',
                          color: '#fff',
                          border: '2px solid rgba(255,255,255,0.4)',
                          borderRadius: '12px',
                          fontWeight: 700,
                          fontSize: '15px',
                          cursor: 'pointer',
                          backdropFilter: 'blur(10px)'
                        }}
                      >
                        🛒 Sepete Ekle
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

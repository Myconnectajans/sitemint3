'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { notifySuccess, notifyError } from '@utils/toast';

const CheckoutArea = () => {
  const { cart_products } = useSelector((state) => state.cart);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    companyName: '',
    taxOffice: '',
    taxNumber: '',
    paymentMethod: 'creditCard',
    cardNumber: '',
    cardName: '',
    cardExpiry: '',
    cardCvv: '',
    acceptTerms: false
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // KDV ve toplam hesaplamaları
  const calculateTotals = () => {
    const subtotal = cart_products.reduce((acc, item) => {
      return acc + (item.price * (item.orderQuantity || 1));
    }, 0);
    const kdv = subtotal * 0.20;
    const total = subtotal + kdv;
    
    return { subtotal, kdv, total };
  };

  const { subtotal, kdv, total } = calculateTotals();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'Ad alanı zorunludur';
    if (!formData.lastName.trim()) newErrors.lastName = 'Soyad alanı zorunludur';
    if (!formData.email.trim()) {
      newErrors.email = 'E-posta alanı zorunludur';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Geçerli bir e-posta adresi girin';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Telefon alanı zorunludur';
    if (!formData.address.trim()) newErrors.address = 'Adres alanı zorunludur';
    if (!formData.city.trim()) newErrors.city = 'Şehir alanı zorunludur';
    if (!formData.zipCode.trim()) newErrors.zipCode = 'Posta kodu alanı zorunludur';
    
    if (formData.paymentMethod === 'creditCard') {
      if (!formData.cardNumber.trim()) newErrors.cardNumber = 'Kart numarası zorunludur';
      if (!formData.cardName.trim()) newErrors.cardName = 'Kart üzerindeki isim zorunludur';
      if (!formData.cardExpiry.trim()) newErrors.cardExpiry = 'Son kullanma tarihi zorunludur';
      if (!formData.cardCvv.trim()) newErrors.cardCvv = 'CVV zorunludur';
    }
    
    if (!formData.acceptTerms) {
      newErrors.acceptTerms = 'Kullanım koşullarını kabul etmelisiniz';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      notifyError('Lütfen tüm gerekli alanları doldurun');
      return;
    }

    setLoading(true);
    
    try {
      // Simüle edilmiş ödeme işlemi
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      notifySuccess('Siparişiniz başarıyla alındı! Teşekkür ederiz.');
      
      // Başarılı ödeme sonrası yönlendirme yapılabilir
      // router.push('/order-success');
    } catch (error) {
      notifyError('Ödeme işlemi sırasında bir hata oluştu');
    } finally {
      setLoading(false);
    }
  };

  if (cart_products.length === 0) {
    return (
      <div style={{
        minHeight: '80vh',
        background: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 20px'
      }}>
        <div style={{
          background: 'rgba(255,255,255,0.98)',
          borderRadius: '24px',
          padding: '60px 40px',
          maxWidth: '600px',
          width: '100%',
          textAlign: 'center',
          boxShadow: '0 20px 60px rgba(0,0,0,0.2)'
        }}>
          <h2 style={{ color: '#1e3a8a', fontSize: '28px', marginBottom: '16px' }}>
            Sepetiniz Boş
          </h2>
          <p style={{ color: '#6b7280', marginBottom: '32px' }}>
            Ödeme yapabilmek için sepetinize ürün eklemeniz gerekmektedir.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#ffffff',
      padding: '60px 20px'
    }}>
      <div className="container" style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '40px'
        }}>
          <h1 style={{
            color: '#1e3a8a',
            fontSize: '42px',
            fontWeight: '700',
            marginBottom: '12px'
          }}>
            Ödeme
          </h1>
          <p style={{
            color: '#6b7280',
            fontSize: '18px'
          }}>
            Siparişinizi tamamlamak için bilgilerinizi girin
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="row">
            {/* Sol Taraf - Form */}
            <div className="col-lg-8">
              {/* Kişisel Bilgiler */}
              <div style={{
                background: 'rgba(255,255,255,0.98)',
                borderRadius: '20px',
                padding: '32px',
                marginBottom: '24px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{
                  color: '#1e3a8a',
                  fontSize: '24px',
                  fontWeight: '700',
                  marginBottom: '24px'
                }}>
                  İletişim Bilgileri
                </h3>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label style={{ color: '#374151', fontSize: '14px', fontWeight: '600', marginBottom: '8px', display: 'block' }}>
                      Ad *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: errors.firstName ? '2px solid #dc2626' : '2px solid #e2e8f0',
                        borderRadius: '10px',
                        fontSize: '16px',
                        outline: 'none',
                        transition: 'all 0.2s'
                      }}
                    />
                    {errors.firstName && (
                      <span style={{ color: '#dc2626', fontSize: '12px', marginTop: '4px', display: 'block' }}>
                        {errors.firstName}
                      </span>
                    )}
                  </div>

                  <div className="col-md-6 mb-3">
                    <label style={{ color: '#374151', fontSize: '14px', fontWeight: '600', marginBottom: '8px', display: 'block' }}>
                      Soyad *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: errors.lastName ? '2px solid #dc2626' : '2px solid #e2e8f0',
                        borderRadius: '10px',
                        fontSize: '16px',
                        outline: 'none'
                      }}
                    />
                    {errors.lastName && (
                      <span style={{ color: '#dc2626', fontSize: '12px', marginTop: '4px', display: 'block' }}>
                        {errors.lastName}
                      </span>
                    )}
                  </div>

                  <div className="col-md-6 mb-3">
                    <label style={{ color: '#374151', fontSize: '14px', fontWeight: '600', marginBottom: '8px', display: 'block' }}>
                      E-posta *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: errors.email ? '2px solid #dc2626' : '2px solid #e2e8f0',
                        borderRadius: '10px',
                        fontSize: '16px',
                        outline: 'none'
                      }}
                    />
                    {errors.email && (
                      <span style={{ color: '#dc2626', fontSize: '12px', marginTop: '4px', display: 'block' }}>
                        {errors.email}
                      </span>
                    )}
                  </div>

                  <div className="col-md-6 mb-3">
                    <label style={{ color: '#374151', fontSize: '14px', fontWeight: '600', marginBottom: '8px', display: 'block' }}>
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: errors.phone ? '2px solid #dc2626' : '2px solid #e2e8f0',
                        borderRadius: '10px',
                        fontSize: '16px',
                        outline: 'none'
                      }}
                    />
                    {errors.phone && (
                      <span style={{ color: '#dc2626', fontSize: '12px', marginTop: '4px', display: 'block' }}>
                        {errors.phone}
                      </span>
                    )}
                  </div>

                  <div className="col-12 mb-3">
                    <label style={{ color: '#374151', fontSize: '14px', fontWeight: '600', marginBottom: '8px', display: 'block' }}>
                      Adres *
                    </label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      rows="3"
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: errors.address ? '2px solid #dc2626' : '2px solid #e2e8f0',
                        borderRadius: '10px',
                        fontSize: '16px',
                        outline: 'none',
                        resize: 'vertical'
                      }}
                    />
                    {errors.address && (
                      <span style={{ color: '#dc2626', fontSize: '12px', marginTop: '4px', display: 'block' }}>
                        {errors.address}
                      </span>
                    )}
                  </div>

                  <div className="col-md-6 mb-3">
                    <label style={{ color: '#374151', fontSize: '14px', fontWeight: '600', marginBottom: '8px', display: 'block' }}>
                      Şehir *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: errors.city ? '2px solid #dc2626' : '2px solid #e2e8f0',
                        borderRadius: '10px',
                        fontSize: '16px',
                        outline: 'none'
                      }}
                    />
                    {errors.city && (
                      <span style={{ color: '#dc2626', fontSize: '12px', marginTop: '4px', display: 'block' }}>
                        {errors.city}
                      </span>
                    )}
                  </div>

                  <div className="col-md-6 mb-3">
                    <label style={{ color: '#374151', fontSize: '14px', fontWeight: '600', marginBottom: '8px', display: 'block' }}>
                      Posta Kodu *
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: errors.zipCode ? '2px solid #dc2626' : '2px solid #e2e8f0',
                        borderRadius: '10px',
                        fontSize: '16px',
                        outline: 'none'
                      }}
                    />
                    {errors.zipCode && (
                      <span style={{ color: '#dc2626', fontSize: '12px', marginTop: '4px', display: 'block' }}>
                        {errors.zipCode}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Fatura Bilgileri (İsteğe Bağlı) */}
              <div style={{
                background: 'rgba(255,255,255,0.98)',
                borderRadius: '20px',
                padding: '32px',
                marginBottom: '24px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{
                  color: '#1e3a8a',
                  fontSize: '24px',
                  fontWeight: '700',
                  marginBottom: '16px'
                }}>
                  Fatura Bilgileri <span style={{ color: '#6b7280', fontSize: '14px', fontWeight: '400' }}>(İsteğe Bağlı)</span>
                </h3>

                <div className="row">
                  <div className="col-12 mb-3">
                    <label style={{ color: '#374151', fontSize: '14px', fontWeight: '600', marginBottom: '8px', display: 'block' }}>
                      Firma Adı
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '2px solid #e2e8f0',
                        borderRadius: '10px',
                        fontSize: '16px',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label style={{ color: '#374151', fontSize: '14px', fontWeight: '600', marginBottom: '8px', display: 'block' }}>
                      Vergi Dairesi
                    </label>
                    <input
                      type="text"
                      name="taxOffice"
                      value={formData.taxOffice}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '2px solid #e2e8f0',
                        borderRadius: '10px',
                        fontSize: '16px',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label style={{ color: '#374151', fontSize: '14px', fontWeight: '600', marginBottom: '8px', display: 'block' }}>
                      Vergi Numarası
                    </label>
                    <input
                      type="text"
                      name="taxNumber"
                      value={formData.taxNumber}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '2px solid #e2e8f0',
                        borderRadius: '10px',
                        fontSize: '16px',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Ödeme Yöntemi */}
              <div style={{
                background: 'rgba(255,255,255,0.98)',
                borderRadius: '20px',
                padding: '32px',
                marginBottom: '24px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{
                  color: '#1e3a8a',
                  fontSize: '24px',
                  fontWeight: '700',
                  marginBottom: '24px'
                }}>
                  Ödeme Yöntemi
                </h3>

                <div style={{ marginBottom: '24px' }}>
                  <label style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '16px',
                    border: formData.paymentMethod === 'creditCard' ? '2px solid #1e3a8a' : '2px solid #e2e8f0',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    marginBottom: '16px',
                    background: formData.paymentMethod === 'creditCard' ? '#f0f4ff' : '#ffffff'
                  }}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="creditCard"
                      checked={formData.paymentMethod === 'creditCard'}
                      onChange={handleChange}
                      style={{ marginRight: '12px', width: '20px', height: '20px' }}
                    />
                    <span style={{ color: '#1e3a8a', fontSize: '16px', fontWeight: '600' }}>
                      Kredi / Banka Kartı
                    </span>
                  </label>

                  {formData.paymentMethod === 'creditCard' && (
                    <div style={{
                      padding: '20px',
                      background: '#f8fafc',
                      borderRadius: '12px',
                      marginTop: '16px'
                    }}>
                      <div className="row">
                        <div className="col-12 mb-3">
                          <label style={{ color: '#374151', fontSize: '14px', fontWeight: '600', marginBottom: '8px', display: 'block' }}>
                            Kart Numarası *
                          </label>
                          <input
                            type="text"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleChange}
                            placeholder="1234 5678 9012 3456"
                            maxLength="19"
                            style={{
                              width: '100%',
                              padding: '12px 16px',
                              border: errors.cardNumber ? '2px solid #dc2626' : '2px solid #e2e8f0',
                              borderRadius: '10px',
                              fontSize: '16px',
                              outline: 'none'
                            }}
                          />
                          {errors.cardNumber && (
                            <span style={{ color: '#dc2626', fontSize: '12px', marginTop: '4px', display: 'block' }}>
                              {errors.cardNumber}
                            </span>
                          )}
                        </div>

                        <div className="col-12 mb-3">
                          <label style={{ color: '#374151', fontSize: '14px', fontWeight: '600', marginBottom: '8px', display: 'block' }}>
                            Kart Üzerindeki İsim *
                          </label>
                          <input
                            type="text"
                            name="cardName"
                            value={formData.cardName}
                            onChange={handleChange}
                            placeholder="AD SOYAD"
                            style={{
                              width: '100%',
                              padding: '12px 16px',
                              border: errors.cardName ? '2px solid #dc2626' : '2px solid #e2e8f0',
                              borderRadius: '10px',
                              fontSize: '16px',
                              outline: 'none'
                            }}
                          />
                          {errors.cardName && (
                            <span style={{ color: '#dc2626', fontSize: '12px', marginTop: '4px', display: 'block' }}>
                              {errors.cardName}
                            </span>
                          )}
                        </div>

                        <div className="col-md-6 mb-3">
                          <label style={{ color: '#374151', fontSize: '14px', fontWeight: '600', marginBottom: '8px', display: 'block' }}>
                            Son Kullanma Tarihi *
                          </label>
                          <input
                            type="text"
                            name="cardExpiry"
                            value={formData.cardExpiry}
                            onChange={handleChange}
                            placeholder="MM/YY"
                            maxLength="5"
                            style={{
                              width: '100%',
                              padding: '12px 16px',
                              border: errors.cardExpiry ? '2px solid #dc2626' : '2px solid #e2e8f0',
                              borderRadius: '10px',
                              fontSize: '16px',
                              outline: 'none'
                            }}
                          />
                          {errors.cardExpiry && (
                            <span style={{ color: '#dc2626', fontSize: '12px', marginTop: '4px', display: 'block' }}>
                              {errors.cardExpiry}
                            </span>
                          )}
                        </div>

                        <div className="col-md-6 mb-3">
                          <label style={{ color: '#374151', fontSize: '14px', fontWeight: '600', marginBottom: '8px', display: 'block' }}>
                            CVV *
                          </label>
                          <input
                            type="text"
                            name="cardCvv"
                            value={formData.cardCvv}
                            onChange={handleChange}
                            placeholder="123"
                            maxLength="3"
                            style={{
                              width: '100%',
                              padding: '12px 16px',
                              border: errors.cardCvv ? '2px solid #dc2626' : '2px solid #e2e8f0',
                              borderRadius: '10px',
                              fontSize: '16px',
                              outline: 'none'
                            }}
                          />
                          {errors.cardCvv && (
                            <span style={{ color: '#dc2626', fontSize: '12px', marginTop: '4px', display: 'block' }}>
                              {errors.cardCvv}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  <label style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '16px',
                    border: formData.paymentMethod === 'bankTransfer' ? '2px solid #1e3a8a' : '2px solid #e2e8f0',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    background: formData.paymentMethod === 'bankTransfer' ? '#f0f4ff' : '#ffffff'
                  }}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="bankTransfer"
                      checked={formData.paymentMethod === 'bankTransfer'}
                      onChange={handleChange}
                      style={{ marginRight: '12px', width: '20px', height: '20px' }}
                    />
                    <span style={{ color: '#1e3a8a', fontSize: '16px', fontWeight: '600' }}>
                      Banka Havalesi / EFT
                    </span>
                  </label>

                  {formData.paymentMethod === 'bankTransfer' && (
                    <div style={{
                      padding: '20px',
                      background: '#f0f9ff',
                      borderRadius: '12px',
                      marginTop: '16px',
                      border: '1px solid #bae6fd'
                    }}>
                      <p style={{ color: '#0369a1', fontSize: '14px', margin: 0, lineHeight: '1.6' }}>
                        Sipariş onaylandıktan sonra banka hesap bilgilerimiz size e-posta ile gönderilecektir.
                        Ödemenizi yaptıktan sonra dekont/hesap özetini bize iletmeniz gerekmektedir.
                      </p>
                    </div>
                  )}
                </div>

                {/* Kullanım Koşulları */}
                <div style={{
                  padding: '16px',
                  background: '#f8fafc',
                  borderRadius: '12px',
                  border: errors.acceptTerms ? '2px solid #dc2626' : 'none'
                }}>
                  <label style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    cursor: 'pointer'
                  }}>
                    <input
                      type="checkbox"
                      name="acceptTerms"
                      checked={formData.acceptTerms}
                      onChange={handleChange}
                      style={{
                        marginTop: '4px',
                        marginRight: '12px',
                        width: '18px',
                        height: '18px'
                      }}
                    />
                    <span style={{ color: '#374151', fontSize: '14px', lineHeight: '1.6' }}>
                      <a href="#" style={{ color: '#1e3a8a', fontWeight: '600' }}>Kullanım koşullarını</a> ve{' '}
                      <a href="#" style={{ color: '#1e3a8a', fontWeight: '600' }}>gizlilik politikasını</a> okudum ve kabul ediyorum.
                    </span>
                  </label>
                  {errors.acceptTerms && (
                    <span style={{ color: '#dc2626', fontSize: '12px', marginTop: '8px', marginLeft: '30px', display: 'block' }}>
                      {errors.acceptTerms}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Sağ Taraf - Sipariş Özeti */}
            <div className="col-lg-4">
              <div style={{
                position: 'sticky',
                top: '20px'
              }}>
                <div style={{
                  background: 'rgba(255,255,255,0.98)',
                  borderRadius: '20px',
                  padding: '32px',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
                }}>
                  <h3 style={{
                    color: '#1e3a8a',
                    fontSize: '24px',
                    fontWeight: '700',
                    marginBottom: '24px'
                  }}>
                    Sipariş Özeti
                  </h3>

                  {/* Ürünler */}
                  <div style={{
                    maxHeight: '300px',
                    overflowY: 'auto',
                    marginBottom: '24px',
                    paddingBottom: '24px',
                    borderBottom: '2px solid #e2e8f0'
                  }}>
                    {cart_products.map((item, index) => (
                      <div key={index} style={{
                        display: 'flex',
                        gap: '12px',
                        marginBottom: '16px',
                        padding: '12px',
                        background: '#f8fafc',
                        borderRadius: '12px'
                      }}>
                        <div style={{
                          width: '60px',
                          height: '60px',
                          borderRadius: '8px',
                          overflow: 'hidden',
                          flexShrink: 0
                        }}>
                          <Image 
                            src={item.image} 
                            alt={item.title}
                            width={60}
                            height={60}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          />
                        </div>
                        <div style={{ flex: 1 }}>
                          <p style={{
                            color: '#1e3a8a',
                            fontSize: '14px',
                            fontWeight: '600',
                            marginBottom: '4px'
                          }}>
                            {item.title}
                          </p>
                          <p style={{
                            color: '#6b7280',
                            fontSize: '13px'
                          }}>
                            {item.orderQuantity || 1} x ₺{item.price.toFixed(2)}
                            <span style={{ fontSize: '11px', marginLeft: '4px' }}>+KDV</span>
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Fiyat Özeti */}
                  <div style={{
                    marginBottom: '24px'
                  }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '12px'
                    }}>
                      <span style={{ color: '#6b7280', fontSize: '16px' }}>Ara Toplam</span>
                      <span style={{ color: '#1e3a8a', fontSize: '16px', fontWeight: '600' }}>
                        ₺{subtotal.toFixed(2)}
                      </span>
                    </div>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '12px'
                    }}>
                      <span style={{ color: '#6b7280', fontSize: '16px' }}>KDV (%20)</span>
                      <span style={{ color: '#1e3a8a', fontSize: '16px', fontWeight: '600' }}>
                        ₺{kdv.toFixed(2)}
                      </span>
                    </div>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      paddingBottom: '16px',
                      borderBottom: '2px solid #e2e8f0'
                    }}>
                      <span style={{ color: '#6b7280', fontSize: '16px' }}>Kargo</span>
                      <span style={{ color: '#10b981', fontSize: '16px', fontWeight: '600' }}>
                        Ücretsiz
                      </span>
                    </div>
                  </div>

                  {/* Toplam */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '24px',
                    padding: '20px',
                    background: '#f0f4ff',
                    borderRadius: '12px'
                  }}>
                    <span style={{
                      color: '#1e3a8a',
                      fontSize: '20px',
                      fontWeight: '700'
                    }}>
                      Ödenecek Toplam
                    </span>
                    <span style={{
                      color: '#1e3a8a',
                      fontSize: '28px',
                      fontWeight: '700'
                    }}>
                      ₺{total.toFixed(2)}
                    </span>
                  </div>

                  {/* Ödeme Butonu */}
                  <button
                    type="submit"
                    disabled={loading}
                    style={{
                      width: '100%',
                      padding: '18px',
                      background: loading ? '#9ca3af' : '#10b981',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '12px',
                      fontSize: '18px',
                      fontWeight: '700',
                      cursor: loading ? 'not-allowed' : 'pointer',
                      transition: 'all 0.3s ease',
                      boxShadow: loading ? 'none' : '0 4px 15px rgba(16, 185, 129, 0.3)'
                    }}
                  >
                    {loading ? 'İşleniyor...' : 'Siparişi Tamamla'}
                  </button>

                  {/* Güvenlik Bilgisi */}
                  <div style={{
                    marginTop: '24px',
                    padding: '16px',
                    background: '#f0fdf4',
                    borderRadius: '12px',
                    border: '1px solid #bbf7d0',
                    textAlign: 'center'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      marginBottom: '8px'
                    }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                      </svg>
                      <span style={{
                        color: '#16a34a',
                        fontSize: '14px',
                        fontWeight: '600'
                      }}>
                        256-bit SSL Güvenli Ödeme
                      </span>
                    </div>
                    <p style={{
                      color: '#15803d',
                      fontSize: '12px',
                      margin: 0,
                      lineHeight: '1.5'
                    }}>
                      Ödeme bilgileriniz güvenli şekilde şifrelenir ve saklanmaz.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutArea;


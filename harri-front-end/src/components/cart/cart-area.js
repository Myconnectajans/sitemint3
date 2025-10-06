'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { quantityDecrement, add_cart_product, remove_product } from "src/redux/features/cartSlice";

const CartArea = () => {
  const { cart_products } = useSelector((state) => state.cart);
  const router = useRouter();
  const dispatch = useDispatch();

  // KDV ve toplam hesaplamaları
  const calculateTotals = () => {
    const subtotal = cart_products.reduce((acc, item) => {
      return acc + (item.price * (item.orderQuantity || 1));
    }, 0);
    const kdv = subtotal * 0.20; // %20 KDV
    const total = subtotal + kdv;
    
    return { subtotal, kdv, total };
  };

  const { subtotal, kdv, total } = calculateTotals();

  const handleCheckout = () => {
    router.push('/checkout');
  };

  const handleQuantityChange = (item, type) => {
    if (type === 'increment') {
      dispatch(add_cart_product(item));
    } else {
      dispatch(quantityDecrement(item));
    }
  };

  const handleRemove = (item) => {
    dispatch(remove_product(item));
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
          <div style={{
            width: '120px',
            height: '120px',
            background: '#f0f4ff',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 30px'
          }}>
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#1e3a8a" strokeWidth="2">
              <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
          </div>
          <h2 style={{
            color: '#1e3a8a',
            fontSize: '28px',
            fontWeight: '700',
            marginBottom: '16px'
          }}>
            Sepetiniz Boş
          </h2>
          <p style={{
            color: '#6b7280',
            fontSize: '16px',
            marginBottom: '32px',
            lineHeight: '1.6'
          }}>
            Henüz sepetinize ürün eklemediniz. Hemen alışverişe başlayın!
          </p>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <button style={{
              padding: '16px 40px',
              background: '#1e3a8a',
              color: '#ffffff',
              border: 'none',
              borderRadius: '12px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(30, 58, 138, 0.3)'
            }}>
              Alışverişe Başla
            </button>
          </Link>
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
            Sepetim
          </h1>
          <p style={{
            color: '#6b7280',
            fontSize: '18px'
          }}>
            {cart_products.length} ürün sepetinizde
          </p>
        </div>

        <div className="row">
          {/* Ürünler */}
          <div className="col-lg-8">
            <div style={{
              background: 'rgba(255,255,255,0.98)',
              borderRadius: '20px',
              padding: '32px',
              marginBottom: '30px',
              boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{
                color: '#1e3a8a',
                fontSize: '24px',
                fontWeight: '700',
                marginBottom: '24px',
                paddingBottom: '16px',
                borderBottom: '2px solid #f0f4ff'
              }}>
                Ürünler
              </h3>

              {cart_products.map((item, index) => (
                <div key={index} style={{
                  display: 'flex',
                  gap: '24px',
                  padding: '24px',
                  background: '#f8fafc',
                  borderRadius: '16px',
                  marginBottom: '16px',
                  border: '1px solid #e2e8f0',
                  transition: 'all 0.3s ease'
                }}>
                  {/* Ürün Görseli */}
                  <div style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    flexShrink: 0,
                    background: '#ffffff'
                  }}>
                    <Image 
                      src={item.image} 
                      alt={item.title}
                      width={120}
                      height={120}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>

                  {/* Ürün Bilgileri */}
                  <div style={{ flex: 1 }}>
                    <h4 style={{
                      color: '#1e3a8a',
                      fontSize: '18px',
                      fontWeight: '600',
                      marginBottom: '8px'
                    }}>
                      {item.title}
                    </h4>
                    
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      marginTop: '16px',
                      flexWrap: 'wrap'
                    }}>
                      {/* Miktar */}
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        background: '#ffffff',
                        padding: '8px 16px',
                        borderRadius: '10px',
                        border: '1px solid #e2e8f0'
                      }}>
                        <button
                          onClick={() => handleQuantityChange(item, 'decrement')}
                          style={{
                            width: '32px',
                            height: '32px',
                            border: 'none',
                            background: '#f0f4ff',
                            color: '#1e3a8a',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontSize: '18px',
                            fontWeight: '600',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.2s'
                          }}
                        >
                          −
                        </button>
                        <span style={{
                          color: '#1e3a8a',
                          fontSize: '16px',
                          fontWeight: '600',
                          minWidth: '30px',
                          textAlign: 'center'
                        }}>
                          {item.orderQuantity || 1}
                        </span>
                        <button
                          onClick={() => handleQuantityChange(item, 'increment')}
                          style={{
                            width: '32px',
                            height: '32px',
                            border: 'none',
                            background: '#1e3a8a',
                            color: '#ffffff',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontSize: '18px',
                            fontWeight: '600',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.2s'
                          }}
                        >
                          +
                        </button>
                      </div>

                      {/* Fiyat */}
                      <div style={{
                        background: '#ffffff',
                        padding: '8px 16px',
                        borderRadius: '10px',
                        border: '1px solid #e2e8f0'
                      }}>
                        <span style={{
                          color: '#1e3a8a',
                          fontSize: '18px',
                          fontWeight: '700'
                        }}>
                          ₺{(item.price * (item.orderQuantity || 1)).toFixed(2)}
                        </span>
                        <span style={{
                          color: '#6b7280',
                          fontSize: '12px',
                          marginLeft: '4px'
                        }}>
                          +KDV
                        </span>
                      </div>

                      {/* Sil Butonu */}
                      <button
                        onClick={() => handleRemove(item)}
                        style={{
                          marginLeft: 'auto',
                          padding: '8px 20px',
                          background: '#fee2e2',
                          color: '#dc2626',
                          border: 'none',
                          borderRadius: '10px',
                          cursor: 'pointer',
                          fontSize: '14px',
                          fontWeight: '600',
                          transition: 'all 0.2s'
                        }}
                      >
                        Sil
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sipariş Özeti */}
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

                <div style={{
                  borderBottom: '1px solid #e2e8f0',
                  paddingBottom: '16px',
                  marginBottom: '16px'
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
                    justifyContent: 'space-between'
                  }}>
                    <span style={{ color: '#6b7280', fontSize: '16px' }}>Kargo</span>
                    <span style={{ color: '#10b981', fontSize: '16px', fontWeight: '600' }}>
                      Ücretsiz
                    </span>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '24px',
                  padding: '16px',
                  background: '#f0f4ff',
                  borderRadius: '12px'
                }}>
                  <span style={{
                    color: '#1e3a8a',
                    fontSize: '20px',
                    fontWeight: '700'
                  }}>
                    Toplam
                  </span>
                  <span style={{
                    color: '#1e3a8a',
                    fontSize: '24px',
                    fontWeight: '700'
                  }}>
                    ₺{total.toFixed(2)}
                  </span>
                </div>

                <button
                  onClick={handleCheckout}
                  style={{
                    width: '100%',
                    padding: '18px',
                    background: '#10b981',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '12px',
                    fontSize: '18px',
                    fontWeight: '700',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(16, 185, 129, 0.3)',
                    marginBottom: '16px'
                  }}
                >
                  Ödemeye Geç
                </button>

                <Link href="/" style={{ textDecoration: 'none' }}>
                  <button style={{
                    width: '100%',
                    padding: '16px',
                    background: 'transparent',
                    color: '#1e3a8a',
                    border: '2px solid #1e3a8a',
                    borderRadius: '12px',
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}>
                    Alışverişe Devam Et
                  </button>
                </Link>

                {/* Güvenlik Rozetleri */}
                <div style={{
                  marginTop: '24px',
                  padding: '20px',
                  background: '#f8fafc',
                  borderRadius: '12px',
                  textAlign: 'center'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px',
                    marginBottom: '12px'
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                    <span style={{
                      color: '#6b7280',
                      fontSize: '14px',
                      fontWeight: '500'
                    }}>
                      Güvenli Alışveriş
                    </span>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px'
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span style={{
                      color: '#6b7280',
                      fontSize: '14px',
                      fontWeight: '500'
                    }}>
                      %100 Müşteri Memnuniyeti
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartArea;


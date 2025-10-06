'use client';
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { remove_wishlist_product } from "src/redux/features/wishlist-slice";
import { notifySuccess } from "@utils/toast";

const WishlistArea = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { wishlist } = useSelector((state) => state.wishlist);

  const handleRemove = (product) => {
    dispatch(remove_wishlist_product(product));
  };

  const handleProductClick = (productId) => {
    router.push(`/product/${productId}`);
  };

  return (
    <section style={{ padding: '80px 0', background: '#ffffff' }}>
      <div className="container" style={{ maxWidth: '1200px' }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '60px'
        }}>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: '#1e3a8a',
            marginBottom: '16px'
          }}>
            Favorilerim
          </h1>
          <p style={{
            fontSize: '1.125rem',
            color: '#6b7280',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            {wishlist.length > 0 
              ? `${wishlist.length} ürün favorilerinizde` 
              : 'Henüz favori ürününüz yok'}
          </p>
        </div>

        {/* Empty State */}
        {wishlist.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '80px 20px',
            background: '#f8f9fa',
            borderRadius: '16px',
            border: '1px solid #e5e7eb'
          }}>
            <div style={{
              fontSize: '4rem',
              marginBottom: '24px'
            }}>💙</div>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: '#1e3a8a',
              marginBottom: '16px'
            }}>
              Favori listeniz boş
            </h2>
            <p style={{
              fontSize: '1rem',
              color: '#6b7280',
              marginBottom: '32px'
            }}>
              Beğendiğiniz ürünleri favorilere ekleyerek daha sonra kolayca bulabilirsiniz
            </p>
            <Link 
              href="/web-siteleri"
              style={{
                display: 'inline-block',
                padding: '14px 32px',
                background: '#1e3a8a',
                color: '#ffffff',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#1d4ed8';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#1e3a8a';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
              Ürünlere Göz At
            </Link>
          </div>
        )}

        {/* Wishlist Grid */}
        {wishlist.length > 0 && (
          <>
            <div className="row g-4">
              {wishlist.map((item) => {
                const productImage = typeof item.images?.[0] === 'string' 
                  ? item.images[0] 
                  : item.images?.[0]?.src || item.image?.src || '/placeholder.jpg';

                return (
                  <div key={item._id || item.id} className="col-12 col-md-6 col-lg-4">
                    <div style={{
                      background: '#ffffff',
                      borderRadius: '12px',
                      border: '1px solid #e5e7eb',
                      overflow: 'hidden',
                      transition: 'all 0.3s',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.1)';
                      e.currentTarget.style.transform = 'translateY(-4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}>
                      {/* Image */}
                      <div 
                        onClick={() => handleProductClick(item._id || item.id)}
                        style={{
                          position: 'relative',
                          width: '100%',
                          paddingTop: '100%',
                          overflow: 'hidden',
                          cursor: 'pointer'
                        }}>
                        <img 
                          src={productImage}
                          alt={item.title}
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                          }}
                        />
                        {/* Remove Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleRemove(item);
                          }}
                          style={{
                            position: 'absolute',
                            top: '12px',
                            right: '12px',
                            width: '36px',
                            height: '36px',
                            background: '#ffffff',
                            border: 'none',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                            transition: 'all 0.3s',
                            zIndex: 2
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#dc2626';
                            e.currentTarget.style.transform = 'scale(1.1)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = '#ffffff';
                            e.currentTarget.style.transform = 'scale(1)';
                          }}>
                          <svg 
                            width="18" 
                            height="18" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2"
                            style={{ color: '#dc2626' }}>
                            <path d="M18 6L6 18M6 6l12 12" />
                          </svg>
                        </button>
                        {/* Discount Badge */}
                        {item.discount > 0 && (
                          <div style={{
                            position: 'absolute',
                            top: '12px',
                            left: '12px',
                            background: '#dc2626',
                            color: '#ffffff',
                            padding: '6px 12px',
                            borderRadius: '6px',
                            fontSize: '0.875rem',
                            fontWeight: '600',
                            zIndex: 2
                          }}>
                            %{item.discount} İndirim
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                        <h3 
                          onClick={() => handleProductClick(item._id || item.id)}
                          style={{
                            fontSize: '1.125rem',
                            fontWeight: '600',
                            color: '#1e3a8a',
                            marginBottom: '12px',
                            cursor: 'pointer',
                            transition: 'color 0.3s',
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden'
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.color = '#1d4ed8'}
                          onMouseLeave={(e) => e.currentTarget.style.color = '#1e3a8a'}>
                          {item.title}
                        </h3>

                        {/* Price */}
                        <div style={{ marginBottom: '16px', marginTop: 'auto' }}>
                          {item.originalPrice && item.originalPrice > item.price ? (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <span style={{
                                fontSize: '0.875rem',
                                color: '#6b7280',
                                textDecoration: 'line-through'
                              }}>
                                ₺{item.originalPrice}
                              </span>
                              <span style={{
                                fontSize: '1.25rem',
                                fontWeight: '700',
                                color: '#1e3a8a'
                              }}>
                                ₺{item.price}
                              </span>
                            </div>
                          ) : (
                            <span style={{
                              fontSize: '1.25rem',
                              fontWeight: '700',
                              color: '#1e3a8a'
                            }}>
                              ₺{item.price}
                            </span>
                          )}
                        </div>

                        {/* Action Buttons */}
                        <div style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '8px'
                        }}>
                          {/* Web Siteleri için */}
                          {item.type === 'website' ? (
                            <>
                              <button
                                onClick={() => {
                                  if (item.demoUrl) {
                                    window.open(item.demoUrl, '_blank');
                                  }
                                }}
                                style={{
                                  width: '100%',
                                  padding: '10px',
                                  background: '#1e3a8a',
                                  color: '#ffffff',
                                  border: 'none',
                                  borderRadius: '8px',
                                  fontSize: '0.8rem',
                                  fontWeight: '600',
                                  cursor: 'pointer',
                                  transition: 'all 0.3s'
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.background = '#1d4ed8';
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.background = '#1e3a8a';
                                }}>
                                Demoyu Görüntüle
                              </button>
                              <button
                                onClick={() => {
                                  notifySuccess(`${item.title} sepete eklendi`);
                                }}
                                style={{
                                  width: '100%',
                                  padding: '10px',
                                  background: '#ffffff',
                                  color: '#1e3a8a',
                                  border: '1px solid #1e3a8a',
                                  borderRadius: '8px',
                                  fontSize: '0.8rem',
                                  fontWeight: '600',
                                  cursor: 'pointer',
                                  transition: 'all 0.3s'
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.background = '#f0f4ff';
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.background = '#ffffff';
                                }}>
                                Sepete Ekle
                              </button>
                              <button
                                onClick={() => handleRemove(item)}
                                style={{
                                  width: '100%',
                                  padding: '10px',
                                  background: '#ffffff',
                                  color: '#dc2626',
                                  border: '1px solid #dc2626',
                                  borderRadius: '8px',
                                  fontSize: '0.8rem',
                                  fontWeight: '600',
                                  cursor: 'pointer',
                                  transition: 'all 0.3s'
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.background = '#fef2f2';
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.background = '#ffffff';
                                }}>
                                Favorilerden Çıkar
                              </button>
                            </>
                          ) : item.type === 'qr-menu' ? (
                            /* QR Menü için */
                            <>
                              <button
                                onClick={() => {
                                  if (item.demoUrl) {
                                    window.open(item.demoUrl, '_blank');
                                  }
                                }}
                                style={{
                                  width: '100%',
                                  padding: '10px',
                                  background: '#1e3a8a',
                                  color: '#ffffff',
                                  border: 'none',
                                  borderRadius: '8px',
                                  fontSize: '0.8rem',
                                  fontWeight: '600',
                                  cursor: 'pointer',
                                  transition: 'all 0.3s'
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.background = '#1d4ed8';
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.background = '#1e3a8a';
                                }}>
                                Demoyu Görüntüle
                              </button>
                              <button
                                onClick={() => {
                                  notifySuccess(`${item.title} sepete eklendi`);
                                }}
                                style={{
                                  width: '100%',
                                  padding: '10px',
                                  background: '#ffffff',
                                  color: '#1e3a8a',
                                  border: '1px solid #1e3a8a',
                                  borderRadius: '8px',
                                  fontSize: '0.8rem',
                                  fontWeight: '600',
                                  cursor: 'pointer',
                                  transition: 'all 0.3s'
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.background = '#f0f4ff';
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.background = '#ffffff';
                                }}>
                                Sepete Ekle
                              </button>
                              <button
                                onClick={() => handleRemove(item)}
                                style={{
                                  width: '100%',
                                  padding: '10px',
                                  background: '#ffffff',
                                  color: '#dc2626',
                                  border: '1px solid #dc2626',
                                  borderRadius: '8px',
                                  fontSize: '0.8rem',
                                  fontWeight: '600',
                                  cursor: 'pointer',
                                  transition: 'all 0.3s'
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.background = '#fef2f2';
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.background = '#ffffff';
                                }}>
                                Favorilerden Çıkar
                              </button>
                            </>
                          ) : (
                            /* Kartvizitler için */
                            <>
                              <button
                                onClick={() => handleProductClick(item._id || item.id)}
                                style={{
                                  width: '100%',
                                  padding: '10px',
                                  background: '#1e3a8a',
                                  color: '#ffffff',
                                  border: 'none',
                                  borderRadius: '8px',
                                  fontSize: '0.8rem',
                                  fontWeight: '600',
                                  cursor: 'pointer',
                                  transition: 'all 0.3s'
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.background = '#1d4ed8';
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.background = '#1e3a8a';
                                }}>
                                Ürünü İncele
                              </button>
                              <button
                                onClick={() => {
                                  notifySuccess(`${item.title} sepete eklendi`);
                                }}
                                style={{
                                  width: '100%',
                                  padding: '10px',
                                  background: '#ffffff',
                                  color: '#1e3a8a',
                                  border: '1px solid #1e3a8a',
                                  borderRadius: '8px',
                                  fontSize: '0.8rem',
                                  fontWeight: '600',
                                  cursor: 'pointer',
                                  transition: 'all 0.3s'
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.background = '#f0f4ff';
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.background = '#ffffff';
                                }}>
                                Sepete Ekle
                              </button>
                              <button
                                onClick={() => handleRemove(item)}
                                style={{
                                  width: '100%',
                                  padding: '10px',
                                  background: '#ffffff',
                                  color: '#dc2626',
                                  border: '1px solid #dc2626',
                                  borderRadius: '8px',
                                  fontSize: '0.8rem',
                                  fontWeight: '600',
                                  cursor: 'pointer',
                                  transition: 'all 0.3s'
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.background = '#fef2f2';
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.background = '#ffffff';
                                }}>
                                Favorilerden Çıkar
                              </button>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Continue Shopping Button */}
            <div style={{
              marginTop: '60px',
              textAlign: 'center'
            }}>
              <Link 
                href="/web-siteleri"
                style={{
                  display: 'inline-block',
                  padding: '14px 32px',
                  background: '#f0f4ff',
                  color: '#1e3a8a',
                  border: '1px solid #1e3a8a',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  textDecoration: 'none',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#1e3a8a';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#f0f4ff';
                  e.currentTarget.style.color = '#1e3a8a';
                }}>
                Alışverişe Devam Et
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default WishlistArea;

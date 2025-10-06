'use client'
import Image from "next/image";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// internal
import { CartTwo, Times, HeartTwo } from "@svg/index";
import Quantity from "@components/products/quantity";
import { add_cart_product, initialOrderQuantity } from "src/redux/features/cartSlice";
import Link from "next/link";
import { add_to_wishlist } from "src/redux/features/wishlist-slice";
import { Modal } from "react-bootstrap";
import { handleModalShow } from "src/redux/features/productSlice";

const ProductModal = () => {
  const { product, isShow } = useSelector((state) => state.product);
  const { wishlist } = useSelector((state) => state.wishlist);
  const { orderQuantity } = useSelector((state) => state.cart);
  const { _id, image, relatedImages, title, price, discount, originalPrice } = product || {};
  const [activeImg, setActiveImg] = useState(image);
  const dispatch = useDispatch();
  const isWishlistAdded = wishlist.some((item) => item._id === _id);
  
  if(!product) return null;

  // KDV hesaplama - quantity ile çarp
  const calculatePriceWithVAT = (basePrice, quantity) => {
    const subtotal = basePrice * quantity;
    const vat = subtotal * 0.20;
    const total = subtotal + vat;
    return { subtotal, vat, total };
  };

  const priceInfo = calculatePriceWithVAT(price || 0, orderQuantity);
  const discountPercent = originalPrice && price 
    ? Math.round(((originalPrice - price) / originalPrice) * 100) 
    : 0;

  // handle add product
  const handleAddProduct = (prd) => {
    dispatch(add_cart_product(prd));
    // Sepete ekledikten sonra modal'ı kapat
    setTimeout(() => {
      handleModalClose();
    }, 500);
  };
  
  // handle add wishlist
  const handleAddWishlist = (prd) => {
    dispatch(add_to_wishlist(prd));
  };
  
  // handle modal close 
  const handleModalClose = () => {
    dispatch(handleModalShow())
    dispatch(initialOrderQuantity())
  }

  return (
    <Modal
      show={isShow}
      onHide={() => dispatch(handleModalShow())}
      className="product__modal"
      centered={true}
    >
      <div className="product__modal-wrapper" style={{ background: '#ffffff' }}>
        <div className="product__modal-close">
          <button
            className="product__modal-close-btn"
            type="button"
            onClick={() => handleModalClose()}
            style={{
              background: '#1e3a8a',
              color: '#ffffff',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            <Times />
          </button>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="product__modal-thumb-wrapper">
              <div className="product__details-thumb-tab mr-40">
                <div className="product__details-thumb-content w-img">
                  <div className="tab-content" id="nav-tabContent">
                    <div className="active-img">
                      <Image
                        priority
                        src={activeImg}
                        alt={title}
                        width={510}
                        height={485}
                        style={{ width: "100%", height: "100%", borderRadius: '12px' }}
                      />
                    </div>
                  </div>
                </div>
                <div className="product__details-thumb-nav tp-tab">
                  <nav>
                    <div className="nav nav-tabs justify-content-sm-between">
                      {(relatedImages || []).map((img, i) => (
                        <button
                          key={i}
                          className={`nav-link ${img === activeImg ? "active" : ""}`}
                          onClick={() => setActiveImg(img)}
                          style={{
                            border: img === activeImg ? '2px solid #1e3a8a' : '2px solid #e5e7eb',
                            borderRadius: '8px',
                            overflow: 'hidden'
                          }}
                        >
                          <Image
                            priority
                            src={img}
                            alt={`${title} ${i + 1}`}
                            width={90}
                            height={90}
                            style={{ width: "100%", height: "100%" }}
                          />
                        </button>
                      ))}
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="product__details-wrapper">
              <h3 className="product__details-title" style={{
                color: '#1e3a8a',
                fontSize: '28px',
                fontWeight: '700',
                marginBottom: '16px'
              }}>
                {title}
              </h3>

              {/* Fiyat Bölümü */}
              <div style={{ marginBottom: '24px' }}>
                {discountPercent > 0 && (
                  <span style={{
                    background: '#ef4444',
                    color: '#fff',
                    padding: '6px 14px',
                    borderRadius: '20px',
                    fontSize: '14px',
                    fontWeight: 600,
                    display: 'inline-block',
                    marginBottom: '12px'
                  }}>
                    %{discountPercent} İndirim
                  </span>
                )}

                <div style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '12px',
                  marginBottom: '16px'
                }}>
                  {discountPercent > 0 && (
                    <span style={{
                      textDecoration: 'line-through',
                      color: '#9ca3af',
                      fontSize: '20px'
                    }}>
                      ₺{((originalPrice || 0) * orderQuantity).toLocaleString('tr-TR')}
                    </span>
                  )}
                  <span style={{
                    fontSize: '32px',
                    fontWeight: 700,
                    color: '#1e3a8a'
                  }}>
                    ₺{((price || 0) * orderQuantity).toLocaleString('tr-TR')}
                  </span>
                  <span style={{ fontSize: '14px', color: '#6b7280', fontWeight: '500' }}>+KDV</span>
                </div>

                {/* KDV Detayı */}
                <div style={{
                  background: '#f0f9ff',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  border: '1px solid #bae6fd',
                  fontSize: '14px'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <span style={{ color: '#0369a1' }}>Ürün Fiyatı ({orderQuantity} adet):</span>
                    <span style={{ color: '#0369a1', fontWeight: '600' }}>
                      ₺{priceInfo.subtotal.toLocaleString('tr-TR', { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <span style={{ color: '#0369a1' }}>KDV (%20):</span>
                    <span style={{ color: '#0369a1', fontWeight: '600' }}>
                      ₺{priceInfo.vat.toLocaleString('tr-TR', { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    paddingTop: '6px',
                    borderTop: '1px solid #bae6fd'
                  }}>
                    <span style={{ color: '#0369a1', fontWeight: '700' }}>Toplam:</span>
                    <span style={{ color: '#0369a1', fontSize: '16px', fontWeight: '700' }}>
                      ₺{priceInfo.total.toLocaleString('tr-TR', { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                </div>
              </div>

              {/* quantity */}
              <Quantity />
              {/* quantity */}

              <div className="product__details-action d-flex flex-wrap align-items-center" style={{ gap: '12px', marginTop: '24px' }}>
                <button
                  onClick={() => handleAddProduct(product)}
                  type="button"
                  className="product-add-cart-btn product-add-cart-btn-3"
                  style={{
                    background: '#10b981',
                    color: '#ffffff',
                    border: 'none',
                    padding: '14px 28px',
                    borderRadius: '10px',
                    fontWeight: '600',
                    fontSize: '15px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)'
                  }}
                >
                  <CartTwo />
                  Sepete Ekle
                </button>
                <button
                  onClick={() => handleAddWishlist(product)}
                  type="button"
                  className={`product-action-btn ${isWishlistAdded ? "active" : ""}`}
                  style={{
                    background: isWishlistAdded ? '#ef4444' : '#f3f4f6',
                    color: isWishlistAdded ? '#ffffff' : '#1e3a8a',
                    border: 'none',
                    padding: '14px',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '48px',
                    height: '48px',
                    transition: 'all 0.3s ease'
                  }}
                  title={isWishlistAdded ? "Favorilerden Çıkar" : "Favorilere Ekle"}
                >
                  <HeartTwo />
                </button>
              </div>

              <div style={{
                marginTop: '24px',
                padding: '16px',
                background: '#f8f9fa',
                borderRadius: '12px',
                border: '1px solid #e5e7eb'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '8px'
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2">
                    <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
                  </svg>
                  <span style={{ color: '#374151', fontSize: '14px', fontWeight: '500' }}>
                    Ücretsiz Kargo
                  </span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span style={{ color: '#374151', fontSize: '14px', fontWeight: '500' }}>
                    Güvenli Alışveriş
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProductModal;

import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import { CartTwo, Compare, Eye, HeartTwo } from "@svg/index";
import { RatingFull, RatingHalf } from "./rating";
import { useDispatch, useSelector } from "react-redux";
import { initialOrderQuantity } from "src/redux/features/cartSlice";
import { setProduct } from "src/redux/features/productSlice";
import { add_to_wishlist } from "src/redux/features/wishlist-slice";

const SingleListProduct = ({ product, isQRMenu, isWebSite, isBusinessCard }) => {
  const { _id, images, image, title, price, discount, originalPrice, demoUrl } = product || {};
  const productId = _id || product.id;
  const productImages = images || [image];
  // handle dispatch
  const dispatch = useDispatch();
  const { wishlist } = useSelector((state) => state.wishlist);
  const isWishlisted = wishlist.some((item) => (item._id || item.id) === productId);

  // handle quick view
  const handleQuickView = (prd) => {
    dispatch(initialOrderQuantity())
    dispatch(setProduct(prd))
  };

  // handle wishlist
  const handleAddToWishlist = (prd) => {
    dispatch(add_to_wishlist(prd));
  };

  // QR Menu, Web Siteleri ve Kartvizitler için özel görünüm
  if (isQRMenu || isWebSite || isBusinessCard) {
    // Buton metni ve açıklama
    const buttonText = isBusinessCard ? 'Sipariş Ver' : 'Demoyu İncele';
    const description = isBusinessCard
      ? 'Profesyonel kartvizit tasarımları ile işinizi öne çıkarın. Çift taraflı, kabartmalı ve selofanlı kaplama seçenekleri.'
      : isWebSite
      ? 'Profesyonel web tasarım çözümleri ile işletmenizi dijital dünyada güçlü bir şekilde temsil edin.'
      : 'Profesyonel QR menü sistemi ile işletmenizi dijital çağa taşıyın. Modern, kullanıcı dostu ve mobil uyumlu tasarım.';
    return (
      <div style={{
        background: '#ffffff',
        borderRadius: '12px',
        border: '1px solid #e5e7eb',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
        overflow: 'hidden',
        marginBottom: '24px',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 12px 24px rgba(30, 58, 138, 0.1)';
        e.currentTarget.style.borderColor = '#1e3a8a';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)';
        e.currentTarget.style.borderColor = '#e5e7eb';
      }}>
        <div className="row g-0">
          <div className="col-xl-5 col-lg-5">
            <div style={{ position: 'relative', paddingTop: '100%', overflow: 'hidden' }}>
              <img
                src={typeof productImages[0] === 'string' ? productImages[0] : productImages[0]?.src}
                alt={title}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              {/* Discount Badge */}
              <div style={{
                position: 'absolute',
                top: '16px',
                left: '16px',
                background: '#dc2626',
                color: '#ffffff',
                padding: '6px 12px',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '700',
                boxShadow: '0 2px 8px rgba(220, 38, 38, 0.3)'
              }}>
                %{discount} İndirim
              </div>
              {/* Favorite Button */}
              <button
                onClick={() => handleAddToWishlist(product)}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  width: '40px',
                  height: '40px',
                  background: '#ffffff',
                  border: 'none',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.1)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill={isWishlisted ? '#dc2626' : 'none'} stroke={isWishlisted ? '#dc2626' : '#000000'} strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </button>
            </div>
          </div>
          <div className="col-xl-7 col-lg-7">
            <div style={{ padding: '32px' }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: '#1e3a8a',
                marginBottom: '16px',
                letterSpacing: '-0.3px'
              }}>
                <Link href={`/product-details/${productId}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                  {title}
                </Link>
              </h3>
              
              {/* Price */}
              <div style={{ marginBottom: '20px' }}>
                <span style={{
                  fontSize: '1.125rem',
                  color: '#6b7280',
                  textDecoration: 'line-through',
                  marginRight: '12px'
                }}>
                  ₺{originalPrice?.toLocaleString('tr-TR')}
                </span>
                <span style={{
                  fontSize: '1.75rem',
                  fontWeight: '700',
                  color: '#1e3a8a'
                }}>
                  ₺{price?.toLocaleString('tr-TR')}
                </span>
              </div>

              {/* Description */}
              <p style={{
                fontSize: '0.9375rem',
                color: '#6b7280',
                lineHeight: '1.6',
                marginBottom: '24px'
              }}>
                {description}
              </p>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Link href={demoUrl || `/product-details/${productId}`}>
                  <button style={{
                    width: '100%',
                    padding: '14px 24px',
                    background: '#1e3a8a',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    boxShadow: '0 2px 8px rgba(30, 58, 138, 0.2)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#1d4ed8';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(30, 58, 138, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#1e3a8a';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(30, 58, 138, 0.2)';
                  }}>
                    {buttonText}
                  </button>
                </Link>
                
                <button 
                  onClick={() => handleQuickView(product)}
                  style={{
                    width: '100%',
                    padding: '14px 24px',
                    background: '#ffffff',
                    color: '#1e3a8a',
                    border: '2px solid #1e3a8a',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    boxShadow: '0 2px 8px rgba(30, 58, 138, 0.1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#1e3a8a';
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(30, 58, 138, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#ffffff';
                    e.currentTarget.style.color = '#1e3a8a';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(30, 58, 138, 0.1)';
                  }}>
                  Sepete Ekle
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <React.Fragment>
      <div className="product__list-item mb-30">
        <div className="row">
          <div className="col-xl-5 col-lg-5">
            <div className="product__thumb product__list-thumb p-relative fix m-img">
              <Link href={`product-details/${_id}`}>
                <Image
                  src={image}
                  alt="image"
                  width={335}
                  height={325}
                  style={{
                    width: "335px",
                    height: "325px",
                    objectFit: "cover",
                  }}
                />
              </Link>
              {discount > 0 && (
                <div className="product__badge d-flex flex-column flex-wrap">
                  <span className={`product__badge-item has-new`}>sale</span>
                </div>
              )}
            </div>
          </div>
          <div className="col-xl-7 col-lg-7">
            <div className="product__list-content">
              <div className="product__rating product__rating-2 d-flex">
                <RatingFull />
                <RatingFull />
                <RatingFull />
                <RatingFull />
                <RatingHalf />
              </div>

              <h3 className="product__list-title">
                <Link href={`product-details/${_id}`}>{title}</Link>
              </h3>
              <div className="product__list-price">
                <span className="product__list-ammount">${price}</span>
              </div>
              <p>
                Shop Harry.com for every day low prices. Free shipping on orders
                $35+ or Pickup In-store and get
              </p>

              <div className="product__list-action d-flex flex-wrap align-items-center">
                <button
                  type="button"
                  className="product-add-cart-btn product-add-cart-btn-2"
                >
                  <CartTwo />
                  Add to Cart
                </button>
                <button
                  type="button"
                  className="product-action-btn product-action-btn-2"
                >
                  <HeartTwo />
                  <span className="product-action-tooltip">
                    Add To Wishlist
                  </span>
                </button>
                <button
                  onClick={() => handleQuickView(product)}
                  type="button"
                  className="product-action-btn"
                >
                  <Eye />
                  <span className="product-action-tooltip">Quick view</span>
                </button>

                <Link href={`/product-details/${_id}`}>
                  <button
                    type="button"
                    className="product-action-btn product-action-btn-2"
                  >
                    <i className="fa-solid fa-link"></i>
                    <span className="product-action-tooltip">
                      Product Details
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SingleListProduct;

"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { usePathname } from 'next/navigation';
// internal
import { CartTwo, Compare, Eye, HeartTwo } from "@svg/index";
import { RatingFull, RatingHalf } from "./rating";
import ProductModal from "@components/common/modals/product-modal";
import OldNewPrice from "./old-new-price";
import {
  add_cart_product,
  initialOrderQuantity,
} from "src/redux/features/cartSlice";
import { add_to_wishlist } from "src/redux/features/wishlist-slice";
import { setProduct } from "src/redux/features/productSlice";

const CardSlider = dynamic(() => import("react-slick"), { ssr: false });
const SingleProduct = ({ product, discountPrd = false, isQRMenu = false }) => {
  const { _id, images, image, title, price, discount, originalPrice } = product || {};
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState(null);
  const openModal = (img) => {
    setModalImg(img);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setModalImg(null);
  };
  const dispatch = useDispatch();
  const { cart_products } = useSelector((state) => state.cart);
  const { wishlist } = useSelector((state) => state.wishlist);
  const isWishlistAdded = wishlist.some(item => item._id === _id);
  const isAddedToCart = cart_products.some((prd) => prd._id === _id);

  const pathname = usePathname();

  // override prices for kartvizit and magnet pages
  let displayOriginal = originalPrice;
  let displayPrice = price;
  let displayDiscount = discount;
  if (
    pathname?.includes('/kartvizit') || pathname?.includes('/kartvizitler') ||
    pathname?.includes('/magnet') || pathname?.includes('/magnetler')
  ) {
    displayOriginal = 3499;
    displayPrice = 2499;
    displayDiscount = Math.round(((displayOriginal - displayPrice) / displayOriginal) * 100);
  }

  // handle add product
  const handleAddProduct = (prd) => {
    dispatch(add_cart_product(prd));
  };
  // handle add wishlist
  const handleAddWishlist = (prd) => {
    dispatch(add_to_wishlist(prd));
  };

  // handle quick view
  const handleQuickView = (prd) => {
    dispatch(initialOrderQuantity())
    dispatch(setProduct(prd))
  };

  // QR Menü için basit card
  if (isQRMenu) {
    return (
      <div style={{
        background: '#fff',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
        transition: 'all 0.3s ease',
        position: 'relative'
      }}
      onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)'}
      onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)'}
      >
        {/* Resim */}
        <div style={{position: 'relative'}}>
          <Link href={`/product-details/${_id}`}>
            {images && images[0] ? (
              <img 
                src={typeof images[0] === 'string' ? images[0] : images[0].src} 
                alt={title}
                style={{width: '100%', height: '200px', objectFit: 'cover'}}
              />
            ) : null}
          </Link>
          
          {/* İndirim Badge */}
          {discount > 0 && (
            <div style={{
              position: 'absolute',
              top: '12px',
              right: '12px',
              background: '#dc2626',
              color: '#fff',
              padding: '6px 12px',
              borderRadius: '8px',
              fontWeight: '700',
              fontSize: '14px'
            }}>
              %{discount} İndirim
            </div>
          )}

          {/* Favori Butonu */}
          <button
            onClick={() => handleAddWishlist(product)}
            style={{
              position: 'absolute',
              top: '12px',
              left: '12px',
              background: '#fff',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill={isWishlistAdded ? "#dc2626" : "none"} stroke={isWishlistAdded ? "#dc2626" : "#000"} strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
        </div>

        {/* İçerik */}
        <div style={{padding: '16px'}}>
          <h3 style={{
            fontSize: '16px',
            fontWeight: '600',
            marginBottom: '12px',
            color: '#0a0a0a'
          }}>
            <Link href={`/product-details/${_id}`} style={{color: 'inherit', textDecoration: 'none'}}>
              {title}
            </Link>
          </h3>

          {/* Fiyat */}
          <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px'}}>
            <span style={{
              fontSize: '14px',
              textDecoration: 'line-through',
              color: '#999'
            }}>
              ₺{originalPrice ? originalPrice.toFixed(0) : '0'}
            </span>
            <span style={{
              fontSize: '18px',
              fontWeight: '700',
              color: '#0a0a0a'
            }}>
              ₺{price ? price.toFixed(0) : '0'}
            </span>
          </div>

          {/* Butonlar */}
          <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
            <a 
              href={product.demoUrl || '#'} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'block',
                width: '100%',
                padding: '12px',
                background: '#1e3a8a',
                color: '#fff',
                textAlign: 'center',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '14px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#1d4ed8'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#1e3a8a'}
            >
              Demoyu İncele
            </a>
            <button
              onClick={() => handleAddProduct(product)}
              style={{
                width: '100%',
                padding: '12px',
                background: isAddedToCart ? '#16a34a' : '#fff',
                color: isAddedToCart ? '#fff' : '#1e3a8a',
                border: isAddedToCart ? 'none' : '2px solid #1e3a8a',
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                if (!isAddedToCart) {
                  e.currentTarget.style.background = '#f0f4ff';
                }
              }}
              onMouseLeave={(e) => {
                if (!isAddedToCart) {
                  e.currentTarget.style.background = '#fff';
                }
              }}
            >
              {isAddedToCart ? '✓ Sepette' : 'Sepete Ekle'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <React.Fragment>
      <div className="product__item p-relative transition-3 mb-50">
        <div className="product__thumb w-img p-relative fix">
          {images && images.length > 1 ? (
            <CardSlider dots={true} infinite={true} speed={400} slidesToShow={1} slidesToScroll={1} arrows={false}>
              {images.map((img, i) => (
                <div key={i} style={{display:'flex',justifyContent:'center'}}>
                  <img
                    src={img}
                    alt={`kartvizit-${i}`}
                    style={{width:'100%',height:'180px',objectFit:'cover',borderRadius:10,boxShadow:'0 2px 8px rgba(0,0,0,0.07)',cursor:'pointer'}}
                    onClick={()=>openModal(img)}
                  />
                </div>
              ))}
            </CardSlider>
          ) : (
            <Link href={`/product-details/${_id}`}>
              {image ? (
                <Image
                  src={image}
                  alt="product image"
                  width={960}
                  height={1125}
                  style={{ width: "100%", height: "100%" }}
                />
              ) : null}
            </Link>
          )}

          {displayDiscount > 0 && (
            <div className="product__badge d-flex flex-column flex-wrap">
              <span
                className={`product__badge-item ${
                  discountPrd ? "has-offer" : "has-new"
                }`}
              >
                {discountPrd ? `-%${displayDiscount}` : "indirim"}
              </span>
              {!discountPrd && (
                <span className={`product__badge-item has-offer`}>
                  {`-${displayDiscount}%`}
                </span>
              )}
            </div>
          )}

          <div className="product__action d-flex flex-column flex-wrap">
            {/* On kartvizit or magnet pages, show only demo button to simplify hover actions */}
            { (pathname?.includes('/kartvizit') || pathname?.includes('/magnet')) ? (
              product.type === 'website' && (
                <a href={product.demoUrl} target="_blank" rel="noopener noreferrer" className="product-action-btn">
                  <i className="fa-solid fa-desktop"></i>
                  <span className="product-action-tooltip">Demoyu Görüntüle</span>
                </a>
              )
            ) : (
              <>
                <button
                  type="button"
                  className={`product-action-btn ${isWishlistAdded?"active":""}`}
                  onClick={() => handleAddWishlist(product)}
                >
                  <HeartTwo />
                  <span className="product-action-tooltip">İstek Listesine Ekle</span>
                </button>
                {product.type === 'website' && (
                  <a href={product.demoUrl} target="_blank" rel="noopener noreferrer" className="product-action-btn">
                    <i className="fa-solid fa-desktop"></i>
                    <span className="product-action-tooltip">Demoyu Görüntüle</span>
                  </a>
                )}
                <button
                  onClick={() => handleQuickView(product)}
                  type="button"
                  className="product-action-btn"
                >
                  <Eye />
                  <span className="product-action-tooltip">Hızlı Bakış</span>
                </button>
                <Link href={`/product-details/${_id}`}>
                <button type="button" className="product-action-btn">
                  <i className="fa-solid fa-link"></i>
                  <span className="product-action-tooltip">Ürün Detayları</span>
                </button>
                </Link>
              </>
            )}
          </div>
          <div className="product__add transition-3">
            {isAddedToCart ? (
              <Link
                href="/cart"
                type="button"
                className="product-add-cart-btn w-100"
              >
                <CartTwo />
                Sepeti Görüntüle
              </Link>
            ) : (
              <button
                onClick={() => handleAddProduct(product)}
                type="button"
                className="product-add-cart-btn w-100"
              >
                <CartTwo />
                Sepete Ekle
              </button>
            )}
          </div>
        </div>
        <div className="product__content">
          <h3 className="product__title">
            <Link href={`/product-details/${_id}`}>{title}</Link>
          </h3>
          <div className="product__price">
            {displayDiscount > 0 ? (
              <OldNewPrice originalPrice={displayOriginal} discount={displayDiscount} />
            ) : (
              <>
                <span className="product__ammount" style={{textDecoration:'line-through', color:'#999', marginRight:8}}>
                  ₺{displayOriginal.toFixed(2)}
                </span>
                <span className="product__ammount" style={{fontWeight:700}}>
                  ₺{displayPrice.toFixed(2)}
                </span>
              </>
            )}
          </div>
        </div>
      {/* Modal for fullscreen image */}
      {modalOpen && (
        <div style={{
          position:'fixed',
          top:0,left:0,right:0,bottom:0,
          background:'rgba(0,0,0,0.7)',
          zIndex:9999,
          display:'flex',alignItems:'center',justifyContent:'center',
        }} onClick={closeModal}>
          <img src={modalImg} alt="Büyük Görsel" style={{maxWidth:'90vw',maxHeight:'90vh',borderRadius:16,boxShadow:'0 4px 32px rgba(0,0,0,0.25)'}} />
        </div>
      )}
    </div>
    </React.Fragment>
  );
};

export default SingleProduct;

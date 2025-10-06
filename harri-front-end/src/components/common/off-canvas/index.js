'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
// internal
import shape from "@assets/img/shape/offcanvas-shape-1.png";
import logo from "@assets/img/logo/logo-black.svg";
import MobileMenus from "./mobile-menus";
import SocialLinks from "@components/social";
import useCartInfo from "@hooks/use-cart-info";

const OffCanvas = ({ isOffCanvasOpen, setIsOffCanvasOpen }) => {
  const { wishlist } = useSelector((state) => state.wishlist);
  const { quantity } = useCartInfo();
  return (
    <React.Fragment>
      <div
        className={`offcanvas__area offcanvas__area-1 ${
          isOffCanvasOpen ? "offcanvas-opened" : ""
        }`}
      >
        <div className="offcanvas__wrapper">
          <div className="offcanvas__shape">
            <Image className="offcanvas__shape-1" src={shape} alt="shape" />
          </div>
          <div className="offcanvas__close">
            <button
              onClick={() => setIsOffCanvasOpen(false)}
              className="offcanvas__close-btn offcanvas-close-btn"
            >
              <i className="fa-regular fa-xmark"></i>
            </button>
          </div>
          <div className="offcanvas__content">
            <div className="offcanvas__top mb-40 d-flex justify-content-between align-items-center">
              <div className="offcanvas__logo logo">
                <Link href="/">
                  <Image src={logo} alt="logo" />
                </Link>
              </div>
            </div>
            <div className="mobile-menu-3 fix mb-40 menu-counter mean-container d-lg-none">
              <div className="mean-bar">
                {/* MobileMenus start*/}
                <MobileMenus />
                {/* MobileMenus end*/}
              </div>
            </div>

            {/* Favoriler ve Sepetim Linkleri */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              marginBottom: '30px',
              padding: '0 15px'
            }}>
              <Link 
                href="/wishlist"
                onClick={() => setIsOffCanvasOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '16px 20px',
                  background: '#f0f4ff',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  border: '2px solid #dbeafe'
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1e3a8a" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                  <span style={{
                    color: '#1e3a8a',
                    fontSize: '16px',
                    fontWeight: '600'
                  }}>
                    Favorilerim
                  </span>
                </div>
                {wishlist.length > 0 && (
                  <span style={{
                    background: '#ef4444',
                    color: '#ffffff',
                    padding: '4px 10px',
                    borderRadius: '20px',
                    fontSize: '14px',
                    fontWeight: '600'
                  }}>
                    {wishlist.length}
                  </span>
                )}
              </Link>

              <Link 
                href="/cart"
                onClick={() => setIsOffCanvasOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '16px 20px',
                  background: '#f0fdf4',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  border: '2px solid #bbf7d0'
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2">
                    <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                  </svg>
                  <span style={{
                    color: '#10b981',
                    fontSize: '16px',
                    fontWeight: '600'
                  }}>
                    Sepetim
                  </span>
                </div>
                {quantity > 0 && (
                  <span style={{
                    background: '#10b981',
                    color: '#ffffff',
                    padding: '4px 10px',
                    borderRadius: '20px',
                    fontSize: '14px',
                    fontWeight: '600'
                  }}>
                    {quantity}
                  </span>
                )}
              </Link>
            </div>

            <div className="offcanvas__btn">
              <a href="#" className="tp-btn-offcanvas">
                İletişime Geç <i className="fa-regular fa-chevron-right"></i>
              </a>
            </div>
            <div className="offcanvas__social">
              <h3 className="offcanvas__social-title">Follow :</h3>
              <SocialLinks />
            </div>
            <div className="offcanvas__contact">
              <p className="offcanvas__contact-call">
                <a href="tel:+964-742-44-763">+964 742 44 763</a>
              </p>
              <p className="offcanvas__contact-mail">
                <a href="mailto:info@harry.com">info@harry.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* overlay */}
      <div
        onClick={() => setIsOffCanvasOpen(false)}
        className={`body-overlay ${isOffCanvasOpen ? "opened" : ""}`}
      ></div>
      {/* overlay */}
    </React.Fragment>
  );
};

export default OffCanvas;

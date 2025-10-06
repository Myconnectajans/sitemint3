'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { supabase } from "@lib/supabaseClient";
// internal
import Menus from "./menus";
import logo from "@assets/img/logo/logo-black.svg";
import { Cart, Heart, User } from "@svg/index";
import useSticky from "@hooks/use-sticky";
import OffCanvas from "@components/common/off-canvas";
import useCartInfo from "@hooks/use-cart-info";

const Header = ({ style_2 = false }) => {
  const { sticky } = useSticky();
  const router = useRouter();
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);
  const { quantity } = useCartInfo();
  const { wishlist } = useSelector((state) => state.wishlist);
  const { user: userInfo } = useSelector((state) => state.auth);
  const [sbUser, setSbUser] = useState(null);
  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setSbUser(data.user);
    };
    getUser();
  }, []);
  return (
    <>
      <header>
        <div className={`header__area ${style_2 ? "" : "header__transparent"}`}>
          <div
            className={`header__bottom-13 header__padding-7 header__black-3 header__bottom-border-4 ${
              style_2 ? "header__bottom-13-white" : "grey-bg-17"
            } header__sticky ${sticky ? "header-sticky" : ""}`}
            id="header-sticky"
          >
            <div className="container-fluid">
              <div className="mega-menu-wrapper p-relative">
                <div className="row align-items-center">
                  <div className="col-12">
                    <div className="row align-items-center">
                      {/* Logo - Sol */}
                      <div className="col-3">
                        <div className="logo">
                          <Link href="/">
                            <Image src={logo} alt="logo" />
                          </Link>
                        </div>
                      </div>

                      {/* Menü - Tam Orta */}
                      <div className="col-6 d-none d-lg-block">
                        <div className="main-menu main-menu-13 main-menu-ff-space text-center" style={{
                          overflow: 'hidden',
                          zIndex: '999',
                          width: '100%'
                        }}>
                          <style jsx>{`
                            @media (min-width: 2560px) {
                              .main-menu nav ul {
                                gap: 20px !important;
                              }
                              .main-menu nav ul li a {
                                font-size: 20px !important;
                                padding: 14px 22px !important;
                              }
                            }
                            @media (min-width: 1920px) and (max-width: 2559px) {
                              .main-menu nav ul {
                                gap: 16px !important;
                              }
                              .main-menu nav ul li a {
                                font-size: 18px !important;
                                padding: 12px 20px !important;
                              }
                            }
                            @media (min-width: 1440px) and (max-width: 1919px) {
                              .main-menu nav ul {
                                gap: 12px !important;
                              }
                              .main-menu nav ul li a {
                                font-size: 16px !important;
                                padding: 10px 16px !important;
                              }
                            }
                            @media (max-width: 1439px) {
                              .main-menu nav ul {
                                gap: 8px !important;
                              }
                              .main-menu nav ul li a {
                                font-size: 14px !important;
                                padding: 8px 12px !important;
                              }
                            }
                            @media (max-width: 1200px) {
                              .main-menu nav ul {
                                gap: 6px !important;
                              }
                              .main-menu nav ul li a {
                                font-size: 13px !important;
                                padding: 6px 10px !important;
                              }
                            }
                            @media (max-width: 992px) {
                              .main-menu nav ul {
                                gap: 4px !important;
                              }
                              .main-menu nav ul li a {
                                font-size: 12px !important;
                                padding: 5px 8px !important;
                              }
                            }
                          `}</style>
                          <nav id="mobile-menu-3" style={{
                            display: 'flex',
                            flexWrap: 'nowrap',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100%',
                            overflow: 'hidden'
                          }}>
                            <Menus />
                          </nav>
                        </div>
                      </div>

                      {/* Action Butonları - Sağ */}
                      <div className="col-3">
                        <div className="header__bottom-right-13 d-flex justify-content-end align-items-center">
                          <div className="header__action-13 d-none d-md-block">
                            <ul>
                              {sbUser ? (
                                <li>
                                  <Link href="/profile">
                                    <User />
                                  </Link>
                                </li>
                              ) : (
                                <li>
                                  <Link href="/login">
                                    <User />
                                  </Link>
                                </li>
                              )}
                              <li>
                                <Link href="/wishlist">
                                  <Heart />
                                  <span className="tp-item-count">
                                    {wishlist.length}
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <button
                                  className="cartmini-open-btn"
                                  onClick={() => router.push('/cart')}
                                >
                                  <Cart />
                                  <span className="tp-item-count">{quantity}</span>
                                </button>
                              </li>
                            </ul>
                          </div>
                          <div className="header__hamburger d-xl-none" style={{
                            marginLeft: 'auto',
                            marginRight: '0',
                            position: 'absolute',
                            right: '0',
                            top: '50%',
                            transform: 'translateY(-50%)'
                          }}>
                            <button
                              onClick={() => setIsOffCanvasOpen(true)}
                              type="button"
                              className="hamburger-btn hamburger-btn-black offcanvas-open-btn"
                            >
                              <span></span>
                              <span></span>
                              <span></span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* off canvas start */}
      <OffCanvas
        isOffCanvasOpen={isOffCanvasOpen}
        setIsOffCanvasOpen={setIsOffCanvasOpen}
      />
      {/* off canvas end */}
    </>
  );
};

export default Header;

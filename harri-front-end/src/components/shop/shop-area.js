import React, { useState } from "react";
// internal
import { ShopShortSelect, ShopShortTab, ShowingResult } from "./shop-top-bar";
import ShopSidebar from "@components/common/sidebar/shop-sidebar";
import ProductGridItems from "./prd-grid-items";
import ProductListItems from "./prd-list-items";

const ShopArea = ({ products,all_products,shortHandler,hideFilters,isQRMenu,isWebSite,isBusinessCard }) => {
  const [showingGridItems, setShowingGridItems] = useState(0);
  const [showingListItems, setShowingListItems] = useState(0);
  // QR Menü, Web Siteleri ve Kartvizitler için sadece liste görünümü, diğerleri için grid varsayılan
  const [tabActive, setActiveTab] = useState(isQRMenu || isWebSite || isBusinessCard ? "lists" : "grid");
  const handleTab = (value) => {
    setActiveTab(value);
  };

  return (
    <section className="shop__area pb-60">
      <div className="container">
        <div className="shop__top mb-50">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-5">
              <ShowingResult
                show={
                  tabActive === "grid" ? showingGridItems : showingListItems
                }
                total={products.length}
              />
            </div>
            <div className="col-lg-6 col-md-7">
              <div className="shop__sort d-flex flex-wrap justify-content-md-end align-items-center">
                {/* QR Menü, Web Siteleri ve Kartvizitler için tab butonlarını gizle */}
                {!(isQRMenu || isWebSite || isBusinessCard) && <ShopShortTab handleTab={handleTab} isQRMenu={isQRMenu} />}
                <ShopShortSelect shortHandler={shortHandler} isQRMenu={isQRMenu} isWebSite={isWebSite} isBusinessCard={isBusinessCard} allProducts={all_products} />
              </div>
            </div>
          </div>
        </div>
        <div className="shop__main">
          <div className="row justify-content-center">
            {!hideFilters && (
              <div className="col-lg-3">
                {/* sidebar start */}
                <ShopSidebar all_products={all_products} />
                {/* sidebar end */}
              </div>
            )}
            <div className={hideFilters ? `col-lg-12` : `col-lg-9 order-first order-lg-last`}>
              <div className="shop__tab-content mb-40">
                <div className="tab-content" id="shop_tab_content">
                  {/* QR Menü, Web Siteleri ve Kartvizitler için sadece liste görünümü */}
                  {(isQRMenu || isWebSite || isBusinessCard) ? (
                    <ProductListItems
                      itemsPerPage={5}
                      items={products}
                      setShowingListItems={setShowingListItems}
                      isQRMenu={isQRMenu}
                      isWebSite={isWebSite}
                      isBusinessCard={isBusinessCard}
                    />
                  ) : (
                    <>
                      <ProductGridItems
                        itemsPerPage={9}
                        items={products}
                        setShowingGridItems={setShowingGridItems}
                        isQRMenu={isQRMenu}
                      />
                      <ProductListItems
                        itemsPerPage={5}
                        items={products}
                        setShowingListItems={setShowingListItems}
                        isQRMenu={isQRMenu}
                      />
                    </>
                  )}
                </div>
                {/* pagination*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopArea;

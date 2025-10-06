"use client";
import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import ShopFilterPanel from "@components/common/shop-filtering/shop-filter-panel";
import ShopBreadcrumb from "@components/common/breadcrumb/shop-breadcrumb";
import Header from "@layout/header";
import Footer from "@layout/footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import placeholder from "@assets/img/slider/13/slider-1.png";

const Slider = dynamic(() => import("react-slick"), { ssr: false });
const CardSlider = dynamic(() => import("react-slick"), { ssr: false });

function generateMockProducts(count = 1000) {
  return Array.from({ length: count }).map((_, idx) => {
    return {
      _id: `mock-kartvizit-${idx}`,
      title: `Modern Kartvizit ${idx + 1}`,
      images: [placeholder, placeholder, placeholder],
      originalPrice: 3499,
      price: 2499,
      discount: Math.round(((3499 - 2499) / 3499) * 100),
      demoUrl: `https://example.com/demo/kartvizit/${idx + 1}`,
      colors: ["mavi", "yeşil", "siyah", "beyaz", "kırmızı", "sarı"],
      type: "kartvizit",
    };
  });
}


export default function KartvizitSliderArea() {
  const products = useMemo(() => generateMockProducts(1000), []);
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  // Modal state for fullscreen image
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

  const cardSliderSettings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <>
      <Header style_2={true} />
      <ShopBreadcrumb />
      <ShopFilterPanel kategori="kartvizit" />
      <div className="container py-5">
        <Slider {...sliderSettings}>
          {products.map((product) => (
            <div key={product._id} style={{padding:'24px 12px'}}>
              <div style={{
                background:'#fff',
                borderRadius:18,
                boxShadow:'0 4px 24px rgba(79,142,247,0.10)',
                padding:'24px 18px',
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                minHeight:370,
                maxWidth:370,
                margin:'0 auto',
                position:'relative',
                transition:'box-shadow 0.2s',
              }}>
                <div style={{width:'100%',marginBottom:18}}>
                  <CardSlider {...cardSliderSettings}>
                    {product.images.map((img, i) => (
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
                </div>
                <h3 style={{fontWeight:700,fontSize:22,marginBottom:10,textAlign:'center'}}>{product.title}</h3>
                <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:10,marginBottom:16}}>
                  <span style={{textDecoration:'line-through', color:'#999', fontSize:16}}>
                    ₺{product.originalPrice}
                  </span>
                  <span style={{fontWeight:700, fontSize:20, color:'#43C59E'}}>
                    ₺{product.price}
                  </span>
                </div>
                <button
                  style={{
                    padding:'10px 32px',
                    background:'linear-gradient(90deg, #4F8EF7 0%, #43C59E 100%)',
                    color:'#fff',
                    borderRadius:'8px',
                    fontWeight:700,
                    fontSize:18,
                    border:'none',
                    boxShadow:'0 2px 8px rgba(79,142,247,0.12)',
                    cursor:'pointer',
                    marginTop:8,
                  }}
                  onClick={()=>window.location.href = product.demoUrl}
                >Satın Al</button>
              </div>
            </div>
          ))}
        </Slider>
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
      <Footer />
    </>
  );
}

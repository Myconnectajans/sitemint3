"use client";
import React, { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
// internal
import ErrorMessage from "@components/error-message/error";
import { useGetCategoriesQuery } from "src/redux/features/categoryApi";
import ShopCategoryLoader from "@components/loader/shop-category-loader";

const ShopCategory = () => {
  const router = useRouter();
  const { data: categories, isLoading, isError } = useGetCategoriesQuery();

  const fallbackCategories = [
    'Diş Hekimi / Klinik','Psikolog / Terapist','Diyetisyen','Güzellik Salonu','Kuaför / Berber','Estetisyen / Cilt Bakım Uzmanı','Veteriner Kliniği','Fizyoterapist','Özel Tıp Merkezi / Klinik','Optik Mağazası','Spa ve Masaj Salonu','Avukat / Hukuk Bürosu','Mali Müşavir / Muhasebe Bürosu','Mimar / Mimarlık Ofisi','İç Mimar','Danışmanlık Firması (Yönetim, İK vb.)','Sigorta Acentesi','Reklam ve Pazarlama Ajansı','Yazılım ve Bilişim Firması','Restoran','Kafe','Pastane / Fırın','Bar / Pub','Catering Firması','İnşaat Firması','Emlakçı / Gayrimenkul Danışmanı','Mobilya Mağazası / Marangoz','Tesisatçı','Elektrikçi','Peyzaj Mimarı','Temizlik Şirketi','Evden Eve Nakliyat','Özel Okul / Kolej','Sürücü Kursu','Dil Okulu','Özel Ders Eğitmeni / Etüt Merkezi','Müzik / Sanat Okulu','Butik Giyim Mağazası','Çiçekçi','Pet Shop','Terzi / Moda Evi','Hediyelik Eşya Dükkanı','Fitness / Spor Salonu','Yoga / Pilates Stüdyosu','Kişisel Antrenör (Personal Trainer)','Otel / Butik Otel','Seyahat Acentesi','Araç Kiralama Firması','Fotoğrafçı','Düğün ve Organizasyon Firması'
  ];

  const categoryList = (!isLoading && !isError && categories?.categories?.length > 0)
    ? categories.categories.flatMap(c => c.children)
    : fallbackCategories;

  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    if (!query) return categoryList;
    return categoryList.filter(c => c.toLowerCase().includes(query.toLowerCase()));
  }, [query, categoryList]);

  const selectCategory = (item) => {
    router.push(`/shop?category=${item.toLowerCase().replace(/&/g,'').split(' ').join('-')}`);
  }

  const content = (
    <div className="shop-category-modern">
      <div style={{marginBottom:12}}>
        <input
          placeholder="Kategori ara..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{width:'100%',padding:8,borderRadius:8,border:'1px solid #eee'}}
        />
      </div>
      <div style={{display:'flex',flexWrap:'wrap',gap:8}}>
        {filtered.map((item, i) => (
          <button key={i} onClick={() => selectCategory(item)} className="category-chip" style={{padding:'8px 12px',borderRadius:999,border:'1px solid #eee',background:'#fff',cursor:'pointer'}}>
            {item}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="accordion-item">
      <div className="sidebar__widget-content">
        <div className="categories">
          <div id="accordion-items">{content}</div>
        </div>
      </div>
    </div>
  );
};

export default ShopCategory;

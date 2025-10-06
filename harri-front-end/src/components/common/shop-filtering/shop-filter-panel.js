"use client";
import React, { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';

const professions = [
  'Diş Hekimi / Klinik','Psikolog / Terapist','Diyetisyen','Güzellik Salonu','Kuaför / Berber','Estetisyen / Cilt Bakım Uzmanı','Veteriner Kliniği','Fizyoterapist','Özel Tıp Merkezi / Klinik','Optik Mağazası','Spa ve Masaj Salonu','Avukat / Hukuk Bürosu','Mali Müşavir / Muhasebe Bürosu','Mimar / Mimarlık Ofisi','İç Mimar','Danışmanlık Firması (Yönetim, İK vb.)','Sigorta Acentesi','Reklam ve Pazarlama Ajansı','Yazılım ve Bilişim Firması','Restoran','Kafe','Pastane / Fırın','Bar / Pub','Catering Firması','İnşaat Firması','Emlakçı / Gayrimenkul Danışmanı','Mobilya Mağazası / Marangoz','Tesisatçı','Elektrikçi','Peyzaj Mimarı','Temizlik Şirketi','Evden Eve Nakliyat','Özel Okul / Kolej','Sürücü Kursu','Dil Okulu','Özel Ders Eğitmeni / Etüt Merkezi','Müzik / Sanat Okulu','Butik Giyim Mağazası','Çiçekçi','Pet Shop','Terzi / Moda Evi','Hediyelik Eşya Dükkanı','Fitness / Spor Salonu','Yoga / Pilates Stüdyosu','Kişisel Antrenör (Personal Trainer)','Otel / Butik Otel','Seyahat Acentesi','Araç Kiralama Firması','Fotoğrafçı','Düğün ve Organizasyon Firması'
];

const extraColors = ['mor','turuncu','pembe','gri','kahverengi','mint','lacivert'];

const ShopFilterPanel = ({ all_products = [] }) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedProfession, setSelectedProfession] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [layout, setLayout] = useState('tek');

  const all_colors = all_products.map((p) => p.colors || []).flat();
  const colors = useMemo(() => {
    const set = new Set([...all_colors, ...extraColors]);
    return Array.from(set);
  }, [all_colors]);

  const filteredProfessions = useMemo(() => {
    if (!search) return professions;
    return professions.filter(p => p.toLowerCase().includes(search.toLowerCase()));
  }, [search]);

  const apply = () => {
    const params = new URLSearchParams();
    if (selectedProfession) params.set('profession', selectedProfession.toLowerCase().replace(/\s+/g,'-').replace(/&/g,''));
    if (selectedColor) params.set('color', selectedColor.toLowerCase());
    if (layout) params.set('layout', layout === 'tek' ? 'single' : 'multi');
    router.push(`/shop?${params.toString()}`);
    setOpen(false);
  };

  const clear = () => {
    setSelectedProfession('');
    setSelectedColor('');
    setLayout('tek');
  };

  return (
    <div>
      <button className="tp-btn" onClick={() => setOpen(true)} style={{width:'100%'}}>Filtrele</button>
      {open && (
        <div style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.4)',zIndex:2000,display:'flex',alignItems:'center',justifyContent:'center'}}>
          <div style={{width:'92%',maxWidth:720,background:'#fff',borderRadius:12,padding:24,boxShadow:'0 6px 30px rgba(0,0,0,0.2)'}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:12}}>
              <h3 style={{margin:0}}>Gelişmiş Filtreler</h3>
              <button onClick={() => setOpen(false)} style={{background:'transparent',border:'none',fontSize:18}}>✕</button>
            </div>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16}}>
              <div>
                <label style={{display:'block',fontWeight:700,marginBottom:8}}>Meslek</label>
                <input placeholder="Ara veya seç" value={search} onChange={e=>setSearch(e.target.value)} style={{width:'100%',padding:8,borderRadius:8,border:'1px solid #eee',marginBottom:8}} />
                <div style={{maxHeight:220,overflowY:'auto',display:'flex',flexWrap:'wrap',gap:8}}>
                  {filteredProfessions.map((p,i)=> (
                    <button key={i} onClick={()=>setSelectedProfession(p)} className={`category-chip ${selectedProfession===p? 'active': ''}`} style={{padding:'6px 10px',borderRadius:999,border:selectedProfession===p? '2px solid #4F8EF7':'1px solid #eee',background:selectedProfession===p? '#f0f8ff':'#fff',cursor:'pointer'}}>
                      {p}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label style={{display:'block',fontWeight:700,marginBottom:8}}>Renk</label>
                <div style={{display:'flex',flexWrap:'wrap',gap:12}}>
                  {colors.map((c,i)=> {
                    const colorMap = {
                      mavi: '#2196f3',
                      yeşil: '#43C59E',
                      siyah: '#222',
                      beyaz: '#fff',
                      kırmızı: '#e53935',
                      sarı: '#ffd600',
                      mor: '#8e24aa',
                      turuncu: '#ff9800',
                      pembe: '#ec407a',
                      gri: '#bdbdbd',
                      kahverengi: '#795548',
                      mint: '#aeeeee',
                      lacivert: '#283593',
                    };
                    const bg = colorMap[c.toLowerCase()] || c;
                    return (
                      <button key={i} onClick={()=>setSelectedColor(c)} style={{
                        width:36,height:36,borderRadius:'50%',border:selectedColor===c? '3px solid #4F8EF7':'2px solid #eee',
                        background:bg,display:'inline-block',cursor:'pointer',outline:'none',boxShadow:selectedColor===c?'0 0 0 2px #43C59E':'none',position:'relative'
                      }} title={c}>
                        {selectedColor===c && <span style={{position:'absolute',top:8,right:8,fontSize:16,color:'#fff'}}>✓</span>}
                      </button>
                    )
                  })}
                </div>

                <div style={{marginTop:16}}>
                  <label style={{display:'block',fontWeight:700,marginBottom:8}}>Düzen Tipi</label>
                  <div style={{display:'flex',gap:8}}>
                    <label style={{display:'flex',alignItems:'center',gap:8}}>
                      <input type="radio" name="layout" checked={layout==='tek'} onChange={()=>setLayout('tek')} /> Tek Sayfa
                    </label>
                    <label style={{display:'flex',alignItems:'center',gap:8}}>
                      <input type="radio" name="layout" checked={layout==='çok' || layout==='cok'} onChange={()=>setLayout('çok')} /> Çok Sayfalı
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div style={{display:'flex',justifyContent:'flex-end',gap:8,marginTop:18}}>
              <button onClick={clear} className="tp-btn" style={{background:'#eee',border:'none'}}>Temizle</button>
              <button onClick={apply} className="tp-btn" style={{background:'linear-gradient(90deg,#4F8EF7,#43C59E)',color:'#fff',border:'none'}}>Uygula</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ShopFilterPanel;

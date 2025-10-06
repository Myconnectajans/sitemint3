'use client';
import { useEffect, useState } from "react";
import { supabase } from "@lib/supabaseClient";
import Header from "@layout/header";
import Link from "next/link";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
      setEmail(data.user?.email || "");
      setUsername(data.user?.user_metadata?.username || "");
      setName(data.user?.user_metadata?.name || "");
      setSurname(data.user?.user_metadata?.surname || "");
    };
    getUser();
  }, []);

  const handleSave = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.updateUser({
      email,
      data: {
        username,
        name,
        surname,
      },
    });
    if (error) {
      setMessage("Bilgiler güncellenemedi: " + error.message);
    } else {
      setMessage("Bilgiler başarıyla güncellendi.");
      setEditMode(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/";
  };

  if (!user) {
    return <div style={{padding:40}}><h2>Profil</h2><p>Görüntülemek için giriş yapmalısınız.</p></div>;
  }

  return (
    <>
      <Header />
      <div style={{height:48}}></div>
      <div style={{maxWidth:520,margin:"40px auto",background:"#fff",borderRadius:16,padding:32,boxShadow:"0 2px 16px rgba(0,0,0,0.07)"}}>
        <h2 style={{textAlign:"center",fontWeight:700,fontSize:28,marginBottom:24}}>Profilim</h2>
        <form onSubmit={handleSave}>
          <div style={{marginBottom:16}}>
            <label style={{fontWeight:600}}>Adınız:</label>
            <input type="text" value={name} onChange={e=>setName(e.target.value)} disabled={!editMode} style={{width:"100%",padding:8,borderRadius:8,border:"1px solid #eee",marginTop:4}} />
          </div>
          <div style={{marginBottom:16}}>
            <label style={{fontWeight:600}}>Soyadınız:</label>
            <input type="text" value={surname} onChange={e=>setSurname(e.target.value)} disabled={!editMode} style={{width:"100%",padding:8,borderRadius:8,border:"1px solid #eee",marginTop:4}} />
          </div>
          <div style={{marginBottom:16}}>
            <label style={{fontWeight:600}}>Kullanıcı Adı:</label>
            <input type="text" value={username} onChange={e=>setUsername(e.target.value)} disabled={!editMode} style={{width:"100%",padding:8,borderRadius:8,border:"1px solid #eee",marginTop:4}} />
          </div>
          <div style={{marginBottom:16}}>
            <label style={{fontWeight:600}}>E-posta:</label>
            <input type="email" value={email} onChange={e=>setEmail(e.target.value)} disabled={!editMode} style={{width:"100%",padding:8,borderRadius:8,border:"1px solid #eee",marginTop:4}} />
          </div>
          {message && <div style={{color:"#43C59E",marginBottom:12}}>{message}</div>}
          <div style={{display:"flex",justifyContent:"space-between",marginTop:24}}>
            {!editMode ? (
              <button type="button" onClick={()=>setEditMode(true)} style={{padding:"10px 24px",borderRadius:8,background:"#4F8EF7",color:"#fff",border:"none",fontWeight:600}}>Düzenle</button>
            ) : (
              <button type="submit" style={{padding:"10px 24px",borderRadius:8,background:"#43C59E",color:"#fff",border:"none",fontWeight:600}}>Kaydet</button>
            )}
            <button type="button" onClick={handleLogout} style={{padding:"10px 24px",borderRadius:8,background:"#F76E6C",color:"#fff",border:"none",fontWeight:600}}>Çıkış Yap</button>
          </div>
        </form>
        <div style={{marginTop:40, textAlign:'center'}}>
          <Link href="/" style={{
            display: 'inline-block',
            padding: '12px 32px',
            background: 'linear-gradient(90deg, #4F8EF7 0%, #43C59E 100%)',
            color: '#fff',
            borderRadius: '8px',
            fontWeight: 700,
            fontSize: 18,
            boxShadow: '0 2px 8px rgba(79,142,247,0.12)',
            textDecoration: 'none',
            transition: 'background 0.2s',
          }}>
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    </>
  );
}

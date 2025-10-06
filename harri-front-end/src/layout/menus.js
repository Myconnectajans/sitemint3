'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import menu_data from './menu-data';
import { supabase } from '@lib/supabaseClient';

const Menus = () => {
  const [user, setUser] = useState(null);
  const pathname = usePathname();
  
  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    };
    getUser();
  }, []);

  const isActive = (link) => {
    return pathname === link;
  };

  return (
    <ul style={{
      display: 'flex',
      flexWrap: 'nowrap',
      alignItems: 'center',
      listStyle: 'none',
      margin: 0,
      padding: 0,
      width: '100%',
      justifyContent: 'center',
      gap: '12px',
      overflow: 'hidden'
    }}>
      {menu_data.map((menu, i) => {
        const active = isActive(menu.link);
        return (
          <li key={i} className={`${menu.hasDropdown ? 'has-dropdown' : ''}`} style={{
            display: 'inline-block',
            whiteSpace: 'nowrap',
            flexShrink: 0,
            minWidth: 'fit-content'
          }}>
            <Link href={`${menu.link}`} style={{
              display: 'inline-block',
              whiteSpace: 'nowrap',
              textDecoration: 'none',
              color: active ? '#1e3a8a' : '#333',
              fontSize: '16px',
              fontWeight: active ? '700' : '500',
              padding: '10px 16px',
              minWidth: 'fit-content',
              borderBottom: active ? '3px solid #1e3a8a' : '3px solid transparent',
              transition: 'all 0.3s ease',
              background: active ? 'rgba(30, 58, 138, 0.08)' : 'transparent',
              borderRadius: '8px 8px 0 0'
            }}>
              {menu.title}
            </Link>
            {menu.hasDropdown && <ul className="submenu">
              {menu.submenus.map((sub, i) => (
                <li key={i}>
                  <Link href={`${sub.link}`}>
                    {sub.title}
                  </Link>
                </li>
              ))}
            </ul>}
          </li>
        );
      })}
    </ul>
  );
};

export default Menus;
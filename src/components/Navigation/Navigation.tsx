'use client'
import React, { useState } from 'react'
import { navLinksList } from './constants'
import { SiteLogo } from 'ui/SiteLogo'
import st from './Navigation.module.scss';
import Image from 'next/image';
import { SupportNav } from '@components/SupportNav';

function Navigation() {
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <>
      <nav className={st.navbar}>
        <SiteLogo />
        {navLinksList.map((link, index) =>
          <li className={`${st.links} ${activeIndex === index ? st.active : ''}`}
            key={link.title} onClick={() => setActiveIndex(index)} >
            <span className={st.icon}>{link.icon}</span>  {link.title}
          </li>)}
        <SupportNav />
      </nav>
    </>
  )
}

export default Navigation
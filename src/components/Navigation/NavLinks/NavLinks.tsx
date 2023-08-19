'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
// import { usePathname } from 'next/navigation'
import { navLinksList } from './constants';
import st from '../Navigation.module.scss';

export default function NavLinks() {
  const [activeIndex, setActiveIndex] = useState(0)
  // const pathname = usePathname()

  // useEffect(() => {
  //   const activeLinkIndex = navLinksList.findIndex(
  //     (link) =>
  //       pathname === '/' || pathname.includes(link.title.toLowerCase())
  //   );

  //   console.log(activeIndex);


  //   setActiveIndex(activeLinkIndex);
  // }, [pathname, activeIndex]);
  return (
    <ul>
      {navLinksList.map((link, index) => (
        <li key={link.title} >
          <Link
            className={`${st.links} ${activeIndex === index ? st.active : ''} `}
            href={link.title === 'Home' ? '/' : `/${link.title.toLowerCase()}`}
            onClick={() => setActiveIndex(index)} passHref>
            <span className={st.icon}>{link.icon}</span>
            <p className={st.title}>{link.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

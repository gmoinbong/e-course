"use client"
import React, { useState } from 'react'
import st from '../Navigation.module.scss';
import { navLinksList } from './constants'

export default function NavLinks() {
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <>
      {navLinksList.map((link, index) =>
        <li className={`${st.links} ${activeIndex === index ? st.active : ''}`}
          key={link.title} onClick={() => setActiveIndex(index)} >
          <span className={st.icon}>{link.icon}</span>
          <p className={st.title}>
            {link.title}
          </p>
        </li>)}</>
  )
}

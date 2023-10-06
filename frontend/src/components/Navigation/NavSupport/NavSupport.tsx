import React from 'react';
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';
import Image from 'next/image';
import supportIcon from '@media/CustomerSupport.png'

import st from './NavSupport.module.scss';

interface SupportNavProps { }

export const NavSupport = ({ }: SupportNavProps) => (
  <div className={st.wrapper}>
      <Image className={st.image} src={supportIcon} alt='Support message' />
    <li className={st.support}>
      <HiOutlineChatBubbleLeftRight className={st.icon} />
      <span className={st.text}>Support</span>
    </li>
  </div>
);

export default NavSupport;

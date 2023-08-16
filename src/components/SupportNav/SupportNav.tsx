import React from 'react';
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';
import Image from 'next/image';
import supportIcon from '@media/CustomerSupport.png'

import st from './SupportNav.module.scss';

interface SupportNavProps { }

export const SupportNav = ({ }: SupportNavProps) => (
  <div className={st.wrapper}>
    <span className={st.supportIcon}>
      <Image src={supportIcon} alt='Support message' />
    </span>
    <li className={st.support}>
      <HiOutlineChatBubbleLeftRight className={st.icon} />
      <span className={st.text}>Support</span>
    </li>
  </div>
);

export default SupportNav;

import Image from 'next/image';
import icon from '@media/eductaion_logo.png'
import st from './SiteLogo.module.scss';

interface SiteLogoProps { }

export const SiteLogo = ({ }: SiteLogoProps) => (
  <figure className={st.wrapper}>
    <Image className={st.icon} src={icon} alt='Site logo' />
    <h1>E-Courses</h1>
  </figure>
);
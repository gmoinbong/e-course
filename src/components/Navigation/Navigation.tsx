import st from './Navigation.module.scss';
import { SiteLogo } from '@components/SiteLogo'
import { NavSupport } from './NavSupport';
import NavLinks from './NavLinks/NavLinks';

function Navigation() {
  return (
    <nav className={st.navbar}>
      <SiteLogo />
      <NavLinks />
      <NavSupport />
    </nav>
  )
}

export default Navigation
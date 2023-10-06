import st from './Navigation.module.scss';
import { SiteLogo } from '@components/SiteLogo'
import { NavSupport } from './NavSupport';
import NavLinks from './NavLinks/NavLinks';

function Navigation() {
  return (
    <nav className={st.navbar}>
      <SiteLogo />
      <div className={st.linksWrapper}>
      <NavLinks />
      <NavSupport />
      </div>
    </nav>
  )
}

export default Navigation
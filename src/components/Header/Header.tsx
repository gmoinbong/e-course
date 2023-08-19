import { SearchBar } from '@components/Header/SearchBar';
import st from './Header.module.scss';
import Balance from '@components/Balance/Balance';
import Select from './Select/Select';
import NotificationButton from '@components/NotificationButton/NotificationButton';
import UserDropdown from '@components/UserDropdown/UserDropdown';

interface HeaderProps { }

export const Header = ({ }: HeaderProps) => (
  <header className={st.Header} >
    <div className={st.searchGroup}>
      <SearchBar />
      <Select />
    </div>
    <div className={st.userGroup}>
      <Balance balance={123} />
      <NotificationButton />
      <UserDropdown userName="Vladyslav S." />
    </div>
  </header>
);
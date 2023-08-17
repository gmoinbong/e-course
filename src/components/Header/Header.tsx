import { SearchBar } from '@components/Header/SearchBar';
import st from './Header.module.scss';
import Balance from '@components/Balance/Balance';
import Select from './Select/Select';

interface HeaderProps { }

export const Header = ({ }: HeaderProps) => (
  <header className={st.Header} >
    <SearchBar />
    <Select />
    <Balance balance={123} />
  </header>
);
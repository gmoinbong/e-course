import st from './Home.module.scss';

interface HomeProps { }

export const Home = ({ }: HomeProps) => (
  <div className={st.home} >
    Home Component
  </div>
);
import Navigation from '@components/Navigation';
import st from './Home.module.scss';
import { WelcomeBack } from '@components/WelcomeBack';
import Layout from 'layouts/Layout/Layout';
import { StatsComponent } from '@components/StatsComponent';
interface HomeProps { }

export const Home = ({ }: HomeProps) => (
  <Layout>
    <main className='pl-2'>
      <WelcomeBack />
      <StatsComponent />
    </main>
  </Layout>
);
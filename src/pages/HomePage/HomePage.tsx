import { WelcomeBack } from '@components/WelcomeBack';
import Layout from 'layouts/Layout/Layout';
import { StatsComponent } from '@components/StatsComponent';
interface HomePageProps { }

export const HomePage = ({ }: HomePageProps) => (
  <main className='pl-2'>
    <WelcomeBack />
    <StatsComponent />
  </main>
);
import { StatsComponent } from '@components/StatsComponent';
import { WelcomeBack } from '@components/Home/WelcomeBack';
import { SchoolSection } from '@components/Home/SchoolSection';
interface HomePageProps { }

const index = ({ }: HomePageProps) => (
  <main className='pl-2'>
    <WelcomeBack />
    <StatsComponent />
    <SchoolSection />
  </main>
);
export default index
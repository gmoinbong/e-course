import { CourseCard } from '@components/CourseGroup/CourseCard';
import st from './Home.module.scss'
import { SchoolSection } from "@components/Home/SchoolSection";
import { WelcomeBack } from "@components/Home/WelcomeBack";
import { Schedule } from "@components/Schedule";
import { StatsComponent } from "@components/StatsComponent";
import { CourseGroup } from '@components/CourseGroup';

interface HomeProps { }

export const Home = ({ }: HomeProps) => (

  <main className={st.main}>
    <div className={st.leftGroup}>
      <WelcomeBack profileName='Vladyslav' />
      <StatsComponent />
      <SchoolSection />
    </div>
    <div className='pl-4'>
      <Schedule />
      <CourseGroup />
    </div>
  </main>
);
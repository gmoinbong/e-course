import { Schedule } from "@components/Schedule";
import { SchoolSection } from "@components/Home/SchoolSection";
import { WelcomeBack } from "@components/Home/WelcomeBack";
import { StatsComponent } from "@components/StatsComponent";



interface HomeProps { }

export const Home = ({ }: HomeProps) => (
  <main className='pl-2'>
    <WelcomeBack />
    <StatsComponent />
    <SchoolSection />
    <Schedule />
  </main>

);
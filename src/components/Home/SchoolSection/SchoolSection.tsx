import ViewAll from 'ui/ViewAll/ViewAll';
import st from './SchoolSection.module.scss';
import Link from 'next/link';
import { SchoolCard } from './SchoolCard';
import { schoolData } from './SchoolCard/constant';

interface SchoolSectionProps { }

export const SchoolSection = ({ }: SchoolSectionProps) => (
  <div className={st.SchoolSection} >
    <div className={st.titleWrapper}>
      <h4 className={st.heading}>Top online school</h4>
      <Link href="/courses">
        <ViewAll />
      </Link>
    </div>
    <div className={st.cardWrapper}>
      {schoolData.map((school, index) => (
        <SchoolCard
          key={index}
          image={school.image}
          title={school.title}
          location={school.location}
          studentsCount={school.studentsCount}
          price={school.price} />
      ))}
    </div>
  </div>
);
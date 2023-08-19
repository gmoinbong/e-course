import ViewAll from 'ui/ViewAll/ViewAll';
import st from './SchoolSection.module.scss';
import Link from 'next/link';

interface SchoolSectionProps { }

export const SchoolSection = ({ }: SchoolSectionProps) => (
  <div className={st.schoolSection} >
    <div className={st.titleWrapper}>
      <h4 className={st.heading}>Top online school</h4>
      <Link href="/courses">
        <ViewAll />
      </Link>
    </div>
  </div>
);
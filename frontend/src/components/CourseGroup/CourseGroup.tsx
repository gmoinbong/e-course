import { AiFillPlusCircle } from 'react-icons/ai';
import { CourseCard } from './CourseCard';
import st from './CourseGroup.module.scss';
import { coursesData } from './constants';

interface CourseGroupProps { }

export const CourseGroup = ({ }: CourseGroupProps) => (
  <div className={st.courseGroup} >
    <div className={st.titleGroup}>
      <h3 className='font-semibold text-2xl  text-black'>Courses</h3>
      <AiFillPlusCircle className={st.icon} />
    </div>
    {coursesData.map((course, index) =>
      <CourseCard key={index}
        company={course.company}
        image={course.image}
        title={course.title}
      />
    )}
  </div>
);
import React from 'react'
import st from './CoursesList.module.scss';
import { coursesList } from './constants';


export default function CoursesList() {
  return (
    <ul className={st.courseList}>
      {coursesList.map((course, index) =>
        <li key={index}>
          <p className={st.course}> <span className={st.title}>{course.title}</span> - {course.company}</p>
        </li>
      )}
    </ul>)
}

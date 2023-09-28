import React from 'react';
import st from './SchoolCard.module.scss';
import Image from 'next/image';
import { SchoolCardData } from './constant';
import { PiStudentFill } from 'react-icons/pi';
import { AiOutlineDollar } from 'react-icons/ai';

export const SchoolCard: React.FC<SchoolCardData> = ({ image, title, location, studentsCount, price }) => (
  <article className={st.schoolCard}>
    <figure>
      <Image src={image} alt={title} className={st.schoolImage}
        width={100} height={80} />
    </figure>
    <header className={st.schoolHeader}>
      <h2 className={st.schoolTitle}>{title}</h2>
      <p className={st.schoolLocation}>{location}</p>
    </header>
    <section className={st.schoolDetails}>
      <p className={st.schoolStudentsCount}><PiStudentFill className={st.icon} />{studentsCount}</p>
      <p className={st.schoolPrice}><AiOutlineDollar className={st.icon} />{price}</p>
    </section>
  </article>
);

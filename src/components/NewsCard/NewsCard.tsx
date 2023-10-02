import Image from 'next/image';
import st from './NewsCard.module.scss';
import img from '@media/it-image.jpg'
interface NewsCardProps { }

export const NewsCard = ({ }: NewsCardProps) => (
  <div className={st.newsCard} >
    <div className={st.titleGroup}>
      <h4 className={st.title}>
        News
      </h4>
      <p className={st.link}>
        Learn more
      </p>
    </div>
    <Image  src={img} alt='img course'/>
  </div>
);
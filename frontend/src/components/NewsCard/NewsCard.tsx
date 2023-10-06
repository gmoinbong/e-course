import Image from 'next/image';
import st from './NewsCard.module.scss';
import img from '@media/news-image.png'
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
    <div className={st.imageBlock}>
      <Image src={img} alt='img course'
        className={st.image} />
    </div>
  </div>
);

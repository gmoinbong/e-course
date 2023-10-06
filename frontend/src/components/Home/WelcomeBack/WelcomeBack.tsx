import Button from 'ui/Button/Button';
import { FaExclamationCircle } from 'react-icons/fa';
import st from './WelcomeBack.module.scss';
import icon from '@media/HomeWelcome_icon.jpg'
import Image from 'next/image';
import CoursesList from './CoursesList/CoursesList';

interface WelcomeBackProps {
  profileName: string
}


export const WelcomeBack = ({ profileName }: WelcomeBackProps) => (
  <div className={st.welcomeBack} >
    <div className={st.wrapper}>
      <h4 className={st.heading}>Welcome back, {profileName}!</h4>
      <p className={st.subHeading}>
        <span className={st.icon}><FaExclamationCircle /></span>
        We have selected for you courses that may interest you:
      </p>
      <CoursesList />
      <div className='pt-3'>
        <Button showArrow={true} text='EXPLORE MORE' />
      </div>
    </div>
    <Image className={st.img} alt='Welcome image' src={icon} />
  </div>
);

export default WelcomeBack;

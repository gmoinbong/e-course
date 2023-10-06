import Image from 'next/image';
import st from './CourseCard.module.scss';
import { coursesData } from '../constants';

interface CourseCardProps extends coursesData { }

export const CourseCard = ({ company, image, title }: CourseCardProps) => (
  <div className="bg-white rounded-lg p-4 pl-0 w-[400px] h-[100px] flex items-center">
    <div className="flex-shrink-0">
      <Image
        src={image}
        alt="Logo"
        width={50}
        height={50}
      />
    </div>
    <div className="ml-4">
      <div className="text-xl font-semibold">{title}</div>
      <div className="text-gray-500">{company}</div>
    </div>
    <div className="ml-auto">
      <button className={`text-blue-500 ${st.arrow}`}>→</button>
    </div>
  </div>
);
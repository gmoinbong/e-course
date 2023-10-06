import { StaticImageData } from 'next/image';

import img1 from '@media/course-img1.png'
import img2 from '@media/course-img2.png'
import img3 from '@media/course-img3.png'

export interface coursesData {
    image: StaticImageData;
    title: string;
    company: string;
}

export const coursesData: coursesData[] = [
    {
        image: img1,
        title: "UI/UX Designer",
        company: "UpRock"
    },
    {
        image: img2,
        title: "English",
        company: 'Italki'
    },
    {
        image: img3,
        title: "Soft Skills",
        company: "GO IT"
    }
];

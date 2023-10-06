import { StaticImageData } from 'next/image';

import img1 from '@media/school1.png'
import img2 from '@media/school2.png'
import img3 from '@media/school3.png'

export interface SchoolCardData {
    image: StaticImageData;
    title: string;
    location: string;
    studentsCount: number;
    price: number;
}

export const schoolData: SchoolCardData[] = [
    {
        image: img1,
        title: "Dwight Global",
        location: "291 Central Park West, New York, USA",
        studentsCount: 423,
        price: 7000
    },
    {
        image: img2,
        title: "Spark School",
        location: "Strada Samuil Micu 12a, Cluj-Napoca, Romania",
        studentsCount: 450,
        price: 7000
    },
    {
        image: img3,
        title: "Crimson Academy",
        location: "5 St Georges Bay Road, Parnell, Auckland, New Zealand 1052",
        studentsCount: 480,
        price: 16000
    }
];

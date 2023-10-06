import { FaClock } from 'react-icons/fa';
import { PiCertificateLight } from 'react-icons/pi';
import { RxBackpack } from 'react-icons/rx';

export const statsList = [
  { title: 'Hours spent', count: '90', icon: <FaClock />, type: 'time', color: "Blue" },
  { title: 'Certificates earned', count: '4', icon: <PiCertificateLight />, type: 'certificates', color: "Green" },
  { title: 'Courses enrolled', count: '16', icon: <RxBackpack />, type: 'courses', color: "Red" },
];

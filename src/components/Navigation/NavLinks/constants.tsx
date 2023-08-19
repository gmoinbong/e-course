import { AiOutlineHome, AiOutlineWallet, AiOutlineMessage, AiOutlineSetting } from 'react-icons/ai';
import { RiCalendarEventLine } from 'react-icons/ri';
import { MdOutlineSpaceDashboard } from 'react-icons/md'

type IconType = React.ReactElement;

export interface NavLink {
  title: string;
  icon: IconType;
}

export const navLinksList: NavLink[] = [
  { title: 'Home', icon: <AiOutlineHome /> },
  { title: 'Dashboard', icon: <MdOutlineSpaceDashboard /> },
  { title: 'Messages', icon: <AiOutlineMessage /> },
  { title: 'Schedule', icon: <RiCalendarEventLine /> },
  { title: 'Wallet', icon: <AiOutlineWallet /> },
  { title: 'Settings', icon: <AiOutlineSetting /> },
];

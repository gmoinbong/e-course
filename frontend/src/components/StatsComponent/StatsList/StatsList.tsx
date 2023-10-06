import st from './StatsList.module.scss';
import { statsList } from './constants';
import { MdKeyboardArrowRight } from 'react-icons/md';

interface StatsListProps { }

export const StatsList = ({ }: StatsListProps) => (
  <ul className={st.statsList}>
    {statsList.map((stat, index) => (
      <li key={index} className={`${st.statsItem} ${st["hover" + stat.color]} ${st.test}`}>
        <div className={st.statContainer}>
          <div className={`${st.icon} ${st[stat.type]}`}>{stat.icon}</div>
          <p className={`${st.count} ${st["count" + stat.color]}`}>{stat.count}</p>
        </div>
        <div className={st.titleContainer}>
          <p className={st.title}>{stat.title}</p>
          <span className={st.arrowIcon}>
            <MdKeyboardArrowRight className='w-6' />
          </span>
        </div>
      </li>
    ))}
  </ul>
);

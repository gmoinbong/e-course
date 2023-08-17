import st from './StatsList.module.scss';
import { statsList } from './constants';
import { FaArrowRight } from 'react-icons/fa';

interface StatsListProps { }

export const StatsList = ({ }: StatsListProps) => (
  <ul className={st.statsList}>
    {statsList.map((stat, index) => (
      <li key={index} className={st.statsItem}>
        <div className={st.statContainer}>
          <div className={`${st.icon} ${st[stat.type]}`}>{stat.icon}</div>
          <p className={`${st.count} ${st[stat.color]}`}>{stat.count}</p>
        </div>
        <div className={st.titleContainer}>
          <p className={st.title}>{stat.title}</p>
          <span className={st.arrowIcon}>
            <FaArrowRight />
          </span>
        </div>
      </li>
    ))}
  </ul>
);

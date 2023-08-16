import st from './StatsList.module.scss';
import { statsList } from './constants';

interface StatsListProps { }

export const StatsList = ({ }: StatsListProps) => (
  <ul className={st.statsList}>
    {statsList.map((stat, index) => (
      <li key={index} className={st.statsItem}>
        <span className={`${st.icon} ${st[stat.type]}`}>
          {stat.icon}
        </span>
        <div className={st.statInfo}>
          <p className={st.count}>{stat.count}</p>
        </div>
        <p className={st.title}>{stat.title}</p>
      </li>
    ))}
  </ul>
);

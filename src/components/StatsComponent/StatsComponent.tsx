import st from './StatsComponent.module.scss';
import { StatsList } from './StatsList';

interface StatsComponentProps { }

export const StatsComponent = ({ }: StatsComponentProps) => (
  <main className={st.statsComponent} >
    <h4 className={st.heading}>Your stats</h4>
    <StatsList />
  </main>
);

export default StatsComponent;

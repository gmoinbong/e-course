import st from './Dashboard.module.scss';

interface DashboardProps { }

export const Dashboard = ({ }: DashboardProps) => (
  <div className={st.dashboard} >
    Dashboard Component
  </div>
);
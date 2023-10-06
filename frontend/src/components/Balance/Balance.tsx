import React from 'react';
import { AiOutlineDollar } from 'react-icons/ai';
import st from './Balance.module.scss';

interface BalanceProps {
  balance: number;
}

const Balance = ({ balance }: BalanceProps) => (
  <div className={st.balance}>
    <div className={st.icon}>
      <AiOutlineDollar />
    </div>
    <p className={st.label}>Balance</p>
    <p className={st.value}>${balance}</p>
  </div>
);

export default Balance;

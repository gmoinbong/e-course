import React from 'react';
import st from './Select.module.scss';

const options = ["Udemy", "Mate Academy"]

const Select = () => (
  <select id="Courses" className={st.select} required>
    <option selected disabled >Courses</option>
    {options.map((option, index) => (
      <option key={index} value={option}>
        {option}
      </option>
    ))}
  </select>
);

export default Select;

import React from 'react';
import styles from './Results.scss';
import { ResultsProps } from './Results.ts';

const Results: React.FC<ResultsProps> = ({ title }) => {
  return (
    <div className={styles.container}>
      <h1>Results Screen</h1>
    </div>
  );
};

export default Results;
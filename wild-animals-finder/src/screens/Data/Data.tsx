import React from 'react';
import styles from './Data.scss';
import { DataProps } from './Data.ts';

const Data: React.FC<DataProps> = ({ title }) => {
  return (
    <div className={styles.container}>
      <h1>Data Screen</h1>
    </div>
  );
};

export default Data;

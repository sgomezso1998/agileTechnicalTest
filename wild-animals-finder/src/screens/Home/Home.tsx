import React from 'react';
import styles from './Home.scss';
import { HomeProps } from './Home.ts';

const Home: React.FC<HomeProps> = ({ title }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <p>This is the Home screen of the app.</p>
    </div>
  );
};

export default Home;
import React from 'react';
import './Home.scss';
import { HomeProps } from './Home.ts';
import AppBar from '../../components/AppBar/AppBar.tsx';

const Home: React.FC<HomeProps> = ({ title }) => {
  return (
    <div className="container">
      <div className="container__header">
        <AppBar title="Agile Content" subtitle="Frontend Test" position={0}></AppBar>
      </div>
      <p className="container__title">{title}</p>
      <div className="container__footer">
        <AppBar title="Agile Content" subtitle="Frontend Test" position={1}></AppBar>
      </div>
    </div>
  );
};

export default Home;
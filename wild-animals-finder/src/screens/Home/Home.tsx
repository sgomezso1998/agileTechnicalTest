import React from 'react';
import './Home.scss';
import { HomeProps } from './Home.ts';
import AppBar from '../../components/AppBar/AppBar.tsx';
import SearchBar from '../../components/SearchBar/SearchBar.tsx';
import logo from '../../resources/images/google.png';

const Home: React.FC<HomeProps> = ({ title }) => {
  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
  };

  return (
    <div className="container">
      <div className="container__header">
        <AppBar title="Agile Content" subtitle="Frontend Test" position={0}></AppBar>
      </div>
      <div className="container__content">
        <img className='container__content__logo' src={logo} alt="Google"/>
        <SearchBar placeHolder='Buscar en Google o escribir una URL' onSearch={handleSearch}></SearchBar>
      </div>
      <div className="container__footer">
        <AppBar subtitle="&copy; Google 2021" subtitle2='version 1.0.1' position={1}></AppBar>
      </div>
    </div>
  );
};

export default Home;
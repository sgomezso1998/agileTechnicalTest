import React from 'react';
import './Home.scss';
import { HomeProps } from './Home.ts';
import AppBar from '../../components/AppBar/AppBar.tsx';
import SearchBar from '../../components/SearchBar/SearchBar.tsx';
import logo from '../../resources/images/google.png';
import useNavigation from '../../Navigation.tsx';
import routesPath from '../../Router.ts';

const Home: React.FC<HomeProps> = ({title}) => {

  const { navigateTo } = useNavigation();
  
  const handleSearch = (query: string) => {
    navigateTo(routesPath.results, { search: query });
  };

  return (
    <div className="home-container">
      <div className="home-container__header">
        <AppBar title="Agile Content" subtitle="Frontend Test" position={0}></AppBar>
      </div>
      <div className="home-container__content">
        <img className='home-container__content__logo' src={logo} alt="Google"/>
        <SearchBar placeHolder='Buscar en Google o escribir una URL' onSearch={handleSearch} button={true}></SearchBar>
      </div>
      <div className="home-container__footer">
        <AppBar subtitle="&copy; Google 2021" subtitle2='version 1.0.1' position={1}></AppBar>
      </div>
    </div>
  );
};

export default Home;
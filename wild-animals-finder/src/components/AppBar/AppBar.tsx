import React from 'react';
import './AppBar.scss';
import { AppBarProps } from './AppBar.ts';
import { ReactComponent as Products } from '../../resources/images/products.svg';
import profile from '../../resources/images/profile.webp';

const AppBar: React.FC<AppBarProps> = ({ title, subtitle, position }) => {

  const isHeader = position === 0;
  return (
    <div className={`app-bar ${isHeader ? 'app-bar--header' : 'app-bar--footer'}`}>
      <div className='app-bar__left'>
        <p className='app-bar__title'>{title}</p>
        <p>{subtitle}</p>
      </div>
      <div className='app-bar__right'>
        <Products width={30} height={30} fill='grey'></Products>
        <img src={profile} alt="Profile" width={60} height={36}/>
      </div>
    </div>
  );
};

export default AppBar;
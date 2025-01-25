import React from 'react';
import './AppBar.scss';
import { AppBarProps } from './AppBar.ts';
import { ReactComponent as Products } from '../../resources/images/products.svg';
import profile from '../../resources/images/profile.webp';
import SearchBar from '../SearchBar/SearchBar.tsx';
import logo from '../../resources/images/google.png';

const AppBar: React.FC<AppBarProps> = ({ title, subtitle, subtitle2, position, searchQuery, onSearch }) => {
  const isHeader = position === 0;
  const topSearchBarHeight = 0.75;

  const handleSearch = (query: string) => {
    //console.log('AppBar:', query);
    // navigateTo(routesPath.results, { search: query });
  };

  const appBarClass = `
    app-bar 
    ${isHeader ? 'app-bar--header' : 'app-bar--footer'} 
    ${isHeader && searchQuery ? 'app-bar--header--with-search' : ''}
  `.trim();

  const appBarRightClass = `
    app-bar__right 
    ${!subtitle2 && !title ? 'app-bar__right--hidden' : ''}
  `.trim();

  const appBarLeftClass = `
    app-bar__left 
    ${title ? 'app-bar__left--with-title' : ''}
  `.trim();

  return (
    <div className={appBarClass}>
      <div className={appBarLeftClass}>
        {!searchQuery ? (
          <>
            <p className="app-bar__title">{title}</p>
            <p>{subtitle}</p>
          </>
        ) : (
          <div className="app-bar__left__search">
            <img className="app-bar__left__search__logo" src={logo} alt="Google" />
            <SearchBar onSearch={onSearch} height={topSearchBarHeight} button={false} searchText={searchQuery}/>
          </div>
        )}
      </div>

      <div className={appBarRightClass}>
        {subtitle2 ? (
          <p>{subtitle2}</p>
        ) : (
          <>
            <Products width={30} height={30} fill="var(--secundary-grey)" />
            <img src={profile} alt="Profile" width={60} height={36} />
          </>
        )}
      </div>
    </div>
  );
};

export default AppBar;

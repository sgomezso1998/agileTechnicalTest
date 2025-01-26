import React from 'react';
import './SearchResult.scss';
import { SearchResultProps } from './SearchResult.ts';

const SearchResult: React.FC<SearchResultProps> = ({ item, onClick }) => {

  const handleClick = () => {
    onClick(item?.id);
  };

  return (
    <div className="item-container" data-testid="search">
      {item ? (
        <>
          <div className='item-container__url'>{item.url}</div>
          <div className='item-container__title' onClick={handleClick} tabIndex={0}>{item.title}</div>
          <div className='item-container__description'>{item.description}</div>
        </>
      ) : (
        <>
          <div className='item-container__url--skeleton' data-testid="item-skeleton-url"></div>
          <div className='item-container__title--skeleton' data-testid="item-skeleton-title"></div>
          <div className='item-container__description--skeleton' data-testid="item-skeleton-description"></div>
        </>
      )}
    </div>
  );
};

export default SearchResult;

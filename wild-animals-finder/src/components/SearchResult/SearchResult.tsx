import React from 'react';
import './SearchResult.scss';
import { SearchResultProps } from './SearchResult.ts';

const SearchResult: React.FC<SearchResultProps> = ({ item, onClick }) => {

  const handleClick = () => {
    onClick(item?.id);
  };

  return (
    <div className="item-container">
      {item ? (
        <>
          <div className='item-container__url'>{item.url}</div>
          <div className='item-container__title' onClick={handleClick} tabIndex={0}>{item.title}</div>
          <div className='item-container__description'>{item.description}</div>
        </>
      ) : (
        <>
          <div className='item-container__url--skeleton'></div>
          <div className='item-container__title--skeleton'></div>
          <div className='item-container__description--skeleton'></div>
        </>
      )}
    </div>
  );
};

export default SearchResult;

import React from 'react';
import './SearchResult.scss';
import { SearchResultProps } from './SearchResult.ts';

const SearchResult: React.FC<SearchResultProps> = ({ item }) => {
  return (
    <div className="item-container">
      {item ? (
        <>
          <p className='item-container__url'>{item.url}</p>
          <p className='item-container__title'>{item.title}</p>
          <p className='item-container__description'>{item.description}</p>
        </>
      ) : (
        <>
          <p className='item-container__url--skeleton'></p>
          <p className='item-container__title--skeleton'></p>
          <p className='item-container__description--skeleton'></p>
        </>
      )}
    </div>
  );
};

export default SearchResult;

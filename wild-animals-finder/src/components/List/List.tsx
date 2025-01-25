import React, { useState } from 'react';
import './List.scss';
import { ListProps } from './List.ts';
import SearchResult from '../SearchResult/SearchResult.tsx';

const List: React.FC<ListProps> = ({ items, loading, mockItems = 5 }) => {

  return (
    <div className="list-container">
      {loading ?
        Array.from({ length: mockItems }).map((_, index) => (
          <SearchResult key={index}></SearchResult>
        ))
        :
        items && items.map((item, index) => (
          <SearchResult key={index} item={item}></SearchResult>
        ))
      }
    </div>
  );
};

export default List;

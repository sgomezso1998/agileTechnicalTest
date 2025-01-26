import React from 'react';
import './List.scss';
import { ListProps } from './List.ts';
import SearchResult from '../SearchResult/SearchResult.tsx';

const List: React.FC<ListProps> = ({ items, loading, mockItems = 15, onClick }) => {

  return (
    <div className="list-container">
      {loading ?
        Array.from({ length: mockItems }).map((_, index) => (
          <SearchResult key={index} onClick={onClick}></SearchResult>
        ))
        :
        items && items.map((item, index) => (
          <SearchResult key={index} item={item} onClick={onClick}></SearchResult>
        ))
      }
    </div>
  );
};

export default List;

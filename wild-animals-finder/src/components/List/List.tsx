import React from 'react';
import './List.scss';
import { ListProps } from './List.ts';
import SearchResult from '../SearchResult/SearchResult.tsx';
import Empty from '../Empty/Empty.tsx';

const List: React.FC<ListProps> = ({ items, loading, mockItems = 15, onClick, searchQuery }) => {

  return (
    <div className="list-container">
      {loading ?
        Array.from({ length: mockItems }).map((_, index) => (
          <SearchResult key={index} onClick={onClick}></SearchResult>
        ))
        :
        items.length > 0 ? 
          (items.map((item, index) => (
            <SearchResult key={index} item={item} onClick={onClick}></SearchResult>
          )))
          :
          (<div className='list-container__empty'>
            <Empty searchQuery={searchQuery}></Empty>
          </div>)
      }
    </div>
  );
};

export default List;

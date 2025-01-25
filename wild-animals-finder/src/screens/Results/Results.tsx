import React, { useState } from 'react';
import './Results.scss';
import { useSearchParams } from 'react-router-dom';
import AppBar from '../../components/AppBar/AppBar.tsx';
import useNavigation from '../../Navigation.tsx';
import routesPath from '../../Router.ts';
import { SearchResultItem } from '../../components/SearchResult/SearchResult.ts';
import List from '../../components/List/List.tsx';

const Results: React.FC = () => {

  const [loading, setLoading] = useState<boolean>(true);
  const [list, setList] = useState<SearchResultItem[]>([]);

  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search'); 

  const { navigateTo } = useNavigation();

  const mockItems = 5;

  const handleSearch = (query: string) => {
    console.log('Results:', query);
    navigateTo(routesPath.results, { search: query });
  };

  const listItems = [
    'Texto de prueba 1',
    'Texto de prueba 2',
    'Texto de prueba 3',
    'Texto de prueba 4',
    'Texto de prueba 5',
    'Texto de prueba 1',
    'Texto de prueba 2',
    'Texto de prueba 3',
    'Texto de prueba 4',
    'Texto de prueba 5',
    'Texto de prueba 1',
    'Texto de prueba 2',
    'Texto de prueba 3',
    'Texto de prueba 4',
    'Texto de prueba 5',
    'Texto de prueba 1',
    'Texto de prueba 2',
    'Texto de prueba 3',
    'Texto de prueba 4',
    'Texto de prueba 5',
    'Texto de prueba 1',
    'Texto de prueba 2',
    'Texto de prueba 3',
    'Texto de prueba 4',
    'Texto de prueba 5',
  ];

  return (
    <div className="results-container">
      <div className="results-container__header">
        <AppBar position={0} searchQuery={searchQuery} onSearch={handleSearch}></AppBar>
      </div>
      <div className='results-container__list'>
        <List items={list} loading={loading} mockItems={mockItems}></List>
      </div>
      <div className="results-container__footer">
        <AppBar subtitle="&copy; Google 2021" subtitle2='version 1.0.1' position={1}></AppBar>
      </div>
    </div>
  );
};

export default Results;
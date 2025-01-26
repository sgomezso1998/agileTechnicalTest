import React, { useEffect, useState } from 'react';
import './Results.scss';
import { useSearchParams } from 'react-router-dom';
import AppBar from '../../components/AppBar/AppBar.tsx';
import useNavigation from '../../Navigation.tsx';
import routesPath from '../../Router.ts';
import { SearchResultItem } from '../../components/SearchResult/SearchResult.ts';
import List from '../../components/List/List.tsx';
import { fetchData } from '../../data/Faker.js';
import Detail from '../../components/Detail/Detail.tsx';

const Results: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [list, setList] = useState<SearchResultItem[]>([]);
  const [item, setItem] = useState<SearchResultItem>();

  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search'); 

  const { navigateTo } = useNavigation();

  const mockItems = 15;

  const handleSearch = (query: string) => {
    console.log('Results:', query);
    navigateTo(routesPath.results, { search: query });
  };

  const showDetails = (id: string) => {
    setItem(getItem(id));
  };

  function getItem(id: string) {
    return list.find((item) => {
      return item.id == id;
    });
  }

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await fetchData();
        setList(result as SearchResultItem[]);
        setLoading(false);
      } catch (err) {
        console.error('Error al cargar los datos:', err);
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <div className="results-container">
      <div className="results-container__header">
        <AppBar position={0} searchQuery={searchQuery} onSearch={handleSearch}></AppBar>
      </div>
      <div className="results-container__list">
        <List items={list} loading={loading} mockItems={mockItems} onClick={showDetails}></List>
        <Detail url={item?.url} title={item?.title} img={item?.image} description={item?.description}></Detail>
      </div>
      <div className="results-container__footer">
        <AppBar subtitle="&copy; Google 2021" subtitle2="version 1.0.1" position={1}></AppBar>
      </div>
    </div>
  );
};

export default Results;

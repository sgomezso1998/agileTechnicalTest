import React, { useState } from 'react';
import './SearchBar.scss';
import { SearchBarProps } from './SearchBar.ts';
import { ReactComponent as SearchIcon } from '../../resources/images/search.svg';
import { ReactComponent as CrossIcon } from '../../resources/images/cross.svg';

const SearchBar: React.FC<SearchBarProps> = ({ placeHolder = '', onSearch, height, button, searchText }) => {
  const [inputText, setInputText] = useState<string>(searchText ?? '');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleSearch = () => {
    if (inputText.trim() && onSearch) {
      onSearch(inputText);
    }
  };

  const clearInput = () => {
    setInputText('');
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const defaultHeight = 1.25;
  const calculatedHeight = `${height || defaultHeight}em`;

  return (
    <div className="search-bar">
      <div className="search-bar__input-container" style={{ height: calculatedHeight }}>
        <SearchIcon width={20} height={20} fill='var(--secundary-grey)'/>
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder={placeHolder}
          className="search-bar__input"
        />
        {inputText && (
          <button
            type="button"
            className="search-bar__clear-button"
            onClick={clearInput}
          >
            <CrossIcon width={20} height={20} fill='var(--secundary-grey)'/>
          </button>
        )}
      </div>
      {button && <button
        type="button"
        className="search-bar__button"
        onClick={handleSearch}
      >
        Buscar
      </button>}
    </div>
  );
};

export default SearchBar;

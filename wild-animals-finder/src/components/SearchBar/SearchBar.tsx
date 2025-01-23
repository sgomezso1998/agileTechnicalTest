import React, { useState } from 'react';
import './SearchBar.scss';
import { SearchBarProps } from './SearchBar.ts';
import { ReactComponent as SearchIcon } from '../../resources/images/search.svg';
import { ReactComponent as CrossIcon } from '../../resources/images/cross.svg';

const SearchBar: React.FC<SearchBarProps> = ({ placeHolder = '', onSearch, width }) => {
  const [inputText, setInputText] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleSearch = () => {
    if (inputText.trim()) {
      onSearch(inputText);
    }
  };

  const clearInput = () => {
    setInputText('');
  };

  const defaultWidth = 35;
  const calculatedWidth = `${width || defaultWidth}em`;

  return (
    <div className="search-bar" style={{ width: calculatedWidth }}>
      <div className="search-bar__input-container">
        <SearchIcon width={20} height={20} fill='var(--secundary-grey)'/>
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
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
      <button
        type="button"
        className="search-bar__button"
        onClick={handleSearch}
      >
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;

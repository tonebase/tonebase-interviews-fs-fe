import React, { useEffect, useRef, useState } from 'react';
import ButtonsRow from '../ButtonsRow';
import SearchOptions from '../SearchOptions';
import Svg from '../Svg';
import {
  getPropositionsFromLocalStorage,
  saveUniqueSearchToLocalStorage,
} from '../utils';
import { imgX, imgVoiceSearch, imgSearch } from '../images';
import { GoogleStore } from '../../../stores';
import { view } from 'react-easy-state';

import styles from './styles.scss';

const MainInput = () => {
  const inputRef = useRef(null);
  const { inputValue, setInputValue } = GoogleStore;

  const [propositions, setPropositions] = useState([]);
  const [propositionsCached, setPropositionsCached] = useState([]);

  const focusOnInput = () => {
    inputRef.current.focus();
  };

  const handleInputBlur = () => {
    setPropositions([]);
  };

  const handleInputChange = async (e) => {
    const { value } = e.target;
    setInputValue(value);

    let cached = [];
    if (value !== '') {
      cached = propositionsCached.filter((e) => e.includes(value)).slice(0, 3);
    } else {
      cached = propositionsCached.slice(0, 9);
    }

    setPropositions(cached);
  };

  const handleInputClick = () => {
    if (!inputValue) setPropositions(propositionsCached.slice(0, 9));
  };

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    saveUniqueSearchToLocalStorage(inputValue);

    window.location.search = `${inputValue}`;
  };

  const handleVoiceSearch = () => {
    alert('voice => search');
  };

  const handleXMouseDown = (e) => {
    handleInputChange({ target: { value: '' } });
    e.preventDefault();
  };

  const handleSearchClose = () => {
    setPropositions([]);
  };

  useEffect(() => {
    setPropositionsCached(getPropositionsFromLocalStorage());
    focusOnInput();
  }, []);

  return (
    <div>
      <div className={`wrapper${!propositions.length ? '' : ' shadow'}`}>
        <div className="searchLine">
          <Svg onClick={focusOnInput} logo={imgSearch} small />
          <form onSubmit={handleSubmitSearch} className="form">
            <input
              className="input"
              ref={inputRef}
              value={inputValue}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              onClick={handleInputClick}
            />
          </form>
          {inputValue && (
            <Svg onMouseDown={handleXMouseDown} logo={imgX} borderRight />
          )}

          <Svg onClick={handleVoiceSearch} logo={imgVoiceSearch} />
        </div>

        {!!propositions.length && (
          <SearchOptions
            propositionsCached={propositions}
            onClose={handleSearchClose}
          />
        )}
      </div>
      {!propositions.length && <ButtonsRow />}
      <style jsx>{styles}</style>
    </div>
  );
};

export default view(MainInput);

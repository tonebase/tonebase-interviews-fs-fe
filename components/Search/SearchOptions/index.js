import React, { useEffect } from 'react';
import ButtonsRow from '../ButtonsRow';
import styles from './styles';
import SearchOption from './SearchOption';

const SearchOptions = ({ propositionsCached = [], onClose = () => {} }) => {
  const escListener = (e) => {
    if (e.key === 'Escape') onClose();
  };

  useEffect(() => {
    window.addEventListener('keydown', escListener);
    return () => {
      window.removeEventListener('keydown', escListener);
    };
  }, []);
  return (
    <>
      <ul style={styles.ul}>
        {propositionsCached[0] &&
          propositionsCached.map((e) => <SearchOption key={e} name={e} />)}
      </ul>
      <ButtonsRow />
    </>
  );
};

export default SearchOptions;

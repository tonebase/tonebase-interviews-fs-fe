import React from 'react';
import styles from './styles';
import { saveUniqueSearchToLocalStorage } from '../utils';

export default ({ name = '' }) => {
  const handleClick = () => {
    saveUniqueSearchToLocalStorage(name);
    window.location.search = `${name}`;
  };

  return (
    <li onMouseDown={handleClick} style={styles.li}>
      <div style={styles.img} />
      {name}
    </li>
  );
};

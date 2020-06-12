import React from 'react';
import styles from './styles';

export default ({ name = '' }) => {
  const handleClick = () => (window.location.search = `${name}`);

  return (
    <li onMouseDown={handleClick} style={styles.li}>
      <div style={styles.img} />
      {name}
    </li>
  );
};

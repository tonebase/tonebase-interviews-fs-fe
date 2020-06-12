import React from 'react';
import styles from './styles';
import { GoogleStore } from '../../../stores';

export default () => (
  <div style={styles.ButtonsRow}>
    <button
      style={styles.button}
      onMouseDown={() => {
        window.location.search = `${GoogleStore.inputValue}`;
      }}
    >
      Google Search
    </button>
    <button
      style={styles.button}
      onMouseDown={() => {
        window.location.search = `s=I'm Feeling Lucky`;
      }}
    >
      I'm Feeling Lucky
    </button>
  </div>
);

import React from 'react';
import NextLink from 'next/link';
import styles from './styles';

export default () => {
  return (
    <header style={styles.header}>
      <NextLink href="/">
        <a style={styles.link}>Gmail</a>
      </NextLink>
      <NextLink href="/">
        <a style={styles.link}>Images</a>
      </NextLink>
      <div style={styles.options}></div>
      <div style={styles.avatar} />
    </header>
  );
};

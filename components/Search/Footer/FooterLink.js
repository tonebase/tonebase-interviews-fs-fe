import React from 'react';
import NextLink from 'next/link';
import styles from './styles';

export default ({ href = '', isNewTab = false, label = '' }) => {
  const isNewTabProp = isNewTab
    ? {
        target: '_blank',
        rel: 'noreferrer noopener',
      }
    : {};
  return (
    <NextLink href={href}>
      <a style={styles.link} {...isNewTabProp}>
        {label}
      </a>
    </NextLink>
  );
};

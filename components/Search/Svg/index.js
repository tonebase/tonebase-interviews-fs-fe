import React from 'react';
import styles from './styles.scss';

export default ({
  onClick = () => {},
  onMouseDown = () => {},
  logo = '',
  borderRight = false,
  small = false,
}) => {
  const classSmall = small ? ' small' : '';
  const classBorder = borderRight ? ' borderRight' : '';
  return (
    <div
      onClick={onClick}
      onMouseDown={onMouseDown}
      className={`img${classSmall}${classBorder}`}
    >
      <svg
        focusable="false"
        viewBox="0 0 24 24"
        className="svg"
        dangerouslySetInnerHTML={{ __html: logo }}
      />
      <style jsx>{styles}</style>
    </div>
  );
};

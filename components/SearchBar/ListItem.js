import React from 'react';
import styles from './ListItem.scss';

const ListItem = ({ item, click }) => {
  const onClick = () => click(item);

  return (
    <li className="listItem" onClick={onClick}>
      {item}
      <style jsx>
        {styles}
      </style>
    </li>
  );
}

export default ListItem;
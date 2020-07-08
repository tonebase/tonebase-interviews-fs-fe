import React, { Fragment } from 'react';
import styles from './SearchButton.scss';

const SearchButton = ({type, buttonText, click}) => {

  return (
    <Fragment>
      <input className="search-button" type={type} value={buttonText} onClick={click}/>
      <style jsx>
        {styles}
      </style>
    </Fragment>
  )
}

export default SearchButton;
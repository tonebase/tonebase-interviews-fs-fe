import React, { Fragment } from 'react';
import styles from './index.scss';
// import styles from '../../lib/styleGuide/index.scss';
import _ from 'lodash';
export default function Search({ onHandleChange }) {

  const handleChange = (event) => {
    event.persist();
    const text = event.target.value;
    const debounce = _.debounce(() => {
      onHandleChange(text);
    }, 300);
    debounce();
  }

  return (
    <Fragment>
      <div className="searchContainer" >
        <div className="searchBorder">
          <div className="searchBarContainer">
            <input
              className="searchInput"
              autoComplete="on"
              placeholder="Search"
              required="required"
              type="text"
              onChange={handleChange} />
          </div>
        </div>
      </div>
      <div className="suggestions">

      </div>
      <style jsx>
        {styles}
      </style>
    </Fragment>
  )
}
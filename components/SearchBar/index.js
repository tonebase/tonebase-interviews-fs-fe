import React, { Fragment } from 'react';
import styles from './index.scss';
import _ from 'lodash';
import ListItem from './ListItem';


export default function Search({ onHandleChange, search, searchSuggestions }) {

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

      {searchSuggestions.length > 0 &&
        <div className="listContainer">

          {searchSuggestions.map((item, i) =>

            <ul className="list" key={i.toString()}>
              <ListItem
                click={search}
                item={item}
              />
            </ul>
          )}
        </div>
      }

      <style jsx>
        {styles}
      </style>
    </Fragment>
  )
}
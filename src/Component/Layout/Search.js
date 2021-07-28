import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Search.module.css";

function SearchBar() {
  //({placeholder, data})
  // const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    // const newFilter = props.data.filter((value) => {
    //   return value.title.toLowerCase().includes(searchWord.toLowerCase());
    // });

    // if (searchWord === "") {
    //   setFilteredData([]);
    // } else {
    //   setFilteredData(newFilter);
    // }
  };

  const clearInput = () => {
    // setFilteredData([]);
    setWordEntered("");
  };

  const searchIcon = (
    <FontAwesomeIcon className={classes.searchIcon} icon="search" />
  );

  const closeIcon = (
    <FontAwesomeIcon
      className={classes.searchIcon}
      icon="times"
      id="clearBtn"
      onClick={clearInput}
    />
  );

  return (
    <div>
      <div className={classes.searches}>
        <input
          type="text"
          placeholder="Search.."
          value={wordEntered}
          onChange={handleFilter}
        />
        {wordEntered.length === 0 ? searchIcon : closeIcon}
      </div>
      {/* {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a
                className="dataItem"
                href={value.link}
                key={key}
                target="_blank"
                rel="noreferrer"
              >
                <p>T:{value.title} </p>
                <p>A:{value.author} </p>
              </a>
            );
          })}
        </div>
      )} */}
    </div>
  );
}

export default SearchBar;

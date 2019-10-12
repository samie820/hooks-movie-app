import React, { useState } from "react";

const Search = ({ search }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = e => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const callSearchFunction = e => {
    e.preventDefault();
    search(searchValue);
    resetInputField();
  };

  return (
    <form className="o-app__searchForm">
      <input
        className="o-app__searchInput"
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
      />

      <input
        className="o-app__searchButton"
        onClick={callSearchFunction}
        type="submit"
        value="SEARCH"
      />
    </form>
  );
};

export default Search;

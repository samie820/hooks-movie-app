import React from "react";
import { SearchContext } from './App';

const Header = () => {
  const {state, reload} = React.useContext(SearchContext);
  return (
    <header className="App-header" onClick={reload}>
      <h2>{state.text}</h2>
    </header>
  );
};

export default Header;

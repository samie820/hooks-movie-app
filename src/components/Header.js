import React from "react";

const Header = props => {
  return (
    <header className="o-header">
      <h2 className="o-header__title">{props.text}</h2>
    </header>
  );
};

export default Header;

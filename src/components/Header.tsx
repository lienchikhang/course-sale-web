import React from "react";
import "../css/header.css";
import headerConstants from "../constants/header.constants";
import SearchIcon from "@mui/icons-material/Search";
import MenuPart from "./MenuPart";

const Header: React.FC = () => {
  return (
    <section className="header__wrapper">
      <header className="header">
        <div className="header__left">
          <div className="header__menu">
            <MenuPart />
          </div>
          <div className="header__logo">
            <img
              src={headerConstants.logo.url}
              alt={headerConstants.logo.alt}
            />
            <h1 className="header__title">{headerConstants.title}</h1>
          </div>
          <div className="header__search">
            <SearchIcon sx={{ color: "#7c7c7c" }} />
            <input
              type="text"
              placeholder={headerConstants.input.placeHolder}
            />
          </div>
        </div>
        <div className="header__right">
          <div className="header__smallSearch">
            <SearchIcon sx={{ color: "#7c7c7c" }} />
          </div>
          <div className="header__actions">
            {headerConstants.actions.map((action, index) => {
              return <button key={index}>{action}</button>;
            })}
          </div>
        </div>
      </header>
    </section>
  );
};

export default Header;

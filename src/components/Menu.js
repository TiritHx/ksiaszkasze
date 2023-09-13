import React from "react";
import "./Menu.css";

function Menu() {
  return (
    <div>
      <div className="menu">
        <div className="menu-item">Profil</div>
        <div className="menu-item">Strona główna</div>
        <div className="menu-item">Zaloguj</div>
        <div className="menu-item">Stwórz konto</div>
        <div className="menu-item">
          <input className="search" placeholder="Wyszukaj"/>
          <button className="search-button">Szukaj</button>
          </div>
      </div>
    </div>
  );
}

export default Menu;
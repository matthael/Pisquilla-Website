import React from "react";

import { SubHeading, MenuItem } from "../../components";
import { data } from "../../constants";
import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu que combina com seu paladar" />
      <h1 className="headtext__cormorant"> Especial do Dia</h1>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className="app__specialMenu-menu_heading"> Jantinhas e Espetos </p>
        <div className="app__specialMenu-menu_items">
          {data.wines.map((wine, index) => (
            <MenuItem
              key={wine.title + index}
              title={wine.title}
              price={wine.price}
              tags={wine.tags}
            />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_cocktails flex__center">
        <p className="app__specialMenu-menu_heading"> Bebidas </p>
        <div className="app__specialMenu-menu_items">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem
              key={cocktail.title + index}
              title={cocktail.title}
              price={cocktail.price}
              tags={cocktail.tags}
            />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: "15px" }}>
      <button type="button" className="custom__button" target="blank">
        <a href="https://jantinha-do-pisquilla.ola.click/products" target="blank"> Ver Mais </a>
      </button>
    </div>
  </div>
);

export default SpecialMenu;

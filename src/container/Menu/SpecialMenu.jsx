import React from "react";

import { SubHeading, MenuItem } from "../../components";
import { data } from "../../constants";
import "./SpecialMenu.css";
import { FaLeaf } from "react-icons/fa";

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu que combina com seu paladar" />
      <h1 className="headtext__cormorant"> Especial do Dia</h1>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className="app__specialMenu-menu_heading">
          Jantinhas e Espetos
          <div className="app__specialMenu-menu_heading-icon">
            <a href="#sustenText">
              <FaLeaf color="#6da130" size={18} />
            </a>
          </div>
        </p>
        <div className="app__specialMenu-menu_items">
          {data.wines.map((wine, index) => (
            <MenuItem
              key={wine.title + index}
              title={wine.title}
              price={wine.price}
              tags={wine.tags}
              image={wine.image}
            />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_cocktails flex__center">
        <p className="app__specialMenu-menu_heading">
          Bebidas
          <div className="app__specialMenu-menu_heading-icon">
            <a href="#sustenText">
              <FaLeaf color="#6da130" size={18} />
            </a>
          </div>
        </p>
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

    <div id="sustenText"></div>

    <div style={{ marginTop: "10px" }}>
      <button type="button" className="custom__button" target="blank">
        <a
          href="https://jantinha-do-pisquilla.ola.click/products"
          target="blank"
        >
          {" "}
          Ver Mais{" "}
        </a>
      </button>
    </div>

    <div className="app__specialMenu-sustenText" style={{ marginTop: "60px" }}>
      <p className="p__opensans">
        <FaLeaf color="#6da130" size={20} />
        Escolhemos fornecedores de carne sustentável, evitamos desperdício,
        informamos os clientes sobre escolhas conscientes em linha com o ODS-9.
      </p>
    </div>
  </div>
);

export default SpecialMenu;

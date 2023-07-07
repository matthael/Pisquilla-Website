import React, { useState, useEffect } from "react";

import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { SiIfood } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav id="app__navbar" className={scroll ? "scroll" : ""}>
      <div className="app__navbar-logo">
        <h1 className="app__navbar-logo-name">
          {" "}
          <a href="#home" style={{ color: "#FFF" }}>
            Pisquilla
          </a>{" "}
        </h1>
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p__opensans">
          <a href=" #about">Sobre</a>
        </li>
        <li className="p__opensans">
          <a href="#menu">Menu</a>
        </li>
        <li className="p__opensans">
          <a href="#tesm">Avaliações</a>
        </li>
        <li className="p__opensans">
          <a href="#gallery">Galeria</a>
        </li>
        <li className="p__opensans">
          <a href="#Find"> Encontre-nós</a>
        </li>
      </ul>
      <div className="app__navbar-social-links">
        <ul>
          <li>
            <a
              href="https://www.ifood.com.br/delivery/brasilia-df/jantinha-do-pisquilla-residencial-santos-dumont-santa-maria/a9554eef-a2bf-49aa-b2da-8184edb10dc0?utm_medium=share"
              target="blank"
            >
              <SiIfood />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/pisquilla_janta/" target="blank">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="https://api.whatsapp.com/send?phone=5561996346458&text=%F0%9F%91%8B%20Ol%C3%A1%2C%20venho%20de%20https%3A%2F%2Fjantinha-do-pisquilla.ola.click%2Fproducts%20%0AEu%20quero%20fazer%20o%20pr%C3%B3ximo%20pedido%3A%0A" target="blank">
              <FaWhatsapp />
            </a>
          </li>
        </ul>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans">
                <a href="#home">Home</a>
              </li>
              <li className="p__opensans">
                <a href=" #about">Sobre</a>
              </li>
              <li className="p__opensans">
                <a href="#menu">Menu</a>
              </li>
              <li className="p__opensans">
                <a href="#tesm">Avaliações</a>
              </li>
              <li className="p__opensans">
                <a href="#gallery">Galeria</a>
              </li>
              <li className="p__opensans">
                <a href="#Find"> Encontre-nós</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

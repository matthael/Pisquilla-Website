import React, { useState, useEffect } from "react";

import { FaFacebook, FaInstagram } from "react-icons/fa";
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
          <a href="#home">Pisquilla</a>{" "}
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
            <a href="" target="blank">
              <SiIfood />
            </a>
          </li>
          <li>
            <a href="" target="blank">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="" target="blank">
              <FaFacebook />
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
                <a href="#Cont">Contato</a>
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

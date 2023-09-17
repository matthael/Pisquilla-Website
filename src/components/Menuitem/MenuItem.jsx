import React from "react";
import "./MenuItem.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";
import Modal from "../Modal/Modal";

const MenuItem = ({ title, price, tags, image }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div className="app__menuitem">
      <div className="app__menuitem-head">
        <div className="app__menuitem-name">
          <p className="p__cormorant" style={{ color: "#DCCA87" }}>
            {title}
          </p>
        </div>

        <div className="app__menuitem-dash" />

        <div className="app__menuitem-price">
          <p className="p__cormorant">{price}</p>
        </div>
        <div className="app__menuitem-image">
          <BsThreeDotsVertical
            color="#fff"
            size={20}
            onClick={() => setIsModalVisible(true)}
          />
          {isModalVisible ? (
            <Modal onClose={() => setIsModalVisible(false)}>
              <img src={image} alt="Imagem da Tabela Nutricional do Alimento" />
            </Modal>
          ) : null}
        </div>
      </div>

      <div className="app__menuitem-sub">
        <p className="p__opensans" style={{ color: "#AAA" }}>
          {tags}
        </p>
      </div>
    </div>
  );
};

export default MenuItem;

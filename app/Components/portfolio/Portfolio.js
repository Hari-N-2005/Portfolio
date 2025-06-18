"use client";

import React, { useState } from "react";
import "./Portfolio.css";
import Menu from "./Menu";

const Portfolio = () => {
  const [Items, setItems] = useState(Menu);

  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    });
    setItems(updatedItems);
  };

  return (
    <section className="work container section" id="work">
      <h2 className="section__title">Projects</h2>

      <div className="work__container grid">
        {Items.map(({ id, Image, title, category, link, description }) => (
          <div className="work__card" key={id}>
            <div className="work__thumbnail">
              <img src={Image} alt={title} className="work__img" />
              <div className="work__mask"></div>
            </div>

            <span className="work__category">{category}</span>
            <h3 className="work__title">{title}</h3>
            <p className="work__description">{description}</p>

            <a href={link} className="work__button" target="_blank" rel="noopener noreferrer">
              View
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
import React, { useState, useEffect } from "react";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

import "../assets/styles/carousel.css";

const Cards = ({ features, cardStyle }) => {
  return (
    <section>
      {features.map((feature, i) => {
        return (
          <div className="card" id="card" style={cardStyle} key={i}>
            <img
              src={"https://challenge.agenciaego.tech" + feature.photo}
              alt=""
            />
            <p className="title">{feature.name}</p>
            <p className="desc">{feature.description}</p>
          </div>
        );
      })}
    </section>
  );
};

const Display = ({ features }) => {
  const [currentCard, setCurrentCard] = useState(0);
  const [position, setPosition] = useState(0);
  const [cardStyle, setCardStyle] = useState({
    transform: "translateX(0px)",
  });
  const [width, setWidth] = useState(0);

  useEffect(() => {
    let boxWidth = document.getElementById("card").clientWidth;

    setWidth(boxWidth);
  }, []);

  const handleClick = (type) => {
    let paddingRight = window.getComputedStyle(document.getElementById("card"))
      .paddingRight;
    paddingRight = JSON.parse(paddingRight.replace(/px/i, ""));

    const cardWidth = width;
    const cardNumber = features.length;
    let curCard = currentCard;
    let pos = position;

    if (type === "next" && curCard < cardNumber - 1) {
      curCard++;
      pos -= cardWidth + paddingRight;
    } else if (type === "prev" && curCard > 0) {
      curCard--;
      pos += cardWidth + paddingRight;
    }

    setCard(curCard, pos);
  };

  const setCard = (curCard, pos) => {
    setCurrentCard(curCard);
    setPosition(pos);
    setCardStyle({
      transform: `translateX(${pos}px)`,
    });
  };

  return (
    <div className="cards-slider">
      <div className="slider-btns">
        <ArrowBackIosIcon
          fontSize={"large"}
          className="slider-btn btn-l"
          onClick={() => handleClick("prev")}
        />
        <ArrowForwardIosIcon
          fontSize={"large"}
          className="slider-btn btn-r"
          onClick={() => handleClick("next")}
        />
      </div>

      <Cards features={features} cardStyle={cardStyle} />
    </div>
  );
};

export default Display;

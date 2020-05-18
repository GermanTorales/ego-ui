import React from "react";
import styled from "styled-components";

import FilterComponent from "../Filter/FilterComponent";
import buttonImage from "../../assets/images/buttonx3.png";

//CONTAINER GENERAL
const Container = styled.div`
  width: 85%;
  margin: 0 auto;

  @media (max-width: 500px) {
    width: 95%;
  }
`;

const Title = styled.h1`
  font-size: 50px;
  font-family: "Montserrat-Bold" !important;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.14;
  letter-spacing: -1px;
  color: #373737;
  margin-top: 80px;

  @media (max-width: 500px) {
    font-size: 35px;
    margin-top: 50px;
  }
`;

// CONTAINER DE TODOS LOS MODELOS
const ModelsContainer = styled.div`
  width: 100%;
  margin-top: 80px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

// CONTAINDER BOTON VER MAS
const Button = styled.button`
  display: none;
  border: none;
  outline: none;
  background-color: #fff;
  background-image: url(${(props) => props.image});
  width: 152px;
  height: 34px;
  margin: 0 auto;
  background-size: cover;
  object-fit: contain;
  transition: 0.3s;
`;

const ModelTitle = styled.h2`
  font-size: 28px;
  font-family: "Montserrat-SemiBold" !important;
  letter-spacing: -0.65px;
  text-align: center;
  color: #000000;
`;

// CONTAINER DE CADA MODELO
const Model = styled.div`
  width: 25%;
  height: 300px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1260px) {
    width: 33%;
  }

  @media (max-width: 970px) {
    width: 50%;
  }

  @media (max-width: 650px) {
    width: 100%;
  }

  &:hover {
    ${Button} {
      display: inline-block;
      transition: 0.3s;
      cursor: pointer;
    }

    ${ModelTitle} {
      color: #eb0a1e;
    }
  }
`;

const ModelInfo = styled.h3`
  font-family: "Montserrat-Regular" !important;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.28px;
  text-align: center;
  color: #191919;
`;

const ModelImage = styled.img`
  width: 268px;
  height: 132px;
  margin: 0 auto;
`;

export default ({
  models,
  onChangeOrder,
  onChangeFilter,
  onSubmitSingleModel,
}) => (
  <Container>
    <Title>Descubrí todos los modelos</Title>
    <FilterComponent
      onChangeOrder={onChangeOrder}
      onChangeFilter={onChangeFilter}
    />
    <ModelsContainer>
      {models.map((model, inx) => (
        <Model key={inx}>
          <ModelTitle>{model.name}</ModelTitle>
          <ModelInfo>
            {model.year} | {model.price}
          </ModelInfo>
          <ModelImage src={"http://challenge.agenciaego.tech" + model.photo} />
          <Button
            onClick={() => onSubmitSingleModel(model.id)}
            image={buttonImage}
          />
        </Model>
      ))}
    </ModelsContainer>
  </Container>
);

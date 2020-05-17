import React from "react";
import styled from "styled-components";

import Carousel from "../Carousel";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`;

//  HEADER STYLES

// HEADER CONTAINER GENERAL
const Header = styled.div`
  width: ${(props) => props.width};
  height: 450px;
  margin-top: 80px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;

  @media (min-width: 460px) {
    height: 500px;
  }

  @media (min-width: 830px) {
    height: 600px;
  }

  @media (min-width: 1100px) {
    width: 85%;
    margin: 80px auto;
    height: 400px;
    flex-direction: row;
  }
`;

//HEADER IMAGE CONTAINER
const HeaderImage = styled.div`
  width: 100%;
  @media (min-width: 620px) {
    width: 80%;
    margin: 0 auto;
  }
  @media (min-width: 1100px) {
    width: 50%;
    align-self: center;
  }
`;

// HEADER IMAGE
const Image = styled.img`
  width: 100%;
`;

// HEADER CONTENT CONTAINER
const HeaderInfo = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media (min-width: 460px) {
    width: 80%;
  }

  @media (min-width: 1100px) {
    width: 50%;
    padding-left: 100px;
  }
`;

// HEADER CONTENT TITLE SUP
const HeaderText = styled.h2`
  font-size: 20px;
  font-family: "Montserrat-SemiBold" !important;
  color: #373737;
`;

// HEADER CONTENT TITLE MAIN
const HeaderTitle = styled.h3`
  font-family: "Montserrat-SemiBold" !important;
  font-size: 25px;
  margin: 0;
  letter-spacing: -1px;
  color: #373737;

  @media (min-width: 900px) {
    font-size: 35px;
  }

  @media (min-width: 1100px) {
    font-size: 50px;
  }
`;

// HEADER CONTENT DESCRIPTION
const HeaderContent = styled.p`
  display: inline-block;
  font-size: 16px;
  font-family: "Montserrat-Regular" !important;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.1px;
  color: #373737;

  @media (min-width: 1100px) {
    font-size: 20px;
  }
`;

// HIGHLIGHT STYLES

// HIGHLIGHT IMAGENES CONTAINER
const HighLightImage = styled.div`
  width: 100%;
  height: 190px;
  position: relative;

  @media (min-width: 460px) {
    width: 90%;
    margin: 0 auto;
  }

  @media (min-width: 550px) {
    width: 80%;
  }

  @media (min-width: 620px) {
    height: 230px;
  }

  @media (min-width: 760px) {
    width: 60%;
  }

  @media (min-width: 890px) {
    width: 50%;
  }

  @media (min-width: 1100px) {
    height: 290px;
    position: absolute;
    z-index: 1;
  }
`;

//HIGHLIGHT IMAGENES
const HLImage = styled.img`
  width: 100%;
  height: 100%;
`;

//HIGHLIGHT TEXT CONTAINER
const HighLightContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 460px) {
    width: 90%;
    margin: 0 auto;
  }

  @media (min-width: 550px) {
    width: 80%;
  }

  @media (min-width: 760px) {
    width: 60%;
  }

  @media (min-width: 890px) {
    width: 50%;
  }

  @media (min-width: 1100px) {
    margin: 0;
    padding-left: 10%;
  }
`;

//HIGHLIGHT TITLE CONTAINER
const HighLightTitle = styled.div`
  width: 95%;
  letter-spacing: -0.4px;
  color: #373737;
  margin: 20px auto;

  @media (min-width: 1100px) {
    height: auto;
    margin: 20px 0;
  }
`;

//HIGHLIGHT TITLE
const HLTittle = styled.h4`
  font-size: 20px;
  font-family: "Montserrat-SemiBold" !important;
  color: #373737;
`;

//HIGHLIGHT DESCRIPTION CONTAINER
const HighLightText = styled.div`
  width: 95%;
  margin: 0 auto;

  @media (min-width: 1100px) {
    height: auto;
    width: 65%;
    margin: 0;
  }
`;

//HIGHLIGHT DESCIPTION
const HLText = styled.p`
  font-size: 16px;
  font-family: "Montserrat-Regular" !important;
  color: #373737;
  letter-spacing: -0.1px;
`;

//HIGHLIGHT IMAGE AND CONTENT CONTAINER
const HighLight = styled.div`
  width: 100%;
  height: 100%;
  margin: 30px 0;
  position: relative;
  display: flex;
  flex-direction: column;

  @media (min-width: 1100px) {
    margin: 60px 0;
    &:nth-of-type(even) {
      ${HighLightImage} {
        justify-content: flex-end;
      }
    }

    &:nth-child(odd) {
      ${HighLightImage} {
        right: 0;
      }
    }

    &:nth-child(even) {
      ${HighLightImage} {
        left: 0;
      }
      ${HighLightContent} {
        padding-left: 60%;
      }
    }
  }
`;

//HIGHLIGHT CONTAINER GENERAL
const HighLightContainer = styled.div`
  width: ${(props) => props.width};
  display: flex;
  flex-direction: column;
  padding-top: 70px;

  @media (min-width: 1100px) {
    width: 85%;
    margin: 0 auto;
    height: 800px;
  }
`;

export default ({ model }) => (
  <React.Fragment>
    <Container width={"85%"}>
      <Header>
        <HeaderImage>
          <Image src={"http://challenge.agenciaego.tech" + model.photo} />
        </HeaderImage>
        <HeaderInfo>
          <HeaderText>{model.name}</HeaderText>
          <HeaderTitle>Praparada para cualquier desafio</HeaderTitle>
          <HeaderContent>
            Texto lorem ipsum dolor sit amet orem ipsum dolor sit amet. lorem
            ipsum dolor sit amet orem ipsum dolor sit amet lorem ipsum dolor sit
            amet orem ipsum dolor sit amet.
          </HeaderContent>
        </HeaderInfo>
      </Header>
    </Container>

    <Container width={"100%"}>
      <Carousel features={model.model_features} />
    </Container>
    <Container width={"85%"}>
      <HighLightContainer>
        {model.model_highlights.map((highlight, inx) => (
          <HighLight key={inx}>
            <HighLightImage>
              <HLImage
                src={"http://challenge.agenciaego.tech" + highlight.image}
              />
            </HighLightImage>
            <HighLightContent>
              <HighLightTitle>
                <HLTittle>{highlight.title}</HLTittle>
              </HighLightTitle>
              <HighLightText>
                <HLText>{highlight.content}</HLText>
              </HighLightText>
            </HighLightContent>
          </HighLight>
        ))}
      </HighLightContainer>
    </Container>
  </React.Fragment>
);

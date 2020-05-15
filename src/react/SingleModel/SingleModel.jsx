import React from "react";
import styled from "styled-components";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const Container = styled.div`
  width: ${(props) => props.width};
  margin: 0 auto;
`;

const Header = styled.div`
  width: 100%;
  height: 500px;
  margin-top: 80px;
  display: flex;
  flex-direction: row;
`;

const HeaderImage = styled.div`
  width: 50%;
`;

const Image = styled.img`
  width: 100%;
`;

const HeaderInfo = styled.div`
  width: 50%;
  padding-left: 100px;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h2`
  font-size: 20px;
  font-family: "Montserrat-Semibold";
  color: #373737;
`;

const HeaderTitle = styled.h3`
  font-family: "Montserrat-Semibold";
  font-size: 50px;
  margin: 0;
  letter-spacing: -1px;
  color: #373737;
`;

const HeaderContent = styled.p`
  display: inline-block;
  width: 385px;
  margin-top: 40px;
  font-size: 16px;
  font-family: "Montserrat-Regular";
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.1px;
  color: #373737;
`;

const Features = styled.div`
  width: 100%;
  height: auto;
  padding: 30px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background: #f7f7f7;
`;

const CardFeature = styled.div`
  width: 23%;
  height: 100%;
`;

const FeatureImage = styled.div`
  width: 100%;
  height: 60%;
  border-radius: 5px;
`;

const FImage = styled.img`
  width: 100%;
  height: 100%;
`;

const FeatureTitle = styled.h3`
  font-size: 20px;
  font-family: "Montserrat-Semibold";
  color: #373737;
`;

const FeatureContent = styled.p`
  font-size: 16px;
  font-family: "Montserrat-Regular";
  color: #373737;
`;

const PrevButton = styled.div`
  width: 30px;
  display: flex;
  margin-top: 60px;
  background: rgba(255, 255, 255, 0.56);
`;
const NextButton = styled(PrevButton)``;

const HighLightImage = styled.div`
  width: 50%;
  height: 100%;
  position: absolute;
  z-index: 1;
`;

const HLImage = styled.img`
  width: 100%;
  height: 100%;
`;

const HighLightContent = styled.div`
  width: 40%;
  height: 100%;
  padding-top: 40px;
`;

const HighLightTitle = styled.div`
  height: 29px;
  font-size: 20px;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.35;
  letter-spacing: -0.4px;
  color: #373737;
`;

const HLTittle = styled.h4`
  font-size: 20px;
  font-family: "Montserrat-Semibold";
  color: #373737;
`;

const HighLightText = styled.div`
  width: 385px;
  height: 108px;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.69;
  letter-spacing: -0.1px;
  color: #373737;
`;

const HLText = styled.p`
  font-size: 16px;
  font-family: "Montserrat-Regular";
  color: #373737;
`;

const HighLight = styled.div`
  width: 100%;
  height: 290px;
  margin: 50px 0;
  position: relative;
  display: flex;
  &:nth-of-type(even) {
    justify-content: flex-end;
  }
  &:nth-child(odd) {
    ${HighLightImage} {
      right: 0;
    }
    ${HighLightContent} {
      padding-left: 80px;
    }
  }
  &:nth-child(even) {
    ${HighLightImage} {
      left: 0;
    }
  }
`;

const HighLightContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default ({ model }) => (
  <React.Fragment>
    <Container width={"85%"}>
      <Header>
        <HeaderImage>
          <Image src={model.photo} />
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
      <Features>
        <PrevButton>
          <ArrowBackIosIcon fontSize={"large"} />
        </PrevButton>
        {model.modelfeatures.map((feature, inx) => (
          <CardFeature>
            <FeatureImage>
              <FImage src={feature.photo} />
            </FeatureImage>
            <FeatureTitle>{feature.name}</FeatureTitle>
            <FeatureContent>{feature.description}</FeatureContent>
          </CardFeature>
        ))}
        <NextButton>
          <ArrowForwardIosIcon fontSize={"large"} />
        </NextButton>
      </Features>
    </Container>
    <Container width={"80%"}>
      <HighLightContainer>
        {model.modelhighlights.map((highlight, inx) => (
          <HighLight>
            <HighLightImage>
              <HLImage src={highlight.image} />
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

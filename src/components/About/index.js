import React from "react";

import IMG from "../../images/6.jpg";
import {
  AboutContainer,
  AboutWrapper,
  AboutRow,
  ColumnOne,
  ColumnTwo,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  Img,
  ImgWrap,
  BtnWrap,
} from "./AboutElements";
import { Button } from "../ButtonElements";
const About = ({
  lightBg,
  id,
  imgStart,
  lightText,
  darkText,
  headLine,
  topLine,
  buttonLabel,
  alt,
  description,
}) => {
  return (
    <>
      <AboutContainer lightBg={lightBg} id={id}>
        <AboutWrapper>
          <AboutRow imgStart={imgStart}>
            <ColumnOne>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    to="home"
                    smooth={true}
                    duration={500}
                    exact="true"
                    spy={true}
                    offset={-60}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </ColumnOne>
            <ColumnTwo>
              <ImgWrap>
                <Img src={IMG} alt={alt} />
              </ImgWrap>
            </ColumnTwo>
          </AboutRow>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
};
export default About;

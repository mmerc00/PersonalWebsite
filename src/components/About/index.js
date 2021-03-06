import React from "react";
import {
  AboutContainer,
  AboutWrapper,
  AboutRow,
  ColumnOne,
  ColumnTwo,
  Text,
  TopLine,
  Head,
  Sub,
  Img,
  ImgWrapper,
  BtnWrapper,
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
  img,
  description,
}) => {
  return (
    <>
      <AboutContainer lightBg={lightBg} id={id}>
        <AboutWrapper>
          <AboutRow imgStart={imgStart}>
            <ColumnOne>
              <Text>
                <TopLine>{topLine}</TopLine>
                <Head lightText={lightText}>{headLine}</Head>
                <Sub darkText={darkText}>{description}</Sub>
                <BtnWrapper>
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
                </BtnWrapper>
              </Text>
            </ColumnOne>
            <ColumnTwo>
              <ImgWrapper>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </ColumnTwo>
          </AboutRow>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
};

export default About;

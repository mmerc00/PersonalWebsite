import React from "react";
import {
  AboutContainer,
  AboutWrap,
  AboutRow,
  ColumnOne,
  ColumnTwo,
  Text,
  TopLine,
  Head,
  Sub,
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
  img,
  description,
}) => {
  return (
    <>
      <AboutContainer lightBg={lightBg} id={id}>
        <AboutWrap>
          <AboutRow imgStart={imgStart}>
            <ColumnOne>
              <Text>
                <TopLine>{topLine}</TopLine>
                <Head lightText={lightText}>{headLine}</Head>
                <Sub darkText={darkText}>{description}</Sub>
                <BtnWrap>
                  <Button to="home"> {buttonLabel}</Button>
                </BtnWrap>
              </Text>
            </ColumnOne>
            <ColumnTwo>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </ColumnTwo>
          </AboutRow>
        </AboutWrap>
      </AboutContainer>
    </>
  );
};

export default About;

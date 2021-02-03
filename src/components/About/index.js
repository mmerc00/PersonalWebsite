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
  Picture,
  ImgWrap,
  BtnWrap,
} from "./AboutElements";
import { Button } from "react-scroll";

const About = () => {
  return (
    <>
      <AboutContainer>
        <AboutWrap>
          <AboutRow>
            <ColumnOne>
              <Text>
                <TopLine>Tippity Top Line</TopLine>
                <Head>Head</Head>
                <Sub>Sub</Sub>
                <BtnWrap>
                  <Button to="home" />
                </BtnWrap>
              </Text>
            </ColumnOne>
            <ColumnTwo>
              <ImgWrap>
                <Picture />
              </ImgWrap>
            </ColumnTwo>
          </AboutRow>
        </AboutWrap>
      </AboutContainer>
    </>
  );
};

export default About;

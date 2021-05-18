import React from "react";
import { FooterContainer, FooterWrapper, FooterP } from "./FooterElements";
import { GiHearts } from "react-icons/gi";
import { GiBeerStein } from "react-icons/gi";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterP>
          Made with
          <GiHearts /> & <GiBeerStein /> Melissa Mercado
        </FooterP>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;

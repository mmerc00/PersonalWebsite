import React from "react";

import {
  HeroContainer,
  HeroBackground,
  VideoBackground,
  HeroSectionContent,
  HeroText,
} from "./HeroElements";
import Floral from "../../videos/FloralArranging.mp4";

const Hero = () => {
  //photo can be added here as background or a block of color
  return (
    <HeroContainer>
      <HeroBackground>
        <VideoBackground autoPlay loop muted src={Floral} type="video/mp4" />
      </HeroBackground>
      <HeroSectionContent>
        <HeroText>Not Your Average Web Developer</HeroText>
      </HeroSectionContent>
    </HeroContainer>
  );
};

export default Hero;
//add down chevron and link to next page

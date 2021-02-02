import React from "react";
import { HeroContainer, HeroBackground, VideoBackground } from "./HeroElements";
import Beach from "../../videos/Beach.mp4";

const Hero = () => {
  //photo can be added here as background or a block of color
  return (
    <HeroContainer>
      <HeroBackground>
        <VideoBackground autoPlay loop src={Beach} type="video/mp4" />
      </HeroBackground>
    </HeroContainer>
  );
};

export default Hero;

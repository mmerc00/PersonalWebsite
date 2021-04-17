import React from "react";
import { FaGithub } from "react-icons/fa";
import { GrDeploy } from "react-icons/gr";

import {
  SkillsContainer,
  SkillsWrap,
  SkillsH1,
  SkillsP,
} from "./SkillsElements";
//import { Button } from "../ButtonElements";

const Skills = () => {
  return (
    <SkillsContainer id="skills">
      <SkillsH1>Skills</SkillsH1>
      <SkillsP>
        Here are just a few of my Skills, check out my GitHub to view more
      </SkillsP>

      <SkillsWrap>
        <a href="https://github.com/D-Brewst/Project3">
          <FaGithub color="#482732"> </FaGithub>
        </a>
        <a href="https://aqueous-waters-16244.herokuapp.com/">
          <GrDeploy> </GrDeploy>
        </a>
        <a href="https://github.com/kao-ring/Project-2">
          <FaGithub color="#482732"> </FaGithub>
        </a>
        <a href="limitless-refuge-18664.herokuapp.com/">
          <GrDeploy> </GrDeploy>
        </a>{" "}
      </SkillsWrap>
    </SkillsContainer>
  );
};

export default Skills;

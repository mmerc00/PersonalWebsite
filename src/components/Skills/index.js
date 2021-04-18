import React from "react";
import { FaGithub, FaNode, FaHtml5 } from "react-icons/fa";
import {
  DiMongodb,
  DiReact,
  DiGithubFull,
  DiHtml5,
  DiBootstrap,
  DiHeroku,
  DiJqueryLogo,
  DiNpm,
} from "react-icons/di";
import {
  SiJavascript,
  SiAdobephotoshop,
  SiCsswizardry,
  SiMysql,
  SiAdobeindesign,
} from "react-icons/si";

import {
  SkillsContainer,
  SkillsWrap,
  SkillsH1,
  SkillsP,
} from "./SkillsElements";

const Skills = () => {
  return (
    <SkillsContainer id="skills">
      <SkillsH1>Skills</SkillsH1>
      <SkillsP>
        My hunger for learning code never stops but here are the technologies I
        have worked with languages and frameworks{" "}
      </SkillsP>

      <SkillsWrap>
        <FaGithub />
        <DiMongodb />
        <DiReact />
        <FaNode />
        <DiGithubFull />
        <SiJavascript />
        <DiHtml5 />
        <SiAdobephotoshop />
        <DiBootstrap />
        <DiHeroku />
        <DiJqueryLogo />
        <FaHtml5 />
        <SiCsswizardry />
        <SiMysql />
        <DiNpm />
        <SiAdobeindesign />
      </SkillsWrap>
    </SkillsContainer>
  );
};

export default Skills;

import React from "react";
import waves from "../../images/wwd.svg";

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
  Waves,
} from "./SkillsElements";
const Skills = () => {
  return (
    <SkillsContainer id="skills">
      <Waves src={waves} alt="divider" />
      <SkillsH1>Skills</SkillsH1>
      <SkillsP>
        My hunger for learning new languages never stops but here are the
        technologies and languages I have worked with{" "}
      </SkillsP>

      <SkillsWrap>
        <FaGithub size="3em" color="433e0e" />
        <DiMongodb size="3em" color="433e0e" />
        <DiReact size="3em" color="433e0e" />
        <FaNode size="3em" color="433e0e" />
        <DiGithubFull size="3em" color="433e0e" />
        <SiJavascript size="3em" color="433e0e" />
        <DiHtml5 size="3em" color="433e0e" />
        <SiAdobephotoshop size="3em" color="433e0e" />
        <DiBootstrap size="3em" color="433e0e" />
        <DiHeroku size="3em" color="433e0e" />
        <DiJqueryLogo size="3em" color="433e0e" />
        <FaHtml5 size="3em" color="433e0e" />
        <SiCsswizardry size="3em" color="433e0e" />
        <SiMysql size="3em" color="433e0e" />
        <DiNpm size="3em" color="433e0e" />
        <SiAdobeindesign size="3em" color="433e0e" />
      </SkillsWrap>
    </SkillsContainer>
  );
};

export default Skills;

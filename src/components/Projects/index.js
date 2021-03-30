import React from "react";
import { FaGithub } from "react-icons/fa";
import { GrDeploy } from "react-icons/gr";

import Pic1 from "../../images/4.jpg";
import Pic2 from "../../images/4.jpg";
import Pic3 from "../../images/4.jpg";
import {
  ProjectsContainer,
  ProjectsH2,
  ProjectsP,
  ProjectsWrap,
  ProjectsCard,
  ProjectsH1,
  ProjectsP2,
  ProjectsIcon,
} from "./ProjectsElements";
//import { Button } from "../ButtonElements";

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <ProjectsH1>Projects</ProjectsH1>
      <ProjectsP2>
        Here are just a few of my projects, check out my GitHub to view more
      </ProjectsP2>

      <ProjectsWrap>
        <ProjectsCard>
          <ProjectsIcon src={Pic1} />
          <ProjectsH2>Wyld Card </ProjectsH2>
          <ProjectsP>Card generator app based on occasion</ProjectsP>
          <a href="https://github.com/D-Brewst/Project3">
            <FaGithub> </FaGithub>
          </a>
          <a href="https://aqueous-waters-16244.herokuapp.com/">
            <GrDeploy> </GrDeploy>
          </a>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsIcon src={Pic2} />
          <ProjectsH2>The Village </ProjectsH2>
          <ProjectsP>App that allows users to post anon by zip code</ProjectsP>
          <a href="https://github.com/kao-ring/Project-2">
            <FaGithub> </FaGithub>
          </a>
          <a href="limitless-refuge-18664.herokuapp.com/">
            <GrDeploy> </GrDeploy>
          </a>{" "}
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsIcon src={Pic3} />
          <ProjectsH2>ZAP</ProjectsH2>
          <ProjectsP>
            Video game app which pulls up ratings, prices and a video preview
          </ProjectsP>
          <a href="https://github.com/jamesrowe1/ZAP">
            <FaGithub> </FaGithub>
          </a>
          <a href="https://jamesrowe1.github.io/ZAP/">
            <GrDeploy> </GrDeploy>
          </a>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsIcon src={Pic3} />
          <ProjectsH2>TBD </ProjectsH2>
          <ProjectsP>Lorem Ipsum</ProjectsP>
          <a href="https://github.com/mmerc00">
            <FaGithub> </FaGithub>
          </a>
          <a href="https://github.com/mmerc00">
            <GrDeploy> </GrDeploy>
          </a>{" "}
        </ProjectsCard>
      </ProjectsWrap>
    </ProjectsContainer>
  );
};

export default Projects;

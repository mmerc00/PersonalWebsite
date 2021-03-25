import React from "react";
import { FaGithub } from "react-icons/fa";

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
  ProjectsIcon,
} from "./ProjectsElements";
import { Button } from "../ButtonElements";

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <ProjectsH1>Projects</ProjectsH1>
      <ProjectsWrap>
        <ProjectsCard>
          <ProjectsIcon src={Pic1} />
          <ProjectsH2>Wyld Card </ProjectsH2>
          <ProjectsP>Card generator app based on occasion</ProjectsP>
          <Button
            to="home"
            smooth={true}
            duration={500}
            exact="true"
            spy={true}
            offset={-60}
          >
            GitHub
          </Button>
          <Button
            to="home"
            smooth={true}
            duration={500}
            exact="true"
            spy={true}
            offset={-60}
          >
            Deployed link
          </Button>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsIcon src={Pic2} />
          <ProjectsH2>The Village </ProjectsH2>
          <ProjectsP>App that allows users to post anon by zip code</ProjectsP>
          <FaGithub to="https://github.com/mmerc00" />
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsIcon src={Pic3} />
          <ProjectsH2>ZAP</ProjectsH2>
          <ProjectsP>
            Video game app which pulls up ratings, price and preview
          </ProjectsP>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsIcon src={Pic3} />
          <ProjectsH2>TBD </ProjectsH2>
          <ProjectsP>Lorem Ipsum</ProjectsP>
        </ProjectsCard>
      </ProjectsWrap>
    </ProjectsContainer>
  );
};

export default Projects;
import React from "react";
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

const Projects = () => {
  return (
    <ProjectsContainer>
      <ProjectsH1>Projects</ProjectsH1>
      <ProjectsWrap>
        <ProjectsCard>
          <ProjectsIcon src={Pic1} />
          <ProjectsH2>Wyld Card </ProjectsH2>
          <ProjectsP>Lorem Ipsum</ProjectsP>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsIcon src={Pic2} />
          <ProjectsH2>Wyld Card </ProjectsH2>
          <ProjectsP>Lorem Ipsum</ProjectsP>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsIcon src={Pic3} />
          <ProjectsH2>Wyld Card </ProjectsH2>
          <ProjectsP>Lorem Ipsum</ProjectsP>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsIcon src={Pic3} />
          <ProjectsH2>Wyld Card </ProjectsH2>
          <ProjectsP>Lorem Ipsum</ProjectsP>
        </ProjectsCard>
      </ProjectsWrap>
    </ProjectsContainer>
  );
};

export default Projects;

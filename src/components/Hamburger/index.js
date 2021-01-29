import React from "react";
import {
  HamburgerContainer,
  Icon,
  CloseIcon,
  SidebarLink,
  SideBarRoute,
  SidebarWrapper,
  SideBtnWrap,
  SidebarMenu,
} from "./HamburgerElements";

const Hamburger = ({ isOpen, toggle }) => {
  return (
    <HamburgerContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            about
          </SidebarLink>
          <SidebarLink to="projects" onClick={toggle}>
            projects
          </SidebarLink>
          <SidebarLink to="skills" onClick={toggle}>
            skills
          </SidebarLink>
          <SidebarLink to="connect" onClick={toggle}>
            connect
          </SidebarLink>
          <SidebarLink to="signin" onClick={toggle}>
            signin TEMP
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SideBarRoute to="/signin">TEMP BTN</SideBarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </HamburgerContainer>
  );
};

export default Hamburger;

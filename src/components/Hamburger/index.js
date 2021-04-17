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
            About
          </SidebarLink>
          <SidebarLink to="skills" onClick={toggle}>
            Skills
          </SidebarLink>
          <SidebarLink to="projects" onClick={toggle}>
            Projects
          </SidebarLink>
          <SidebarLink to="connect" onClick={toggle}>
            Contact
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SideBarRoute to="/signin">Resumé</SideBarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </HamburgerContainer>
  );
};

export default Hamburger;

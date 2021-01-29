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
          <SidebarLink to="about">about</SidebarLink>
          <SidebarLink to="projects">projects</SidebarLink>
          <SidebarLink to="skills">skills</SidebarLink>
          <SidebarLink to="connect">connect</SidebarLink>
          <SidebarLink to="signin">signin TEMP</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SideBarRoute to="/signin">TEMP BTN</SideBarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </HamburgerContainer>
  );
};

export default Hamburger;

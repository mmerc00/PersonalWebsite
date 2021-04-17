import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const HamburgerContainer = styled.aside`
position: fixed;
z-index: 999;
width: 100%;
height: 99%;
background: #7c9082;
;
display: grid;
align-items: center;
top: 0;
left 0;
transition: 0.3s ease-in-out;

opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
 top: ${({ isOpen }) => (isOpen ? "0" : "-99%")}; 

`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: point;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarLink = styled(LinkScroll)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  transition: 0.2s ease-in-out;
  cursor: ponter;

  &:hover {
    transition: 0.2s ease-in-out;
    color: #000d1a;
  }
`;

export const SidebarMenu = styled.ul`
  grid-template-columns: center;
  display: grid;
  text-align: center;
  grid-template-rows: repeat (5, 70px);

  @media screen and (max-width: 500px) grid-template-rows: repeat (5, 70px);
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;
export const SideBarRoute = styled(LinkR)`
  background: #fff;
  padding: 16px 62px;
  color: #ff5050;
  font-size: 12px;
  border-radius: 50px;
  white-space: nowrap;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  transition: 0.2s ease-in-out;

  &:hover {
    transition: 0.2s ease-in-out;
    background: #edeec0;
    color: #000d1a;
  }
`;

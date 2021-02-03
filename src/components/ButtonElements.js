import styled from "styled-coponents";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  border-radius: 45px;
  white-space: nowrap;

  background: ${({ primary }) => (primary ? "#ff6600" : "#9900cc")};
  padding: ${({ big }) => (big ? "12px 40px" : "10px 20px")};
  color: ${({ dark }) => (dark ? "#ccff66" : "#00cc44")};

  font-size: ${({ fontBig }) => (fontBig ? "23px" : "16px")};
  cursor: pointer;
  align-items: center;
  outline: none;
  cursor: pointer;
  justify-content: center;
  transition: 0.3s ease-in-out;
  display: flex;

  &:hover {
    transition: 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : " #cc9900")};
  }
`;

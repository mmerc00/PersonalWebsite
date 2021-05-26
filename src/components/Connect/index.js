import React from "react";

import {
  ConnectContainer,
  ConnectP,
  ConnectH1,
  ConnectWrap,
  IconWrap,
  IconContactLink,
} from "./ConnectElements";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Connect = () => {
  return (
    <ConnectContainer id="connect">
      <ConnectWrap>
        <ConnectH1>Let's Connect</ConnectH1>
        <IconWrap>
          <IconContactLink
            href="https://www.linkedin.com/in/melissa-mercado2323/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaLinkedin size="5em" />
          </IconContactLink>

          <IconContactLink
            href="mailto:@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <GrMail size="5em" />{" "}
          </IconContactLink>
          <IconContactLink
            href="https://github.com/mmerc00"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaGithub size="5em" />{" "}
          </IconContactLink>
        </IconWrap>
        <ConnectP>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ConnectP>
      </ConnectWrap>
    </ConnectContainer>
  );
};

export default Connect;

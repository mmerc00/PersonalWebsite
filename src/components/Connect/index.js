import React from "react";

import {
  ConnectContainer,
  ConnectP,
  ConnectH1,
  ConnectWrap,
  IconWrap,
} from "./ConnectElements";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Connect = () => {
  return (
    <ConnectContainer id="connect">
      <ConnectWrap>
        <ConnectH1>Let's Connect</ConnectH1>
        <IconWrap>
          <a
            href="https://www.linkedin.com/in/melissa-mercado2323/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaLinkedin size="3em" color="#2b3330" />
          </a>

          <a href="mailto:@gmail.com" rel="noopener noreferrer" target="_blank">
            <GrMail size="3em" color="#2b3330" />{" "}
          </a>
          <a href="https://github.com/mmerc00">
            <FaGithub size="3em" color="#2b3330" />{" "}
          </a>
        </IconWrap>
        <ConnectP>Open to front end positions and collaborations! </ConnectP>
      </ConnectWrap>
    </ConnectContainer>
  );
};

export default Connect;

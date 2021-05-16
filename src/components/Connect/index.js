import React from "react";
//import book from "../../images/wavesOpacity.svg";
import {
  ConnectContainer,
  ConnectP,
  ConnectH1,
  ConnectWrap,
  //Book,
  IconWrap,
} from "./ConnectElements";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
//<Book src={book} alt="divider" />
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

          <GrMail size="3em" color="#2b3330" />
          <a href="https://github.com/mmerc00">
            <FaGithub size="3em" color="#2b3330" />{" "}
          </a>
        </IconWrap>
        <ConnectP>
          I am currently seeking a full stack position and collaborations!{" "}
        </ConnectP>
      </ConnectWrap>
    </ConnectContainer>
  );
};

export default Connect;

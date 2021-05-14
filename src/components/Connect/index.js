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
          <FaLinkedin size="3em" color="#2b3330" />
          <GrMail size="3em" color="#2b3330" />

          <FaGithub size="3em" color="#2b3330" />
        </IconWrap>
        <ConnectP>
          I am currently seeking a full stack position and collaborations!{" "}
        </ConnectP>
      </ConnectWrap>
    </ConnectContainer>
  );
};

export default Connect;

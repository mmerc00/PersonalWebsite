import React from "react";
import book from "../../images/wavesOpacity.svg";
import {
  ConnectContainer,
  ConnectP,
  ConnectH1,
  ConnectWrap,
  Book,
} from "./ConnectElements";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMailOption } from "react-icons/gr";

const Connect = () => {
  return (
    <ConnectContainer id="connect">
      <Book src={book} alt="divider" />
      <ConnectWrap>
        <ConnectH1>Let's Connect</ConnectH1>
        <FaLinkedin size="3em" color="433e0e" />
        <GrMailOption size="3em" color="433e0e" />

        <FaGithub size="3em" color="433e0e" />
        <ConnectP>Open for collaborations and full-stack positions</ConnectP>
      </ConnectWrap>
    </ConnectContainer>
  );
};

export default Connect;

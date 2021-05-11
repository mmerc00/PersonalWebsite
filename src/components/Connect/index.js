import React from "react";
import book from "../../images/wavesOpacity.svg";
import {
  ConnectContainer,
  ConnectP,
  ConnectH1,
  ConnectWrap,
  Book,
  IconWrap,
} from "./ConnectElements";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMailOption } from "react-icons/gr";

const Connect = () => {
  return (
    <ConnectContainer id="connect">
      <Book src={book} alt="divider" />
      <ConnectWrap>
        <ConnectH1>Let's Connect</ConnectH1>
        <IconWrap>
          <FaLinkedin size="3em" color="433e0e" />
          <GrMailOption size="3em" color="433e0e" />

          <FaGithub size="3em" color="433e0e" />
        </IconWrap>
        <ConnectP>under construction</ConnectP>
      </ConnectWrap>
    </ConnectContainer>
  );
};

export default Connect;

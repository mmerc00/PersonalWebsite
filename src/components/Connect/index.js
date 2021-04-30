import React from "react";
import book from "../../images/wavesOpacity.svg";
import {
  ConnectContainer,
  ConnectP,
  ConnectH1,
  ConnectWrap,
  Book,
} from "./ConnectElements";
//insert wrapper
const Connect = () => {
  return (
    <ConnectContainer id="connect">
      <Book src={book} alt="divider" />
      <ConnectWrap>
        <ConnectH1>Let's Connect</ConnectH1>
        <ConnectP>Open for collaborations and full-stack positions</ConnectP>
      </ConnectWrap>
    </ConnectContainer>
  );
};

export default Connect;

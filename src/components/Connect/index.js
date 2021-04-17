import React from "react";
import book from "../../images/wavesOpacity.svg";
import { ConnectContainer, ConnectP, ConnectH1 } from "./ConnectElements";
//insert wrapper
const Connect = () => {
  return (
    <ConnectContainer id="Connect">
      <img src={book} alt="divider" />

      <ConnectH1>Let's Connect</ConnectH1>
      <ConnectP>Open for collaborations and full-stack positions</ConnectP>
    </ConnectContainer>
  );
};

export default Connect;

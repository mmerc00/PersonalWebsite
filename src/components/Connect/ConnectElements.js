import styled from "styled-components";
export const ConnectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #ffff;
  @media screen and (max-width: 768px) {
    height: 1100px;
  }
  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const ConnectH1 = styled.h1`
  margin-bottom: 60px;
  font-size: 3rem;
  color: #fff;
  margin-left: 40px;
  @media screen and (max-width: 480px) {
    font-size: 2 rem;
  }
`;

export const ConnectP = styled.p`
  text-align: center;
  font-size: 1 rem;
`;

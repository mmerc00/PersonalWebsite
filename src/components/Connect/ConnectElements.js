import styled from "styled-components";
export const ConnectContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom, #d0c88e 0%, #ffffff 100%);

  @media screen and (max-width: 768px) {
    height: 1100px;
  }
  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const ConnectH1 = styled.h1`
  margin-top: 100px;

  margin-bottom: 60px;
  font-size: 3rem;
  color: #2b3330;
  margin-left: 140px;
  @media screen and (max-width: 480px) {
    font-size: 2 rem;
  }
`;

export const ConnectP = styled.p`
  text-align: center;
  font-size: 1.5rem;
  margin-top: 60px;
  font-weight: 600px;
`;

export const ConnectWrap = styled.div`
  height: 600px;
`;

export const Book = styled.img`
  top: 0;
  position: abosolute;
`;
export const IconWrap = styled.div`
  display: flex;
  justify-content: space-around;
  width: 110%;
`;

//#ffd6c7 pale pink background want to incoporate

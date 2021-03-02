import styled from "styled-components";

export const AboutWrap = styled.div`
  z-index: 1;
  display: flex;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  padding: 0 24px;
  justify-content: center;
  margin-left: auto;
`;

export const AboutRow = styled.div`
  grid-auto-columns: minmax(auto, 1fr);
  display: grid;

  align-items: center;
  grid-template-areas: ${({ img }) => (img ? `'col2 col1'` : `'col1 col2'`)}
  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ img }) =>
      img ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`}
`;

export const Text = styled.div`
  padding-bottom: 0;
  max-width: 500px;
  padding-top: 0;
`;
export const TopLine = styled.p`
  margin-bottom: 90px;
  letter-spacing: 1.4px;
  line-height: 10px;
  font-size: 20px;
  font-weight: 300px;
  color: #ca674b;
`;

export const AboutContainer = styled.div`
  background: #001a33;
  /*   background: ${({ lightBg }) => (lightBg ? "#cce6ff" : "#010606")}; */
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const ColumnOne = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;
export const ColumnTwo = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const Head = styled.h1`
  color: #ecc594;
  margin-bottom: 60px;
  line-height: 20px;
  font-size: 100px;
  font-weight: 500px;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Sub = styled.p`
max-width: 200px
font-size: 30px
margin-bottom: 30px;
line-height: 30px;
background: ${({ darkText }) => (darkText ? "#0f001a" : "#f5e6ff")};
`;
export const ImgWrap = styled.div`
  width: 60%;
  height: 90%;
`;
export const Img = styled.img`
  width: 60%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

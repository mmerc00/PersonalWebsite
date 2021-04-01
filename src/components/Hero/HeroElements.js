import styled from "styled-components";

export const HeroContainer = styled.div`
  margin-top: -90px;
  display: flex;
  background: #c7bcae;
  justify-content: center;
  position: relative;
  padding: 0 30px;
  height: 900px;
  align-items: center;
  z-index: 1;
`;
export const VideoBackground = styled.video`
  -o-object-fit: cover;
  height: 100%;
  object-fit: cover;
  width: 100%;
  background: #ffbf80;
`;

export const HeroBackground = styled.div`
  overflow: hidden;
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  bottom: 0;
`;
export const HeroSectionContent = styled.div`
  display: flex;
  padding: 8 24px;
  background-color: transparent;
  justify-content: center;
  position: absolute;
  height: 900px;
  z-index: 3;
  align-items: center;
`;
export const HeroText = styled.div`
  text-align: center;
  color: #fff;
  background-color: transparent;
  justify-content: center;
  position: absolute;
  font-family: georgia, serif;
  font-size: 70px;
`;

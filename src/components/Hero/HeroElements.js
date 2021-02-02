import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  background: #0c0c0c;
  justify-content: center;
  position: relative;
  padding: 0 30px;
  height: 800px;
  align-items: center;
  z-index: 1;
`;

export const HeroBackground = styled.div`
  overflow: hidden;
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  bottom: 0;
`;

export const VideoBackground = styled.video`
  -o-object-fit: cover;
  height: 100%;
  object-fit: cover;
  width: 100%;
  background: #ffbf80;
`;

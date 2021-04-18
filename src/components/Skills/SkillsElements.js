import styled from "styled-components";
export const SkillsContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #d0c88e;
  @media screen and (max-width: 768px) {
    height: 1100px;
  }
  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;
export const SkillsWrap = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 50px;
  padding: 0 50px;
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 20px;
  }
`;

export const SkillsH1 = styled.h1`
  margin-bottom: 60px;
  font-size: 3rem;
  color: #fff;
  margin-left: 40px;
  @media screen and (max-width: 480px) {
    font-size: 2 rem;
  }
`;

export const SkillsP = styled.p`
  margin-bottom: 40px;
  text-align: center;
  font-size: 1 rem;
`;

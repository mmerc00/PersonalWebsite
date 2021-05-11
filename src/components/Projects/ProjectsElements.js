import styled from "styled-components";
export const ProjectsContainer = styled.div`
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
export const ProjectsWrap = styled.div`
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
export const ProjectsCard = styled.div`
height: 340px;
width: 340px;
background: #fff;
display: flex;
align-items: center;
border-radius: 20px;
max-height: 340px;
flex-direction: column;
justify-content: flex start;
padding: 30px:
box-shadow: 0 1px 3px rgba(0,0,0,0,2);
transition: all 0.2s ease-in-out;
 
&:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out
    cursor: pointer;

}




`;

export const ProjectsIcon = styled.img`
  width: 160px;
  height: 160px;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const ProjectsH1 = styled.h1`
  margin-bottom: 60px;
  font-size: 3rem;
  color: #fff;
  margin-left: 40px;
  @media screen and (max-width: 480px) {
    font-size: 2 rem;
  }
`;

export const ProjectsH2 = styled.h2`
  margin-bottom: 8px;
  font-size: 2rem;
`;
export const ProjectsP = styled.p`
  text-align: center;
  font-size: 1 rem;
  margin-bottom: 8px;
`;

export const ProjectsP2 = styled.p`
  margin-bottom: 30px;
  font-size: 1.5rem;
  margin-top: -10px;
  cursor: pointer;
`;
export const IconWrap = styled.div`
  display: flex;
  justify-content: space-around;
`;

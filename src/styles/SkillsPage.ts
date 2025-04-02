import styled from "styled-components";

export const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

export const SkillCard = styled.div`
  min-width: 100px;
  height: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 10px;
  //   background-color: #f5f5f5;
  justify-content: space-evenly;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const SkillImage = styled.img`
  width: 50px;
  height: 50px;
`;

export const SkillName = styled.div`
  font-family: montserrat, sans-serif;
  color: fafafa;
  font-size: 14px;
`;

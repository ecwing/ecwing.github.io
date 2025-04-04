import styled from "styled-components";

export const Wrapper = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
`;

export const ScrollButton = styled.button`
  margin-top: 20px;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background: #ff7b00;
  color: white;
  transition: 0.3s ease-in-out;
  max-width: 200px;
  &:hover {
    background: #cc6300;
  }
`;

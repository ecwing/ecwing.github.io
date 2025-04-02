import styled from "styled-components";

export const ToggleButton = styled.button`
  padding: 10px 15px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${(props) =>
    props.theme.backgroundColor === "teal" ? "#1a1a1a" : "#f9f9f9"};
  color: ${(props) =>
    props.theme.backgroundColor === "teal" ? "#ffffff" : "#000000"};
  transition:
    background-color 0.3s ease-in-out,
    color 0.3s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;

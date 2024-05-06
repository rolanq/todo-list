import styled from "styled-components";

export const StyledCheckbox = styled.input<{ $checked: boolean }>`
  appearance: ${(props) => !props.$checked && "none"};
  ${(props) => props.$checked && "accent-color: #646ff0;"}
  flex-basis: 25px;
  flex-shrink: 0;
  height: 25px;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  cursor: pointer;
  background-color: #dedfe1;
`;

import styled from "styled-components";

export const StyledButton = styled.button<{ $variant: "primary" | "secondary" }>`
  display: inline-block;
  height: auto;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  font-size: 1.6rem;
  text-decoration: none;
  text-transform: capitalize;
  cursor: pointer;
  overflow: hidden;
  background-color: ${(props) =>
    props.$variant === "primary" ? "#646ff0" : "#cccdde"};
  color: ${(props) => (props.$variant === "primary" ? "white" : "#646681")};
`;

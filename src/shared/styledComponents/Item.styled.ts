import styled from "styled-components";

export const StyledItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background: white;
  margin-bottom: 1.5rem;
  border-radius: 4px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const StyledDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  width: 75%;
  overflow: hidden;
`;

export const StyledTexts = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledText = styled.p`
  font-weight: 500;
  font-size: 1.4rem;
  color: #585858;
`;

export const StyledDate = styled.p`
  display: block;
  font-size: 1.2rem;
  font-weight: 300;
  margin-top: -0.2rem;
  color: #585858;
`;

export const StyledActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const StyledIcon = styled.div`
  font-size: 2rem;
  padding: 0.5rem;
  border-radius: 4px;
  background-color: #eee;
  color: #585858;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s ease background-color;
  &:hover {
    background-color: #dedfe1;
  }
`;

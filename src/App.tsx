import { Content } from "feature/Content/Content";
import { Header } from "feature/Header/Header";
import { Toaster } from "react-hot-toast";
import {
  StyledAppWrapper,
  StyledContainer,
} from "shared/styledComponents/App.styled";
import { StyledTitle } from "shared/styledComponents/Title.styled";

function App() {
  return (
    <>
      <StyledContainer>
        <StyledTitle>TODO LIST</StyledTitle>
        <StyledAppWrapper>
          <Header />
          <Content />
        </StyledAppWrapper>
      </StyledContainer>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            fontSize: '1.4rem',
          },
        }}
      />
    </>
  );
}

export default App;

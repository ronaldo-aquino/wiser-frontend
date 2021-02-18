import Form from "../components/Form";
import { BgImage, Wrapper, MessageFooter, Main } from "../styles/pages/Home";

const Home: React.FC = () => {
  return (
    <Main>
      <BgImage>
        <Wrapper isMobile>
          <Form />
          <MessageFooter>
            Esqueceu seu login ou senha? Clique{" "}
            <span className="text-underline">aqui</span>
          </MessageFooter>
        </Wrapper>
      </BgImage>
      <Wrapper isTabletOrDesktop>
        <Form />
        <MessageFooter>
          Esqueceu seu login ou senha? Clique{" "}
          <span className="text-underline">aqui</span>
        </MessageFooter>
      </Wrapper>
    </Main>
  );
};

export default Home;

import { useState } from "react";
import Form from "../components/Form";
import Modal from "../components/Modal";
import { BgImage, Wrapper, MessageFooter, Main } from "../styles/pages/Home";

const Home: React.FC = () => {
  const [visibleModal, setVisibleModal] = useState<boolean>(false);
  return (
    <Main>
      {visibleModal && <Modal setVisibleModal={setVisibleModal} />}
      <BgImage>
        <Wrapper isMobile>
          <Form setVisibleModal={setVisibleModal} />
          <MessageFooter>
            Esqueceu seu login ou senha? Clique{" "}
            <span className="text-underline">aqui</span>
          </MessageFooter>
        </Wrapper>
      </BgImage>
      <Wrapper isTabletOrDesktop>
        <Form setVisibleModal={setVisibleModal} />
        <MessageFooter>
          Esqueceu seu login ou senha? Clique{" "}
          <span className="text-underline">aqui</span>
        </MessageFooter>
      </Wrapper>
    </Main>
  );
};

export default Home;

import styled from "styled-components";
import bgMobile from "../../assets/bgMobile.png";
import bgTablet from "../../assets/bgTablet.png";
import bgDesktop from "../../assets/bgDesktop.png";

type isMobileOrDesktop = {
  isMobile?: boolean;
  isTabletOrDesktop?: boolean;
};

export const Main = styled.main`
  height: 100vh;
  background: #130525;

  @media (min-width: 768px) {
    display: flex;
    background: #faf5ff;
  }
`;

export const BgImage = styled.div`
  background: linear-gradient(180deg, rgba(105, 57, 153, 0) 0%, #130525  100%),
    url(${bgMobile});
  background-size: cover;
  height: 383px;

  @media (min-width: 768px) {
    background: linear-gradient(180deg, rgba(105, 57, 153, 0) 0%, #130525  100%),
      url(${bgTablet});
    height: 100vh;
    width: 327px;
    background-size: cover;
  }

  @media (min-width: 1366px) {
    background: linear-gradient(180deg, rgba(105, 57, 153, 0) 0%, #130525  100%),
      url(${bgDesktop});
    height: 100vh;
    width: 765px;
    background-size: cover;
  }
`;

export const Wrapper = styled.div<isMobileOrDesktop>`
  display: ${(props) => props.isMobile && "block"};
  display: ${(props) => props.isTabletOrDesktop && "none"};

  @media (min-width: 768px) {
    display: ${(props) => props.isMobile && "none"};
    display: ${(props) => props.isTabletOrDesktop && "block"};
  }
`;

export const MessageFooter = styled.p`
  text-align: center;
  width: 212px;
  margin: 0 auto;
  font-size: 14px;
  line-height: 20px;
  margin-top: 57px;
  color: #fff;

  .text-underline {
    text-decoration: underline;
  }

  @media (min-width: 768px) {
    width: 212px;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: #989fdb;
    margin-top: 0px;
    margin-left: 114px;

    .text-underline {
      color: #9626ac;
    }

    @media (min-width: 1366px) {
      margin-left: 133px;
  }
  }
`;

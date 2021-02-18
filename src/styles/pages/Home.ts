import styled from "styled-components";
import bgMobile from "../../assets/bgMobile.png";
import bgTablet from "../../assets/bgTablet.png";

type isMobileOrDesktop = {
  isMobile?: boolean,
  isTabletOrDesktop?: boolean,
}

export const Main = styled.main`
  height: 100vh;
  background: #130525;

  @media(min-width: 768px) {
    display: flex;
    background: #FAF5FF;
  }

`;

export const BgImage = styled.div`
  background: linear-gradient(180deg, #130525 0%, rgba(105, 57, 153, 0) 100%),
    url(${bgMobile});
  background-size: cover;
  height: 383px;

  @media(min-width: 768px) {
    background: linear-gradient(180deg, #130525 0%, rgba(105, 57, 153, 0) 100%),
    url(${bgTablet});
    height: 100vh;
    width: 327px;
    background-size: cover;
  }

`;

export const Wrapper = styled.div<isMobileOrDesktop>`
  display: ${props => (props.isMobile && "block")};
  display: ${props => (props.isTabletOrDesktop && "none")};

  @media(min-width: 768px) {
    display: ${props => (props.isMobile && "none")};
    display: ${props => (props.isTabletOrDesktop && "block")};
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
`;

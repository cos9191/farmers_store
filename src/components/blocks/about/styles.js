import styled from "styled-components";
import { Section } from "/src/components/tags";
import aboutImage from "/src/assets/about.svg";

const Paragraph = styled.p`
  margin: 0;
  padding: 0;
`;

export const StyledSection = styled(Section)`
  position: relative;
  padding-left: ${(props) => props.theme.pagePadding};
  padding-right: ${(props) => props.theme.pagePadding};
  padding-top: 183px;
  padding-bottom: 183px;
  background-color: ${(props) => props.theme.colorBgBlue};
  align-items: center;
  z-index: 1;

  &::after {
    position: absolute;
    bottom: 0;
    right: ${(props) => props.theme.pagePadding};
    display: block;
    content: "";
    width: 446px;
    height: 560px;
    background-image: url(${aboutImage});
  }
`;

export const TextWrapper = styled.div`
  position: relative;
  max-width: 538px;
  z-index: 3;
`;

export const Text = styled(Paragraph)`
  margin-top: ${(props) => props.theme.indent};
`;

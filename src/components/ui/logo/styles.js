import styled from "styled-components";
import { ReactComponent as LogoImage } from "/src/assets/icon-logo.svg";
import { Link } from "react-router-dom";

export const StyledLogo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

export const Text = styled.span`
  display: flex;
  margin-left: ${(props) => props.theme.indent};
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  color: ${(props) => props.theme.colorFontBlack};
`;

export const StyledLogoImage = styled(LogoImage)`
  min-width: 44px;
`;

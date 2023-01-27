import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledButton = styled(Link)`
  display: block;
  min-width: ${(props) => `${props.$minWidth}px` || "100%"};
  max-width: 700px;
  min-height: 60px;
  background-color: ${(props) => props.theme.colorBtn};
  font-family: inherit;
  font-size: ${(props) => props.theme.fontSizeDefault};
  line-height: 58px;
  color: ${(props) => props.theme.colorWhite};
  font-weight: 700;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  box-shadow: none;
  background-image: none;
  transition: background-color 0.2s ease-out, box-shadow 0.2s ease-out;

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.colorBtnHover};
    box-shadow: inset 0 4px 0 rgba(0, 0, 0, 0.14);
  }

  &:active {
    box-shadow: none;
  }

  &:disabled {
    opacity: 0.5;
    box-shadow: none;
    background-color: ${(props) => props.theme.colorBtn};
  }
`;

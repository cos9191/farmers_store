import React from "react";
import { AppRoute } from "/src/const";
import Button from "/src/components/ui/button/button";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const NavButton = styled(Button)`
  padding: 0;
  width: auto;
  min-width: 0;
  display: inline-block;
  background-color: ${(props) => props.theme.colorWhite};
  color: ${(props) => props.theme.colorFontBlack};

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.colorWhite};
    text-decoration: underline;
  }

  &:hover {
    box-shadow: none;
  }
`;

const buttons = [
  {
    to: AppRoute.MAIN,
    button: (
      <NavButton minWidth={260} key={AppRoute.MAIN} link={AppRoute.MAIN}>
        Главная
      </NavButton>
    )
  },
  {
    to: AppRoute.ORDER,
    button: (
      <Button minWidth={260} key={AppRoute.ORDER} link={AppRoute.ORDER}>
        Купить
      </Button>
    )
  }
];

function Nav() {
  const pageUrl = useLocation().pathname;
  return (
    <nav>
      {buttons
        .filter((button) => button.to !== pageUrl)
        .map((button) => button.button)}
    </nav>
  );
}

export default Nav;

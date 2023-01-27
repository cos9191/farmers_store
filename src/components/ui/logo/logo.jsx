import React from "react";
import { Text, StyledLogo, StyledLogoImage } from "./styles";
import { AppRoute } from "/src/const";

function Logo() {
  return (
    <StyledLogo to={AppRoute.MAIN}>
      <StyledLogoImage />
      <Text>Фермерские продукты</Text>
    </StyledLogo>
  );
}

export default Logo;

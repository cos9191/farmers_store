import React from "react";
import Logo from "/src/components/ui/logo/logo";
import { StyledSection } from "./styles";

function Footer() {
  return (
    <StyledSection as="footer">
      <Logo />
      <span className="footer__copyright">Создано 2022</span>
    </StyledSection>
  );
}

export default Footer;

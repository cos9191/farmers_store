import styled from "styled-components";
import { Section } from "/src/components/tags";

export const Wrapper = styled(Section)`
  padding-top: 40px;
  padding-left: ${(props) => props.theme.pagePadding};
  padding-right: ${(props) => props.theme.pagePadding};
  padding-bottom: 0;
  background-color: ${(props) => props.theme.colorGray};
  display: grid;
  grid-template-columns: 1fr 2fr;

  gap: ${(props) => props.theme.indent};
  min-height: calc(
    100vh - ${(props) => props.theme.footerHeight} -
      ${(props) => props.theme.headerHeight}
  );
  height: calc(
    100vh - ${(props) => props.theme.footerHeight} -
      ${(props) => props.theme.headerHeight}
  );
`;

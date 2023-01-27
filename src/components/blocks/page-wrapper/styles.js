import styled from "styled-components";

export const Main = styled.main`
  max-width: ${(props) => props.theme.pageWidth};
  width: 100%;
  margin: 0 auto;
  min-height: calc(
    100vh - ${(props) => props.theme.footerHeight} -
      ${(props) => props.theme.headerHeight}
  );
`;

import styled from "styled-components";
import { Section } from "/src/components/tags";

export const StyledSection = styled(Section)`
  max-width: ${(props) => props.theme.pageWidth};
  width: 100%;
  min-height: 80px;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  padding-top: 0;
  padding-bottom: 0;
  margin: 0 auto;
`;

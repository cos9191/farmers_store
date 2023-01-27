import styled from "styled-components";
import { Section } from "/src/components/tags";

export const StyledSection = styled(Section)`
  margin: 0 auto;
  padding-top: 0;
  padding-bottom: 0;
  gap: 10px;
  max-width: ${(props) => props.theme.pageWidth};
  width: 100%;
  min-height: 80px;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.04),
    0 0 1px rgba(0, 0, 0, 0.04);
`;

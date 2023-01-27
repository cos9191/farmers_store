import styled from "styled-components";
import { Li } from "/src/components/tags";

export const Option = styled(Li)`
  font-size: 14px;
  margin-bottom: 8px;

  :last-child {
    margin-bottom: 0;
  }
`;

export const Property = styled.span`
  font-weight: bold;
`;

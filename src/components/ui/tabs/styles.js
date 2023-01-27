import styled, { css } from "styled-components";
import { Button, Ul, Li } from "/src/components/tags";

export const TabListItem = styled(Li)`
  margin-right: 8px;

  &:last-child {
    margin-right: 0;
  }
`;

export const TabButton = styled(Button)`
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
  padding-bottom: 8px;
  font-size: 14px;
  line-height: 1.5;
  border: 1px solid rgba(0, 0, 0, 0.1);
  ${(props) =>
    props.$isSelect
      ? css`
          background-color: ${props.theme.colorBgTabSelected};
          color: ${props.theme.colorWhite};
        `
      : css`
          background-color: ${props.theme.colorBgGray};
          color: ${props.theme.colorFontBlack};
        `}
`;

export const Header = styled(Ul)`
  display: flex;
  margin-bottom: 16px;
`;

export const Content = styled.div`
  font-size: 14px;
  text-align: left;
  overflow-y: overlay;
  max-height: ${(props) => props.$maxContentHeight || "none"};
  min-height: ${(props) => props.$maxContentHeight || "none"};
`;

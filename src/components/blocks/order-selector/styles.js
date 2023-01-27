import styled, { css } from "styled-components";
import checkboxSelect from "/src/assets/checkbox-select.svg";

export const CheckboxLabel = styled.span`
  position: relative;
  display: flex;
  min-height: 56px;
  text-align: left;
  align-items: center;
  cursor: pointer;

  &::after {
    content: "";
    right: 0;
    display: block;
    position: absolute;
    height: 22px;
    width: 22px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    ${(props) =>
      props.$isChecked
        ? css`
            background-color: ${props.theme.colorBtn};
            background-image: url(${checkboxSelect});
            background-repeat: no-repeat;
            background-position: center;
          `
        : css`
            background-color: ${props.theme.colorGray};
          `}
  }
`;

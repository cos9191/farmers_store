import styled from "styled-components";

const InputText = styled.input`
  display: flex;
  min-height: 48px;
  width: 100%;
  background-color: ${(props) => props.theme.colorBgGray};
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  padding-left: 12px;
  padding-right: 12px;
  font-size: 14px;

  ::placeholder {
    color: ${(props) => props.theme.fontColorBlack};
  }
`;

export default InputText;

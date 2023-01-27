import styled from "styled-components";
import { Img } from "/src/components/tags";
import Panel from "/src/components/ui/panel/panel";

export const PanelFlex = styled(Panel)`
  display: flex;
`;

export const ProductImage = styled(Img)`
  max-width: 248px;
  max-height: 248px;
  margin-right: ${(props) => props.theme.indent};
`;

export const Wrapper = styled.div`
  position: relative;
  float: right;
  width: 417px;
  min-height: 248px;
`;

export const Price = styled.span`
  background-color: ${(props) => props.theme.colorBgBlue};
  padding: 4px 8px;
  font-size: 14px;
  font-weight: bold;
  line-height: 21px;
`;

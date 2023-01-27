import styled from "styled-components";
import { Img, P } from "/src/components/tags";

export const Feature = styled.article`
  width: 540px;
  min-height: 200px;
  padding: 20px;
  background-color: ${(props) => (props.isNegative ? "#f8ddd7" : "#e1edce")};
  box-sizing: border-box;
  border-radius: 10px;
`;

export const Image = styled(Img)`
  float: left;
  width: 56px;
  height: 56px;
  margin-right: ${(props) => props.theme.indent};
`;

export const Header = styled.header`
  display: flex;
  margin-bottom: ${(props) => props.theme.indent};
  text-align: left;
`;

export const Type = styled.span`
  display: inline-block;
  min-height: 25px;
  margin-bottom: 4px;
  margin-left: ${(props) => props.indent};
  padding-left: 10px;
  padding-right: 10px;
  font-size: 14px;
  line-height: 25px;
  color: ${(props) => props.theme.colorWhite};
  background-color: ${(props) =>
    props.isNegative
      ? props.theme.colorCardHeaderBgNegative
      : props.theme.colorCardHeaderBg};
`;

export const Text = styled(P)`
  text-align: left;
`;

import styled from "styled-components";

const Section = styled.section`
  display: flex;
  padding-top: ${(props) => props.theme.pagePadding};
  padding-bottom: ${(props) => props.theme.pagePadding};
  padding-left: ${(props) => props.theme.pagePadding};
  padding-right: ${(props) => props.theme.pagePadding};
  position: relative;
`;

export default Section;

import styled from "styled-components";
import Title from "/src/components/ui/title/title";
import Button from "/src/components/ui/button/button";
import InputText from "/src/components/ui/input-text/input-text";

export const StyledTitle = styled(Title)`
  text-align: left;
`;

export const Price = styled.div`
  margin-bottom: 32px;
  font-size: 24px;
  line-height: 31px;
  font-weight: 700;
`;

export const StyledButton = styled(Button)`
  width: 100%;
  max-width: 360px;
`;

export const AddressInput = styled(InputText)`
  margin-bottom: ${(props) => props.theme.indent};
`;

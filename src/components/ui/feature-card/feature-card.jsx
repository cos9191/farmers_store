import React from "react";
import Title, { TitleSize } from "/src/components/ui/title/title";
import { Feature, Image, Type, Header, Text } from "./styles";

// Карточка
function FeatureCard({
  title, // название особенности
  type, // владелец особенности (обычный магазин, фермерский)
  text, // описание особенности
  isNegative, // является ли особенность отрицательной
  image // иконка
}) {
  return (
    <Feature isNegative={isNegative}>
      <Header>
        <Image width={56} height={56} src={image} alt={title} />
        <div>
          <Type isNegative={isNegative}>{type}</Type>
          <Title as="h3" size={TitleSize.XSMALL}>
            {title}
          </Title>
        </div>
      </Header>
      <Text>{text}</Text>
    </Feature>
  );
}

export default FeatureCard;

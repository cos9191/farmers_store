import React from "react";
import Title, { TitleSize } from "/src/components/ui/title/title";
import { Price, ProductImage, Wrapper, PanelFlex } from "./styles";
import Tabs from "/src/components/ui/tabs/tabs";
import TabsData from "/src/components/ui/tabs-data/tabs-data";

function SliderCard({ product }) {
  const TabList = [
    {
      title: "Описание",
      content: product.description
    },
    {
      title: "Характеристики",
      content: <TabsData list={product.specifications} />
    },
    {
      title: "Свойства",
      content: <TabsData list={product.structure} />
    }
  ];

  return (
    <PanelFlex>
      <ProductImage src={product.image} />
      <Wrapper>
        <Title as="h3" size={TitleSize.SMALL} marginBottom={15}>
          {product.title}
        </Title>
        <Tabs maxContentHeight="105px" tabList={TabList} />
        <Price>
          {product.price} ₽ / {product.weight} грамм
        </Price>
      </Wrapper>
    </PanelFlex>
  );
}

export default SliderCard;

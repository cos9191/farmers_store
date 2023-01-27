import React from "react";
import Panel from "/src/components/ui/panel/panel";
import Title, { TitleSize } from "/src/components/ui/title/title";
import CheckboxList from "/src/components/ui/checkbox-list/checkbox-list";
import { CheckboxLabel } from "./styles";

function OrderSelector({
  swipeRef,
  buyOptions,
  selectedProducts,
  setSelectedProducts
}) {
  const handleOnClickProduct = (value, index) => {
    if (!selectedProducts.includes(value)) {
      swipeRef.slideTo(index, 0);
    }
  };

  return (
    <Panel paddingBottom={10}>
      <Title as="h2" size={TitleSize.XSMALL} marginBottom={10}>
        Выберите продукты
      </Title>
      <CheckboxList
        labelComponent={CheckboxLabel}
        name={"products-selector"}
        isGridList={false}
        options={buyOptions?.map((option) => ({
          value: option.id,
          title: option.title
        }))}
        selectValues={selectedProducts}
        onChange={setSelectedProducts}
        onClickLabel={handleOnClickProduct}
      />
    </Panel>
  );
}

export default OrderSelector;

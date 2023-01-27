import React, { useState } from "react";
import OrderSelector from "/src/components/blocks/order-selector/order-selector";
import OrderSlider from "/src/components/blocks/order-slider/order-slider";
import OrderForm from "/src/components/blocks/order-form/order-form";
import { Wrapper } from "./styles";

function OrderPage({ buyOptions }) {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [swipeRef, setSwiperRef] = useState(null);

  return buyOptions && buyOptions.length ? (
    <Wrapper>
      <OrderSelector
        buyOptions={buyOptions}
        swipeRef={swipeRef}
        selectedProducts={selectedProducts}
        setSelectedProducts={setSelectedProducts}
      />
      <OrderSlider buyOptions={buyOptions} onSwiper={setSwiperRef} />
      <OrderForm buyOptions={buyOptions} selectedProducts={selectedProducts} />
    </Wrapper>
  ) : (
    "Продукты были слишком вкусные и их разобрали"
  );
}

export default OrderPage;

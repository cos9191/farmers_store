import React, { useState } from "react";
import { TitleSize } from "/src/components/ui/title/title";
import { Label } from "/src/components/tags";
import Panel from "/src/components/ui/panel/panel";
import { StyledTitle, Price, StyledButton, AddressInput } from "./styles";

function OrderForm({ buyOptions, selectedProducts }) {
  const [address, setAddress] = useState("");
  const handleBuyClick = () => {
    // eslint-disable-next-line no-alert
    alert(`Вы заказали:\n${productsToOrder.map(
      (product) => `${product.title} - ${product.price}₽\n`
    )}
    Итого: ${orderPrice}₽
    Доставка по адресу: ${address}.
    Спасибо за заказ!`);
  };

  const productsToOrder = selectedProducts.map((id) =>
    buyOptions.find((product) => product.id === id)
  );
  const orderPrice = productsToOrder.reduce(
    (sum, product) => (sum += product.price),
    0
  );

  return (
    <Panel paddingBottom={10} marginBottom={20}>
      <StyledTitle as="h2" size={TitleSize.XSMALL} marginBottom={24}>
        Сделать заказ
      </StyledTitle>
      <AddressInput
        value={address}
        onChange={(evt) => setAddress(evt.target.value)}
        placeholder="Введите адрес доставки"
      />
      <Label $small $margin={8}>
        Цена
      </Label>
      <Price>{orderPrice}₽</Price>
      <StyledButton
        onClick={handleBuyClick}
        disabled={!(selectedProducts.length && address)}
      >
        Купить
      </StyledButton>
    </Panel>
  );
}

export default OrderForm;

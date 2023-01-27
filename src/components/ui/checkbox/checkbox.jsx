import React from "react";
import { Label, VisuallyHiddenInput } from "/src/components/tags";

// Чекбокс
function Checkbox({
  onClick, // функция при клике
  labelComponent, // компонент для отображения визуальной части чекбокса
  isChecked, // выбранно ли значение
  title, // текст подписи
  value, // значение
  text, // текст элемента
  onChange, // событие при изменении
  ...props
}) {
  const LabelComponent = labelComponent;

  return (
    <Label>
      <VisuallyHiddenInput
        value={value}
        checked={isChecked}
        title={title}
        onChange={() => onChange(value)}
        {...props}
        type="checkbox"
      />
      <LabelComponent onClick={() => onClick(value)} $isChecked={isChecked}>
        {text}
      </LabelComponent>
    </Label>
  );
}

export default Checkbox;

import React from "react";
import { Ul, Li } from "/src/components/tags";
import Checkbox from "/src/components/ui/checkbox/checkbox";

// Чеклист
function CheckboxList({
  selectValues, // массив выбранных значений
  labelComponent, // Компонент для отображения label
  options, // массив с объектами для выбора {title: заголовок, value: значение}
  title, // имя
  onChange, // событие при изменении
  isGridList,
  onClickLabel = () => {}
}) {
  const handleChange = (value) => {
    const newValue = [...selectValues];
    const indexValue = newValue.indexOf(value);
    if (indexValue !== -1) {
      newValue.splice(indexValue, 1);
    } else {
      newValue.push(value);
    }
    onChange && onChange(newValue);
  };

  return (
    <Ul $isGridList={isGridList}>
      {options?.map((option, index) => (
        <Li key={option.value}>
          <Checkbox
            labelComponent={labelComponent}
            selectValues={selectValues}
            isChecked={selectValues.includes(option.value)}
            title={title}
            value={option.value}
            text={option.title}
            onClick={(value) => onClickLabel(value, index)}
            onChange={handleChange}
          />
        </Li>
      ))}
    </Ul>
  );
}

export default CheckboxList;

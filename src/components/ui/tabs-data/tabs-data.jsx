import React from "react";
import { Ul } from "/src/components/tags";
import { Option, Property } from "./styles";

function tabsData({ list = [], divider = ": " }) {
  return (
    <Ul>
      {list.map((option, index) => (
        <Option key={`tab${index * 10}`}>
          <Property>
            {option.property}
            {divider}
          </Property>
          {option.value}
        </Option>
      ))}
    </Ul>
  );
}

export default tabsData;

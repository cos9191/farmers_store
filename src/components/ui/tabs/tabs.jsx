import React, { useState } from "react";
import { Header, TabListItem, TabButton, Content } from "./styles";
import styled from "styled-components";

const Wrapper = styled.div`
  padding-bottom: 15px;
`;

function Tabs({ tabList = [], maxContentHeight }) {
  const [selectIndex, setSelectIndex] = useState(0);

  return (
    <Wrapper>
      <Header>
        {tabList.map((tab, index) => (
          <TabListItem key={`tab${index * 10}`}>
            <TabButton
              $isSelect={selectIndex === index}
              {...(selectIndex === index
                ? { as: "span" }
                : {
                    onClick: () => {
                      setSelectIndex(index);
                    }
                  })}
            >
              {tab.title}
            </TabButton>
          </TabListItem>
        ))}
      </Header>
      <Content $maxContentHeight={maxContentHeight}>
        {tabList[selectIndex].content}
      </Content>
    </Wrapper>
  );
}

export default Tabs;

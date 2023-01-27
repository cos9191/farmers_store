import React from "react";
import FeatureCard from "/src/components/ui/feature-card/feature-card";
import { Ul, Li } from "/src/components/tags";
import { Features, StyledButton, StyledTitle } from "./styles";

function FeaturesList({ features }) {
  return features ? (
    <Features>
      <StyledTitle as="h2">Почему фермерские продукты лучше?</StyledTitle>
      <Ul $isGridList>
        {features.map((feature) => (
          <Li key={feature.id}>
            <FeatureCard {...feature} />
          </Li>
        ))}
      </Ul>
      <StyledButton minWidth={260} link="/order">
        Купить
      </StyledButton>
    </Features>
  ) : null;
}

export default FeaturesList;

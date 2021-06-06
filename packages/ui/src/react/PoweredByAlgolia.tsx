import React from "react";
import styled from "styled-components";
import { Algolia } from "styled-icons/fa-brands/Algolia";

const Wrap = styled.span`
  padding: 0;
  font-size: 0.6em;
  text-align: end;
`;

export const PoweredBy = () => (
  <Wrap>
    Powered by{` `}
    <a href="https://algolia.com">
      <Algolia size="1em" /> Algolia
    </a>
  </Wrap>
);

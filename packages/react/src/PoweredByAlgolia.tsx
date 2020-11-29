import React from 'react'
import { styled } from '@linaria/react'

const Wrap = styled.span`
  padding: 0;
  font-size: 0.6em;
  text-align: end;
`

export const PoweredBy = () => (
  <Wrap>
    Powered by{` `}
    <a href="https://algolia.com">
      Algolia
    </a>
  </Wrap>
)

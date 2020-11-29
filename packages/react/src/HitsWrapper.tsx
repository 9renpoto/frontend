import { styled } from '@linaria/react'

export const HitsWrapper = styled.div<{ show: boolean }>`
  top: calc(100% + 0.5em);
  right: 0;
  z-index: 2;
  display: ${(props) => (props.show ? `grid` : `none`)};
  max-width: 30em;
  max-height: 80vh;
  padding: 0.7em 1em 0.4em;
  overflow: scroll;
  background: white;
  border-radius: var(--theme-small-border-radius);
  box-shadow: 0 0 5px 0;
  -webkit-overflow-scrolling: touch;
  > * + * {
    padding-top: 1em !important;
    border-top: 2px solid var(--theme-dark-gray);
  }
  li + li {
    padding-top: 0.7em;
    margin-top: 0.7em;
    border-top: 1px solid var(--theme-light-gray);
  }
  * {
    padding: 0;
    margin-top: 0;
  }
  ul {
    list-style: none;
  }
  mark {
    color: var(--theme-light-blue);
    background: var(--theme-dark-blue);
  }
  h3 {
    margin: 0 0 0.5em;
  }
  h4 {
    margin-bottom: 0.3em;
  }
  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.3em;
    h3 {
      padding: 0.1em 0.4em;
      background: var(--theme-gray);
      border-radius: var(--theme-small-border-radius);
    }
  }
`

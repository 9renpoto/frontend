import { css } from '@linaria/core'
import { styled } from '@linaria/react'
import { SearchIcon } from './SearchIcon'

const focus = css`
  width: 5em;
  color: var(--dark-blue);
  cursor: text;
  background: white;
  + ${SearchIcon} {
    margin: 0.3em;
    color: var(--dark-blue);
  }
`

const collapse = css`
  width: 0;
  padding-left: '1.6em';
  margin-left: '-1.6em';
  color: var(--theme-light-blue);
  cursor: pointer;
  + ${SearchIcon} {
    color: white;
  }
  ${focus}
  ::placeholder {
    color: var(--theme-gray);
  }
`

const expand = css`
  width: 6em;
  padding-left: 1.6em;
  margin-left: -1.6em;
  background: var(--very-light-gray);
  + ${SearchIcon} {
    margin: 0.3em;
  }
`

export const Input = styled.input<{ collapse?: boolean }>`
  font-size: 1em;
  background: transparent;
  border: none;
  border-radius: var(--theme-small-border-radius);
  outline: none;
  transition: var(--theme-short-trans);
  ${(props) => (props.collapse ? collapse : expand)};
`

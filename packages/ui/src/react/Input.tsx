import styled, { css } from 'styled-components'
import { SearchIcon } from './SearchIcon'

const focus = css`
  width: 5em;
  color: ${(props: any) => props.theme.darkBlue};
  cursor: text;
  background: white;
  + ${SearchIcon} {
    margin: 0.3em;
    color: ${(props: any) => props.theme.darkBlue};
  }
`

const collapse = css`
  width: 0;
  padding-left: ${(props: any) => (props.focus ? `1.6em` : `1em`)};
  margin-left: ${(props: any) => (props.focus ? `-1.6em` : `-1em`)};
  color: ${(props) => props.theme.lightBlue};
  cursor: pointer;
  + ${SearchIcon} {
    color: white;
  }
  ${(props: any) => props.focus && focus}
  ::placeholder {
    color: ${(props: any) => props.theme.gray};
  }
`

const expand = css`
  width: 6em;
  padding-left: 1.6em;
  margin-left: -1.6em;
  background: ${(props) => props.theme.veryLightGray};
  + ${SearchIcon} {
    margin: 0.3em;
  }
`

export const Input = styled.input`
  font-size: 1em;
  background: transparent;
  border: none;
  border-radius: ${(props: any) => props.theme.smallBorderRadius};
  outline: none;
  transition: ${(props: any) => props.theme.shortTrans};
  ${(props: { collapse?: boolean }) => (props.collapse ? collapse : expand)};
`

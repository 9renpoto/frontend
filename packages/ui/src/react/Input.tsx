import styled, { css } from 'styled-components'
import { SearchIcon } from './SearchIcon'

const focus = css`
  background: white;
  color: ${(props: any) => props.theme.darkBlue};
  cursor: text;
  width: 5em;
  + ${SearchIcon} {
    color: ${(props: any) => props.theme.darkBlue};
    margin: 0.3em;
  }
`

const collapse = css`
  width: 0;
  cursor: pointer;
  color: ${(props) => props.theme.lightBlue};
  + ${SearchIcon} {
    color: white;
  }
  ${(props: any) => props.focus && focus}
  margin-left: ${(props: any) => (props.focus ? `-1.6em` : `-1em`)};
  padding-left: ${(props: any) => (props.focus ? `1.6em` : `1em`)};
  ::placeholder {
    color: ${(props: any) => props.theme.gray};
  }
`

const expand = css`
  background: ${(props) => props.theme.veryLightGray};
  width: 6em;
  margin-left: -1.6em;
  padding-left: 1.6em;
  + ${SearchIcon} {
    margin: 0.3em;
  }
`

export const Input = styled.input`
  outline: none;
  border: none;
  font-size: 1em;
  background: transparent;
  transition: ${(props: any) => props.theme.shortTrans};
  border-radius: ${(props: any) => props.theme.smallBorderRadius};
  ${(props: { collapse?: boolean }) => (props.collapse ? collapse : expand)};
`

import React from 'react'
import styled, { css } from 'styled-components'
import { Algolia } from 'styled-icons/fa-brands/Algolia'
import { Search } from 'styled-icons/fa-solid/Search'

export const Root = styled.div`
  position: relative;
  display: grid;
  grid-gap: 1em;
`

export const SearchIcon = styled(Search)`
  width: 1em;
  pointer-events: none;
`

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

export const Form = styled.form`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`

export const HitsWrapper = styled.div`
  display: ${(props: { show: boolean }) => (props.show ? `grid` : `none`)};
  max-height: 80vh;
  overflow: scroll;
  z-index: 2;
  -webkit-overflow-scrolling: touch;
  right: 0;
  top: calc(100% + 0.5em);
  max-width: 30em;
  box-shadow: 0 0 5px 0;
  padding: 0.7em 1em 0.4em;
  background: white;
  border-radius: ${(props: any) => props.theme.smallBorderRadius};
  > * + * {
    padding-top: 1em !important;
    border-top: 2px solid ${(props: any) => props.theme.darkGray};
  }
  li + li {
    margin-top: 0.7em;
    padding-top: 0.7em;
    border-top: 1px solid ${(props: any) => props.theme.lightGray};
  }
  * {
    margin-top: 0;
    padding: 0;
  }
  ul {
    list-style: none;
  }
  mark {
    color: ${(props: any) => props.theme.lightBlue};
    background: ${(props: any) => props.theme.darkBlue};
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
      background: ${(props: any) => props.theme.gray};
      padding: 0.1em 0.4em;
      border-radius: ${(props: any) => props.theme.smallBorderRadius};
    }
  }
`

const Wrap = styled.span`
  font-size: 0.6em;
  text-align: end;
  padding: 0;
`

export const PoweredBy = () => (
  <Wrap>
    Powered by{` `}
    <a href="https://algolia.com">
      <Algolia size="1em" /> Algolia
    </a>
  </Wrap>
)

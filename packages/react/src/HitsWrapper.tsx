import styled from 'styled-components'

export const HitsWrapper = styled.div`
  top: calc(100% + 0.5em);
  right: 0;
  z-index: 2;
  display: ${(props: { show: boolean }) => (props.show ? `grid` : `none`)};
  max-width: 30em;
  max-height: 80vh;
  padding: 0.7em 1em 0.4em;
  overflow: scroll;
  background: white;
  border-radius: ${(props: any) => props.theme.smallBorderRadius};
  box-shadow: 0 0 5px 0;
  -webkit-overflow-scrolling: touch;
  > * + * {
    padding-top: 1em !important;
    border-top: 2px solid ${(props: any) => props.theme.darkGray};
  }
  li + li {
    padding-top: 0.7em;
    margin-top: 0.7em;
    border-top: 1px solid ${(props: any) => props.theme.lightGray};
  }
  * {
    padding: 0;
    margin-top: 0;
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
      padding: 0.1em 0.4em;
      background: ${(props: any) => props.theme.gray};
      border-radius: ${(props: any) => props.theme.smallBorderRadius};
    }
  }
`

import styled from 'styled-components';

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

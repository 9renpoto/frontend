import React from 'react'
import { SearchBoxProvided } from 'react-instantsearch-core'
import { connectSearchBox } from 'react-instantsearch-dom'
import { Form, Input, SearchIcon } from './Styles'

export default connectSearchBox(
  ({ refine, ...rest }: SearchBoxProvided & { onFocus: () => void }) => (
    <Form>
      <Input
        type="text"
        placeholder="Search"
        aria-label="Search"
        onChange={(e) => refine(e.target.value)}
        {...rest}
      />
      <SearchIcon />
    </Form>
  ),
)

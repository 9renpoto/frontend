import React from 'react'
import { connectSearchBox } from 'react-instantsearch-dom'
import { SearchIcon, Form, Input } from './Styles'
import { SearchBoxProvided } from 'react-instantsearch-core'

export default connectSearchBox(
  ({ refine, ...rest }: SearchBoxProvided & { onFocus: () => void }) => (
    <Form>
      <Input
        type="text"
        placeholder="Search"
        aria-label="Search"
        onChange={e => refine(e.target.value)}
        {...rest}
      />
      <SearchIcon />
    </Form>
  )
)

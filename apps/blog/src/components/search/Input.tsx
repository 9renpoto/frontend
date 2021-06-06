import { Form } from "@9renpoto/ui/react/Form";
import { Input } from "@9renpoto/ui/react/Input";
import { SearchIcon } from "@9renpoto/ui/react/SearchIcon";
import React from "react";
import { SearchBoxProvided } from "react-instantsearch-core";
import { connectSearchBox } from "react-instantsearch-dom";

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
  )
);

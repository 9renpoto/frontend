import { HitsWrapper } from "@9renpoto/ui/react/HitsWrapper";
import { PoweredBy } from "@9renpoto/ui/react/PoweredByAlgolia";
import { Root } from "@9renpoto/ui/react/Root";
import algoliasearch from "algoliasearch/lite";
import React, {
  createRef,
  Fragment,
  RefObject,
  useEffect,
  useState,
} from "react";
import {
  connectStateResults,
  Hits,
  Index,
  InstantSearch,
} from "react-instantsearch-dom";
import * as hitComps from "./HitComps";
import Input from "./Input";

const Results = connectStateResults(
  ({ searchState: state, searchResults: res, children }) => (
    <Fragment>
      {res?.nbHits > 0 ? children : `No results for '${state.query}'`}
    </Fragment>
  )
);

const Stats = connectStateResults(({ searchResults: res }) => (
  <Fragment>
    {res?.nbHits > 0 && `${res.nbHits} result${res.nbHits > 1 ? `s` : ``}`}
  </Fragment>
));

const useClickOutside = (
  ref: RefObject<HTMLElement>,
  handler: { (): void; (): void }
) => {
  const events = [`mousedown`, `touchstart`];
  const detectClickOutside = (event: any) =>
    !(ref.current && ref.current.contains(event.target)) && handler();

  useEffect(() => {
    for (const event of events) {
      document.addEventListener(event, detectClickOutside);
    }
    return () => {
      for (const event of events) {
        document.removeEventListener(event, detectClickOutside);
      }
    };
  });
};

type IndexType = {
  name: string;
  title: string;
  hitComp: "PageHit" | "PostHit";
};

interface Props {
  indices: IndexType[];
  collapse?: boolean;
}

export default function Search({ indices, collapse }: Props) {
  const ref = createRef<HTMLElement>();
  const [query, setQuery] = useState(``);
  const [focus, setFocus] = useState(false);

  useClickOutside(ref, () => setFocus(false));

  if (
    !process.env.GATSBY_ALGOLIA_APP_ID ||
    !process.env.GATSBY_ALGOLIA_SEARCH_KEY
  ) {
    return null;
  }

  const searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID,
    process.env.GATSBY_ALGOLIA_SEARCH_KEY
  );
  return (
    <InstantSearch
      searchClient={searchClient}
      indexName={indices[0].name}
      onSearchStateChange={({ query: q }) => {
        if (q) {
          setQuery(q);
        }
      }}
      root={{ Root, props: { ref } }}
    >
      <Input onFocus={() => setFocus(true)} {...{ collapse, focus }} />
      <HitsWrapper show={query.length > 0 && focus}>
        {indices.map(({ name, title, hitComp }: IndexType) => (
          <Index key={name} indexName={name}>
            <header>
              <h3>{title}</h3>
              <Stats />
            </header>
            <Results>
              <Hits<hitComps.HitCompProps>
                hitComponent={(hitComps as any)[hitComp](() => setFocus(false))}
              />
            </Results>
          </Index>
        ))}
        <PoweredBy />
      </HitsWrapper>
    </InstantSearch>
  );
}

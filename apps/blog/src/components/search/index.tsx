import React, { useState, useEffect, createRef, Fragment } from 'react'
import {
  InstantSearch,
  Index,
  Hits,
  connectStateResults,
} from 'react-instantsearch-dom'
import algoliasearch from 'algoliasearch/lite'
import { Root, HitsWrapper, PoweredBy } from './Styles'
import Input from './Input'
import * as hitComps from './HitComps'

const Results = connectStateResults(
  ({ searchState: state, searchResults: res, children }) => (
    <Fragment>
      {res && res.nbHits > 0 ? children : `No results for '${state.query}'`}
    </Fragment>
  ),
)

const Stats = connectStateResults(({ searchResults: res }) => (
  <Fragment>
    {res &&
      res.nbHits > 0 &&
      `${res.nbHits} result${res.nbHits > 1 ? `s` : ``}`}
  </Fragment>
))

const useClickOutside = (
  ref: React.RefObject<any>,
  handler: { (): void; (): void },
  events: string[] | undefined = [`mousedown`, `touchstart`],
) => {
  const detectClickOutside = (event: any) =>
    !ref.current.contains(event.target) && handler()

  useEffect(() => {
    for (const event of events) {
      document.addEventListener(event, detectClickOutside)
    }
    return () => {
      for (const event of events) {
        document.removeEventListener(event, detectClickOutside)
      }
    }
  })
}

type IndexType = {
  name: string
  title: string
  hitComp: 'PageHit' | 'PostHit'
}

interface Props {
  indices: IndexType[]
  collapse?: boolean
}

export default function Search({ indices, collapse }: Props) {
  const ref = createRef()
  const [query, setQuery] = useState(``)
  const [focus, setFocus] = useState(false)

  useClickOutside(ref, () => setFocus(false))
  if (!process.env.GATSBY_ALGOLIA_APP_ID || !process.env.ALGOLIA_ADMIN_KEY) {
    return null
  }

  const searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID,
    process.env.ALGOLIA_ADMIN_KEY,
  )
  return (
    <InstantSearch
      searchClient={searchClient}
      indexName={indices[0].name}
      onSearchStateChange={({ query }) => setQuery(query)}
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
  )
}

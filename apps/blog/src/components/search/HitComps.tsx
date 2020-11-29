import { Link } from 'gatsby'
import React from 'react'
import { Hit } from 'react-instantsearch-core'
import { Highlight, Snippet } from 'react-instantsearch-dom'
import { Calendar } from 'heroicons-react'

export interface HitCompProps {
  hit: {
    fields?: {
      slug?: string
    }
    tags: string[]
  }
}

export const PageHit = (
  clickHandler:
    | ((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void)
    | undefined,
) => ({ hit }: Hit<HitCompProps>) => {
  if (!hit?.fields?.slug) {
    return null
  }
  return (
    <div>
      <Link to={hit.fields.slug} onClick={clickHandler}>
        <h4>
          <Highlight attribute="title" hit={hit} tagName="mark" />
        </h4>
      </Link>
      <Snippet attribute="excerpt" hit={hit} tagName="mark" />
    </div>
  )
}

export const PostHit = (
  clickHandler:
    | ((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void)
    | undefined,
) => ({ hit }: Hit<HitCompProps>) => {
  if (!hit?.fields?.slug) {
    return null
  }
  return (
    <div>
      <Link to={hit.fields.slug} onClick={clickHandler}>
        <h4>
          <Highlight attribute="title" hit={hit} tagName="mark" />
        </h4>
      </Link>
      <div>
        <Calendar size="1em" />
        &nbsp;
        <Highlight attribute="date" hit={hit} tagName="mark" />
        &emsp;
      </div>
      <Snippet attribute="excerpt" hit={hit} tagName="mark" />
    </div>
  )
}

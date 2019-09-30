import React, { Fragment } from 'react'
import { Highlight, Snippet } from 'react-instantsearch-dom'
import { Link } from 'gatsby'
import { Calendar } from 'styled-icons/octicons/Calendar'
import { Tags } from 'styled-icons/fa-solid/Tags'
import { Hit } from 'react-instantsearch-core'

export interface HitCompProps {
  hit: {
    slug: string
    tags: string[]
  }
}

export const PageHit = (
  clickHandler:
    | ((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void)
    | undefined,
) => ({ hit }: Hit<HitCompProps>) => {
  return (
    <div>
      <Link to={hit.slug} onClick={clickHandler}>
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
) => ({ hit }: Hit<HitCompProps>) => (
  <div>
    <Link to={`/blog` + hit.slug} onClick={clickHandler}>
      <h4>
        <Highlight attribute="title" hit={hit} tagName="mark" />
      </h4>
    </Link>
    <div>
      <Calendar size="1em" />
      &nbsp;
      <Highlight attribute="date" hit={hit} tagName="mark" />
      &emsp;
      <Tags size="1em" />
      &nbsp;
      {hit.tags.map((tag: string, index: number) => (
        <Fragment key={tag}>
          {index > 0 && `, `}
          {tag}
        </Fragment>
      ))}
    </div>
    <Snippet attribute="excerpt" hit={hit} tagName="mark" />
  </div>
)

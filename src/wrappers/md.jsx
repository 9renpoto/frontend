/* @flow */
import React, { Component } from 'react'
import moment from 'moment'
import Helmet from 'react-helmet'

import { ReadNext } from '../components/ReadNext'
import { Bio } from '../components/Bio'
import styles from '../components/zenburn.css'

type Props = {
  route: Object
}

export default class MarkdownWrapper extends Component {
  props: Props
  render () {
    const { route } = this.props
    const post = route.page.data

    return (
      <div className={styles.markdown}>
        <Helmet
          title={`${post.title}`}
        />
        <h1 style={{marginTop: 0}}>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
        <em
          style={{
            display: 'block'
          }}
        >
          Posted {moment(post.date).format('MMMM D, YYYY')}
        </em>
        <hr />
        <ReadNext post={post} pages={route.pages} />
        <Bio />
      </div>
    )
  }
}

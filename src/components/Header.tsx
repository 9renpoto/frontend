import * as classnames from 'classnames'
import * as React from 'react'

export type Props = {
  Logo: Function;
  titles: Array<string>;
  baseUrl: string;
}

export type State = {
  isActive: boolean;
}

const NAVBAR = 'navbar'
const ID = `navMenu`

export class Header extends React.PureComponent<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {
      isActive: false
    }
  }
  render () {
    const { Logo, titles, baseUrl } = this.props
    return (
      <header className={`${NAVBAR} is-fixed-top`}>
        <div className={`${NAVBAR}-brand`}>
          {Logo(`${NAVBAR}-item`)}
          <div
            className={classnames({
              [`${NAVBAR}-burger burger`]: true,
              'is-active': this.state.isActive
            })}
            data-target={ID}
            onClick={_ => this.setState({ isActive: !this.state.isActive })}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div
          className={classnames({
            [`${NAVBAR}-menu`]: true,
            'is-active': this.state.isActive
          })}
          id={ID}
        >
          <div className={`${NAVBAR}-end`}>
            {titles.map((title, index) => (
              <a
                className={`${NAVBAR}-item`}
                href={`${baseUrl}/${title}/`}
                key={index}
              >
                {title}
              </a>
            ))}
          </div>
        </div>
      </header>
    )
  }
}

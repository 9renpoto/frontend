import classnames from 'classnames'
import { h, Component } from 'preact'

export type Props = {
  titles: Array<string>
  baseUrl: string
}

export type State = {
  isActive: boolean
}

const NAVBAR = 'navbar'
const ID = `navMenu`

export class Header extends Component<Props, State> {
  state: State = {
    isActive: false,
  }
  render() {
    const { titles, baseUrl } = this.props
    return (
      <header className={`${NAVBAR}`}>
        <div className={`${NAVBAR}-brand`}>
          <div
            className={classnames({
              [`${NAVBAR}-burger burger`]: true,
              'is-active': this.state.isActive,
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
            'is-active': this.state.isActive,
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

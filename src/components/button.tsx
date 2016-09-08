import * as React from 'react'

export class Button extends React.Component<any, any> {
  render() {
    const text = this.props.text || 'Btn'
    return (
      <div>
        <button>{text}</button>
      </div>
    )
  }
}

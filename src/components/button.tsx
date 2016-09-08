import * as React from 'react'

export class Button extends React.Component<any, any> {
  render() {
    return (
      <div>
        <button>
          {this.props.text}
        </button>
      </div>
    )
  }
}

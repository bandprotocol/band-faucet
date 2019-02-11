import React from 'react'
import FaucetRender from './FaucetRender'

export default class Faucet extends React.Component {
  state = {
    address: '',
  }

  onChange(e) {
    this.setState({
      address: e.target.value,
    })
  }

  onClick() {
    console.log(this.state.address)
  }

  render() {
    return (
      <FaucetRender
        address={this.state.address}
        onChange={this.onChange.bind(this)}
        onClick={this.onClick.bind(this)}
      />
    )
  }
}

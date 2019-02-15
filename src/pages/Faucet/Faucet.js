import React from 'react'
import FaucetRender from './FaucetRender'
import axios from 'axios'

export default class Faucet extends React.Component {
  state = {
    address: '',
    result: [],
  }

  onChange(e) {
    this.setState({
      address: e.target.value,
    })
  }

  async onClick() {
    try {
      const { data } = await axios.post(
        'https://stable-api-band.herokuapp.com/band/request',
        {
          to: this.state.address,
          value: '1000000000000000000000',
        },
      )
      this.setState({
        result: [
          ...this.state.result,
          {
            message: 'Send BandToken to ' + this.state.address,
            link: 'https://rinkeby.etherscan.io/tx/' + data.result,
          },
        ],
        error: '',
      })
    } catch (e) {
      this.setState({ error: e.response.data.message.to })
    }
  }

  render() {
    const { address, result, error } = this.state
    return (
      <FaucetRender
        address={address}
        result={result}
        error={error}
        onChange={this.onChange.bind(this)}
        onClick={this.onClick.bind(this)}
      />
    )
  }
}

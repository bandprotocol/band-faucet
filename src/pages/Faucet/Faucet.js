import React from 'react'
import FaucetRender from './FaucetRender'
import axios from 'axios'

export default class Faucet extends React.Component {
  state = {
    address: '',
    result: null,
    error: null,
    loading: false,
  }

  onChange(e) {
    const newAddr = (e.target && e.target.value) || ''
    this.setState({
      address: newAddr,
    })
  }

  async onClick() {
    this.setState(
      {
        loading: true,
      },
      async () => {
        try {
          const { data } = await axios.post(
            `${process.env.REACT_APP_API_PATH}/band/request`,
            {
              to: this.state.address,
              value: '100000000000000000000',
            },
          )
          this.setState({
            result: {
              message: 'Send BandToken to ' + this.state.address,
              link: 'https://rinkeby.etherscan.io/tx/' + data.result,
            },
            address: '',
            error: null,
            loading: false,
          })
        } catch (e) {
          this.setState({ error: e.response.data.message.to, loading: false })
        }
      },
    )
  }

  render() {
    const { address, result, error, loading } = this.state
    return (
      <FaucetRender
        address={address}
        result={result}
        error={error}
        loading={loading}
        onChange={this.onChange.bind(this)}
        onClick={this.onClick.bind(this)}
      />
    )
  }
}

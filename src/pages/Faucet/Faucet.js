import React from 'react'
import FaucetRender from './FaucetRender'
import axios from 'axios'
import checkEmail from '../../helpers/checkEmail'

export default class Faucet extends React.Component {
  state = {
    address: '',
    email: '',
    result: null,
    error: null,
    loading: false,
  }

  onChange(e) {
    const { name, value } = e.target
    this.setState({
      [name]: value,
    })
  }

  async onClick() {
    if (!checkEmail(this.state.email)) {
      this.setState({
        error: 'Please input valid email.',
      })
      return null
    }
    this.setState(
      {
        loading: true,
      },
      async () => {
        const { email, address } = this.state
        try {
          await axios.post(
            'https://testnet.bandprotocol.com/kovan/faucet/request',
            {
              email,
              address,
            },
          )
          this.setState({
            result: {
              message: 'Success',
            },
            address: '',
            error: null,
            loading: false,
          })
        } catch (e) {
          this.setState({
            result: null,
            address: '',
            error: e.response.data.message,
            loading: false,
          })
        }
      },
    )
  }

  render() {
    const { address, email, result, error, loading } = this.state
    return (
      <FaucetRender
        address={address}
        email={email}
        result={result}
        error={error}
        loading={loading}
        onChange={this.onChange.bind(this)}
        onClick={this.onClick.bind(this)}
      />
    )
  }
}

import React, { Component } from 'react'
import CreateCommunityRender from './CreateCommunityRender'
import BandProtocolClient from 'band.js'

export default class CreateCommunity extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      symbol: '',
      logo: '',
      description: '',
      website: '',
      author: '',
      priceEquation: 'x^2 + 10',
      voting: '0x6cb37a5Bf9147d1d2789014BFe37ca41a61F3d4e',
      collateralEquation: '8*x^2',
      kvs: {
        'params:expiration_time': '60',
        'params:min_participation_pct': '6',
        'params:support_required_pct': '5',
      },
    }

    this.handleField = this.handleField.bind(this)
    this.handleKeyValue = this.handleKeyValue.bind(this)
    this.handleRemoveKey = this.handleRemoveKey.bind(this)
    this.handleAddKey = this.handleAddKey.bind(this)
    this.handleCreateComm = this.handleCreateComm.bind(this)
  }

  handleField(fieldName, target) {
    this.setState({ [fieldName]: target })
  }

  handleKeyValue(kv) {
    this.setState({
      kvs: { ...this.state.kvs, ...kv },
    })
  }

  handleRemoveKey(key) {
    const tmpKVs = { ...this.state.kvs }
    delete tmpKVs[key]
    this.setState({
      kvs: tmpKVs,
    })
  }

  handleAddKey(key) {
    if (key && key !== '' && !(key in this.state.kvs)) {
      this.setState({
        kvs: { ...this.state.kvs, [key]: '' },
      })
    }
  }

  async handleCreateComm() {
    const bandClient = await BandProtocolClient.make({
      provider: window.web3.currentProvider,
    })
    const keys = []
    const values = []
    for (var k in this.state.kvs) {
      keys.push(k)
      if (isNaN(this.state.kvs[k])) {
        values.push(this.state.kvs[k])
      } else {
        values.push(parseInt(this.state.kvs[k]))
      }
    }

    await bandClient.deployCommunity(
      this.state.name,
      this.state.symbol,
      this.state.logo,
      this.state.description,
      this.state.website,
      this.state.author,
      this.state.priceEquation,
      this.state.voting,
      keys,
      values,
      this.state.collateralEquation,
    )
  }

  render() {
    return (
      <CreateCommunityRender
        handleAddKey={this.handleAddKey}
        handleRemoveKey={this.handleRemoveKey}
        handleField={this.handleField}
        handleKeyValue={this.handleKeyValue}
        state={this.state}
        handleCreateComm={this.handleCreateComm}
      />
    )
  }
}

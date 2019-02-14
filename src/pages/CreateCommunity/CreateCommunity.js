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
      priceEquation:
        'x * ((2* x / 2000000000000000000000000000000000000) ^ 2) * curve / 1000000000000',
      voting: '0x8fAcfD1352EBc1F8Bb49d6C557609Ac35177d046',
      collateralEquation: '(x^2 / 2000000000000000000000000000000000000) ^ 2',
      kvs: {
        'params:expiration_time': '60',
        'params:min_participation_pct': '6',
        'params:support_required_pct': '5',
        'core:admin_contract':
          '873375337124523905233580799053805408053028940486',
        'core:reward_period': '120',
        'core:reward_edit_period': '120',
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
      values.push(this.state.kvs[k])
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

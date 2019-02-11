import React, { Component } from 'react'
import CreateCommunityRender from './CreateCommunityRender'

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
      priceEquation: '',
      voting: '',
      collateralEquation: '',
      kvs: {
        key1: 'val1',
        key2: 'val2',
        key3: 'val3',
      },
    }

    this.handleField = this.handleField.bind(this)
    this.handleKeyValue = this.handleKeyValue.bind(this)
    this.handleRemoveKey = this.handleRemoveKey.bind(this)
    this.handleAddKey = this.handleAddKey.bind(this)
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

  render() {
    return (
      <CreateCommunityRender
        handleAddKey={this.handleAddKey}
        handleRemoveKey={this.handleRemoveKey}
        handleField={this.handleField}
        handleKeyValue={this.handleKeyValue}
        state={this.state}
      />
    )
  }
}

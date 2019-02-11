import React, { Component } from 'react'
import ListColumnRender from './ListColumnRender'

export default class ListColumn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      key: '',
    }
    this.handleKeyChange = this.handleKeyChange.bind(this)
    this.setKey = this.setKey.bind(this)
  }

  handleKeyChange(newKey) {
    this.setState({
      key: newKey,
    })
  }

  setKey() {
    this.props.handleAddKey(this.state.key)
    this.setState({
      key: '',
    })
  }

  render() {
    return (
      <ListColumnRender
        {...this.props}
        handleKeyChange={this.handleKeyChange}
        setKey={this.setKey}
        state={this.state}
      />
    )
  }
}

// modules/Repo.js
import React from 'react'

export default React.createClass({
  render() {
    return (
      <div>
        <h2>Label: {this.props.params.labelName}</h2>
      </div>
    )
  }
})
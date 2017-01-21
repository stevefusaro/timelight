import React from 'react'

import GraphLabelList from './GraphLabelList'

function H1(props) {
  return (
    <h1>Graph</h1>
  );
}

export default React.createClass({
  render() {
    return <div> <H1 /> <GraphLabelList /></div>
  }
})
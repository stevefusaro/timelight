import React from 'react'
import _ from 'lodash'

class GraphLabel extends React.Component{

  constructor() {
    super()
    this.state = { nodes: [] }
  }

  componentDidMount() {
    this.fetchNodes()
  }

  fetchNodes() {
    const url = 'http://localhost:8000/graph/label_nodes';
    fetch(url,)
      .then(response => response.json())
      .then(responseJson => 
        this.setState({nodes:responseJson})
      )
      .catch(error => console.error(error));
  }

  nodeDisplay(node) {
    return Object.keys(node.properties).map(k =>
      <span key={k}><b>{k}</b> = {node.properties[k]}</span>
    )
  }

  render() {
    return (
      <div>
        <h2>Label: {this.props.params.labelName}</h2>
        <h4>Nodes</h4>
        <ul>
          {this.state.nodes.map(node =>
            <li key={node.id}>
              {this.nodeDisplay(node)}
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default GraphLabel;
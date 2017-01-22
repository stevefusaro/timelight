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

  // Not used
  nodeDisplay(node) {
    return Object.keys(node.properties).map(k =>
      <span key={k}><b>{k}</b> = {node.properties[k]}</span>
    )
  }

  tableHeaders() {
    if (this.state.nodes.length > 0){
      return Object.keys(this.state.nodes[0].properties).map(key =>
        <th key={key}>{key}</th>
      )
    }
  }

  tableRows() {
    return this.state.nodes.map(node =>
      <tr key={node.id}>
        {this.tableRow(node)}
      </tr>
    )
  }

  tableRow(node) {
    return Object.keys(node.properties).map(k =>
      <td key={k}>{node.properties[k]}</td>
    )
  }

  render() {
    return (
      <div>
        <h2>Label: {this.props.params.labelName}</h2>
        <h4>Nodes</h4>
          <table className="table table-striped table-bordered table-condensed">
            <thead>
              <tr>
                {this.tableHeaders()}
              </tr>
            </thead>
            <tbody>
              {this.tableRows()}
            </tbody>
          </table>
      </div>
    )
  }
}

export default GraphLabel;
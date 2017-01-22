import React from 'react'


class GraphLabel extends React.Component{

  constructor() {
    super();
    this.state = { nodes: [] };
  }

  componentDidMount() {
    this.getNodes();
  }

  getNodes() {
    const url = 'http://localhost:8000/graph/label_nodes';
    fetch(url,)
      .then(response => response.json())
      .then(responseJson => 
        this.setState({nodes:responseJson})
      )
      .catch(error => console.error(error));
  }

  render() {
    return (
      <div>
        <h2>Label: {this.props.params.labelName}</h2>
        <h4>Nodes</h4>
        <ul>
          {this.state.nodes.map(node =>
            <li>{node.person.first_name}</li>
          )}
        </ul>
      </div>
    )
  }
}

export default GraphLabel;
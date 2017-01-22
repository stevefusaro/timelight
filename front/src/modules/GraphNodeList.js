class GraphNodeList extends React.Component {

  constructor() {
    super();
    this.state = { nodes: [] };
  }

  componentDidMount() {
    this.getNodes();
  }

  getNodes() {
    const url = 'http://127.0.0.1:8000/graph/label_nodes';
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => this.setState({nodes:responseJson}))
      .catch((error) => console.error(error));
  }

  render() {
    return (
      <div>
        <h1>Nodes for Label {this.props.label}</h1>
        <ul>
          <li>Node A</li>
          <li>Node B</li>
        </ul>
      </div>
    );
  }
}

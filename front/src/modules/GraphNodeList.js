class GraphNodeList extends React.Component {
  render() {
    return (
      <div className="graph-node-list">
        <h1>Nodes for Label {this.props.label}</h1>
        <ul>
          <li>Node A</li>
          <li>Node B</li>
        </ul>
      </div>
    );
  }
}

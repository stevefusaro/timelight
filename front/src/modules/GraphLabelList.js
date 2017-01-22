import React from 'react'
import { Link } from 'react-router'

class GraphLabelList extends React.Component {

  constructor() {
    super();
    this.state = { labels: ["first"] };
  }

  componentDidMount() {
    this.getLabels();
  }

  getLabels() {
    const url = 'http://localhost:7474/db/data/labels';
    const headers = {'Authorization': 'Basic bmVvNGo6ZXpwYXNz'}; //  + btoa('username:password')
    fetch(url, { headers })
      .then((response) => response.json())
      .then((responseJson) => this.setState({labels:responseJson}))
      .catch((error) => console.error(error));
  }

  render() {
    return (
      <div className="graph-label-list">
        <b>Node Labels</b>

        <ul>
          {this.state.labels.map(label =>
            <li key={label}>
              <Link to="/graph/label/:{label}">{label}</Link>
            </li>
          )}
        </ul>

        {this.props.children}

      </div>
    );
  }
}

export default GraphLabelList;
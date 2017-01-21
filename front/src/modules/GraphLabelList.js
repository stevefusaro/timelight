import React from 'react'
import { Link } from 'react-router'

class GraphLabelList extends React.Component {
  render() {
    return (
      <div className="graph-label-list">
        <h1>Labels</h1>
        <ul>
          <li><Link to="/graph/label/Person">Person</Link></li>
          <li>Company</li>
        </ul>
      </div>
    );
  }
}

export default GraphLabelList;
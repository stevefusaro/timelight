import React from 'react'
import { Link } from 'react-router'

class GraphLabelList extends React.Component {
  render() {
    return (
      <div className="graph-label-list">
        <b>Labels</b>
        <ul>
          <li><Link to="/graph/label/Person">Person</Link></li>
          <li><Link to="/graph/label/Company">Company</Link></li>
        </ul>

        {this.props.children}

      </div>
    );
  }
}

export default GraphLabelList;
import React from 'react'
import { Link } from 'react-router'

class GraphLabelList extends React.Component {

  getLabels() {
    let headers = {
        'Authorization': 'Basic bmVvNGo6ZXpwYXNz' //  + btoa('username:password'), 
      }
    return fetch('http://localhost:7474/db/data/labels', {headers: headers})
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  bark() {
    this.getLabels()
    return <span>WOOF</span>
  }

  render() {
    return (
      <div className="graph-label-list">
        <b>Labels</b>
        <ul>
          <li><Link to="/graph/label/Person">Person  {this.bark()} </Link></li>
          <li><Link to="/graph/label/Company">Company</Link></li>
        </ul>

        {this.props.children}

      </div>
    );
  }
}

export default GraphLabelList;
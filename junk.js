    return fetch('http://localhost:7474/db/data/labels', {headers: headers})
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
        //debugger
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });



    fetch('http://localhost:7474/db/data/labels', {headers: headers})
      .then(result => {
          this.setState({items:result.json()});
      })
      .catch((error) => {
        console.error(error);
      });


      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({labels:responseJson});
      })

                {this.state.labels.map(label => <li key={label}>{label}</li>)}



    fetch(url, {mode: 'no-cors'})
      .then((response) => response.json())
      .then((responseJson) => this.setState({nodes:responseJson}))
      .catch((error) => console.error(error));


import $ from 'jquery';

  getNodesOld() {
    var self = this;
    $.get('http://localhost:8000/graph/label_nodes')
      .done(function(data) {
        console.log(data);
        self.setState({nodes:data});
      });
  }
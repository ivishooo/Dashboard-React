import React, { Component } from 'react';

class ProductList extends Component {
  constructor(props) {
      super(props);   
      this.state = {}
  }

  apiCall(url, consecuencia) {
      fetch(url)
          .then(response => response.json())
          .then(data => consecuencia(data))
          .catch(e => console.log(e))
  }

  componentDidMount() {
      this.apiCall("http://localhost:3000/api/products", this.tableList);
  }


  tableList = (data) => {
      this.setState({
          products : data.data,
      })
  }

  render() {
      return (
    <table class="table">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            </tr>
        </thead>
        <tbody>
           
        </tbody>
    </table>
      );
  }
}

export default ProductList;
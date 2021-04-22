import React, { Component } from 'react';
import Products from './Products'

class ProductList extends Component {
  constructor(props) {
      super(props);   
      this.state = {products:[]}
  }

  apiCall(url, consecuencia) {
      fetch(url)
          .then(response => response.json())
          .then(data => consecuencia(data))
          .catch(e => console.log(e))
  }

  componentDidMount() {
      this.apiCall("https://ecommerce-yeah.herokuapp.com/api/products", this.tableList);
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
            <th scope="col">id</th>
            <th scope="col">Nombre</th>
            <th scope="col">Detalle</th>
            <th scope="col">Precio</th>
            </tr>
        </thead>
        <tbody>
        {this.state.products.map(function (product, i){
						return <Products id={product.id}name={product.name} description={product.description} price={product.price}/>
					})}
        </tbody>
    </table>
      );
  }
}

export default ProductList;
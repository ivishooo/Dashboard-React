import React, { Component } from 'react';

class lastProduct extends Component {
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
      this.apiCall("http://localhost:3000/api/products/42", this.lastProducts);
  }


  lastProducts = (data) => {
      this.setState({
          imgpath: data.data.imgpath,
          name: data.data.name,
          description: data.data.description,
          price: data.data.price
      })
  }

  render() {
      return (
        <div className="col-lg-6 mb-4">
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h6 className="m-0 font-weight-bold text-primary">Last product in Data Dase</h6>
								</div>
								<div className="card-body">
									<p>Nombre del Producto: {this.state.name}</p>
									<p>Descripcion del Producto: {this.state.description}</p>
									<p>Precio del Producto: ${this.state.price}</p>
									<a target="_blank" rel="nofollow" href="/">View product detail</a>
								</div>
							</div>
						</div>
      );
  }
}

export default lastProduct;
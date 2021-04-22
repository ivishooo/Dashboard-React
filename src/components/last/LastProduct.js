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
      this.apiCall("https://ecommerce-yeah.herokuapp.com/api/products/last", this.lastProducts);
  }


  lastProducts = (data) => {
      this.setState({
          imgpath: data.data[0].imgpath,
          name: data.data[0].name,
          description: data.data[0].description,
          price: data.data[0].price
      })
  }

  render() {
      return (
        <div className="col-lg-6 mb-4">
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h6 className="m-0 font-weight-bold text-primary">Último producto en la base de datos</h6>
								</div>
								<div className="card-body">
                                    <img style={{width: "400px", height: "250px", borderRadius: "10px", left: "0px", top: "0px", opacity: 1}} src={`https://ecommerce-yeah.herokuapp.com/uploads/products/${this.state.imgpath}`} alt= " " ></img>
									<p></p>
                                    <p>Nombre: {this.state.name}</p>
									<p>Descripción: {this.state.description}</p>
									<p>Precio: ${new Intl.NumberFormat().format(this.state.price)}</p>
								</div>
							</div>
						</div>
      );
  }
}

export default lastProduct;
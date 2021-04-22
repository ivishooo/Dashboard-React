import React, { Component } from 'react';

class amountOfProducts extends Component {
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
      this.apiCall("https://ecommerce-yeah.herokuapp.com/api/products", this.amountProducts);
  }


  amountProducts = (data) => {
      this.setState({
          products: data.meta.total,
      })
  }

  render() {
      return (
        <div className="col-md-4 mb-4">
        <div className="card border-left-success shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-success text-uppercase mb-1">Cantidad de productos en la base de datos</div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">{this.state.products}</div>
              </div>
              <div className="col-auto">
                <i className="fas fa-archive fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
  }
}

export default amountOfProducts;
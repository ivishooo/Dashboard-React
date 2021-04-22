import React, { Component } from 'react';

class amountOfCategories extends Component {
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
      this.apiCall("https://ecommerce-yeah.herokuapp.com/api/category", this.amountCategories);
  }


  amountCategories = (data) => {
      this.setState({
          categories: data.meta.total,
      })
  }

  render() {
      return (
        <div className="col-md-4 mb-4">
        <div className="card border-left-warning shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Cantidad de categorías en la base de datos
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">{this.state.categories}</div>
              </div>
              <div className="col-auto">
                <i className="fas fa-user-check fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
  }
}

export default amountOfCategories;
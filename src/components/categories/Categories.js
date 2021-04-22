import React, { Component } from 'react';
import Category from './Category'

class categories extends Component {
  constructor(props) {
      super(props);   
      this.state = {categorias:[]}
  }


  apiCall(url, consecuencia) {
      fetch(url)
          .then(response => response.json())
          .then(data => consecuencia(data))
          .catch(e => console.log(e))
  }

  componentDidMount() {
	  this.apiCall("https://ecommerce-yeah.herokuapp.com/api/category", this.CategoryData);
  }
  
  
  CategoryData = (data) => {
	  this.setState({
		  categorias:data.data
	  })  
  }
  
  render() {
      return (
        <div className="col-lg-6 mb-4">						
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Categorías en base de datos</h6>
            </div>
            <div className="card-body">
                <div className="row">
					{this.state.categorias.map(function (categoria, i){
						return <Category titulo={categoria.name} total={categoria.totalProds}/>
					})}
				</div> 
                </div>
            </div>
        </div>
      );
  }
}

export default categories;
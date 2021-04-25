import './App.css';
import React from 'react'
import Sidebar from './components/sidebar/Sidebar'
import Topbar from './components/topbar/Topbar'
import PageHeading from './components/pageHeading/PageHeading'
import AmountOfUsers from './components/amount/AmountOfUsers'
import AmountOfProducts from './components/amount/AmountOfProducts'
import AmountOfCategories from './components/amount/AmountOfCategories'
import GitIronman from './components/gif/GifIronman'
import LastProduct from './components/last/LastProduct'
import LastUser from './components/last/lastUser'
import Categories from './components/categories/Categories'
import ProductList from './components/table/ProductList'

class App extends React.Component {

  constructor(props) {
    super(props);   
    this.state = []
}

apiCall(url, consecuencia) {
    fetch(url)
        .then(response => response.json())
        .then(data => consecuencia(data))
        .catch(e => console.log(e))
}

componentDidMount() {
    this.apiCall("https://ecommerce-yeah.herokuapp.com/api/products", this.listProducts);
}


listProducts = (data) => {
    this.setState(data.data)
}

  render = () => {
    return (
      <div id="wrapper">
      <Sidebar/>
      <div id="content-wrapper" >
        <div id="content">
          <Topbar/>
          <div id="container-fluid">
            <PageHeading/>
            <div className="row">
              <AmountOfUsers />
              <AmountOfProducts/>
              <AmountOfCategories/>
              <div className="row">
                <LastProduct/>
                <LastUser/>
                <Categories/>
                <GitIronman/>
              </div>
            </div>
          </div>
          <div>
        </div>
        </div>
        <ProductList/>
      </div>
    </div>
    )
      
    }
  
  }

export default App;

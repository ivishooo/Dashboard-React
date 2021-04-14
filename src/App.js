import './App.css';
import React from 'react'
import Sidebar from './components/sidebar/Sidebar'
import Topbar from './components/topbar/Topbar'
import PageHeading from './components/pageHeading/pageHeading'
import AmountOfUsers from './components/amount/AmountOfUsers'
import AmountOfProducts from './components/amount/AmountOfProducts'
import AmountOfCategories from './components/amount/AmountOfCategories'
import LastProduct from './components/last/LastProduct'
import LastUser from './components/last/lastUser'
import Categories from './components/categories/Categories'

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
    this.apiCall("http://localhost:3000/api/products", this.listProducts);
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
              </div>
            </div>
          </div>
          <div>
        </div>
        </div>
      </div>
    </div>
    )
      
    }
  
  }

export default App;

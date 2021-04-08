import React, { Component } from 'react';

class categories extends Component {
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
      this.apiCall("http://localhost:3000/api/category", this.lastUser);
  }


  lastUser = (data) => {
      this.setState({
          titulo : data.data.title,
      })
  }

  render() {
      return (
        <div className="col-lg-6 mb-4">
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h6 className="m-0 font-weight-bold text-primary">Last User in Data Dase</h6>
								</div>
								<div className="card-body">
									<p>Id: {this.state.id}</p>
									<p>Email: {this.state.email}</p>
									<p>Username: {this.state.username}</p>
								</div>
							</div>
						</div>
      );
  }
}

export default categories;
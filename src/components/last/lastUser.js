import React, { Component } from 'react';

class lastUser extends Component {
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
      this.apiCall("https://ecommerce-yeah.herokuapp.com/api/users/last", this.lastUser);
  }


  lastUser = (data) => {
      this.setState({
          id: data.data[0].id,
          email: data.data[0].email,
          username : data.data[0].username
      })
  }

  render() {
      return (
        <div className="col-lg-6 mb-4">
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h6 className="m-0 font-weight-bold text-primary">Last User in Data Base</h6>
								</div>
								<div className="card-body">
									<p>Usuario Numero: {this.state.id}</p>
									<p>Email: {this.state.email}</p>
									<p>Username: {this.state.username}</p>
								</div>
							</div>
						</div>
      );
  }
}

export default lastUser;
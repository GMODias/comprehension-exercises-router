import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

class StrictAccess extends Component {

  acessOk = () => {
    return (
      <div>
        <p>Welcome joao!</p>
      </div>
    )
  }
    
  acessDenied = () => {
    alert("Acess Denied")
    return <Redirect to="/" />
  }
    
      render() {
        const { username, password } = this.props.user
        const { acessOk, acessDenied } = this
        return (
          <div>
            {console.log( username, password )}
            { (username==="joao" && password==="1234") ? acessOk() : acessDenied() }
          </div>
        );
      }
};

export default StrictAccess;

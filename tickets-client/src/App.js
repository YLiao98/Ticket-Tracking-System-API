import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";


class App extends Component{
  render(){
    return (
      <Router>
        
        <div class="jumbotron"style={{ backgroundColor:"white"}}>
          <h1 class="display-4" >
            <Link to="/"style={{textDecoration:'none'}}>Ticket Tracking System</Link>
          </h1>
          
          <hr class="my-4"/>
          
          
            <Link to='/' style={{margin:"5px"}}>
              <button type="button" class="btn btn-primary">
                View tickets 
              </button>
            </Link>
          
            <Link to='/create' style={{margin:"5px"}}>
              <button type="button" class="btn btn-primary">
                Submit ticket
              </button>
            </Link>
        </div>
      </Router>
        
    );
  }
  
}

export default App;

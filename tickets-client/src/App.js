import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import CreateTicket from "./Components/createTicketComponent";
import ViewTickets from "./Components/viewTicketsComponent";
import EditTicket from "./Components/editTicketComponent";

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
                Create Ticket Here
              </button>
            </Link>
        </div>
        <Route path="/create" component = {CreateTicket}/>
        <Route path="/" exact component = {ViewTickets}/>
        <Route path="/:id/edit" component = {EditTicket}/>
      </Router>
        
    );
  }
  
}

export default App;

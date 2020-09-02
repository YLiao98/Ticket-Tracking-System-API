import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Ticket extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }

  delete() {
    console.log('hitting the delete button');
    axios.delete(`http://localhost:4000/tickets/${this.props.ticket._id}/delete`)
    .then(console.log('Ticket Deleted'))
    .catch(err => console.log(err))
  }

  formatDueDate(dueDate) {
    let reg = /\d\d\d\d-\d\d-\d\d/i
    return dueDate.match(reg)[0]
  }

  render() {
    return (
      <tr>
        <td className={this.props.ticket.status === 'Finished' ? 'finished' : ''}>{this.props.ticket.title}</td>
        <td className={this.props.ticket.status === 'Finished' ? 'finished' : ''}>{this.props.ticket.assignedTo}</td>
        <td className={this.props.ticket.status === 'Finished' ? 'finished' : ''}>{this.props.ticket.status}</td>
        <td className={this.props.ticket.status === 'Finished' ? 'finished' : ''}>{this.props.ticket.type}</td>
        <td className={this.props.ticket.status === 'Finished' ? 'finished' : ''}>{this.formatDueDate(this.props.ticket.dueDate)}</td>
        <td>
          <Link to={this.props.ticket._id+'/edit'}>
              <button type="button" class="btn btn-primary">
                Edit
              </button>
          </Link>
        </td>
        <td>
          <button onClick={this.delete} className="btn btn-danger">Delete</button>
        </td>
      </tr>
    )}
}

class ViewTickets extends Component {

    constructor(props) {
        super(props);
        this.state = {tickets: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/tickets')
            .then(response => {
              console.log(response);
              this.setState({tickets: response.data});
                
            })
            .catch(function (error) {
              console.log(error);
            })
    }

    componentDidUpdate() {
        axios.get('http://localhost:4000/tickets')
        .then(response => {
          this.setState({tickets: response.data});
        })
        .catch(function (error) {
          console.log(error);
        })   
    }

    ticketList() {
        return this.state.tickets.map(function(currentTicket, i) {
            return <Ticket ticket={currentTicket} key={i} />;
        });
    }

    render() {
        return (
            <div>
                <h3>Tickets List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Assigned To</th>
                            <th>Status</th>
                            <th>Type</th>
                            <th>Due Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.ticketList() }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ViewTickets;
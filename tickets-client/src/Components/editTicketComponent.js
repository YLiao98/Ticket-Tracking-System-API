import React, {Component} from 'react';
import axios from 'axios'

class EditTicket extends Component {

constructor(props) {
    super(props);

    this.onChangeTicketTitle = this.onChangeTicketTitle.bind(this);
    this.onChangeTicketAuthor= this.onChangeTicketAuthor.bind(this);
    this.onChangeTicketDescription = this.onChangeTicketDescription.bind(this);
    this.onChangeTicketType = this.onChangeTicketType.bind(this);
    this.onChangeTicketAssignedTo = this.onChangeTicketAssignedTo.bind(this);
    this.onChangeTicketStatus = this.onChangeTicketStatus.bind(this);
    this.onChangeTicketDueDate = this.onChangeTicketDueDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.formatDate = this.formatDate.bind(this);

    this.state = {
        ticketTitle: '',
        ticketAuthor: '',
        ticketDescription: '',
        ticketType: '',
        ticketAssignedTo: '',
        ticketCreatedDate: '',
        ticketStatus: '',
        ticketDueDate: ''
    }
  }

  componentDidMount() {
    console.log("edit component mounted")
    console.log(this.props.match.params.id)
    axios.get(`http://localhost:4000/tickets/${this.props.match.params.id}`)
      .then(response => {
        console.log(response);
        this.setState({
          ticketTitle: response.data.title,
          ticketAuthor: response.data.author,
          ticketDescription: response.data.description,
          ticketType: response.data.type,
          ticketAssignedTo: response.data.assignedTo,
          ticketStatus: response.data.status,
          ticketDueDate: response.data.dueDate
        })
        console.log(this)
      })
      .catch(function(error) {
          console.log(error)
      })
  }

  onChangeTicketTitle(e) {
    this.setState({
        ticketTitle: e.target.value
    });
}

  onChangeTicketAuthor(e) {
      this.setState({
          ticketAuthor: e.target.value
      });
  }

  onChangeTicketDescription(e) {
      this.setState({
          ticketDescription: e.target.value
      });
  }

  onChangeTicketType(e) {
    this.setState({
        ticketType: e.target.value
    });
  }

  onChangeTicketAssignedTo(e) {
    this.setState({
        ticketAssignedTo: e.target.value
    });
  }

  onChangeTicketStatus(e) {
    console.log('inside handler')
    console.log(e.target.value)
    console.log(this.state.ticketStatus)
    this.setState({
        ticketStatus: e.target.value
    });
  }

  onChangeTicketDueDate(e) {
    this.setState({
        ticketDueDate: e.target.value
    });
  }

  onSubmit(e) {
      e.preventDefault();
      
      const obj = {
        title: this.state.ticketTitle,
        author: this.state.ticketAuthor,
        description: this.state.ticketDescription,
        type: this.state.ticketType,
        assignedTo: this.state.ticketAssignedTo,
        status: this.state.ticketStatus,
        dueDate: this.state.ticketDueDate
      }
      axios.put(`http://localhost:4000/tickets/${this.props.match.params.id}/edit`, obj)
          .then(res => console.log(res.data));

      this.props.history.push('/');
  }

  formatDate(dueDate) {
    if (!dueDate) {
      return ""
    }
    let reg = /\d\d\d\d-\d\d-\d\d/i
    return dueDate.match(reg)[0]
  }

  render() {
    return (
      <div>
        <h3>Update Ticket</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Title: </label>
            <input  type="text"
              className="form-control w-50"
              value={this.state.ticketTitle}
              onChange={this.onChangeTicketTitle}
            />
          </div>
          <div className="form-group">
            <label>Author: </label>
            <input  type="text"
              className="form-control w-50"
              value={this.state.ticketAuthor}
              onChange={this.onChangeTicketAuthor}
            />
          </div>
          <div className="form-group">
            <label>Description: </label>
            <textarea rows="5" 
              className="form-control rounded w-50"
              value={this.state.ticketDescription}
              onChange={this.onChangeTicketDescription}
            />
          </div>
          <div className="form-group">
            <label>Ticket Type: </label>
            <br />
            <div className="form-check form-check-inline">
              <input  className="form-check-input"
                type="radio"
                name="typeOptions"
                id="report"
                value="Report"
                checked={this.state.ticketType === 'Report'}
                onChange={this.onChangeTicketType}
              />
              <label className="form-check-label">Report</label>
            </div>
            <div className="form-check form-check-inline">
              <input  className="form-check-input"
                type="radio"
                name="typeOptions"
                id="task"
                value="Task"
                checked={this.state.ticketType === "Task"}
                onChange={this.onChangeTicketType}
              />
              <label className="form-check-label">Task</label>
            </div>
            <div className="form-check form-check-inline">
              <input  className="form-check-input"
                type="radio"
                name="typeOptions"
                id="bugFix"
                value="Bug Fix"
                checked={this.state.ticketType === 'Bug Fix'}
                onChange={this.onChangeTicketType}
              />
              <label className="form-check-label">Bug Fix</label>
            </div>
          </div>
          <div className="form-group">
            <label>Assigned To: </label>
            <input  type="text"
              className="form-control w-50"
              value={this.state.ticketAssignedTo}
              onChange={this.onChangeTicketAssignedTo}
            />
          </div>
          <div className="form-group">
            <label>Ticket Status: </label>
            <br />
            <div className="form-check form-check-inline">
              <input  className="form-check-input"
                type="radio"
                name="statusOptions"
                id="notStarted"
                value="Not Started"
                checked={this.state.ticketStatus === 'Not Started'}
                onChange={this.onChangeTicketStatus}
              />
              <label className="form-check-label">Not Started</label>
            </div>
            <div className="form-check form-check-inline">
              <input  className="form-check-input"
                type="radio"
                name="statusOptions"
                id="inProgress"
                value="In Progress"
                checked={this.state.ticketStatus === "In Progress"}
                onChange={this.onChangeTicketStatus}
              />
              <label className="form-check-label">In Progress</label>
            </div>
            <div className="form-check form-check-inline">
              <input  className="form-check-input"
                type="radio"
                name="statusOptions"
                id="finished"
                value="Finished"
                checked={this.state.ticketStatus === 'Finished'}
                onChange={this.onChangeTicketStatus}
              />
              <label className="form-check-label">Finished</label>
            </div>
          </div>
          <div className="form-group">
            <label >Ticket Due Date: </label>
            <input className="form-control w-25"
              type="date" 
              name="ticketDueDate"
              max="2022-12-31" 
              min="2019-01-01"
              onChange={this.onChangeTicketDueDate}
              value={this.formatDate(this.state.ticketDueDate)}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Update Ticket" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}

export default EditTicket;
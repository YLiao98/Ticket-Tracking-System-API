import React, {Component} from "react";
import axios from "axios";

class CreateTicket extends Component{
    constructor(props){
        super(props)
        this.state={
            ticketTitle: '',
            ticketAuthor: '',
            ticketDescription: '',
            ticketType: '',
            ticketAssignedTo: '',
            ticketCreatedDate: '',
            ticketDueDate: '',
            ticketStatus: ''
        }

        this.onChangeTicketTitle=this.onChangeTicketTitle.bind(this);
        this.onChangeTicketAuthor=this.onChangeTicketAuthor.bind(this);
        this.onChangeTicketDescription=this.onChangeTicketDescription.bind(this);
        this.onChangeTicketType=this.onChangeTicketType.bind(this);
        this.onChangeTicketAssignedTo=this.onChangeTicketAssignedTo.bind(this);
        this.onChangeTicketDueDate=this.onChangeTicketDueDate.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

    }


    onChangeTicketTitle(e){
        this.setState({
            ticketTitle: e.target.value
        });
    }

    onChangeTicketAuthor(e){
        this.setState({
            ticketAuthor: e.target.value
        });
    }

    onChangeTicketDescription(e){
        this.setState({
            ticketDescription: e.target.value
        });
    }

    onChangeTicketType(e){
        this.setState({
            ticketType: e.target.value
        });
    }

    onChangeTicketAssignedTo(e){
        this.setState({
            ticketAssignedTo: e.target.value
        });
    }

    onChangeTicketDueDate(e){
        this.setState({
            ticketDueDate:e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        console.log(`Form submitted: ` );
        console.log(`Ticket Title: ${this.state.ticketTitle}`);
        console.log(`Ticket Author: ${this.state.ticketAuthor}`);
        console.log(`Ticket Description: ${this.state.ticketDescription}`);
        console.log(`Ticket Type: ${this.state.ticketType}`);
        console.log(`Ticket Create Date: ${this.state.ticketCreatedDate}`);
        console.log(`Ticket Due Date: ${this.state.ticketDueDate}`);
        console.log(`Ticket AssignedTo: ${this.state.ticketAssignedTo}`);
        console.log(`Ticket Status: ${this.state.ticketStatus}`);

        let date = new Date().toLocaleTimeString();
        const newticket={
            title: this.state.ticketTitle,
            author: this.state.ticketAuthor,
            description: this.state.ticketDescription,
            type: this.state.ticketType,
            assignedTo: this.state.ticketAssignedTo,
            status: this.state.ticketStatus,
            createDate: date,
            dueDate: this.state.ticketDueDate
        }
        axios.post('http://localhost:4000/tickets/new', newticket).then(res=>
            console.log(res.data)
        );

        this.setState({
            ticketTitle: '',
            ticketAuthor: '',
            ticketDescription: '',
            ticketType: '',
            ticketCreatedDate: '',
            ticketDueDate: '',
            ticketAssignedTo: '',
            ticketStatus: ''
        })

    }

    

    render(){
        return(
            <div style={{marginTop: 20}}>
                <h3 style={{margin: "20px"}}> Create Your Ticket</h3>
                <form onSubmit={this.onSubmit} style={{marginTop: "20px", marginLeft:"20px",marginBottom: "20px" ,marginRight:"500px",border: "2px solid black"}}>
                    <div className="form-group">
                        <label style={{margin: "10px"}}>Title: </label>
                        <input 
                            type="text" 
                            style={{marginLeft: "10px"}}
                            className="form-control w-50"
                            placeholder="put your title here"
                            value={this.state.ticketTitle}
                            onChange={this.onChangeTicketTitle}
                        />
                    </div>
                    <div className="form-group">
                        <label style={{marginLeft: "10px"}}>Author: </label>
                        <input
                            type="text" 
                            style={{margin: "10px"}}
                            className="form-control w-50"
                            placeholder="put author here"
                            value={this.state.ticketAuthor}
                            onChange={this.onChangeTicketAuthor}
                        />
                    </div>
                    <div className="form-group">
                        <label style={{marginLeft: "10px"}}>Description: </label>
                        <textarea
                            className = "form-control rounded w-50"
                            rows= "5"
                            style={{margin: "10px"}}
                            placeholder="put description here"
                            value={this.state.ticketDescription}
                            onChange={this.onChangeTicketDescription}
                        />
                    </div>
                    <div className="form-group">
                        <label style={{marginLeft: "10px"}}>Ticket Type: </label>
                        <br/>
                        <div className="form-check form-check-inline">
                            <input
                                type="radio" 
                                name="typeOptions"
                                id="report"
                                value="Report"
                                style={{margin: "10px"}}
                                className="form-check-input"
                                checked={this.state.ticketType === 'Report'}
                                onChange={this.onChangeTicketType}
                            />
                            <label style={{margin: "10px"}}>Report</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                type="radio" 
                                name="typeOptions"
                                id="task"
                                value="Task"
                                style={{margin: "10px"}}
                                className="form-check-input"
                                checked={this.state.ticketType === 'Task'}
                                onChange={this.onChangeTicketType}
                            />
                            <label style={{margin: "10px"}}>Task</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                type="radio" 
                                name="typeOptions"
                                id="bugFix"
                                value="Bug Fix"
                                style={{margin: "10px"}}
                                className="form-check-input"
                                checked={this.state.ticketType === 'Bug Fix'}
                                onChange={this.onChangeTicketType}
                            />
                            <label style={{margin: "10px"}}>Bug Fix</label>
                        </div>     
                    </div>
                    <div className="form-group">
                            <label style={{marginLeft: "10px"}}>Assigned To: </label>
                            <input
                                type="text" 
                                style={{margin: "10px"}}
                                className="form-control w-50"
                                placeholder="Assigned To?"
                                value={this.state.ticketAssignedTo}
                                onChange={this.onChangeTicketAssignedTo}
                            />
                    </div>
                    <div className="form-group">
                            <label style={{marginLeft: "10px"}}>Ticket Due Date: </label>
                            <input
                                type="date" 
                                style={{margin: "10px"}}
                                name="ticketDueDate"
                                max="2022-12-31"
                                min="2020-01-01"
                                value={this.state.ticketDueDate}
                                onChange={this.onChangeTicketDueDate}
                            />
                    </div>
                    <div>
                        <input style={{margin: "10px"}} type="submit" value = "Submit Ticket" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateTicket;
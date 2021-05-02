import React, { Component } from "react";
import axios from "axios";
class Addevt extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
            name:'dance intitie',
            place:'twtwtwt',
            Date:'12-12-21',
            Time:'8-40pm'

        };
    }

    handleSubmit = event => {
        event.preventDefault();
        const Events1 = {
            name: this.state.name,
            place: this.state.place,
            Date:this.state.Date,
            Time:this.state.Time
        };
        console.log(Events1);
        axios.post('http://localhost:3000/events', Events1)
            .then(result => {
                console.log('Event Added Successfully..!!' + result.data);
            })
            .catch(error => { console.log(error) })
    }

    handleChange = event => {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({ [name]: value })
        console.log(this.state);

    }

    render() {
        return (
            <div className="container">
                <div className="p-5 mb-4 bg-light rounded-3 text-center">
                    <div className="container-fluid py-5">
                        <h1 className="display-5 fw-bold">Add New Event</h1>
                        <br />
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label>Event Name</label>
                                <input type="text"
                                    className="form-control"
                                    name="name"
                                    onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label>Event place</label>
                                <input type="text"
                                    className="form-control"
                                    name="email"
                                    onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label>Event Date</label>
                                <input type="text"
                                    className="form-control"
                                    name="salary"
                                    onChange={this.handleChange} />
                            </div>

                            <div className="form-group">
                                <label>Event Time</label>
                                <input type="text"
                                    className="form-control"
                                    name="salary"
                                    onChange={this.handleChange} />
                            </div>
                            <input type="submit" className="btn btn-secondary" value="Add Event" />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Addevt;
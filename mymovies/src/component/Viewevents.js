import React,{Component} from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";




class Viewevents extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            events: []
        }
    }
         
    getallevents() {
        axios.get('http://localhost:3000/events')
            .then(result => {
                this.setState({ events: result.data })
                console.log(this.state.events);
            })
            .catch(error => {
                console.log("Error Caught : " + error)
            })
    }

    componentDidMount() {
        this.getallevents();
    }

    deleteEvents(id) {
        axios.delete('http://localhost:3000/events/' + id)
        .then(result => {
            alert('Event delted with ID ' + id);
            this.props.history.push('/Home');
        })
        .catch(error => { console.log(error) })
    }

    render() {
        return (
            <div className="container">
                <div className="p-5 mb-4 bg-light rounded-3 text-center">
                    <div className="container-fluid py-5">
                        <NavLink to={'/event-add'} className="btn btn-secondary">Create new event </NavLink>
                        <br /><br />
                        <h3 className="display-5 fw-bold">Event List</h3>
                        <br />
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Place</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.events.map((evt, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{evt.id}</td>
                                            <td>{evt.name}</td>
                                            <td>{evt.Place}</td>
                                            <td>{evt.Date}</td>
                                            <td>{evt.Time}</td>
                                            <td>
                                                <NavLink
                                                    to={'/evt-details/' + evt.id} className="btn btn-secondary">View Detail</NavLink> |
                                                <button className="btn btn-secondary"
                                                    onClick={this.deleteEvents.bind(this, evt.id)}>Delete</button> |
                                            </td>
                                            </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }

}




export default Viewevents;
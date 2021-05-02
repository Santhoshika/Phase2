import React,{Component} from "react";
import axios from "axios";

class allevents extends Component{
    constructor(props) {
        super(props);
        this.state = {
            e1 : {}
        }
    }


    componentDidMount(){
        axios.get('http://localhost:3000/events/' + this.props.match.params.id)
        .then(result =>{
            this.setState({e1 :result.data})
            console.log(this.state.e1);
            console.log(this.state.e1.name);
        })
        .catch(error => { console.log(error) })
        
    }

    deleteEvent(id) {
        axios.delete('http://localhost:3000/events/' + id)
            .then(result => {
                alert('Event delted with ID ' + id);
                this.props.history.push('/evt-details');
            })
            .catch(error => { console.log(error) })
    }

    Backevent(id){

        axios.get('http://localhost:3000/events/' + id)
            .then(result => {
              this.props.history.push('/Home');
            })
            .catch(error => { console.log(error) })

    }

       
   

    render() {
        return (
            <div className="container">
                <div className="p-5 mb-4 bg-light rounded-3 text-center">
                    <div className="container-fluid py-5">
                        <h1 className="display-5 fw-bold">Event Details </h1>

                        <div className="card">
                            <div className="card-header">
                                <b>Details of {this.state.e1.id}</b>
                                </div>
                                <ul className="list-group list-group-flush">
                                <li className="list-group-item">event Id: {this.state.e1.id}</li>
                                <li className="list-group-item">event Name: {this.state.e1.name}</li>
                                <li className="list-group-item">event place: {this.state.e1.Place}</li>
                                <li className="list-group-item">event date: {this.state.e1.Date}</li>
                                <li className="list-group-item">event time: {this.state.e1.Time}</li>
                            </ul>
                            <div className="card-footer">
                                <button className="btn btn-secondary"
                                    onClick={this.deleteEvent.bind(this, this.state.e1.id)}>Delete</button> |
                                <button className="btn btn-secondary"
                                onClick={this.Backevent.bind(this, this.state.e1.id)}>Back</button> |
                            </div>
                         
                        </div>

                    </div>
                </div>
            </div>
        );
    }

}

export default allevents;
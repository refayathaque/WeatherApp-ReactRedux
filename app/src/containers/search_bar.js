import React, { Component } from 'react';

export default class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = { term: '' }
        this.onInputChange = this.onInputChange.bind(this);
        // 'This' (which is our instance of SearchBar) has a function called onInputChange, bind that function to 'this' (which is SearchBar), and then replace onInputChange with this new bound instance of the onInputChange function we have below (we're kind of overrding the onInputChange method below)
    }
    // State initialization

    onInputChange(event) {
        this.setState({ term: event.target.value })
    }

    onFormSubmit(event) {
        event.preventDefault();
        // Tells browser to not submit the form if user presses 'enter'
    }

    render() {
        return (
            <form className="input-group mb3" onSubmit={this.onFormSubmit}>
                <input type="text" className="form-control" placeholder="Get a five-day forecast in your favorite cities" aria-label="Get a five-day forecast in your favorite cities" aria-describedby="basic-addon2" value={this.state.term} onChange={this.onInputChange} />
                {/* For callback functions like this.onInputChange that makes a reference to 'this' you must bind */}
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="submit">Submit</button>
                </div>
                {/* 'Controlled Field' = Form element where the value of the input is est by the state of our component (not redux level state), we're going to say declaratively what the value of our input not imperatively */}
            </form>
        );
    }
}

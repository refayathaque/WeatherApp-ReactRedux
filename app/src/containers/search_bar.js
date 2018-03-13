import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';
import '../App.css';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = { term: '' }
        this.onInputChange = this.onInputChange.bind(this);
        // 'This' (which is our instance of SearchBar) has a function called onInputChange, bind that function to 'this' (which is SearchBar), and then replace onInputChange with this new bound instance of the onInputChange function we have below (we're kind of overrding the onInputChange method below)
        this.onFormSubmit = this.onFormSubmit.bind(this);
        // Chrome console error suggesting that we forgot to bind will be 'Uncaught TypeError: Cannot read property 'props' of null
    }
    // State initialization

    onInputChange(event) {
        this.setState({ term: event.target.value })
    }

    onFormSubmit(event) {
        event.preventDefault();
        // Tells browser to not submit the form if user presses 'enter'
        this.props.fetchWeather(this.state.term);
        // Result of function mapDispatchToProps(dispatch) below
        this.setState({ term: '' });
    }

    render() {
        return (
            <form className="input-group mb3" onSubmit={this.onFormSubmit}>
                <input type="text" className="form-control" placeholder="Get a five-day forecast in your favorite cities" aria-label="Get a five-day forecast in your favorite cities" aria-describedby="basic-addon2" value={this.state.term} onChange={this.onInputChange} />
                {/* For callback functions from JSX like 'this.onInputChange' that makes a reference to 'this' you must bind the context*/}
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="submit">Submit</button>
                </div>
                {/* 'Controlled Field' = Form element where the value of the input is est by the state of our component (not redux level state), we're going to say declaratively what the value of our input not imperatively */}
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
    // Ensures the action flows down into our middleware, then reducers, in our redux application
}

export default connect(null, mapDispatchToProps)(SearchBar);
// Null because that is usually where the state data goes, in this case we don't care about state

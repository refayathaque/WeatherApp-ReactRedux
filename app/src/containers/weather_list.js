import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';

class WeatherList extends Component {
    render() {
        return (
            <table className="table table-hover + tableTextAlignLeft">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({ weather }) {
    return { weather };
    // Using 'state.weather' above becuase in our reducers index.js we have 'weather: WeatherReducer'
    // Vanilla JS to ES6:
        // function mapStateToProps(state) {
        //     return { weather: state.weather };
        // ...becomes what we have above
        // Also, when in a key-value pair the key and value are identical it just becomes { key }, what we have above went from 'return { weather: weather }' to 'return { weather }'
}

export default connect(mapStateToProps)(WeatherList);

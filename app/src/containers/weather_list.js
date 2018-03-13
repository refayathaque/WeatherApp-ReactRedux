import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import '../App.css';

class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name
        const temps = cityData.list.map(weather => weather.main.temp)
        // 'weather' is each of the objects in the array 'list'
        // ES6 to Vanilla JS:
        // 'weather => weather.main.temp' -> 'function (weather) { return weather.main.temp; }'
        console.log(temps);

        return (
            <tr key={name}>
            {/* When rendering 'td's in react we have to have a key (unique identifier) in the tr */}
                <td>{name}</td>
                <td>
                    <Sparklines height={120} width={180} data={temps}>
                        <SparklinesLine color="blue" />
                    </Sparklines>
                </td>
            </tr>
        )
    }

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
                    {this.props.weather.map(this.renderWeather)}
                    {/* 'weather' is an array */}
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

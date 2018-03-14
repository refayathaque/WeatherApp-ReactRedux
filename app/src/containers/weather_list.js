import React, { Component } from 'react';
import { connect } from 'react-redux';
import SparklinesChart from '../components/sparklines_chart';
import GoogleMap from '../components/google_map';
import _ from 'lodash';
import '../App.css';

class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name
        const population = cityData.city.population
        const temps = cityData.list.map(weather => weather.main.temp - 273.15) // Subtracting by 273.15 to convert from kelvin to celcius
        // 'weather' is each of the objects in the array 'list'
        // ES6 to Vanilla JS:
        // 'weather => weather.main.temp' -> 'function (weather) { return weather.main.temp; }'
        const pressures = cityData.list.map(weather => weather.main.pressure)
        const humidities = cityData.list.map(weather => weather.main.humidity)
        const { lon, lat } = cityData.city.coord;
        // ES6 syntax for what is below...'destructuring' -> this says to find the 'coord' object, grab the 'lon' and 'lat' property and assign the values to two new consts 'lon' and 'lat'
        // const lon = cityData.city.coord.lon;
        // const lat = cityData.city.coord.lat;

        console.log(cityData)

        return (
            <tr key={name}>
            {/* When rendering 'td's in react we have to have a key (unique identifier) in the tr */}
                <td><GoogleMap lon={lon} lat={lat} /></td>
                <td>{population}</td>
                <td><SparklinesChart data={temps} color="48DAF8" units="C" /></td>
                    {/* Passing in the 'temps' data and the color we want for it as 'props' in the functional component SparklinesChart, we are using a reusable component because we wan't to practice the concept of DRY (don't repeat yourself) */}
                <td><SparklinesChart data={pressures} color="7949B5" units="hPA" /></td>
                <td><SparklinesChart data={humidities} color="272727" units="%" /></td>
            </tr>
        )
    }

    render() {
        return (
            <table className="table table-hover + tableTextAlignLeft">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Population</th>
                        <th>Temperature (C)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
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

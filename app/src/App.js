import React, { Component } from 'react';
import SearchBar from './containers/search_bar';
import WeatherList from './containers/weather_list';
import './App.css';
import logo from './logo.svg';
import logoRedux from './logoRedux.svg';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <img src={logoRedux} className="App-logo" alt="logo" />
                    <h1 className="App-title">WeatherApp-ReactRedux</h1>
                </header>
                <SearchBar />
                <WeatherList />
            </div>
        );
    }
}

export default App;

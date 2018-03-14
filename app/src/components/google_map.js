import React, { Component } from 'react';

class GoogleMap extends Component {
    componentDidMount() {
    const google = window.google;
    // Lifecycle method that gets called automatically after the component has been rendered to the screen
        new google.maps.Map(this.refs.map, {
        // How we create an embedded google map inside of our document, 'this.refs.map' is our reference to the div (an html element) we are returning below with 'render()', the google map will get rendered in the div...this is a way to make third-party libraries that do not know react work with react
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        })
    }

    render() {
        return <div ref="map" />
        // React's way of giving us direct reference to an html element that has been rendered to the page, anywhere else in this component I can reference this div using 'this.refs.map'
    }
}

export default GoogleMap;

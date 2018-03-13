import React from 'react';

class GoogleMap extends Component {
    componentDidMount() {
        new google.maps.Map(this.refs.map, {
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

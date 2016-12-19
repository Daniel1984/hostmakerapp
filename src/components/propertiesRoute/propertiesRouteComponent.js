import React, { Component } from 'react';
import { getRoutes } from './propertiesRoutesApi';
import Loading from '../common/loading/loadingComponent';
import PropertiesMap from './propertiesMapComponent';
import './propertiesRoute.scss';

class PropertiesRoute extends Component {
    constructor(props) {
        super(props);
        this.state = {
            markers: [],
            focusLocation: { lat: 0, lng: 0 },
            loading: true,
            laodingMessage: 'Obtaining location data...'
        }

        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.changeFucusLocation = this.changeFucusLocation.bind(this);
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition((pos) => {
            const position = { lat: pos.coords.latitude, lng: pos.coords.longitude };

            this.setState({
                markers: [{ showInfo: true, address: 'Your Current Location', position }],
                focusLocation: position
            });

            this.getPropertiesRoutes();
        }, () => alert('Please allow location check for app to work properly'));
    }

    getPropertiesRoutes() {
        this.setState({ laodingMessage: 'Calculating routes...' });

        getRoutes()
            .then(markers => this.setState({
                markers: [...this.state.markers, ...markers],
                loading: false
            }))
            .catch(err => this.setState({ loading: false }));
    }

    onMarkerClick(marker) {
        const markerIndex = this.state.markers.indexOf(marker);
        marker.showInfo = !marker.showInfo;
        this.state.markers[markerIndex] = marker;
        this.setState({ markers: this.state.markers })
    }

    changeFucusLocation(markerParam) {
        const markers = [...this.state.markers].map(marker => {
            marker == markerParam ? marker.showInfo = true : marker.showInfo = false;
            return marker;
        });
        this.setState({ markers });
        this.setState({ focusLocation: markerParam.position });
    }

    render() {
        return (
            <section className="properties-routes">
                {this.state.loading ?
                    <Loading message={this.state.laodingMessage} /> :
                    <section>
                        <aside className="properties-routes_dashboard">
                            <ul className="properties-routes_list">
                                {this.state.markers.map((marker, index) => (
                                    <li key={index} onClick={() => this.changeFucusLocation(marker)}>{marker.address}</li>
                                ))}
                            </ul>
                        </aside>
                        <article className="properties-routes_map">
                            <PropertiesMap
                                markers={this.state.markers}
                                focusLocation={this.state.focusLocation}
                                onMarkerClick={this.onMarkerClick}/>
                        </article>
                    </section>
                }
            </section>
        )
    }
}

export default PropertiesRoute;

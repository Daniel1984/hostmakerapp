import React, { Component } from 'react';
import { getProperties } from './propertiesApi';
import Loading from '../common/loading/loadingComponent';
import './propertiesStyles.scss';

class AboutComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            properties: [],
            loading: true
        };

        this.getPropertiesRowElement = this.getPropertiesRowElement.bind(this);
        this.getPropertyAddress = this.getPropertyAddress.bind(this);
    }

    componentDidMount() {
        getProperties()
            .then(properties => this.setState({ properties, loading: false }))
            .catch(err => this.setState({ loading: false }));
    }

    getPropertyAddress(address) {
        return Object.keys(address).map((key, index) => {
            return <div key={index}>{address[key]}</div>;
        });
    }

    getPropertiesRowElement(property, index) {
        return (
            <tr key={index}>
                <td>{property.owner}</td>
                <td>{this.getPropertyAddress(property.address)}</td>
                <td>&pound;{property.incomeGenerated}</td>
            </tr>
        );
    }

    render() {
        return (
            <div className="properties">
                {this.state.loading ?
                    <Loading message="Loading..." /> :
                    <table className="properties_table">
                        <thead className="properties_table-header">
                            <tr>
                                <th>Owner</th>
                                <th>Address</th>
                                <th>Income Generated</th>
                            </tr>
                        </thead>
                        <tbody className="properties_table-body">
                            {this.state.properties.map(this.getPropertiesRowElement)}
                        </tbody>
                    </table>
                }
            </div>
        );
    }
}

export default AboutComponent;

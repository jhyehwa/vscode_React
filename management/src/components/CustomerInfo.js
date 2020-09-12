import React from 'react';

class CustomerInfo extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.color}</p>
            </div>
        )
    }
}

export default Customer;
import React from 'react';


class SecondPage extends React.Component {

    constructor(props) {
        super(props); 
        this.info = this.props.location.state
    }

    render() {
        return (
            <div>
                <p>Don't major in { this.info.majorSelection }</p>
            </div>
        )
    }
}

export default SecondPage;
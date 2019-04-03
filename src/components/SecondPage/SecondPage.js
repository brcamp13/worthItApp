import React from 'react';


class SecondPage extends React.Component {

    componentDidMount () {
        this.info = this.props.location.state
        console.log(this.info.majorSelection)
    }

    render() {
        return (
            <div>
                HI
            </div>
        )
    }
}

export default SecondPage;
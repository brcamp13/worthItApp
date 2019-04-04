import React from 'react';
import { Grid } from 'semantic-ui-react'


//Contains info about each major
const majorInfo = [
    {
        name: "Computer Science", 
        annualGraduates: 100, 
        unemploymentRate: 2.5, 
        averageSalary: 69000, 
        industryGrowth: 24, 
    }, 
]

const titleStyle = {
    fontFamily: 'Roboto Slab', 
    fontSize: '1.25em',
}

const containerStyle = {
    //TODO
}

const numberStyle = {
    //TODO 
}

const paragraphStyle = {
    //TODO
}

class SecondPage extends React.Component {

    constructor(props) {
        super(props); 
        this.info = this.props.location.state
        this.major = majorInfo.find(obj => {
            return obj.name === this.info.majorSelection
          })
    }

    render() {
        return (
            <div style={{
                paddingTop: '12em',
            }}>
                <Grid>

                    <Grid.Row>

                        <Grid.Column width={4}>
                            <p style={titleStyle}><strong>By the numbers:</strong></p>
                        </Grid.Column>

                        <Grid.Column width={3}>
                            <p>69</p>
                        </Grid.Column>

                        <Grid.Column width={3}>
                            <p>69</p>
                        </Grid.Column>

                        <Grid.Column width={3}>
                            <p>69</p>
                        </Grid.Column>

                        <Grid.Column width={3}>
                            <p>69</p>
                        </Grid.Column>

                    </Grid.Row>

                    <Grid.Row>

                        <Grid.Column width={4}>
                            <p style={titleStyle}><strong>Our opinion:</strong></p>
                        </Grid.Column>

                        <Grid.Column width={3}>
                            <p>69</p>
                        </Grid.Column>

                        <Grid.Column width={3}>
                            <p>69</p>
                        </Grid.Column>

                        <Grid.Column width={3}>
                            <p>69</p>
                        </Grid.Column>

                        <Grid.Column width={3}>
                            <p>69</p>
                        </Grid.Column>

                    </Grid.Row>

                </Grid>
            </div>
        )
    }
}

export default SecondPage;
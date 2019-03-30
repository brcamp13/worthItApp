import React from 'react';
import { Grid, Button }  from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const SecondPage = () => (

    <div>
        <Grid celled>

            <Grid.Row>
                <Grid.Column width={3}>
                    <h1>By the numbers:</h1>
                </Grid.Column>
                <Grid.Column width={13}>
                    <p>A bunch of random stuff is here for the time being</p>
                </Grid.Column>
            </Grid.Row>

            <Grid.Row>
                <Grid.Column width={3}>
                    <h1>Our opinion:</h1>
                </Grid.Column>
                <Grid.Column width={13}>
                    <p>More random stuff is here for the time being</p>
                </Grid.Column>
            </Grid.Row>

            <Grid.Row>
                <Grid.Column width={16} textAlign="center">
                    <Link to="/"><Button color='yellow'>Go Back</Button></Link>
                </Grid.Column>
            </Grid.Row>

        </Grid>
    </div>

)

export default SecondPage;
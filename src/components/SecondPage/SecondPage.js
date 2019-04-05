import React from 'react';
import { Button } from 'semantic-ui-react'
import Fade from 'react-reveal/Fade';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const titleStyle = {
    fontFamily: 'Roboto Slab', 
    fontSize: '2rem'
}

const smallTitleStyle = {
    fontFamily: 'Roboto Slab', 
    fontSize: '1.3rem'
}

const testStyle = {
    fontFamily: 'Roboto Slab', 
    fontSize: '1.3rem', 
    color: '#00FF00'
}

const majorTextStyle = {
    fontFamily: 'Roboto Slab',
    fontSize: '3em', 
}

const majorTextRowStyle = {
    marginBottom: '4rem'
}

const numberStyle = {
    fontFamily: 'Open Sans', 
    fontSize: '1.1rem', 
    color: '#FFD700'
}

const paragraphStyle = {
    fontFamily: 'Open Sans', 
    fontSize: '1rem'
}

const buttonStyle = {
    margin: '0 auto', 
    display: 'block',
    marginTop: '3rem',
    fontFamily: 'Open Sans'
}

const containerStyle = {
    marginTop: '3rem'
}

const SecondPage = ({ onButtonPress, majorSelection }) => {

    return (
        <div>
            <Container style={containerStyle}>

                <Fade top>
                    <Row style={majorTextRowStyle}>
                        <Col align='center'>
                            <span style={majorTextStyle}><strong>{majorSelection.name}</strong></span>
                        </Col>
                    </Row>
                </Fade>

                <hr></hr>

                <Fade top>
                    <Row>
                        <Col xs={12} md={4} align='center'>
                            <span style={titleStyle}><strong><u>By The Numbers:</u></strong></span>
                        </Col>
                        <Col xs={12} md={2} align='center'>
                            <span style={smallTitleStyle}><strong>Annual Grads</strong></span>
                            <br></br>
                            <span style={numberStyle}><strong><em>56,699</em></strong></span>
                        </Col>
                        <Col xs={12} md={2} align='center'>
                            <span style={smallTitleStyle}><strong>Unemp. Rate</strong></span>
                            <br></br>
                            <span style={numberStyle}><strong><em>3.5%</em></strong></span>
                        </Col>
                        <Col xs={12} md={2} align='center'>
                            <span style={smallTitleStyle}><strong>Avg. Salary</strong></span>
                            <br></br>
                            <span style={numberStyle}><strong><em>$85,000</em></strong></span>
                        </Col>
                        <Col xs={12} md={2} align='center'>
                            <span style={smallTitleStyle}><strong>Sector Growth*</strong></span>
                            <br></br>
                            <span style={numberStyle}><strong><em>25%</em></strong></span>
                        </Col>
                    </Row>
                </Fade>
                
                <hr></hr>

                <Fade top>
                    <Row>
                        <Col xs={12} md={4} align='center'>
                            <span style={titleStyle}><strong><u>Our Opinion: </u></strong></span>
                        </Col>
                        <Col xs={12} md={6} align='center'>
                            <span style={testStyle}><strong>Worth it</strong></span>
                            <br></br>
                            <p style={paragraphStyle}>
                                Statistically, getting a job shouldn't be too difficult assuming 
                                you didn't just slip through the cracks without learning anything at school.
                                You'll be making a significant amount of money which will be especially good
                                if you have student loans to pay off.
                            </p>
                        </Col>
                    </Row>
                </Fade>

                <hr></hr>

                <Fade top>
                    <Row>
                        <Button 
                        color='yellow' 
                        onClick={onButtonPress} 
                        style={buttonStyle}>
                        Take me back
                        </Button> 
                    </Row>
                </Fade>
    
            </Container>
        </div>
    )
}

export default SecondPage;
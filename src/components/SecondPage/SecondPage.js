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

const SecondPage = ({ onButtonPress }) => {

    return (
        <div>
            <Container style={containerStyle}>

                <Fade top>
                    <Row>
                        <Col xs={12} md={4} align='center'>
                            <span style={titleStyle}><strong>By The Numbers:</strong></span>
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
                
                <br></br>

                <Fade top>
                    <Row>
                        <Col xs={12} md={4} align='center'>
                            <span style={titleStyle}><strong>Our Opinion: </strong></span>
                        </Col>
                        <Col xs={12} md={6} align='center'>
                            <span style={smallTitleStyle}><strong>Not worth it</strong></span>
                            <br></br>
                            <p style={paragraphStyle}>
                                Don't major in it, you know it's a really stupid idea.
                            </p>
                        </Col>
                    </Row>
                </Fade>

                <Fade top>
                    <Row>
                        <Button 
                        color='yellow' 
                        onClick={onButtonPress} 
                        style={buttonStyle}>Take me back
                        </Button> 
                    </Row>
                </Fade>
    
            </Container>
        </div>
    )
}

export default SecondPage;
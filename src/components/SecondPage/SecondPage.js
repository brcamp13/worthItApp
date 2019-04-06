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

const SecondPage = ({ onGoHomePress, majorSelection }) => {

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
                            <span style={titleStyle}><strong><em>By The Numbers:</em></strong></span>
                        </Col>
                        <Col xs={12} md={2} align='center'>
                            <span style={smallTitleStyle}><strong>Annual Grads</strong></span>
                            <br></br>
                            <span style={numberStyle}><strong><em>{majorSelection.annualGraduates}</em></strong></span>
                        </Col>
                        <Col xs={12} md={2} align='center'>
                            <span style={smallTitleStyle}><strong>Unemp. Rate</strong></span>
                            <br></br>
                            <span style={numberStyle}><strong><em>{majorSelection.unemploymentRate}</em></strong></span>
                        </Col>
                        <Col xs={12} md={2} align='center'>
                            <span style={smallTitleStyle}><strong>Avg. Salary</strong></span>
                            <br></br>
                            <span style={numberStyle}><strong><em>{majorSelection.averageSalary}</em></strong></span>
                        </Col>
                        <Col xs={12} md={2} align='center'>
                            <span style={smallTitleStyle}><strong>Sector Growth*</strong></span>
                            <br></br>
                            <span style={numberStyle}><strong><em>{majorSelection.industryGrowth}</em></strong></span>
                        </Col>
                    </Row>
                </Fade>
                
                <hr></hr>

                <Fade top>
                    <Row>
                        <Col xs={12} md={4} align='center'>
                            <span style={titleStyle}><strong><em>Our Opinion: </em></strong></span>
                        </Col>
                        <Col xs={12} md={6} align='center'>
                            <span style={testStyle}><strong>{majorSelection.verdict}</strong></span>
                            <br></br>
                            <p style={paragraphStyle}>{majorSelection.verdictParagraph}</p>
                        </Col>
                    </Row>
                </Fade>

                <hr></hr>

                <Fade top>
                    <Row>
                        <Button 
                        color='yellow' 
                        onClick={onGoHomePress} 
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
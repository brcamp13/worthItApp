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

const verdictStyle = {
    fontFamily: 'Roboto Slab', 
    fontSize: '1.5rem',
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
}


const numbersRowStyle = {
    marginBottom: '1.1rem'
}

const numberBoxStyle = {
    borderRadius: '25px',
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    padding: '15px', 
    width: '175px',
    height: '130px',
    marginTop: '1.1rem'
}

const numberInnerBoxStyle = {
    marginTop: '1rem'
}

const paragraphStyle = {
    fontFamily: 'Open Sans', 
    fontSize: '1rem'
}

const buttonStyle = {
    margin: '0 auto', 
    display: 'block',
    marginTop: '3rem',
    marginBottom: '5rem',
    fontFamily: 'Open Sans'
}

const containerStyle = {
    marginTop: '3rem'
}

const hrStyle = {
    backgroundColor: '#FFD700',
    height: '1px', 
    border: '0'
}

const verdictContainerStyle = {
    borderRadius: '25px',
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    padding: '15px', 
    width: '100%',
    height: '85%',
    marginTop: '2rem'
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

                <Fade top>
                    <Row style={numbersRowStyle}>
                        <Col align='center'>
                            <span style={titleStyle}><strong><em>Analysis:</em></strong></span>
                        </Col>
                    </Row>
                </Fade>

                <Fade top>
                    <Row>

                        <Col xs={12} md={3} align='center'>
                            <div style={numberBoxStyle}>
                                <div style={numberInnerBoxStyle}>
                                    <span style={smallTitleStyle}><strong>Job Analyzed:</strong></span>
                                    <hr style={hrStyle}></hr>
                                    <span style={numberStyle}><strong><em>{majorSelection.commonJob}</em></strong></span>
                                </div>
                            </div>
                        </Col>

                        <Col xs={12} md={3} align='center'>
                            <div style={numberBoxStyle}>
                                <div style={numberInnerBoxStyle}>
                                    <span style={smallTitleStyle}><strong>Annual Grads:</strong></span>
                                    <hr style={hrStyle}></hr>
                                    <span style={numberStyle}><strong><em>{majorSelection.annualGraduates}</em></strong></span>
                                </div>
                            </div>
                        </Col>

                        <Col xs={12} md={3} align='center'>
                            <div style={numberBoxStyle}>
                                <div style={numberInnerBoxStyle}>
                                    <span style={smallTitleStyle}><strong>New Jobs/yr:</strong></span>
                                    <hr style={hrStyle}></hr>
                                    <span style={numberStyle}><strong><em>{majorSelection.industryGrowth}</em></strong></span>
                                </div>
                            </div>
                        </Col>

                        <Col xs={12} md={3} align='center'>
                            <div style={numberBoxStyle}>
                                <div style={numberInnerBoxStyle}>
                                    <span style={smallTitleStyle}><strong>Median Salary:</strong></span>
                                    <hr style={hrStyle}></hr>
                                    <span style={numberStyle}><strong><em>{majorSelection.averageSalary}</em></strong></span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Fade>
                
                <hr></hr>

                <Fade top>
                    <Row style={numbersRowStyle}>
                        <Col align='center' md={{ span: 4, offset: 4 }}>
                            <span style={titleStyle}><strong><em>Our Opinion: </em></strong></span>
                            <div style={verdictContainerStyle}>
                                <span style={verdictStyle}><strong>{majorSelection.verdict}</strong></span>
                                <hr style={hrStyle}></hr>
                                <p style={paragraphStyle}>{majorSelection.verdictParagraph}</p>
                            </div>
                        </Col>
                    </Row>
                </Fade>

                <Row>
                    <Button 
                    color='yellow' 
                    onClick={onGoHomePress} 
                    style={buttonStyle}>
                    Take me back
                    </Button> 
                </Row>
    
            </Container>
        </div>
    )
}

export default SecondPage;
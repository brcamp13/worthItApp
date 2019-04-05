import React from 'react';
import { Dropdown, Button } from 'semantic-ui-react';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';




const buttonStyle = {
    fontFamily: 'Open Sans'
}


// Home page
const FirstPage = ({ dropDownSelection, majorOptions, onButtonPress }) => {

    return(

        <div style={{
            position: 'absolute', 
            left: '50%', 
            top: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
        }}>

            <Fade bottom> 
                <div>
                    <div style={{
                        fontSize: '24px',
                        fontFamily: 'Roboto Slab',
                    }}>
                        <span>
                            Is majoring in  {' '}
                            <Dropdown
                                inline
                                options={majorOptions}
                                defaultValue={majorOptions[0].value}
                                onChange={dropDownSelection}
                            />
                            worth it?
                        </span>
                    </div>

                    <div style={{
                        textAlign: 'center',
                        paddingTop: '2.5em',
                    }}>

                        <Button 
                        color='yellow' 
                        onClick={onButtonPress} 
                        style={buttonStyle}>
                        Find Out
                        </Button>

                    </div>
                </div>
            </Fade>
            
        </div>
    )
}

export default FirstPage;
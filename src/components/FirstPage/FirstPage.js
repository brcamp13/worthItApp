import React from 'react';
import { Dropdown, Button } from 'semantic-ui-react';
import Fade from 'react-reveal/Fade';




const buttonStyle = {
    fontFamily: 'Roboto Mono'
}


// Home page
const FirstPage = ({ dropDownSelection, majorOptions, onButtonPress }) => {

    return(

        <div style={{
            textAlign: 'center', 
            paddingTop: '17em', 
            border: '1rem rounded black'
            
        }}>

            <Fade bottom> 
                <div>
                    <div style={{
                        fontSize: '2.5rem',
                        fontFamily: 'Roboto Slab',
                    }}>
                        <span>
                            Is majoring in  {' '}
                            <Dropdown
                                inline
                                scrolling
                                options={majorOptions}
                                defaultValue={majorOptions[5].value}
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
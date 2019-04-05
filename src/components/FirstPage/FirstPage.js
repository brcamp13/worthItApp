import React from 'react';
import { Dropdown, Button } from 'semantic-ui-react';
import Flip from 'react-reveal/Flip';


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

            <Flip top>
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
            </Flip>

            <div style={{
                textAlign: 'center',
                paddingTop: '2.5em',
            }}>

                <Button color='yellow' onClick={onButtonPress}>Find Out</Button>

            </div>
            
        </div>
    )
}

export default FirstPage;
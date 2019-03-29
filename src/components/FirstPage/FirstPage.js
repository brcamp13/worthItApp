import React from 'react';
import { Dropdown, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Flip from 'react-reveal/Flip';


// List of all dropdown choices
const majorOptions = [
    {
        key: 'Computer Science', 
        text: 'Computer Science',
        value: 'Computer Science', 
    }, 
    {
        key: 'Communications', 
        text: 'Communications', 
        value: 'Communications',
    },
]


// Home page
const FirstPage = () => (

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
                    />
                    worth it?
                </span>
            </div>
        </Flip>

        {/* Would have animation here, but covered dropdown */}
        <div style={{
            textAlign: 'center',
            paddingTop: '2.5em',
            fontFamily: 'Roboto Slab',
        }}>
            <Link to="/secondPage"><Button color='yellow'>Find Out</Button></Link>
        </div>
        
    </div>

)

export default FirstPage;
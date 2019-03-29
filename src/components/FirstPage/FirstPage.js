import React from 'react';
import { Dropdown, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';



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

        <Fade bottom>
            <div style={{
                textAlign: 'center',
                paddingTop: '2.5em',
                fontFamily: 'Roboto Slab',
            }}>
                <Link to="/secondPage"><Button color='yellow'>Find Out</Button></Link>
            </div>
        </Fade>
        
    </div>

)

export default FirstPage;
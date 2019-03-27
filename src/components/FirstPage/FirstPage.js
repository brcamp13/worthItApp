import React from 'react';
import { Dropdown, Button } from 'semantic-ui-react';



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

        <div style={{
            textAlign: 'center',
            paddingTop: '2.5em',
            fontFamily: 'Roboto Slab',
        }}>
            <Button color='yellow'>Find Out</Button>
        </div>
        
    </div>

)

export default FirstPage;
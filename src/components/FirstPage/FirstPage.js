import React from 'react';
import { Dropdown, Button } from 'semantic-ui-react';



const majorOptions = [
    {
        key: 'Computer Science', 
        text: 'Computer science',
        value: 'Computer science', 
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
    }}>

        <div>
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

        <div>
            <Button color='blue'>Find Out</Button>
        </div>
        
    </div>

)

export default FirstPage;
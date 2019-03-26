import React from 'react';
import { Dropdown } from 'semantic-ui-react';


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


const firstPage = () => (
    <span>
        <Dropdown
            inline
            options={majorOptions}
            defaultValue={majorOptions[0].value}
        />
    </span>
)

export default firstPage;
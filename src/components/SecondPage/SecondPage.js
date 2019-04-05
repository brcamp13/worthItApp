import React from 'react';
import { Button } from 'semantic-ui-react'


const titleStyle = {
    fontFamily: 'Roboto Slab', 
    fontSize: '1.25em',
}

const containerStyle = {
    //TODO
}

const numberStyle = {
    //TODO 
}

const paragraphStyle = {
    //TODO
}

const SecondPage = ({ onButtonPress }) => {

    return (
        <div>
           <Button color='yellow' onClick={onButtonPress}>Take me home</Button> 
        </div>
    )
}

export default SecondPage;
import React from 'react';


//Contains info about each major
const majorInfo = [
    {
        name: "Computer Science", 
        annualGraduates: 100, 
        unemploymentRate: 2.5, 
        averageSalary: 69000, 
        industryGrowth: 24, 
    }, 
]


class SecondPage extends React.Component {

    constructor(props) {
        super(props); 
        this.info = this.props.location.state
        this.major = majorInfo.find(obj => {
            return obj.name === this.info.majorSelection
          })
    }

    render() {
        return (
            <div>
                <p>{ this.major.name }</p>
                <p>{ this.major.annualGraduates }</p>
                <p>{ this.major.unemploymentRate }</p>
                <p>{ this.major.averageSalary }</p>
                <p>{ this.major.industryGrowth }</p>
            </div>
        )
    }
}

export default SecondPage;
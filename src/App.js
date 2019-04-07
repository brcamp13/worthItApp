import React, { Component } from 'react';
import FirstPage from './components/FirstPage/FirstPage';
import SecondPage from './components/SecondPage/SecondPage';




const appStyle = {
  backgroundColor: '#31BFF4'
}

class App extends Component {

  // List of all dropdown choices
  majorOptions = [
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


  //Contains info about each major
  majorInfo = [
    {
        name: "Computer Science", 
        annualGraduates: "100", 
        unemploymentRate: "2.5%", 
        averageSalary: "$69,000", 
        industryGrowth: "24%",
        verdict: "Not worth it",
        verdictParagraph: "Software development has the highest growth rate until 2026 and the salary is very high for only having a bachelor's degree. It may be difficult getting your 'foot in the door', but once you do, it should be smooth sailing and there should be ample opportunities" 
    },
    {
        name: "Communications", 
        annualGraduates: "200", 
        unemploymentRate: "69%", 
        averageSalary: "$69,000", 
        industryGrowth: "24%",
        verdict: "Worth it",
        verdictParagraph: "It's not a stupid idea so don't do it." 
    }, 
  ]

  //Get the selection from the dropdown menu in firstpage and update the state
  getSelection = (e, data) => {

    this.setState({ dropDownSelection: data.value });
    const result = this.majorInfo.find(obj => {
      return obj.name === data.value
    })
    this.setState({ majorObject: {
      name: result.name, 
      annualGraduates: result.annualGraduates, 
      unemploymentRate: result.unemploymentRate, 
      averageSalary: result.averageSalary, 
      industryGrowth: result.industryGrowth,
      verdict: result.verdict, 
      verdictParagraph: result.verdictParagraph
    }})
    console.log(this.state.majorObject.verdictParagraph)

  }

  //Update the buttonPressed state which subsequently changes which page is displayed
  onButtonPress = (e) => {

    this.setState({ buttonPressed: !this.state.buttonPressed})

  }


  onGoHomePress = (e) => {
    this.setState({
      buttonPressed: !this.state.buttonPressed, 
      dropDownSelection: "Computer Science", 
      majorObject: {
        name: "Computer Science", 
        annualGraduates: "100", 
        unemploymentRate: "2.5%", 
        averageSalary: "$69,000", 
        industryGrowth: "24%",
        verdict: "Not worth it",
        verdictParagraph: "Software development has the highest growth rate until 2026 and the salary is very high for only having a bachelor's degree. It may be difficult getting your 'foot in the door', but once you do, it should be smooth sailing and there should be ample opportunities" 
      }
    })
  }

  constructor(props) {
    super(props);
    this.state = {
      buttonPressed: false, 
      dropDownSelection: "Computer Science", 
      majorObject: {
        name: "Computer Science", 
        annualGraduates: "100", 
        unemploymentRate: "2.5%", 
        averageSalary: "$69,000", 
        industryGrowth: "24%",
        verdict: "Not worth it",
        verdictParagraph: "Software development has the highest growth rate until 2026 and the salary is very high for only having a bachelor's degree. It may be difficult getting your 'foot in the door', but once you do, it should be smooth sailing and there should be ample opportunities" 
      }
    }
    this.getSelection = this.getSelection.bind(this)
    this.onButtonPress = this.onButtonPress.bind(this)
    this.onGoHomePress = this.onGoHomePress.bind(this)
    console.log(this.state.majorObject.name)
  }

  render() {
    return (
      <div>

        { !this.state.buttonPressed

         ? <div>
          <FirstPage 
              dropDownSelection={this.getSelection} 
              majorOptions={this.majorOptions}
              onButtonPress={this.onButtonPress}
            />
          </div>

          : <div>
            <SecondPage 
              onGoHomePress={this.onGoHomePress}
              majorSelection={this.state.majorObject}
            />
          </div>

        }

      </div>
    );
  }
}

export default App;

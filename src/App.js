import React, { Component } from 'react';
import FirstPage from './components/FirstPage/FirstPage';
import SecondPage from './components/SecondPage/SecondPage';


const initialState = {
    buttonPressed: false, 
    dropDownSelection: "Computer Science", 
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
        unemploymentRate: "2.5", 
        averageSalary: "$69,000", 
        industryGrowth: "24%",
        verdict: "Don't do it",
        verdictParagraph: "It's a stupid idea so don't do it." 
    }, 
  ]

  //Get the selection from the dropdown menu in firstpage and update the state
  getSelection = (e, data) => {

    this.setState({ dropDownSelection: data.value });

  }

  //Update the buttonPressed state which subsequently changes which page is displayed
  onButtonPress = (e) => {

    this.setState({ buttonPressed: !this.state.buttonPressed})

  }

  constructor() {
    super();
    this.state = initialState
    this.getSelection = this.getSelection.bind(this)
    this.onButtonPress = this.onButtonPress.bind(this)
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
              onButtonPress={this.onButtonPress}
            />
          </div>

        }

      </div>
    );
  }
}

export default App;

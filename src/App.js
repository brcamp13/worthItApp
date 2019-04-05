import React, { Component } from 'react';
import FirstPage from './components/FirstPage/FirstPage';
import SecondPage from './components/SecondPage/SecondPage';


const initialState = {
    buttonPressed: false, 
    dropDownSelection: "Computer Science", 
    initialSelection: {
      key: 'Computer Science', 
      text: 'Computer Science', 
      value: 'Computer Science'
    }
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
        annualGraduates: 100, 
        unemploymentRate: 2.5, 
        averageSalary: 69000, 
        industryGrowth: 24, 
    }, 
  ]

  //Get the selection from the dropdown menu in firstpage and update the state
  getSelection = (e, data) => {
    console.log(data.value);
    this.setState({ dropDownSelection: data.value });
  }

  onButtonPress = (e) => {
    this.setState({ buttonPressed: !this.state.buttonPressed})
    console.log(this.state.buttonPressed)
  }

  constructor() {
    super();
    this.state = initialState
  }

  render() {
    return (
      <div className="App">

        { this.state.buttonPressed === false

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

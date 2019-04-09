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
      key: 'Agriculture & Nat. Resources', 
      text: 'Agriculture & Nat. Resources',
      value: 'Agriculture & Nat. Resources', 
    }, 
    {
      key: 'Architecture', 
      text: 'Architecture',
      value: 'Architecture', 
    }, 
    {
      key: 'Area/Group Studies', 
      text: 'Area/Group Studies',
      value: 'Area/Group Studies', 
    }, 
    {
      key: 'Art', 
      text: 'Art',
      value: 'Art', 
    }, 
    {
      key: 'Business', 
      text: 'Business',
      value: 'Business', 
    }, 
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
    {
      key: 'Education', 
      text: 'Education', 
      value: 'Education',
    },
    {
      key: 'Engineering', 
      text: 'Engineering', 
      value: 'Engineering',
    },
    {
      key: 'English', 
      text: 'English', 
      value: 'English',
    },
    {
      key: 'Foreign Language', 
      text: 'Foreign Language', 
      value: 'Foreign Language',
    },
    {
      key: 'Liberal Arts', 
      text: 'Liberal Arts', 
      value: 'Liberal Arts',
    },
    {
      key: 'Math & Stats', 
      text: 'Math & Stats', 
      value: 'Math & Stats',
    },
    {
      key: 'Phil. & Relig. Studies', 
      text: 'Phil. & Relig. Studies', 
      value: 'Phil. & Relig. Studies',
    },
    {
      key: 'Physical & Life Sci.', 
      text: 'Physical & Life Sci.', 
      value: 'Physical & Life Sci.',
    },
    {
      key: 'Psychology', 
      text: 'Psychology', 
      value: 'Psychology',
    },
    {
      key: 'Social Sciences', 
      text: 'Social Sciences', 
      value: 'Social Sciences',
    },
    
    
  ]


  //Contains info about each major
  majorInfo = [
    {
        name: "Agriculture & Nat. Resources", 
        annualGraduates: "37,005", 
        commonJob: "Ag. & Food Scientist", 
        averageSalary: "$62,910", 
        industryGrowth: "310",
        verdict: "Not worth it:",
        verdictParagraph: "There are very few jobs being added annually despite there being over 37,00 agriculture-related majors awarded annually"
    },
    {
        name: "Architecture", 
        annualGraduates: "8,823", 
        commonJob: "Architect", 
        averageSalary: "$78,470", 
        industryGrowth: "550",
        verdict: "Worth it: ",
        verdictParagraph: "As populations continue to rise, more buildings need to be built, regardless of the economic condition of the nation.  The rate at which architecture degrees are awarded has been steadily dropping since 2008 suggesting increasingly better chances at getting an architecture job going forward." 
    },
    {
        name: "Area/Group Studies", 
        annualGraduates: "7,840", 
        commonJob: "Any", 
        averageSalary: "Varies", 
        industryGrowth: "Varies",
        verdict: "Could be worth it:",
        verdictParagraph: "Those who obtain a major in one of these fields will have gained knowledge that could be of use in a variety of careers, despite there being very few jobs directly relating to the majors. The success of the graduate really depends on their persistence and choices they make in finding a career." 
    },
    {
        name: "Art", 
        annualGraduates: "92,979", 
        commonJob: "Entire Sector", 
        averageSalary: "$45,250", 
        industryGrowth: "3,370",
        verdict: "Not worth it:",
        verdictParagraph: "By 2026, there will be close to 1 million people with art degrees, yet only new jobs created during that entire span. It appears that it would be very challenging to get a job in art. Your best chances will be to become a teacher or graphic designer." 
    },
    {
        name: "Business", 
        annualGraduates: "371,694", 
        commonJob: "Entire Sector", 
        averageSalary: "$67,710", 
        industryGrowth: "77,380",
        verdict: "Worth it:",
        verdictParagraph: "There will always be a need for business majors in the United States, given the fact that the very infrastructure of the nation's economy depends on it. Statistically, there will be jobs available for many graduates. Furthermore, despite advances in AI, business appears to be one of the fields that's least susceptible to being overtaken by automation." 
    },
    {
        name: "Computer Science", 
        annualGraduates: "64,405", 
        commonJob: "Software Developer", 
        averageSalary: "$103,560", 
        industryGrowth: "30,250",
        verdict: "Worth it:",
        verdictParagraph: "Computers can be used to improve and assist practically any discipline or career, meaning anywhere there exists a business, there will exist software development jobs. It is necessary for a business to remain competitive. Furthermore, the career possesses one of the highest growth rates, and the median salary is immense." 
    },
    {
        name: "Communications", 
        annualGraduates: "92,554", 
        commonJob: "Entire Sector", 
        averageSalary: "$56,340", 
        industryGrowth: "4,320",
        verdict: "Not worth it:",
        verdictParagraph: "By 2026, there will be an estimated 1 million communications graduates. In the same time period, there will be an estimated 43,000 new jobs added in the entire sector. It is certainly possible to get a job directly relating to communications, but it will probably prove to be difficult to obtain." 
    }, 
    {
        name: "Education", 
        annualGraduates: "87,217", 
        commonJob: "Teacher", 
        averageSalary: "$37,690", 
        industryGrowth: "88,890",
        verdict: "Worth it:",
        verdictParagraph: "Of the majors we analyzed, teaching/education is the only field where the job openings outnumber the graduates which suggests that there is a very high demand for teachers. It must also be noted that the salary for teachers is quite low for the valuable work they provide, and often-times teachers have to use their personal money to supply their classrooms as a result of inadequate funding." 
    }, 
    {
        name: "Engineering", 
        annualGraduates: "106,850", 
        commonJob: "Engineer", 
        averageSalary: "$79,180", 
        industryGrowth: "19,430",
        verdict: "Worth it:",
        verdictParagraph: "As long as the country continues to have a desire to innovate, there will always be a need for engineers. There are many specialties within engineering so it's hard to say if a specific engineering degree will be worthwhile or not, but in general it appears that majoring in engineering would be a good financial decision." 
    }, 
    {
        name: "English", 
        annualGraduates: "42,795", 
        commonJob: "Technical Writer", 
        averageSalary: "$70,930", 
        industryGrowth: "570",
        verdict: "Not worth it:",
        verdictParagraph: "English is one of those majors that can be utilized in a variety of disciplines. If one plans on pursuing a career directly relating to English, it appears that it may be difficult to obtain." 
    }, 
    {
        name: "Foreign Language", 
        annualGraduates: "18,427", 
        commonJob: "Interpreter", 
        averageSalary: "$47,190", 
        industryGrowth: "1,210",
        verdict: "Worth it:",
        verdictParagraph: "By itself, majoring in a foreign language can prove to be useful and worthwhile for a career. If obtained in parallel with another degree such as business, a foreign language degree can prove to be a differentiating factor between you and other candidates." 
    }, 
    {
        name: "Liberal Arts", 
        annualGraduates: "43,661", 
        commonJob: "Any", 
        averageSalary: "Varies", 
        industryGrowth: "Varies",
        verdict: "Could be worth it:",
        verdictParagraph: "Those who obtain a major in one of these fields will have gained knowledge that could be of use in a variety of careers, despite there being very few jobs directly relating to the majors. The success of the graduate really depends on their persistence and choices they make in finding a career." 
    }, 
    {
        name: "Math & Stats", 
        annualGraduates: "22,777", 
        commonJob: "Entire Sector", 
        averageSalary: "$91,475", 
        industryGrowth: "3,660",
        verdict: "Worth it:",
        verdictParagraph: "The value that common math related careers, such as actuaries and operation research analysists, provide to an organization are invaluable. The growth of these professions is on par with that of software developers, and the pay in these professions is almost equivalent." 
    }, 
    {
        name: "Phil. & Relig. Studies", 
        annualGraduates: "10,157", 
        commonJob: "Any", 
        averageSalary: "Varies", 
        industryGrowth: "Varies",
        verdict: "Could be worth it:",
        verdictParagraph: "The amount of graduates in comparison to the number of new jobs annually is favorable. However, the umbrella of life & physical sciences covers many varying disciplines, so your success in this sector will rely upon which specific major you choose." 
    }, 
    {
        name: "Physical & Life Sci.", 
        annualGraduates: "30,477", 
        commonJob: "Varies", 
        averageSalary: "$64,510", 
        industryGrowth: "10,010",
        verdict: "Could be worth it:",
        verdictParagraph: "The amount of graduates in comparison to the number of new jobs annually is favorable. However, the umbrella of life & physical sciences covers many varying disciplines, so your success in this sector will rely upon which specific major you choose." 
    }, 
    {
        name: "Psychology", 
        annualGraduates: "117,440", 
        commonJob: "Any", 
        averageSalary: "Varies", 
        industryGrowth: "Varies",
        verdict: "Could be worth it:",
        verdictParagraph: "In order to practice psychology professionally, you will need a professional degree. Otherwise, the opportunities for psychology majors within the field are relatively limited, despite there being so many graduates annually." 
    }, 
    {
        name: "Social Sciences", 
        annualGraduates: "161,230", 
        commonJob: "Any", 
        averageSalary: "Varies", 
        industryGrowth: "Varies",
        verdict: "Could be worth it:",
        verdictParagraph: "Those who obtain a major in one of these fields will have gained knowledge that could be of use in a variety of careers, despite there being very few jobs directly relating to the majors. The success of the graduate really depends on their persistence and choices they make in finding a career." 
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
      commonJob: result.commonJob, 
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
        commonJob: "2.5%", 
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
        commonJob: "2.5%", 
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

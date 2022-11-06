import './App.scss';
import React from "react"; 
import Education from './components/education'; 
import Experience from "./components/experience"; 


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        fullname: '',
        email: '',
        phone: '', 
        education: [], 
        institution: {
          name:'',
          title: '',
          from: '',
          to:'',
        },
        experience: [],
        company: {
          position: '', 
          task: '', 
          from: '', 
          to: '', 
        }
      }
    this.addEducation = this.addEducation.bind(this); 
    this.addExperience = this.addExperience.bind(this); 
   

  }

  addEducation(e) {
    e.preventDefault();
    this.setState({
     education: this.state.education.concat(this.state.institution)
     })
        //console.log(this.state.education);
  }

  addExperience(e){
    e.preventDefault(); 
    this.setState({
      experience: this.state.experience.concat(this.state.company)
    })
  }
  
  
  render(){
    const {education, experience} = this.state;
    return(
      <form>
        <fieldset>
          <label>
            Fullname: 
            <input type="text"></input>
          </label>
          <label>
            Email:
            <input type="email"></input>
          </label>
          <label>
            Phone Number:
            <input type="tel"></input>
          </label>
        </fieldset>
        <fieldset>
        <button onClick={this.addEducation}>ADD Education</button>
          { 
            education.map(() => { return <Education /> }) 
          }
        </fieldset>
        <fieldset>
          <button onClick={this.addExperience}>Add Experience</button>
          {
            experience.map(() => {return <Experience />})
          }
        </fieldset>

       
        
       
      </form>
    )
  }
}

export default App

import './App.scss';
import React from "react"; 
import Education from './components/education'; 
//import Experience from "./components/experience";
import uniqid from "uniqid"


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        fullname: '',
        email: '',
        phone: '', 
        education: [], 
        institution: {
          id: uniqid(), 
          name:'',
          title: '',
          from: '',
          to:'',
        },
        experience: [],
        company: {
          id: uniqid(), 
          position: '', 
          task: '', 
          from: '', 
          to: '', 
        }
      }
    this.addEducation = this.addEducation.bind(this); 
    this.addExperience = this.addExperience.bind(this); 
    this.handleChange = this.handleChange.bind(this); 

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
      experience: this.state.experience.concat(this.state.company),
      
    })
  }

  handleChange(e){
    this.setState({
      [e.target.id]: e.target.value,
    })
    console.log(e.target.id)
  }
  
  
  render(){
    const {fullname, email, phone, education} = this.state;
    return(
      <form>
        <fieldset>
          <label>
            Fullname: 
            <input type="text" id="fullname"  name="fullname" value={fullname} onChange={this.handleChange}></input>
          </label>
          <label>
            Email:
            <input type="email" id="email" name="email" value={email} onChange={this.handleChange}></input>
          </label>
          <label>
            Phone Number:
            <input type="tel" id="phone" name="phone" value={phone} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onChange={this.handleChange}></input>
          </label>
        </fieldset>
        <div>
        <button onClick={this.addEducation}>ADD Education</button>
        <Education handleChange={this.handleChange} data={education}/> 
        </div>
      </form>
    )
  }
}

export default App

/* <fieldset>
          <button onClick={this.addExperience}>Add Experience</button>
          {
            experience.map(() => {return <Experience />})
          }
        </fieldset>
        */
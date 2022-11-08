import './App.scss';
import React from "react"; 
import Education from './components/education'; 
//import Experience from "./components/experience";
import uniqid from "uniqid"
import Overview from './components/Overview';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        fullname: '',
        email: '',
        phone: '', 
        education: [], 
        institution: {
          id: uniqid()
        },
        show: false,
      }
    this.addEducationField = this.addEducationField.bind(this); 
    this.handleChange = this.handleChange.bind(this); 
    this.recieveDataFromChild = this.recieveDataFromChild.bind(this); 
    this.submitForm = this.submitForm.bind(this); 
  }

  addEducationField(e) {
   e.preventDefault();
    this.setState({
     education: this.state.education.concat(this.state.institution),
     institution: {
      id: uniqid(),
     }
     })
     console.log(this.state.institution.id)
  }


  handleChange(e){
    this.setState({
      [e.target.id]: e.target.value,
    })
   // console.log(e.target.id)
  }

  recieveDataFromChild(data){
    this.setState({
      institution: {
        data
      }
    })
  }

  submitForm(e){
    e.preventDefault();
    this.setState({
      show: true, 
    })
  }
  

  
  render(){
    const {fullname, email, phone, education, show} = this.state;
    return(
      <div>
      <form onSubmit={this.submitForm}>
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
        <button onClick={this.addEducationField}>ADD Education</button>
        {
          education.map((institution) => {
           return <Education key={institution.id} recieve={this.recieveDataFromChild} data={institution}/> 
          })
        }
        
        </div>
        <button type="submit">Create CV</button>
      </form>
      <Overview cv={this.state} visualization={show}/> 
      </div>
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
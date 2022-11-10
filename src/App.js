import './App.scss';
import React from "react"; 
import Education from './components/education'; 
//import Experience from "./components/experience";
//import uniqid from "uniqid"
import Overview from './components/Overview';
import Experience from './components/experience';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        fullname: '',
        email: '',
        phone: '', 
        education: [
          {
            id: Math.random().toString(16).slice(2), 
            name: '',
            title: '',
            from: '',
            to: '',
          },
        ],
        experience: [
          {
            id: Math.random().toString(16).slice(2), 
            name: '',
            position: '',
            task: '', 
            from: '',
            to: '',
          }
        ], 
        show: false,
      }
    this.addEducationField = this.addEducationField.bind(this); 
    this.handleChange = this.handleChange.bind(this); 
    this.recieveDataFromChild = this.recieveDataFromChild.bind(this); 
    this.submitForm = this.submitForm.bind(this); 
    this.deleteTask = this.deleteTask.bind(this); 
    this.recieveDataFromChildExperience = this.recieveDataFromChildExperience.bind(this); 
    this.addExperienceField = this.addExperienceField.bind(this); 
  }

  addEducationField(e) {
   e.preventDefault();
    this.setState({
    education: this.state.education.concat({
      id: Math.random().toString(16).slice(2),
      name: '',
      title: '',
      from: '',
      to: '',
     }),
     })
  }

  addExperienceField(e){
    e.preventDefault();
    this.setState({
    experience: this.state.experience.concat({
      id: Math.random().toString(16).slice(2),
      name: '',
      position: '',
      task: '',
      from: '',
      to: '',
     }),
     })
  }

  handleChange(e){
    this.setState({
      [e.target.id]: e.target.value,
    })
   // console.log(e.target.id)
  }

  recieveDataFromChild(index, name, data){
   // console.log(index);
    let newEducation = [...this.state.education]; 
    let institution = {...newEducation[index]}; 
    institution[name] = data;
    newEducation[index] = institution; 
    this.setState({ education: newEducation })
  }


  recieveDataFromChildExperience(index, name, data){
    // console.log(index);
     let newExperience = [...this.state.experience]; 
     let institution = {...newExperience[index]}; 
     institution[name] = data;
     newExperience[index] = institution; 
     this.setState({ experience: newExperience })
   }
  /* recieveDataFromChild(data, index){
    let newEducation = [...this.state.education]; 
    let institution = {...newEducation[index]}; 
    institution.id = data.id; 
    institution.name = data.name;
    institution.title = data.title;
    institution.from = data.from;
    institution.to = data.to; 
    newEducation[index] = institution; 
    this.setState({ education: newEducation })
  }*/

  submitForm(e){
    e.preventDefault();
    this.setState({
      show: true, 
    })
  }
  

  deleteTask(e){
    e.preventDefault(); 
    if(e.target.classList.contains("education-field")){
      this.setState({
        education: this.state.education.filter((_, index) => {
         return index !== Number(e.target.dataset.number)
        })
      })
    }
  }

  render(){
    const {fullname, email, phone, education, experience, show} = this.state;
    return(
      <div>
      <form onSubmit={this.submitForm}>
        <fieldset>
          <legend>Basic Information</legend>
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
        <fieldset className="education-field">
          <legend>Education</legend>
          <button onClick={this.addEducationField}>ADD Education</button>
          {
            education.map((element, index) => { 
            return <Education key={element.id} onInput={this.recieveDataFromChild} data={element} dataNumber={index} deleteFunc={this.deleteTask}/> 
            })
          }
        </fieldset>
        <fieldset>
          <legend>Experience</legend>
          <button onClick={this.addExperienceField}>ADD Experience</button>
          {
            experience.map((element, index) => { 
              return <Experience key={element.id} onInput={this.recieveDataFromChildExperience} data={element} dataNumber={index} deleteFunc={this.deleteTask}/> 
              })
          }
        </fieldset>
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
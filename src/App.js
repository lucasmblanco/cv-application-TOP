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
        education: [
          {
            id: uniqid(), 
            name: '',
            title: '',
            from: '',
            to: '',
          },
        ], 
        show: false,
      }
    this.addEducationField = this.addEducationField.bind(this); 
    this.handleChange = this.handleChange.bind(this); 
    this.recieveDataFromChild = this.recieveDataFromChild.bind(this); 
    this.submitForm = this.submitForm.bind(this); 
    this.deleteTask = this.deleteTask.bind(this); 
  }

  addEducationField(e) {
   e.preventDefault();
    this.setState({
    education: this.state.education.concat({
      id: uniqid(),
      name: '',
      title: '',
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
    console.log(index);
    let newEducation = [...this.state.education]; 
    let institution = {...newEducation[index]}; 
    institution[name] = data;
    newEducation[index] = institution; 
    this.setState({ education: newEducation })
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
    const {fullname, email, phone, education, show} = this.state;
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
          <button>ADD Experience</button>
          {

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
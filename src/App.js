import "./reset.scss"; 
import './App.scss';
import "./assets/Overview.scss"; 
import React from "react"; 
import Education from './components/education'; 
import Overview from './components/Overview';
import Experience from './components/experience';
import NewWindow from 'react-new-window'



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
            to: 'Present',
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
      to: 'Present',
     }),
     })
  }

  handleChange(e){
    this.setState({
      [e.target.id]: e.target.value,
    })
  }

  recieveDataFromChild(index, name, data){
    let newEducation = [...this.state.education]; 
    let institution = {...newEducation[index]}; 
    institution[name] = data;
    newEducation[index] = institution; 
    this.setState({ education: newEducation })
  }


  recieveDataFromChildExperience(index, name, data){
     let newExperience = [...this.state.experience]; 
     let institution = {...newExperience[index]}; 
     institution[name] = data;
     newExperience[index] = institution; 
     this.setState({ experience: newExperience })
   }

  submitForm(e){
    e.preventDefault();
    this.setState({
      show: true, 
    });
  }
  

  deleteTask(e){
    e.preventDefault(); 
    if(e.target.classList.contains("education-field")){
      this.setState({
        education: this.state.education.filter((_, index) => {
         return index !== Number(e.target.dataset.number)
        })
      })
    } else {
      this.setState({
        experience: this.state.experience.filter((_, index) => {
         return index !== Number(e.target.dataset.number)
        })
      })
    }
  }

  test(){
    window.location.reload();
  }

  render(){
    const {fullname, email, phone, education, experience, show} = this.state;
    return(
      <div>
        <div className='title'>
        <h1>CURRICULUM GENERATOR </h1>

        </div>
        <div className='form-container'>
        <form onSubmit={this.submitForm}>
        <fieldset className='basic-information'>
          <legend>Basic Information</legend>
          <p>Share your contact information so people can reach to you.</p>
          <label>
            Fullname 
            <input type="text" id="fullname"  name="fullname" value={fullname} onChange={this.handleChange}></input>
          </label>
          <label>
            Email
            <input type="email" id="email" name="email" value={email} onChange={this.handleChange}></input>
          </label>
          <label>
            Phone Number
            <input type="tel" id="phone" name="phone" value={phone} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onChange={this.handleChange}></input>
          </label>
        </fieldset>
        <fieldset className='education-field'>
          <legend>Education</legend> 
          <p>Having a degree demonstrates an ability to learn. Although not required, you may include it if you wish to share.</p>
          <div className="button-container">
            <button onClick={this.addEducationField}>ADD</button>
          </div>
         
          {
            education.map((element, index) => { 
            return <Education key={element.id} onInput={this.recieveDataFromChild} data={element} dataNumber={index} deleteFunc={this.deleteTask}/> 
            })
          }
        </fieldset>
        <fieldset className='experience-field'>
          <legend>Experience</legend>
          <p>Employers love practical experience. Show them what skills you bring to the table.</p>
          <div className="button-container">
            <button onClick={this.addExperienceField}>ADD</button>
          </div>
          
          {
            experience.map((element, index) => { 
              return <Experience key={element.id} onInput={this.recieveDataFromChildExperience} data={element} dataNumber={index} deleteFunc={this.deleteTask}/> 
              })
          }
        </fieldset>
        <div className="container-submit-button">
          <button type="submit" >GENERATE</button>
        </div>
        
      </form>
        </div>
          { 
            show ?  <NewWindow title={fullname}  features={{  width: '1000', height: '1000' }}> 
                      <Overview cv={this.state} /> 
                    </NewWindow> : null
          }
      </div>
    )
  }
}

export default App

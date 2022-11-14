import React from "react"; 
import { FaEnvelope, FaPhone } from "react-icons/fa";
//import "../assets/Overview.scss"; 


class Overview extends React.Component{
    


    render(){
        
        const {fullname, email, phone, education, experience} = this.props.cv;

        return( 
            <div id='curriculum' className="curriculum">
                <div className="name-heading">
                    <h1 className="name">{fullname.toUpperCase()}</h1>
                </div>
                    <div className="container-information-contact">
                        <div className ="email container-information">
                            <div className="icon-information"><FaEnvelope /></div><div className="information-contact">{email}</div>
                        </div>
                        <div className="phone container-information">
                            <div className="icon-information"><FaPhone /></div><div className="information-contact">{phone}</div>
                        </div>
                       
                    </div>
                    <div className="line-container"><hr></hr></div>
                    <div className="field-container">
                    <div className="field-name">
                        <h2>WORK EXPERIENCE</h2>
                    </div>
                    {
                    experience.map((institution) => {
                        return  <div key={institution.id} className="experience-field">
                                    <div className="company-name">{institution.name}</div>
                                    <div className="company-position">{institution.position}</div>
                                    <div className="company-date-from">{institution.from}</div>
                                    <div className="separation">-</div>
                                    <div className="company-date-to">{institution.to}</div>
                                    <div className="company-task">{institution.task}</div>
                                </div>
                    })
                }
                    </div>
                    <div className="field-container">
                    <div className="field-name">
                        <h2>EDUCATION</h2>
                    </div>
                    {
                   
                   education.map((institution) => {
                       return  <div key={institution.id} className="education-field">
                               <div className="institution-name">{institution.name}</div>
                               <div className="institution-title">{institution.title}</div>
                               <div className="institution-from">{institution.from}</div>
                               <div className="separation">-</div>
                               <div className="institution-to">{institution.to}</div>
                               </div>
                   })
               }
                    </div>
                    
                
                
            </div> 
        )
    }
}

export default Overview
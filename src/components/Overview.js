import React from "react"; 

class Overview extends React.Component{
 


    render(){
        const {fullname, email, phone, education, experience} = this.props.cv
        return( this.props.visualization ? 
            <div>
                <div>{fullname}</div>
                <div>{email}</div>
                <div>{phone}</div>
                {
                    education.map((institution) => {
                        return  <div key={institution.id}>
                                <div>{institution.name}</div>
                                <div>{institution.title}</div>
                                <div>{institution.from}</div>
                                <div>{institution.to}</div>
                                </div>
                    })
                }
                {
                    experience.map((institution) => {
                        return  <div key={institution.id}>
                                <div>{institution.name}</div>
                                <div>{institution.position}</div>
                                <div>{institution.task}</div>
                                <div>{institution.from}</div>
                                <div>{institution.to}</div>
                                </div>
                    })
                }
            </div> : 
                null
        )
    }
}

export default Overview
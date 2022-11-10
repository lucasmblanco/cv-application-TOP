import React from "react"; 

class Experience extends React.Component {
    constructor(props){
        super(props); 
        this.state = {
                id: this.props.data.id,
                name: '', 
                position: '', 
                task: '', 
                from: '',
                to: '', 
        }
        this.handleChange = this.handleChange.bind(this); 
    }
 

   async handleChange(e){
       await this.setState({
            [e.target.id]: e.target.value,
        })
        this.props.onInput(this.props.dataNumber, e.target.id, this.state[e.target.id])
    }

    render(){
        const { name, position, task, from, to } = this.state;  
            return(
                    <div key={this.props.data.id} className="experience-form-container">
                        <label>
                            Company 
                            <input type="text" id="name" name="name" value={name} onChange={this.handleChange}></input>
                        </label>
                        <label>
                            Position
                            <input type="text" id="position" name="position" value={position}onChange={this.handleChange}></input>
                        </label>
                        <label>
                            From
                            <input className="date" type="date" id="from" name="from"  value={from} onChange={this.handleChange}></input>
                        </label>
                        <label>
                            To
                            <input className="date" type="date" id="to" name="to" value={to} onChange={this.handleChange}></input>
                        </label>
                        <label>
                            Task
                            <input type="text" id="task" name="task" value={task}onChange={this.handleChange}></input>
                        </label>
                        <div className="container-button-delete">
                            <button onClick={this.props.deleteFunc} data-number={this.props.dataNumber} className="experience-field">Delete</button>
                        </div>
                        
                    </div>
            )
        }
}



export default Experience
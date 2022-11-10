import React from "react"; 

class Education extends React.Component {
    constructor(props){
        super(props); 
        this.state = {
                id: this.props.data.id,
                name: '', 
                title: '', 
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
        const { name, title, from, to } = this.state;  
            return(
                    <div key={this.props.data.id}>
                        <label>
                            Institution name: 
                            <input type="text" id="name" name="name" value={name} onChange={this.handleChange}></input>
                        </label>
                        <label>
                            Title:
                            <input type="text" id="title" name="title" value={title}onChange={this.handleChange}></input>
                        </label>
                        <label>
                            From:
                            <input type="date" id="from" name="from"  value={from} onChange={this.handleChange}></input>
                        </label>
                        <label>
                            To:
                            <input type="date" id="to" name="to" value={to} onChange={this.handleChange}></input>
                        </label>
                        <button onClick={this.props.deleteFunc} data-number={this.props.dataNumber} className="education-field">Delete</button>
                    </div>
            
            )
        
        
        
        
    
}
    

    
}



export default Education
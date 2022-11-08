import React from "react"; 

class Education extends React.Component {
    constructor(props){
        super(props); 
        this.state = {
                name: '', 
                title: '', 
                from: '',
                to: '', 
        }
        this.handleChange = this.handleChange.bind(this); 
    }
 

    handleChange(e){
        this.setState({
            [e.target.id]: e.target.value,
        })
        this.props.recieve(this.state)
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
                    </div>
            
            )
        
        
        
        
    
}
    

    
}



export default Education
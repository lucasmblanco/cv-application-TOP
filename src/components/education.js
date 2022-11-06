import React from "react";

const Education = (props) => {
    const {handleChange, data } = props; 

    return(
        <div>
        {
            data.map((element) => {
                console.log(element)
               return <div key={element.id}>
                        <label>
                            Institution name: 
                            <input type="text" id="name" name="name" value={element.name} onChange={handleChange}></input>
                        </label>
                        <label>
                            Title:
                            <input type="text" id="title" name="title" value={element.title} onChange={handleChange}></input>
                        </label>
                        <label>
                            From:
                            <input type="date" id="from" name="from" value={element.from} onChange={handleChange}></input>
                        </label>
                        <label>
                            To:
                            <input type="date" id="to" name="to" value={element.to} onChange={handleChange}></input>
                        </label>
                    </div>
            })
        }
        </div>
        
        
    )
}



export default Education
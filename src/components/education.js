import React from "react";

const Education = (props) => {

    return(
        <div>
           <label>
               Institution name: 
                <input type="text"></input>
           </label>
           <label>
                Title:
                <input type="text"></input>
           </label>
           <label>
                From:
                <input type="date"></input>
           </label>
           <label>
                To:
                <input type="date"></input>
           </label>
        </div>
    )
}



export default Education
import React from "react";
import './index.css'

function List({people}){
return(
    <>
    {people.map((person)=>{
        const{id,Name,age,img}=person;
        return(
        <artical key={id} className="person">
        <img src={img} alt={Name}/>
        <div>
            
            <h4>{Name}</h4>
            
            <p>{age} years</p>
            

        </div>
        </artical>
        );
    })}
    </>
    
)
}

export default List;
import React, { useState } from "react";
import List from "./List";
import Data from "./Data";
import "./index.css"

function App() {
   const [people,setpeople]= useState(Data) 

  return (
    <main>
      <section  className="container">
        <h3>{people.length} Birthdat today</h3>
        <List people={people} />
        <button onClick={()=>setpeople([])}>Clear All</button>
      </section>
    </main>

  );
    
  
}

export default App;

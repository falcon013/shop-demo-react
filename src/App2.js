import React from "react";
import './App.css';

function App2() {
    let arrayOfClothes = ["dress","sweater","pants"]
    return (
           <div>
               <ol>
                   {arrayOfClothes.map((el,index) => <li key={index}>{el}</li>)}
               </ol>

           </div>
    );
}

export default App2;

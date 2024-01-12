import React from "react";
function DogDetails({dog}) {


 return (                            
    <div>
      <div>
        <img src={dog.name} alt={dog.name} />
        <h2>{dog.name}</h2>
        <h3>{dog.age} years old</h3>
        <ul>
          {dog.facts.map((fact, i) => (
            <li key={i}>{fact}</li>
          ))}
        </ul>
      </div>
    </div>
    
  );
}

export default DogDetails;


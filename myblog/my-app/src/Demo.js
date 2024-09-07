import React, { useState, useEffect } from 'react';

// Rename component function to start with an uppercase letter
function Demo() {
  const [name, setName] = useState("Jack");
  const [age, setAge] = useState(20);

  useEffect(() => {
    console.log("useEffect called");
  }, [age]); // Dependency array to run effect only on mount

  return (
    <div>
      <h1>Your Name is: {name}</h1><br />
      <h1>Your Age is: {age}</h1><br />
      <button className="btn btn-primary" onClick={() => setName("Tom")}>Update Name</button>&nbsp;&nbsp;
      <button className="btn btn-primary" onClick={ ()=> setAge(age +2)}>After 2 year your age</button>
      </div>
  );
}

export default Demo;

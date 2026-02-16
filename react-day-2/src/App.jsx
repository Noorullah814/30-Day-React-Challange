import React from 'react'

const App = () => {

  const name = "Noor Ullah";
  const age = 20;
  const field = "Frontend web developer";

  return (
    <div className="card">
      <h1>Profile Card</h1>
      <p><strong>Name: </strong>{name}</p>
      <p><strong>Age: </strong>{age}</p>
      <p><strong>Field: </strong>{field}</p>
      <p>I am learning React to become job-ready.</p>
    </div>
  )

}

export default App

import React, { useState } from 'react'
import './App.css';
import data from './Component/Data';
import List from './Component/List';
import './Component/Header.css';
function App() {

  const[people,setPeople] = useState(data)
  return (
  <main class = "box">
    <section className="container">
      <h3>{people.length} Birthdays today</h3>
      <h1>List Component </h1>
      <List people={people}/>
      <button class="btn" onClick={() => setPeople([])}>
        Clear All
      </button>
    </section>
  </main>
  )       
}

export default App;

import React from 'react';
import './App.css';
import Skill from './skill.js';

function App() {
  return (
    <div className="App">

     <Skill name="HTML"/>
     <hr/>
     <Skill name="CSS"/>
     <hr/>
     <Skill name="JAVASCRIPT"/>
   </div>
  );
}

export default App;

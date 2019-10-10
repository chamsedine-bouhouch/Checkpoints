import React from 'react';
import imageInSrc from './imageInSrc.jpg';
import './App.css';

function App() { return (
 <fragment>
  <div style={{border:`solid 1 black`, maxWidth:`100vw`}}/>
      <h1 className={`title red`}> How to hack the react official website </h1>
      <img src={imageInSrc} />
      <img src=  "/imageInPublic.jpg" />
   <div/>
 </fragment>
 ); 
 }
export default App;

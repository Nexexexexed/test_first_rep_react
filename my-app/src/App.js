import React from 'react'
import Header from './Components/BaseComp/Header'
import fon from './images/main__bg--spring-min.jpg'

function App() {
  
  return (
    <div className="App">
      <Header/>
      <img src={fon} ></img>
    </div>
  );
}

export default App;

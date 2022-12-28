import React from 'react';
import './App.css';
import Header1 from './components/Header1';
import Header2 from './components/Header2';
import Button from './components/Button';
import Description from './components/Description';


function App() {
  return (
    <div className="App">
    <Header1 title="Primary button / states" />
    <Button title="Erinevad toimingud" /> 
    <Button title="Erinevad toimingud" /> 
    <Button title="Erinevad toimingud" />
    <Header2 title="Dropdown selector" />
    

    </div>
  );
}

export default App;

//add Button container and dropdown options container
// <Description title="" > Can be assigned to any button. When clicked, a dropdown menu appears. Opened menu: button keeps hover state until closed. Alignment of the dropdown depends on the alignent of the button.</Description>

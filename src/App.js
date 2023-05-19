// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './component/Header';
import Body from './component/Body';
import Increament from './component/Increament';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Increament />
        {/* <Body name = 'Bruce' pronoun = 'he' work = 'IT'>
          <p>I like to code</p>
        </Body> */}
        <Body name = 'Philomena' pronoun = 'she' work = 'Education'/>
        <Body name = 'Bridget' pronoun = 'she' work = 'Tech'/>
        <Body name = 'Dan' pronoun = 'he' work = 'SAP'/> 
      </header>
    </div>
  );
}

export default App;

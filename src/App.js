import { useState } from 'react';
import './App.css';

import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import MainScreen from './components/MainScreen';

function App() {
  // window.location.reload(false);
  const [textcol, settextcol] = useState('black')
  const changeRed = ()=>{
    document.body.style.background = '#ff3838';
    settextcol('white')
  }
  const changeYellow = ()=>{
    document.body.style.background = '#f9f74a';
    settextcol('black')
  }
  const changeGreen = ()=>{
    document.body.style.background = '#44ce87';
    settextcol('black')
  }
  const changeDark = ()=>{
    document.body.style.background = '#48514d';
    settextcol('white')
  }
  const changeLight = ()=>{
    document.body.style.background = 'white';
    settextcol('black')
  }

  function bg(){
    return document.body.style.background;
  }

  function showalert(message, type){
      let box = document.getElementById('alert')
      box.innerHTML = `${type.toUpperCase()} : ${message}`;
      box.classList.remove('alert-success')
      box.classList.remove('alert-warning')
      box.classList.add(`alert-${type}`)
      box.style.visibility = 'visible'
      setTimeout(() => {
        box.style.visibility = 'hidden'
      }, 5000);
}
  return (
    <>
      <Router>
      <Navbar textcol={textcol}  changeRed={changeRed} changeYellow={changeYellow} changeGreen={changeGreen} changeDark={changeDark} changeLight={changeLight}title="TextUtils" abouttext="About"/>
      <div className='container'>
        <Switch>
            <Route exact path='/'>
              <TextForm showalert={showalert} textcol={textcol} cbc={bg} changeRed={changeRed} changeYellow={changeYellow} changeGreen={changeGreen} changeDark={changeDark} changeLight={changeLight}/>
            </Route>

            <Route exact path='/about'>
              <About textcol={textcol} cbc={bg} changeRed={changeRed} changeYellow={changeYellow} changeGreen={changeGreen} changeDark={changeDark} changeLight={changeLight}/>
            </Route>

            <Route exact path='/TextUtils-React'>
              <MainScreen/>
            </Route>
        </Switch>
      </div>
      </Router>
    </>
  );

  }
export default App;

// import { useState } from 'react'
import './App.css'
import dividerMobile from '../public/images/pattern-divider-mobile.svg'
import dice from '../public/images/icon-dice.svg';

function App() {

  return (
    <main>
      <header>
        <h1 className='sr-only'>Advice Generator</h1>
        <p>Advice #</p>
      </header>
      <section>
        <p>"{/*<!-- Advice text goes here -->*/}"</p>
        <img src={dividerMobile} alt=""></img>
        <div className='icon-wrapper'>
        <img src={dice} alt="" className='icon'></img>
        </div>
      </section>
   
    </main>
  )
}

export default App

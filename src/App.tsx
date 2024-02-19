import { useState } from 'react'
import './App.css'
import dividerMobile from '../public/images/pattern-divider-mobile.svg'
import dice from '../public/images/icon-dice.svg';

function App() {

  const [advice, setAdvice] = useState('hello');
  const [id, setId] = useState(1);
  const url = 'https://api.adviceslip.com/advice'

  
    async function getAdvice(){
      const response = await fetch(url);
      const text = await response.json();
      setAdvice(text.slip.advice);
      setId(text.slip.id);
    }
  
  return (
    <main>
      <header>
        <h1 className='sr-only'>Advice Generator</h1>
        <p>Advice # {id}</p>
      </header>
      <section>
        <p>"{advice}"</p>
        <img src={dividerMobile} alt=""></img>
        <div className='icon-wrapper'>
        <button onClick={getAdvice}><img src={dice} alt="" className='icon'></img></button>
        </div>
      </section>
   
    </main>
  )
}

export default App

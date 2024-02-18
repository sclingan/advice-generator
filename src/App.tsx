import { useState, useEffect } from 'react'
import './App.css'
import dividerMobile from '../public/images/pattern-divider-mobile.svg'
import dice from '../public/images/icon-dice.svg';

function App() {

  const [advice, setAdvice] = useState();
  const url = 'https://api.adviceslip.com/advice'

  useEffect(() => {
    fetch(url).then(res => {
      const response = res.json();
      JSON.stringify(response);
      console.log(response);
      // console.log(res);
    }).then(result => {
      console.log(result);
      // setAdvice(data);
    })
  }, []);
  return (
    <main>
      <header>
        <h1 className='sr-only'>Advice Generator</h1>
        <p>Advice #</p>
      </header>
      <section>
        <p>"{advice}"</p>
        <img src={dividerMobile} alt=""></img>
        <div className='icon-wrapper'>
        <img src={dice} alt="" className='icon'></img>
        </div>
      </section>
   
    </main>
  )
}

export default App

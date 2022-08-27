import { useState } from 'react'
import Header from './components/Header'
import Home from './components/pages/Home'
function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <div className="attribution" style={{backgroundColor:"whitesmoke"}}>
          <pre style={{textAlign:"center"}}>
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
            <br />
            Coded by <a href="#">Juan Manuel Mercado</a>. 
          </pre>
        </div>
    </div>
  )
}

export default App

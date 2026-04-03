
import './App.css'
import Navbar from './components/Navbar.jsx'
import { useState } from 'react'
import Contact from './components/Contact.jsx'


function App() {
  const [text, setText] = useState("Heyy i am a nice person")
  const isDiabitic=true
  const btn1=() => {
      setText("HGwyy i am a bad boyy")    
  }
  const btn2=() => {
    setText("alwys you would be the bangone my boy")
    

  }
  const items=["home","services","about","Logout"]
  
  

  return (
    <>
      

        <Navbar logoText="hithesh" color="red" items={items} />
        <div className='red'>{text}</div>
        <div>
      {isDiabitic &&<button onClick={btn2}>Button2</button>}
          <button onClick={()=>{alert("i am a good boy")}}>Button2</button>

        </div>
        <Contact/>
      
    </>
  )
}

export default App

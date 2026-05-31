import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const[value,setValue]=useState(0)
  const[say,setSay]=useState("")
  return (
    <div className="App">
      <Navbar/>

      <div className='value'>{value}</div>
      <button onClick={()=>{setValue(value+1)}}>Click me</button>
      <div className='say'>{say}</div>
      <button onClick={() => { setSay("Say HEllo") }}>Click me</button>
      <Footer/>
    </div>
  );
}
export default App;

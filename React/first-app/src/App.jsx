import Navbar from "./components/Navbar"
import Foter from "./components/Foter"
import Cards from "./components/Cards"

function App() {

  return (
    <>
   <Navbar />
   <div className="container">
        <Cards title="This is virat" details=" Age:25 year Name:virat Kohli Gender:male"  description=" card 1 desc" /> 
    <Cards title="This is Sharma" description="cad 2 Description"/>
      <Cards title="This is Dhoni" description="cad 3 Description" />
   </div>

   <Foter />
    </>
  )
}

export default App

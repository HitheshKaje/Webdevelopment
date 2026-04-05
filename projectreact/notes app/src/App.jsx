import { useEffect, useState } from 'react'
import './App.css'
import Nabvar from './components/Nabvar'
import Card from './Card'
function App() {
  const [notes, setnotes] = useState([])
  const [currentNote, setcurrentNote] = useState({ title: "", desc: "" })
  useEffect(() => {
    console.log(" i am useiffect")
    let localnotes = localStorage.getItem("localnotes")
    if (localnotes) {
      setnotes(JSON.parse(localnotes))
    }
  }, [])
  const handleSubmit = (e) => {
    e.preventDefault()
    setnotes([...notes, currentNote])
    localStorage.setItem("notes",JSON.stringify([...notes, currentNote]))

    
  }
  const deleteNote=(title)=>{
    setnotes(notes.filter(item=>item.title!=title))
    localStorage.setItem("notes", JSON.stringify(notes.filter(item => item.title != title)))

  }
  const handleChange = (e) => {
    setcurrentNote({ ...currentNote, [e.target.name]: e.target.value })
  }

  return (
    <>
      <Nabvar />
      <div className="full">

        <main>
          <h1>Create Your form</h1>
          <form action="" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="title">Title</label>

              <input type="text" name="title" id="title"
                value={currentNote.title} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="desc">Description</label>
              <textarea name="desc" id="desc" onChange={handleChange} value={currentNote.desc}></textarea>
            </div>
            <button>Submit</button>
          </form>
        </main>
        <section>
          <h2>Your Notes</h2>
          <div className="container">

            {notes && notes.map(note => {
              return <Card key={note.title} deleteNote={deleteNote} desc={note.desc} />
            })}
          </div>
        </section>

      </div>
    </>
  )
}

export default App

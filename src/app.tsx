import logo from "./assets/Logo.svg"
import { NoteCard } from "./components/node-card"
import {NewNoteCard} from "./components/new-note-card"
import { useState } from "react"


export function App() {

  const [notes, setNotes] = useState([
    {id:1, date: new Date(), content: "hello world"},
    {id:2, date: new Date(), content: "nota 2"}
  ])

  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">

      <img src={logo} alt="logomarca" />

      <form className="w-full">
        <input 
          type="text" 
          placeholder="busque suas notas" 
          className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500"
        />
      </form>

      <div className="h-px bg-slate-700"></div>

      <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">

          <NewNoteCard />

         {notes.map(note => {
          return <NoteCard key = {note.id} note={note}/>
         })}
     

        
      </div>

    </div>
  )
}

import {logo} from "./assets/Logo.svg"
import { NoteCard } from "./components/node-card"
import {NewNoteCard} from "./components/new-note-card"


export function App() {

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

         <NoteCard note={{
            date: new Date(),
            content: "Hello"
         }}/>
     

        
      </div>

    </div>
  )
}

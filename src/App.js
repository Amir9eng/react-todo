import React, { useState } from 'react';
import './App.scss';


const id = (length = 3) => Math.random().toString(36).substring(2, 2 + length)

const Timee = (timeStamp) => {

  const days = 'Sunday Monday Tuesday Wednesday Thursday Friday Saturday'.split(" ")
  const months = 'January February March April May June July August September October November December'.split(" ")

  const now = new Date(timeStamp);
   return` ${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()} at ${now.toLocaleTimeString()} `
}
  
const defaultNote = {}
defaultNote[id()]=
{
  title: 'How to learn React in five minutes',
  content: 'Lorem ipsum dolor sit amet ',
  dateCreated: Timee(Date.now()),
  // color: 'rgb(255,255,255)'

}
  


function App() {
  const defaultScreen =defaultNote[Object.keys(defaultNote)[0]]
  const [note, setNote] = useState(defaultNote)
  
  const [display, setDisplay] = useState(defaultScreen)

  const addNote= (ev) =>{
    ev.preventDefault()
     let title = ev.target.title.value
     let content = ev.target.content.value
     

     const noteOb = {}
     noteOb[id()] = {
       title: title,
       content: content,
       dateCreated: Timee(Date.now())
     }
     setNote({
       ...note,
       ...noteOb
     })
     ev.target.title.value= ''
     ev.target.content.value= ''
  }

  const handleDisplay =(title, content, dateCreated) =>{
    setDisplay({
      ...display,
     title,
     content,
     dateCreated
    })
  }

  const NoteList = ({list}) => {
    return (
    Object.keys(list).map(noteid=> {
      const note = list[noteid]
      return(
      <div key={noteid} className= "noteList" onClick= {() => handleDisplay(note.title, note.content, note.dateCreated)}>
              <span>{note.title}</span> <br />
              <span>{note.content}</span>
              <span>{note.dateCreated}</span>
      </div>)
    }))
  }
  
  const SearchBox = () => (
      <div className="SearchBox">
        <img src="/vectors/search-line.svg" alt="search-icon "></img>
        <input type="text" placeholder="Search..."></input>  
      </div>
    
  
  )
  const SearchBox = ({ onInput }) => {
    Object.keys(todos).filter((item) => todos[item].title.startsWith(ev.target.value)?todos[item].title :false ).map((item,i) => <a href="/" className="option" key={i}>{item}</a>)


    return (

        <div className="SearchBox">
            <img src="/vectors/search.svg" alt="search-icon" />
            <input type="text" placeholder="Search" onChange={onInput} />

        </div>
    )
}

  
  const TodoWrapper = () => (
    <div className="TodoWrapper">
      <h1>CV Notes</h1>
      <SearchBox />
      <NoteList list={note}/>

    </div>
    
    
  )
  



  return (
    <div className="App">

    <TodoWrapper />
    <div className="AddTodo">
      <div className="Todos">
        <form id="my-form" onSubmit={addNote}>
        <input placeholder="Title" name="title" required></input>
        <textarea placeholder="type your note..." name= "content"></textarea>
        <div className="colorBoxes">
        <div>
        <img src="/vectors/Rectangle 4.svg" alt="rec"></img>
        <img src="/vectors/Rectangle 7.svg" alt="rec"></img>
        <img src="/vectors/Rectangle 8.svg" alt="rec"></img>
        <img src="/vectors/Rectangle 9.svg" alt="rec"></img>
        </div>
        <button className= "mark" type="submit" form="my-form"><img src="/vectors/vector.svg" /></button>
        </div>
        </form >
      </div>
      <div className= "NoteContent" style={{background:display.color}}>
           <h3>{display.title}</h3>
           <p>{display.content}</p>
           <span>{display.dateCreated}</span>
      </div>
    </div>
    </div>
  );
}

export default App;

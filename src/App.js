import React, { useState } from 'react';
import './App.scss';


const id = (length = 3) => Math.random().toString(36).substring(2, 2 + length)

const defaultNote = {}
defaultNote[id()]=
{
  title: 'How to learn React in fivhhhhhhhhhhhhhe minutes',
  content: 'Lorem ipsum dolor sit amet ',
  dateCreated: Date.now(),
  color: 'rgb(255,255,255)'

}



function App() {

  const [note, setNote] = useState(defaultNote)


  const NoteList = ({list}) => {
    return (
    Object.keys(list).map(noteid=> {
      const note = list[noteid]
      return(
      <div key={noteid} className= "noteList">
              <span >{note.title}</span>
        <span >{note.dateCreated}</span>
      </div>)
    }))
  }
  
  const SearchBox = () => (
      <div className="SearchBox">
        <img src="/vectors/search-line.svg" alt="search-icon "></img>
        <input type="text" placeholder="Search..."></input>  
      </div>
    
  
  )
  const TodoList = () => (
    <div className="TodoList">
    <p>How to learn React in five minutes</p>
    <span>Sep 11,2020 at 10:30:47 AM</span>
    </div>
  ) 
  
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
        <form>
        <input placeholder="Title"></input>
        <textarea placeholder="type your note..."></textarea>
        <div className="colorBoxes">
        <div>
        <img src="/vectors/Rectangle 4.svg"></img>
        <img src="/vectors/Rectangle 7.svg"></img>
        <img src="/vectors/Rectangle 8.svg"></img>
        <img src="/vectors/Rectangle 9.svg"></img>
        </div>
        <span className= "mark"><img src="/vectors/vector.svg" /></span>
        </div>
        </form>
      </div>
      <div>
      <h3>How to learn React in five minutes</h3>
      <span>Sep 11,2020 at 10:30:47 AM</span>
      </div>
    </div>
    </div>
  );
}

export default App;

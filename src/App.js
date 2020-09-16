import React from 'react';
import './App.scss';


const id = (length = 3) => Math.random().toString(36).substring(2, 2 + length)

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
    <TodoList />
  </div>
  
  
)



function App() {
  return (
    <div className="App">
      
    <TodoWrapper />
    <div className="AddTodo">
      <div className="Todos">
        <input placeholder="Title"></input>
        <textarea placeholder="type your note..."></textarea>
        <div className="colorBoxes">
        <div>
        <img src="/vectors/Rectangle 4.svg"></img>
        <img src="/vectors/Rectangle 7.svg"></img>
        <img src="/vectors/Rectangle 8.svg"></img>
        <img src="/vectors/Rectangle 9.svg"></img>
        </div>
        <span className="mark"><img src="/vectors/vector.svg"></img></span>
        </div>
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

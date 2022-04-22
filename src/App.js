import React, { useState } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";





import Header from "./components/Header";
import Notes from "./components/Notes";
import AddNote from "./pages/AddNote";
import Search from "./pages/Search";


function App() {
 

  const initialObj = [
    {
      id: 1,
      title: 'Better',
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      id: 2,
      title: 'Narcos',
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      id: 3,
      title: 'Vikings',
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      id: 4,
      title: 'Dexter',
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      id: 5,
      title: 'Saw',
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      id: 6,
      title: 'Breaking',
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      id: 7,
      title: 'Morgan',
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      id: 8,
      title: 'Pablo',
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      id: 9,
      title: 'Cali',
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
  ];

  const [noteObj, setNoteObj] = useState(initialObj);
  const [darkMode, setDarkMode] = useState(false);

  const [search, setSearch] = useState('')


  const onSubmit = (newObj) =>{
    setNoteObj([
      ...noteObj, newObj
    ])
    // noteObj.push(newObj)
  }

  const deleteOnClick = (id) =>{
    const deleteNote= noteObj.filter((note) =>{
      return note.id !== id
    })
    
    setNoteObj(deleteNote)

  
  }



  return (
    <div className={darkMode? 'App dark': 'App'}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} noteObj ={noteObj}  setSearch = {setSearch}/>
      <Switch>
        <Route path='/' exact>
          <Notes noteObj= {noteObj} darkMode={darkMode} search ={search} deleteOnClick={deleteOnClick}/>
        </Route>
        <Route path='/add' exact>
          <AddNote onSubmit = {onSubmit} darkMode = {darkMode} noteObj={noteObj}/>
        </Route>
        <Route path='/search' exact>
          <Search noteObj = {noteObj} search={search}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

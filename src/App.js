import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Notes from "./components/Notes";
import AddNote from "./pages/AddNote";
import Search from "./pages/Search";

function App() {
  useEffect(() => {
    if (localStorage.getItem("object")) {
      const storedList = JSON.parse(localStorage.getItem("object"));
      setNoteObj(storedList);
    }
    if (localStorage.getItem("darkMode")) {
      setDarkMode(JSON.parse(localStorage.getItem("darkMode")));
    }
  }, []);

  const [noteObj, setNoteObj] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const [search, setSearch] = useState("");

  const onSubmit = (newObj) => {
    localStorage.setItem("object", JSON.stringify([...noteObj, newObj]));
    setNoteObj([...noteObj, newObj]);
  };

  const deleteOnClick = (id) => {
    const deleteNote = noteObj.filter((note) => {
      return note.id !== id;
    });

    setNoteObj(deleteNote);
    localStorage.setItem("object", JSON.stringify(deleteNote));
  };

  return (
    <div className={darkMode ? "App dark" : "App"}>
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        noteObj={noteObj}
        setSearch={setSearch}
      />
      <Switch>
        <Route path="/" exact>
          <Notes
            noteObj={noteObj}
            darkMode={darkMode}
            search={search}
            deleteOnClick={deleteOnClick}
          />
        </Route>
        <Route path="/add" exact>
          <AddNote onSubmit={onSubmit} darkMode={darkMode} noteObj={noteObj} />
        </Route>
        <Route path="/search" exact>
          <Search noteObj={noteObj} search={search} darkMode={darkMode} deleteOnClick={deleteOnClick}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

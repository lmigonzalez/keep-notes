import React from "react";
import Footer from "./Footer";

import Note from "./Note";

const Notes = (props) => {
  const { noteObj } = props;

  const noteId = () => {
    const randomNum = Math.random() * 1000000;
    return randomNum;
  };



  return (
    <section className="body-content">
      <section className="notes">
        {noteObj.length === 0 ? (
          <h2>You currently dont have any notes</h2>
        ) : (
          noteObj.map((element) => {
            return (
              <Note
                id={element.id}
                key={noteId()}
                title={element.title}
                content={element.content}
                darkMode={props.darkMode}
                deleteOnClick={props.deleteOnClick}
              />
            );
          })
        )}

        <Footer />
      </section>
    </section>
  );
};

export default Notes;

import React, { useState } from "react";

import Note from "../components/Note";

const Search = (props) => {
  const { noteObj, search } = props;

  const [noMatch, setNoMatch] = useState(false);

  const noteId = (props) => {
    const randomNum = Math.random() * 1000000;
    return randomNum;
  };

  return (
    <section className="body-content">
      <section className="notes">
        {noteObj.map((val) => {
          if (val.title.toLowerCase().includes(search.toLowerCase())) {
            return (
              <Note
                key={noteId()}
                title={val.title}
                content={val.content}
                darkMode={props.darkMode}
              />
            );
          }
        })}
      </section>
    </section>
  );
};

export default Search;

// noMatch? <h2>We didn't find any match...</h2>:

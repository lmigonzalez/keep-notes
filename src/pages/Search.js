import React from "react";

import Note from "../components/Note";

const Search = (props) => {
  const { noteObj, search } = props;



  const noteId = () => {
    const randomNum = Math.random() * 1000000;
    return randomNum;
  };

  return (
    <section className="body-content">
      <section className="notes">
        {noteObj.map((element) => {
          if (element.title.toLowerCase().includes(search.toLowerCase())) {
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
          }
        })}
      </section>
    </section>
  );
};

export default Search;

// noMatch? <h2>We didn't find any match...</h2>:

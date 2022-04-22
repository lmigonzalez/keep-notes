import React from "react";

import {Card, Stack } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiFillDelete } from "react-icons/ai";

const Note = (props) => {

	const {title, content, deleteOnClick, id} = props;

  return (
    <Card className={props.darkMode? 'card dark': 'card '}>
      <Card.Header> <h4>{title}</h4></Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {content}
          </p>
          <Stack > <AiFillDelete className="delete-icon ms-auto " onClick={()=> deleteOnClick(id)}/>
          </Stack>
        </blockquote>
      </Card.Body>
    </Card>
  );
};

export default Note;

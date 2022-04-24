import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button, Stack, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const AddNote = (props) => {
  const { noteObj } = props;
  const history = useHistory();
  // console.log(props)

  const noteId = () => {
    const randomNum = Math.random() * 1000000;
    return randomNum;
  };

  const initialInputValue = {
    id: noteId(),
    title: "",
    content: "",
  };

  const [inputValue, setInputValue] = useState(initialInputValue);

  const [formValidation, setFormValidation] = useState(null);
  const [successAdded, setSuccessAdded] = useState(false);



  const titleValidation = noteObj.some(note=>{
    return note.title.toLowerCase() === inputValue.title.toLowerCase()
  })

  const handleSubmit = (e) => {
    e.preventDefault();
 

    if(titleValidation){
      setFormValidation(null);
      emptyAlertError();
      setFormValidation(`You already have a note with the title of '${inputValue.title}'`);
    }
    else if (inputValue.title.length >= 3 && inputValue.content.length >= 3 ) {
      props.onSubmit(inputValue);
      setSuccessAdded(true);
      emptyAlertSuccess();
      setInputValue(initialInputValue);
    } else if (inputValue.title.length < 3) {
      setFormValidation(null);
      emptyAlertError();
      setFormValidation("Title needs to be more than 3 characters");
    } else if (inputValue.content.length < 3) {
      setFormValidation(null);
      setFormValidation("Content needs to be more than 3 characters");
      emptyAlertError();
    }
 
  };

  const handleChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
    if( e.target.name === 'title' && e.target.value.length >= 30){
      setFormValidation(null);
      setFormValidation("The title cannot have more than 30 characters")
      emptyAlertError();
    }
  };

  const handleCancel = () => {
    setInputValue(initialInputValue);
    history.push("/");
  };

  const emptyAlertError = () => {
    setTimeout(() => {
      setFormValidation(null);

    }, 5000);
  };

  const emptyAlertSuccess = () => {
    setTimeout(() => {
      setSuccessAdded(false);
    }, 5000);
  };
  return (
    <section className="add-note-form">
      {formValidation ? (
        <Alert variant="danger">
          <Alert.Heading>{formValidation}</Alert.Heading>
        </Alert>
      ) : (
        ""
      )}

      {successAdded ? (
        <Alert variant="success">
          <Alert.Heading>Note Added Successfully</Alert.Heading>
        </Alert>
      ) : (
        ""
      )}

      <Form className="form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Note Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={inputValue.title}
            onChange={handleChange}
            maxLength='30'
          />
         
          <p className="title-length">{inputValue.title.length}/30</p>
        </Form.Group>
        <Form.Group  controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control
            as="textarea"
            name="content"
            value={inputValue.content}
            onChange={handleChange}
            rows={3}
          />
        </Form.Group>

        <Stack direction="horizontal" gap={2} className='mt-2'>
          <Button
            variant={!props.darkMode ? "dark" : "light"}
            className="ms-auto"
            onClick={handleCancel}
          >
            Cancel
          </Button>

          <Button
            variant={!props.darkMode ? "dark" : "light"}
            className="add-btn"
            type="submit"
          >
            Add Note
          </Button>
        </Stack>
      </Form>
    </section>
  );
};

export default AddNote;

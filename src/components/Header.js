import React from "react";
import { Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  BsFillBrightnessHighFill,
  BsFillMoonStarsFill,
} from "react-icons/bs";

const Header = (props) => {
  const { darkMode, setDarkMode, setSearch } = props;

  const history = useHistory()

  const iconClick = () => {
    localStorage.setItem('darkMode', JSON.stringify(!darkMode))
    setDarkMode(JSON.parse(localStorage.getItem('darkMode')));
  };

 const handleChange = (e) =>{
  setSearch(e.target.value)
  if(e.target.value.length >= 1){
    history.push('/search')
  }
  else{
    history.push('/')
  }

 }

  return (
    <header className={darkMode ? "header dark" : "header"}>
      <div className="header-group">
        
        <Form.Group className="mb-1 form-group" controlId="exampleForm.ControlInput1">
        <Form.Control className="input-search" size="m" type="text" placeholder="Search for a note" onChange= {handleChange}/>
        <div>
          {!darkMode ? (
            <BsFillMoonStarsFill className="icon" onClick={iconClick} />
          ) : (
            <BsFillBrightnessHighFill className="icon" onClick={iconClick} />
          )}
        </div>
          
        </Form.Group>

       
      </div>
    </header>
  );
};

export default Header;

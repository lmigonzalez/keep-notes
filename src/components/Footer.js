import React from "react";
import { useHistory } from "react-router-dom";
import { IoIosAddCircle } from "react-icons/io";

const Footer = (props) => {
	const history = useHistory();
	const handleClick = () => {
		history.push("/add");
	  };

  return (
    <footer>
      <div className="icon-content">
        <IoIosAddCircle className="add-note" onClick={handleClick}/>
      </div>
    </footer>
  );
};

export default Footer;

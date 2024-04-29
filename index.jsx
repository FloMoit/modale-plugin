import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

const ModalePlugin = ({ onClose, textModal, children }) => {
  return (
    <div className="ModaleContainer">
      <div className="MyModale">
        <button className="CloseButton" type="button" onClick={onClose}>
          <FontAwesomeIcon className="CloseIcon" icon={faCircleXmark} />
        </button>
        <p className="TextOfModal"> {textModal} </p>
        {children}
      </div>
    </div>
  );
};

export default ModalePlugin;

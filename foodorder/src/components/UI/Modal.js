import React from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const BackDrop = (props) => {
	return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
	return (
		<div className={classes.modal}>
			<div className={classes.content}>{props.children}</div>
		</div>
	);
};

const portalElement = document.getElementById("overlays");
const Modal = (props) => {
	return (
		<div>
			{ReactDOM.createPortal(<BackDrop onClose={props.onClose} />, portalElement)}
			{ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
		</div>
	);
};

export default Modal;

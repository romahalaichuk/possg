import React, { useState, useEffect, useRef } from "react";
import "./Modal.css";

const Modal = ({ open, onClose, onConfirm }) => {
	const [tableName, setTableName] = useState("");
	const inputRef = useRef(null);

	useEffect(() => {
		if (open) {
			inputRef.current.focus();
		}
	}, [open]);

	const handleChange = (e) => {
		const inputValue = e.target.value;
		const capitalizedValue =
			inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
		setTableName(capitalizedValue);
	};

	const handleSubmit = () => {
		onConfirm(tableName);
	};

	const handleKeyDown = (e) => {
		if (e.key === "Enter") {
			handleSubmit();
		}
	};

	const handleOverlayClick = (e) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	};

	if (!open) return null;

	return (
		<div className="modal-overlay" onClick={handleOverlayClick}>
			<div className="modal">
				<button className="close-button" onClick={onClose}>
					×
				</button>
				<h2>Nadaj nazwę stolikowi</h2>
				<input
					type="text"
					value={tableName}
					onChange={handleChange}
					onKeyDown={handleKeyDown}
					placeholder="Nazwa stolika"
					ref={inputRef}
				/>
				<div className="modal-buttons">
					<button onClick={handleSubmit}>Zatwierdź</button>
					<button onClick={onClose}>Anuluj</button>
				</div>
			</div>
		</div>
	);
};

export default Modal;

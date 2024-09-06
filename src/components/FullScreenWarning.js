import React from "react";
import "./FullScreenWarning.css"; // Stylowanie dla pełnoekranowego komunikatu

const FullScreenWarning = ({ onClose }) => {
	return (
		<div className="fullscreen-warning-overlay">
			<div className="fullscreen-warning-content">
				<h1>DZIEŃ NIE ZOSTAŁ ZAMKNIĘTY I PDF NIE WYGENEROWANY</h1>
				<button onClick={onClose}>OK</button>
			</div>
		</div>
	);
};

export default FullScreenWarning;

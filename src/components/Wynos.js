import React, { useState } from "react";

const Wynos = ({ onClose }) => {
	const [pickupTime, setPickupTime] = useState("");

	const handlePickupTimeChange = (e) => {
		setPickupTime(e.target.value);
	};

	return (
		<div className="order-type-container">
			<h3>Wybierz czas odbioru:</h3>
			<input
				type="time"
				value={pickupTime}
				onChange={handlePickupTimeChange}
				required
			/>
		</div>
	);
};

export default Wynos;

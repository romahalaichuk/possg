import React, { useState } from "react";

const Wynos = ({ onClose }) => {
	const [minutesToPickup, setMinutesToPickup] = useState("");
	const [pickupTime, setPickupTime] = useState("");
	const [customPickupTime, setCustomPickupTime] = useState("");

	const handleMinutesChange = (e) => {
		const minutes = parseInt(e.target.value, 10);
		setMinutesToPickup(minutes);
		calculatePickupTime(minutes, customPickupTime);
	};

	const handleCustomTimeChange = (e) => {
		const time = e.target.value;
		if (time.length === 2 && !time.includes(":")) {
			setCustomPickupTime(time + ":");
		} else {
			setCustomPickupTime(time);
		}
		calculatePickupTime(minutesToPickup, time);
	};

	const calculatePickupTime = (minutes, customTime) => {
		const currentTime = new Date();
		let pickup;

		if (customTime) {
			const [hours, mins] = customTime.split(":");
			pickup = new Date(
				currentTime.getFullYear(),
				currentTime.getMonth(),
				currentTime.getDate(),
				parseInt(hours, 10),
				parseInt(mins, 10)
			);
		} else {
			pickup = new Date(currentTime.getTime() + minutes * 60000);
		}

		if (!isNaN(pickup.getTime())) {
			const formattedPickupTime = pickup.toLocaleTimeString([], {
				hour: "2-digit",
				minute: "2-digit",
			});
			setPickupTime(formattedPickupTime);
		} else {
			setPickupTime("Invalid Date");
		}
	};

	return (
		<div className="order-type-container">
			<h3>Odbiór za ile minut?</h3>
			<input
				type="number"
				value={minutesToPickup}
				onChange={handleMinutesChange}
				min="1"
				required
			/>
			<h3>Odbiór na (godz:min)</h3>
			<input
				type="text"
				value={customPickupTime}
				onChange={handleCustomTimeChange}
				placeholder="np. 21:35"
			/>
			{pickupTime && (
				<p>
					{pickupTime === "Invalid Date"
						? "Odbiór na: Invalid Date"
						: customPickupTime.includes(":")
						? `Odbiór na: ${pickupTime}`
						: `Odbiór do: ${pickupTime}`}{" "}
					{/* Jeśli nie ma, wyświetlamy "Odbiór do" */}
				</p>
			)}
		</div>
	);
};

export default Wynos;

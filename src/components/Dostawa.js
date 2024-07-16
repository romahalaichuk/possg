import React, { useState } from "react";

const Dostawa = ({ onClose }) => {
	const [address, setAddress] = useState("");
	const [apartment, setApartment] = useState("");
	const [floor, setFloor] = useState("");
	const [comment, setComment] = useState("");
	const [paymentMethod, setPaymentMethod] = useState("Karta");

	const handleAddressChange = (e) => {
		setAddress(e.target.value);
	};

	const handleApartmentChange = (e) => {
		setApartment(e.target.value);
	};

	const handleFloorChange = (e) => {
		setFloor(e.target.value);
	};

	const handleCommentChange = (e) => {
		setComment(e.target.value);
	};

	const handlePaymentMethodChange = (e) => {
		setPaymentMethod(e.target.value);
	};

	return (
		<div className="order-type-container">
			<h3>Dane dostawy:</h3>
			<input
				type="text"
				placeholder="Adres"
				value={address}
				onChange={handleAddressChange}
				required
			/>
			<input
				type="text"
				placeholder="Mieszkanie"
				value={apartment}
				onChange={handleApartmentChange}
			/>
			<input
				type="text"
				placeholder="Piętro"
				value={floor}
				onChange={handleFloorChange}
			/>
			<textarea
				placeholder="Komentarz"
				value={comment}
				onChange={handleCommentChange}></textarea>
			<select value={paymentMethod} onChange={handlePaymentMethodChange}>
				<option value="Karta">Karta</option>
				<option value="Gotówka">Gotówka</option>
				<option value="Online">Online</option>
			</select>
		</div>
	);
};

export default Dostawa;

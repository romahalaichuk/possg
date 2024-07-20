import React, { useState } from "react";

const Dostawa = ({ onClose, setDeliveryDetails, adjustedTotalAmount }) => {
	const [address, setAddress] = useState("");
	const [apartment, setApartment] = useState("");
	const [floor, setFloor] = useState("");
	const [comment, setComment] = useState("");
	const [paymentMethod, setPaymentMethod] = useState("");
	const [phone, setPhoneNumber] = useState("");

	const handleAddressChange = (e) => {
		const newAddress = e.target.value;
		setAddress(newAddress);
		setDeliveryDetails((prevDetails) => ({
			...prevDetails,
			address: newAddress,
		}));
	};

	const handleApartmentChange = (e) => {
		const newApartment = e.target.value;
		setApartment(newApartment);
		setDeliveryDetails((prevDetails) => ({
			...prevDetails,
			apartment: newApartment,
		}));
	};
	const handlePhoneChange = (e) => {
		const newPhone = e.target.value;
		setPhoneNumber(newPhone);
		setDeliveryDetails((prevDetails) => ({
			...prevDetails,
			phone: newPhone, // Używamy "phone" zamiast "phoneNumber"
		}));
	};

	const handleFloorChange = (e) => {
		const newFloor = e.target.value;
		setFloor(newFloor);
		setDeliveryDetails((prevDetails) => ({
			...prevDetails,
			floor: newFloor,
		}));
	};

	const handleCommentChange = (e) => {
		const newComment = e.target.value;
		setComment(newComment);
		setDeliveryDetails((prevDetails) => ({
			...prevDetails,
			comment: newComment,
		}));
	};

	const handlePaymentMethodChange = (e) => {
		const newPaymentMethod = e.target.value;
		setPaymentMethod(newPaymentMethod);
		setDeliveryDetails((prevDetails) => ({
			...prevDetails,
			paymentMethod: newPaymentMethod,
		}));
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
			<input
				type="text"
				placeholder="Phone"
				value={phone}
				onChange={handlePhoneChange}
			/>
			<select value={paymentMethod} onChange={handlePaymentMethodChange}>
				<option value="Karta">Karta</option>
				<option value="Gotówka">Gotówka</option>
				<option value="Online">Online</option>
			</select>
		</div>
	);
};

export default Dostawa;

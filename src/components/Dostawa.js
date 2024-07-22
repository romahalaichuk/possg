import React, { useState } from "react";

const Dostawa = ({
	onClose,
	setDeliveryDetails,
	adjustedTotalAmount,
	tableName,
}) => {
	const addressKey = `${tableName}_address`;
	const apartmentKey = `${tableName}_apartment`;
	const floorKey = `${tableName}_floor`;
	const commentKey = `${tableName}_comment`;
	const paymentMethodKey = `${tableName}_paymentMethod`;
	const phoneKey = `${tableName}_phone`;

	const [address, setAddress] = useState(
		localStorage.getItem(addressKey) || ""
	);
	const [apartment, setApartment] = useState(
		localStorage.getItem(apartmentKey) || ""
	);
	const [floor, setFloor] = useState(localStorage.getItem(floorKey) || "");
	const [comment, setComment] = useState(
		localStorage.getItem(commentKey) || ""
	);
	const [paymentMethod, setPaymentMethod] = useState(
		localStorage.getItem(paymentMethodKey) || ""
	);
	const [phone, setPhoneNumber] = useState(
		localStorage.getItem(phoneKey) || ""
	);

	// Funkcje obsługujące zmiany wartości oraz zapisujące do localStorage
	const handleAddressChange = (e) => {
		const newAddress = e.target.value;
		setAddress(newAddress);
		localStorage.setItem(addressKey, newAddress);
		setDeliveryDetails((prevDetails) => ({
			...prevDetails,
			address: newAddress,
		}));
	};

	const handleApartmentChange = (e) => {
		const newApartment = e.target.value;
		setApartment(newApartment);
		localStorage.setItem(apartmentKey, newApartment);
		setDeliveryDetails((prevDetails) => ({
			...prevDetails,
			apartment: newApartment,
		}));
	};

	const handlePhoneChange = (e) => {
		const newPhone = e.target.value;
		setPhoneNumber(newPhone);
		localStorage.setItem(phoneKey, newPhone);
		setDeliveryDetails((prevDetails) => ({
			...prevDetails,
			phone: newPhone,
		}));
	};

	const handleFloorChange = (e) => {
		const newFloor = e.target.value;
		setFloor(newFloor);
		localStorage.setItem(floorKey, newFloor);
		setDeliveryDetails((prevDetails) => ({
			...prevDetails,
			floor: newFloor,
		}));
	};

	const handleCommentChange = (e) => {
		const newComment = e.target.value;
		setComment(newComment);
		localStorage.setItem(commentKey, newComment);
		setDeliveryDetails((prevDetails) => ({
			...prevDetails,
			comment: newComment,
		}));
	};

	const handlePaymentMethodChange = (e) => {
		const newPaymentMethod = e.target.value;
		setPaymentMethod(newPaymentMethod);
		localStorage.setItem(paymentMethodKey, newPaymentMethod);
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

import React, { useState, useRef } from "react";
import useEnterKeyListener from "./useEnterKeyListener";
import "./Dostawa.css";

const Dostawa = ({
	onClose,
	setDeliveryDetails,
	adjustedTotalAmount,
	tableName,
	resetTable,
}) => {
	useEnterKeyListener();

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
		localStorage.getItem(paymentMethodKey) || "Dodaj płatność"
	);
	const [phone, setPhoneNumber] = useState(
		localStorage.getItem(phoneKey) || ""
	);

	const addressRef = useRef(null);
	const apartmentRef = useRef(null);
	const floorRef = useRef(null);
	const commentRef = useRef(null);
	const phoneRef = useRef(null);
	const paymentMethodRef = useRef(null);

	const formatPhoneNumber = (value) => {
		const cleaned = value.replace(/\D/g, "");

		const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,3})$/);
		if (match) {
			return [match[1], match[2], match[3], match[4]]
				.filter(Boolean)
				.join("  ")
				.trim();
		}
		return value;
	};

	const handleInputChange = (setter, key) => (e) => {
		const value = e.target.value;
		setter(value);
		localStorage.setItem(key, value);
		setDeliveryDetails((prevDetails) => ({
			...prevDetails,
			[key.split("_")[1]]: value,
		}));
	};

	const focusNextInput = (e, nextRef) => {
		if (e.key === "Enter" && nextRef.current) {
			nextRef.current.focus();
		}
	};

	const handlePhoneChange = (e) => {
		const rawValue = e.target.value;
		const formattedValue = formatPhoneNumber(rawValue);
		setPhoneNumber(formattedValue);
		localStorage.setItem(phoneKey, formattedValue);
		setDeliveryDetails((prevDetails) => ({
			...prevDetails,
			phone: formattedValue,
		}));
	};

	const handleEndDelivery = () => {
		console.log("Ending delivery...");

		setAddress("");
		setApartment("");
		setFloor("");
		setComment("");
		setPaymentMethod("Dodaj płatność");
		setPhoneNumber("");

		localStorage.removeItem(addressKey);
		localStorage.removeItem(apartmentKey);
		localStorage.removeItem(floorKey);
		localStorage.removeItem(commentKey);
		localStorage.removeItem(paymentMethodKey);
		localStorage.removeItem(phoneKey);

		setDeliveryDetails({});

		if (resetTable) {
			console.log("Resetting table...");
			resetTable(tableName);
		}

		if (onClose) {
			onClose();
		}
	};

	return (
		<div className="order-type-container">
			<h3>Dane dostawy:</h3>
			<form>
				<div className="form-group">
					<label htmlFor="address">Adres</label>
					<input
						id="address"
						type="text"
						placeholder="Adres"
						value={address}
						onChange={handleInputChange(setAddress, addressKey)}
						ref={addressRef}
						onKeyDown={(e) => focusNextInput(e, apartmentRef)}
						required
					/>
				</div>

				<div className="form-group">
					<label htmlFor="apartment">Mieszkanie</label>
					<input
						id="apartment"
						type="text"
						placeholder="Mieszkanie"
						value={apartment}
						onChange={handleInputChange(setApartment, apartmentKey)}
						ref={apartmentRef}
						onKeyDown={(e) => focusNextInput(e, floorRef)}
					/>
				</div>

				<div className="form-group">
					<label htmlFor="floor">Piętro</label>
					<input
						id="floor"
						type="text"
						placeholder="Piętro"
						value={floor}
						onChange={handleInputChange(setFloor, floorKey)}
						ref={floorRef}
						onKeyDown={(e) => focusNextInput(e, commentRef)}
					/>
				</div>

				<div className="form-group">
					<label htmlFor="comment">Komentarz</label>
					<textarea
						id="comment"
						placeholder="Komentarz"
						value={comment}
						onChange={handleInputChange(setComment, commentKey)}
						ref={commentRef}
						onKeyDown={(e) => focusNextInput(e, phoneRef)}></textarea>
				</div>

				<div className="form-group">
					<label htmlFor="phone">Telefon</label>
					<input
						id="phone"
						type="text"
						placeholder="Phone"
						value={phone}
						onChange={handlePhoneChange}
						ref={phoneRef}
						onKeyDown={(e) => focusNextInput(e, paymentMethodRef)}
					/>
				</div>

				<div className="form-group">
					<label htmlFor="paymentMethod">Metoda płatności</label>
					<select
						id="paymentMethod"
						value={paymentMethod}
						onChange={handleInputChange(setPaymentMethod, paymentMethodKey)}
						ref={paymentMethodRef}>
						<option value="Dodaj płatność">Dodaj płatność</option>
						<option value="Karta">Karta</option>
						<option value="Gotówka">Gotówka</option>
						<option value="Online">Online</option>
					</select>
				</div>

				<button type="button" onClick={handleEndDelivery}>
					Zakończ dostawę
				</button>
			</form>
		</div>
	);
};

export default Dostawa;

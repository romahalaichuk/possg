import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./PaymentManager.css";

const PaymentManager = ({
	tableName,
	waiterName,
	adjustedTotalAmount,
	onClose,
	removedItems = [],
	selectedItems,
	discountAmount = 0,
	serviceCharge = 0,
	addToBill = 0,
	subtractFromBill = 0,
	adjustments = [],
}) => {
	const [amountGiven, setAmountGiven] = useState("");
	const [changeAmount, setChangeAmount] = useState(0);
	const [selectedPaymentType, setSelectedPaymentType] = useState(null);
	const [modalVisible, setModalVisible] = useState(true);
	const [finalAmount, setFinalAmount] = useState(adjustedTotalAmount);

	const inputRef = useRef(null);

	// Obliczanie końcowej kwoty
	useEffect(() => {
		let calculatedAmount = adjustedTotalAmount;
		calculatedAmount += addToBill;
		calculatedAmount -= subtractFromBill;
		setFinalAmount(calculatedAmount);
	}, [adjustedTotalAmount, addToBill, subtractFromBill]);

	// Obliczanie reszty
	useEffect(() => {
		const amountGivenNumber = parseFloat(amountGiven);
		if (!isNaN(amountGivenNumber)) {
			const change = amountGivenNumber - finalAmount;
			setChangeAmount(change > 0 ? change : 0);
		} else {
			setChangeAmount(0);
		}
	}, [amountGiven, finalAmount]);

	// Autofocus na input przy gotówce
	useEffect(() => {
		if (selectedPaymentType === "GOTÓWA") {
			setTimeout(() => {
				inputRef.current?.focus();
			}, 100);
		}
	}, [selectedPaymentType]);

	// Obsługa klawiatury
	useEffect(() => {
		const handleKeyPress = (e) => {
			// wybór płatności
			if (selectedPaymentType === null) {
				if (e.key.toLowerCase() === "g") {
					setSelectedPaymentType("GOTÓWA");
				}
				if (e.key.toLowerCase() === "k") {
					setSelectedPaymentType("KARTA");
				}
			}

			// ENTER = opłacone
			if (e.key === "Enter" && selectedPaymentType !== null) {
				handleFinalizePayment();
			}

			// ESC = cofnięcie / zamknięcie
			if (e.key === "Escape") {
				handleCancelPayment();
			}
		};

		window.addEventListener("keydown", handleKeyPress);
		return () => window.removeEventListener("keydown", handleKeyPress);
	}, [selectedPaymentType, amountGiven, changeAmount]);

	const handleFinalizePayment = () => {
		const paymentDetails = {
			tableName,
			waiterName,
			totalAmount: finalAmount.toFixed(2),
			discountAmount: discountAmount.toFixed(2),
			serviceCharge: serviceCharge.toFixed(2),
			addToBill: addToBill.toFixed(2),
			subtractFromBill: subtractFromBill.toFixed(2),
			finalAmount: finalAmount.toFixed(2),
			paymentType: selectedPaymentType,
			amountGiven: parseFloat(amountGiven || 0).toFixed(2),
			changeAmount: changeAmount.toFixed(2),
			selectedItems,
			removedItems,
			adjustments,
			adjustedTotalAmount: finalAmount.toFixed(2),
		};

		const storedPaymentDetails =
			JSON.parse(localStorage.getItem("paymentDetails")) || [];
		storedPaymentDetails.push(paymentDetails);
		localStorage.setItem(
			"paymentDetails",
			JSON.stringify(storedPaymentDetails),
		);

		setSelectedPaymentType(null);
		onClose(paymentDetails);
	};

	const handleCancelPayment = () => {
		if (selectedPaymentType === null) {
			setModalVisible(false);
		} else {
			setSelectedPaymentType(null);
		}
	};

	return modalVisible ? (
		<div className="payment-manager-overlay">
			<div className="payment-manager">
				<div className="payment-header">
					{selectedPaymentType === null ? (
						<>
							<p>Stolik: {tableName}</p>
							<p>/</p>
							<p>Kelner: {waiterName}</p>

							<ul className="item-list">
								{selectedItems.map((item) => (
									<li key={item.id}>
										{item.name} - {item.quantity}x -{" "}
										{(
											(item.price || 0) +
											(item.extras
												? item.extras.reduce(
														(sum, extra) =>
															extra.category === "Dod"
																? sum + extra.price
																: sum,
														0,
													)
												: 0)
										).toFixed(2)}{" "}
										zł
									</li>
								))}
							</ul>

							{discountAmount > 0 && (
								<p>Rabat: {discountAmount.toFixed(2)} zł</p>
							)}
							{serviceCharge > 0 && (
								<p>Opłata serwisowa: {serviceCharge.toFixed(2)} zł</p>
							)}
							{addToBill > 0 && (
								<p>Dodano do rachunku: {addToBill.toFixed(2)} zł</p>
							)}
							{subtractFromBill > 0 && (
								<p>Odjęto od rachunku: {subtractFromBill.toFixed(2)} zł</p>
							)}

							<button className="close-button" onClick={handleCancelPayment}>
								<FontAwesomeIcon icon={faTimes} />
							</button>
						</>
					) : (
						<button
							className="back-button"
							onClick={() => setSelectedPaymentType(null)}>
							<FontAwesomeIcon icon={faTimes} />
						</button>
					)}
				</div>

				{selectedPaymentType === null && (
					<div className="payment-options">
						<button
							className="button-pay"
							onClick={() => setSelectedPaymentType("GOTÓWA")}>
							Gotówka (G)
						</button>

						<button
							className="button-pay"
							onClick={() => setSelectedPaymentType("KARTA")}>
							Karta (K)
						</button>
					</div>
				)}

				{selectedPaymentType === "GOTÓWA" && (
					<div className="cash-payment">
						<h3>Do zapłaty: {finalAmount.toFixed(2)} zł</h3>
						<input
							ref={inputRef}
							type="number"
							value={amountGiven}
							onChange={(e) => setAmountGiven(e.target.value)}
							placeholder="Kwota od klienta"
						/>
						<p>Reszta: {changeAmount.toFixed(2)} zł</p>
						<button className="finalize-button" onClick={handleFinalizePayment}>
							Opłacone (Enter)
						</button>
					</div>
				)}

				{selectedPaymentType === "KARTA" && (
					<div className="card-payment">
						<h3>Płatność kartą</h3>
						<button className="finalize-button" onClick={handleFinalizePayment}>
							Opłacone kartą (Enter)
						</button>
					</div>
				)}
			</div>
		</div>
	) : null;
};

export default PaymentManager;

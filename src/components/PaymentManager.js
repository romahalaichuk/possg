import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./PaymentManager.css";

const PaymentManager = ({
	tableName,
	adjustedTotalAmount,
	onClose,
	selectedItems,
	discountAmount = 0, // Dodano discountAmount jako props
	serviceCharge = 0, // Dodano serviceCharge jako props
	adjustments = [], // Dodano adjustments jako props
}) => {
	const [amountGiven, setAmountGiven] = useState("");
	const [changeAmount, setChangeAmount] = useState(0);
	const [selectedPaymentType, setSelectedPaymentType] = useState(null);
	const [modalVisible, setModalVisible] = useState(true);

	// Oblicz finalną kwotę do zapłaty uwzględniając rabat i opłatę serwisową
	useEffect(() => {
		const amountGivenNumber = parseFloat(amountGiven);
		const totalAmountWithDiscount = adjustedTotalAmount - discountAmount;
		const finalAmount = totalAmountWithDiscount + serviceCharge;

		if (!isNaN(amountGivenNumber)) {
			const change = amountGivenNumber - finalAmount;
			setChangeAmount(change > 0 ? change : 0);
		} else {
			setChangeAmount(0);
		}
	}, [amountGiven, adjustedTotalAmount, discountAmount, serviceCharge]);

	const handleFinalizePayment = () => {
		const totalAmountWithDiscount = adjustedTotalAmount - discountAmount;
		const finalAmount = totalAmountWithDiscount + serviceCharge;

		const paymentDetails = {
			tableName,
			totalAmount: adjustedTotalAmount,
			discountAmount,
			serviceCharge,
			finalAmount, // Wyliczona kwota do zapłaty
			paymentType: selectedPaymentType,
			amountGiven: parseFloat(amountGiven) || 0,
			changeAmount,
			selectedItems,
			adjustments, // Dodano adjustments do szczegółów płatności
		};

		console.log("Płatność została zakończona:", paymentDetails);

		const storedPaymentDetails =
			JSON.parse(localStorage.getItem("paymentDetails")) || [];
		storedPaymentDetails.push(paymentDetails);
		localStorage.setItem(
			"paymentDetails",
			JSON.stringify(storedPaymentDetails)
		);

		setSelectedPaymentType(null);
		onClose(paymentDetails);
	};

	const handlePaymentTypeClick = (paymentType) => {
		setSelectedPaymentType(paymentType);
	};

	const handleCancelPayment = () => {
		if (selectedPaymentType === null) {
			setModalVisible(false);
		} else {
			setSelectedPaymentType(null);
		}
	};

	const handleBackToPaymentTypeSelection = () => {
		setSelectedPaymentType(null);
		setModalVisible(true);
	};

	return modalVisible ? (
		<div className="payment-manager-overlay">
			<div className="payment-manager">
				<div className="payment-header">
					{selectedPaymentType === null ? (
						<>
							<p>Stolik: {tableName}</p>
							<ul>
								{selectedItems.map((item) => (
									<li key={item.id}>
										{item.name} - {item.quantity}x -{" "}
										{item.price * item.quantity} zł
									</li>
								))}
							</ul>
							{discountAmount > 0 && (
								<p>Rabat: {discountAmount} zł</p> // Wyświetlenie rabatu
							)}
							{serviceCharge > 0 && (
								<p>Opłata serwisowa: {serviceCharge} zł</p> // Wyświetlenie opłaty serwisowej
							)}
							<button className="close-button" onClick={handleCancelPayment}>
								<FontAwesomeIcon icon={faTimes} />
							</button>
						</>
					) : (
						<>
							<button
								className="back-button"
								onClick={handleBackToPaymentTypeSelection}>
								<FontAwesomeIcon icon={faTimes} />
							</button>
						</>
					)}
				</div>

				{selectedPaymentType === null ? (
					<div className="payment-options">
						<button
							className="button-pay"
							onClick={() => handlePaymentTypeClick("GOTÓWA")}>
							Gotówka
						</button>
						<button
							className="button-pay"
							onClick={() => handlePaymentTypeClick("KARTA")}>
							Karta
						</button>
					</div>
				) : null}

				{selectedPaymentType === "GOTÓWA" && (
					<div className="cash-payment">
						<h3>
							Do zapłaty: {adjustedTotalAmount - discountAmount + serviceCharge}{" "}
							zł
						</h3>
						<input
							type="number"
							value={amountGiven}
							onChange={(e) => setAmountGiven(e.target.value)}
							placeholder="Kwota od klienta"
						/>
						<p>Reszta: {changeAmount.toFixed(2)} zł</p>
						<button className="finalize-button" onClick={handleFinalizePayment}>
							Opłacone
						</button>
					</div>
				)}

				{selectedPaymentType === "KARTA" && (
					<div className="card-payment">
						<h3>Implementacja płatności kartą</h3>
						<button className="finalize-button" onClick={handleFinalizePayment}>
							Opłacone kartą
						</button>
					</div>
				)}
			</div>
		</div>
	) : null;
};

export default PaymentManager;

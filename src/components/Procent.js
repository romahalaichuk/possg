import React, { useState, useEffect } from "react";

const Procent = ({ onClose, onSubmit, onAddComment, option }) => {
	const [service, setService] = useState("");
	const [discount, setDiscount] = useState("");
	const [addToBill, setAddToBill] = useState("");
	const [subtractFromBill, setSubtractFromBill] = useState("");
	const [isCheeseDay, setIsCheeseDay] = useState(false);

	useEffect(() => {
		const today = new Date().getDay();
		setIsCheeseDay(today === 3 || today === 0);
	}, []);

	useEffect(() => {}, [option, isCheeseDay]);

	const handleSubmit = () => {
		onSubmit({
			service: parseFloat(service) || 0,
			discount: parseFloat(discount) || 0,
			addToBill: parseFloat(addToBill) || 0,
			subtractFromBill: parseFloat(subtractFromBill) || 0,
		});
		onClose();
	};

	const handleAddComment = () => {
		onAddComment("Podwójny ser gratis");
		onClose();
	};

	const renderCheeseButton = () => {
		if ((option === "Wynos" || option === "Dostawa") && isCheeseDay) {
			return <button onClick={handleAddComment}>Podwójny ser gratis</button>;
		}
		return null;
	};

	return (
		<div className="procent-modal">
			<h3>Ustawienia Procentowe</h3>
			<div className="input-row">
				<label>Serwis (%)</label>
				<input
					type="number"
					min="0"
					value={service}
					onChange={(e) => setService(e.target.value)}
				/>
			</div>
			<div className="input-row">
				<label>Zniżka (%)</label>
				<input
					type="number"
					min="0"
					value={discount}
					onChange={(e) => setDiscount(e.target.value)}
				/>
			</div>
			<div className="input-row">
				<label>Dodaj do rachunku</label>
				<input
					type="number"
					min="0"
					value={addToBill}
					onChange={(e) => setAddToBill(e.target.value)}
				/>
			</div>
			<div className="input-row">
				<label>Odejmij od rachunku</label>
				<input
					type="number"
					min="0"
					value={subtractFromBill}
					onChange={(e) => setSubtractFromBill(e.target.value)}
				/>
			</div>
			{renderCheeseButton()}
			<div className="modal-buttons">
				<button onClick={handleSubmit}>Zatwierdź</button>
				<button onClick={onClose}>Zamknij</button>
			</div>
		</div>
	);
};

export default Procent;

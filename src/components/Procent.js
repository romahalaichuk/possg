import React, { useState, useEffect } from "react";

const Procent = ({
	onClose,
	onSubmit,
	onAddComment,
	option,
	applyDiscountToSecondPizza,
	selectedItems,
	onAddProduct,
}) => {
	const [service, setService] = useState("");
	const [discount, setDiscount] = useState("");
	const [addToBill, setAddToBill] = useState("");
	const [subtractFromBill, setSubtractFromBill] = useState("");
	const [isCheeseDay, setIsCheeseDay] = useState(false);
	const [isIsTanio, setIsTanio] = useState(false);
	const [isNapoj, setIsNapoj] = useState(false);
	const [showNapojList, setShowNapojList] = useState(false);

	const napoje = [
		{ id: 1, name: "Coca-Cola 0.85 L", price: 0 },
		{ id: 2, name: "Sok JABŁKOWY 1 L", price: 0 },
		{ id: 3, name: "Fanta 0.85 L", price: 0 },
		{ id: 4, name: "Sprite 0.85 L", price: 0 },
		{ id: 5, name: "Sok POMARAŃCZOWY 1 L", price: 0 },
	];

	useEffect(() => {
		const today = new Date().getDay();
		setIsNapoj(today === 1 || today === 0);
	}, []);
	useEffect(() => {
		const today = new Date().getDay();
		setIsCheeseDay(today === 3 || today === 4);
	}, []);
	useEffect(() => {
		const today = new Date().getDay();
		setIsTanio(today === 1 || today === 4);
	}, []);
	useEffect(() => {}, [option, isNapoj]);
	useEffect(() => {}, [option, isCheeseDay]);
	useEffect(() => {}, [option, isIsTanio]);

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

	const handleDiscountAndClose = () => {
		applyDiscountToSecondPizza();
		onClose();
	};

	const handleNapojClick = () => {
		const totalAmount = selectedItems.reduce(
			(sum, item) => sum + item.price * item.quantity,
			0
		);
		console.log(`Total amount: ${totalAmount}`);
		if (totalAmount > 55) {
			setShowNapojList(true);
		} else {
			alert("Proszę dobrać produkt.");
		}
	};

	const handleNapojSelect = (napoj) => {
		onAddProduct(napoj);
		setShowNapojList(false);
		onClose();
	};

	const renderNapoj = () => {
		if ((option === "Wynos" || option === "Dostawa") && isNapoj) {
			return (
				<button onClick={handleNapojClick}>
					Do każdego zamówienia powyżej 55 zł – 0,85l napoju gratis
				</button>
			);
		}
		return null;
	};

	const renderCheeseButton = () => {
		if ((option === "Wynos" || option === "Dostawa") && isCheeseDay) {
			return <button onClick={handleAddComment}>Podwójny ser gratis</button>;
		}
		return null;
	};

	const renderTaniejButton = () => {
		if ((option === "Wynos" || option === "Dostawa") && isIsTanio) {
			return (
				<button onClick={handleDiscountAndClose}>
					Druga pizza(tańsza) – 50%
				</button>
			);
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
			<h3>Promocje</h3>
			{renderNapoj()}
			{renderCheeseButton()}
			{renderTaniejButton()}
			<div className="modal-buttons">
				<button onClick={handleSubmit}>Zatwierdź</button>
				<button onClick={onClose}>Zamknij</button>
			</div>
			{showNapojList && (
				<div className="napoj-list-modal">
					<h4>Wybierz napój</h4>
					<ul>
						{napoje.map((napoj) => (
							<li key={napoj.id} onClick={() => handleNapojSelect(napoj)}>
								{napoj.name}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

export default Procent;

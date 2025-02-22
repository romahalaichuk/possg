import React, { useState, useEffect } from "react";

const Procent = ({
	onClose,
	onSubmit,
	onAddComment,
	option,
	applyDiscountToSecondPizza,
	selectedItems,
	onAddProduct,
	setSelectedItems,
}) => {
	const [service, setService] = useState("");
	const [discount, setDiscount] = useState("");
	const [addToBill, setAddToBill] = useState("");
	const [subtractFromBill, setSubtractFromBill] = useState("");
	const [isCheeseDay, setIsCheeseDay] = useState(false);
	const [isIsTanio, setIsTanio] = useState(false);
	const [isNapoj, setIsNapoj] = useState(false);
	const [isTrzecia, setIsTrzecia] = useState(false);
	const [showPizzaTrad, setShowPizzaTrad] = useState(true);
	const [showNapojList, setShowNapojList] = useState(false);
	const [showBeerPromo, setShowBeerPromo] = useState(false);

	const napoje = [
		// Lista napojów...
	];

	const beers = [
		{
			id: 6,
			name: "Piwo 0.5 L",
			category: "Piwo",
			price: 5,
		},
	];

	useEffect(() => {
		const today = new Date().getDay();
		const isPizzaTradDay = today === 1 || today === 5;
		setShowPizzaTrad(
			option === "Wynos" || (option === "Dostawa" && isPizzaTradDay)
		);

		setIsTrzecia(today === 5 || today === 6);
		setIsNapoj(today === 1 || today === 6);
		setIsCheeseDay(today === 3 || today === 4);
		setIsTanio(today === 1 || today === 4);
		setShowBeerPromo(today >= 5 && today <= 6);
	}, [option]);

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

	const applyDiscountToThirdPizza = () => {
		const pizzas = selectedItems.filter(
			(item) => item.category.toLowerCase() === "pizza" && item.cm !== 60
		);

		if (pizzas.length >= 3) {
			const cheapestPizza = pizzas.reduce((cheapest, item) => {
				return item.price < cheapest.price ? item : cheapest;
			});
			const updatedItems = selectedItems.map((item) =>
				item === cheapestPizza ? { ...item, price: 10 } : item
			);
			setSelectedItems(updatedItems);
		} else {
			alert("Proszę dodać trzecią pizzę 23 cm, 32 cm lub 42 cm");
		}
		onClose();
	};

	const applyBeerPromo = () => {
		const pizzas = selectedItems.filter(
			(item) => item.category.toLowerCase() === "pizza"
		);

		if (pizzas.length > 0) {
			const beersToAdd = [];
			for (let i = 0; i < pizzas.length; i++) {
				beersToAdd.push(beers[0]); // Dodaj 2 piwa do każdego zamówienia pizzy
				beersToAdd.push(beers[0]);
			}

			beersToAdd.forEach((beer) => onAddProduct(beer));
		} else {
			alert("Proszę dodać pizzę do zamówienia.");
		}
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

	const renderPizzaTrad = () => {
		if (showPizzaTrad) {
			return (
				<button>
					W LOKALU !! Pizza tradycyjna 29,90zł lub napój gratis do makaronu
				</button>
			);
		}
		return null;
	};

	const renderTrzecia = () => {
		if ((option === "Wynos" || option === "Dostawa") && isTrzecia) {
			return (
				<button onClick={applyDiscountToThirdPizza}>
					3-cia tańsza pizza w tym samym lub mniejszym rozmiarze za 10zł (nie
					dotyczy pizzy 60 cm)
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

	const renderBeerPromoButton = () => {
		if ((option === "Wynos" || option === "Dostawa") && showBeerPromo) {
			return (
				<button onClick={applyBeerPromo}>
					W LOKALU !! Do każdej pizzy 2 piwa w cenie jednego
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
				<label>
					Dodaj do rachunku--W TRAKCIE, PRACUJE NAD TYM--JAK JUŻ TO KWOTĘ KTÓRĄ
					CHCESZ DODAĆ PODZIEL NA 2 I WPISZ --
				</label>
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
			{renderPizzaTrad()}
			{renderCheeseButton()}
			{renderTaniejButton()}
			{renderTrzecia()}
			{renderBeerPromoButton()}
			<div className="modal-buttons">
				<button onClick={handleSubmit}>Zatwierdź</button>
				<button onClick={onClose}>Zamknij</button>
			</div>
			{showNapojList && (
				<div className="napoj-list-modal" style={styles.napojListModal}>
					<h4>Wybierz napój</h4>
					<ul style={styles.napojList}>
						{napoje.map((napoj) => (
							<li
								key={napoj.id}
								onClick={() => handleNapojSelect(napoj)}
								style={styles.napojItem}>
								{napoj.name}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};
const styles = {
	modal: {
		backgroundColor: "#f9f9f9",
		padding: "20px",
		borderRadius: "8px",
		boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
		maxWidth: "500px",
		margin: "0 auto",
	},
	inputRow: {
		marginBottom: "15px",
	},
	input: {
		width: "100%",
		padding: "8px",
		borderRadius: "4px",
		border: "1px solid #ddd",
	},
	button: {
		backgroundColor: "#007bff",
		color: "#fff",
		border: "none",
		padding: "10px 15px",
		margin: "5px",
		borderRadius: "4px",
		cursor: "pointer",
		fontSize: "16px",
	},
	buttonHover: {
		backgroundColor: "#0056b3",
	},
	modalButtons: {
		marginTop: "20px",
	},
	napojListModal: {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		backgroundColor: "#fff",
		padding: "20px",
		borderRadius: "8px",
		boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
		width: "300px",
	},
	napojList: {
		listStyle: "none",
		padding: "0",
		margin: "0",
	},
	napojItem: {
		padding: "10px",
		cursor: "pointer",
		borderBottom: "1px solid #ddd",
	},
	napojItemHover: {
		backgroundColor: "#f0f0f0",
	},
};

export default Procent;

// const applyDiscountToThirdPizza = () => {
// 	const pizzas = selectedItems
// 		.filter(item => item.category.toLowerCase() === "pizza" && item.cm !== 60)
// 		.sort((a, b) => a.price - b.price || a.cm - b.cm);

// 	if (pizzas.length >= 3) {
// 		const thirdPizza = pizzas[2];
// 		const firstPizza = pizzas[0];
// 		const secondPizza = pizzas[1];

// 		if (thirdPizza.price <= secondPizza.price && thirdPizza.cm <= secondPizza.cm) {
// 			thirdPizza.price = 10;
// 		}
// 	}else {
// 		alert("Proszę dodać trzecią pizzę 23 cm, 32 cm lub 42 cm");
// 	}
// 	onClose();
// };

import React, { useRef, useState, useEffect } from "react";
import "./Print.css";

const Print = ({
	selectedItems,
	tableName,
	pickupTime,
	customPickupTime,
	pickupTimeData,
	deliveryDetails,
	showDeliveryDetails,
	onClose,
	totalAmount,
	discountAmount,
	serviceCharge,
	adjustments,
	calculateAdjustedTotal,
}) => {
	const totalPrice = calculateAdjustedTotal();
	const printContentRef = useRef(null);
	const [hasContentToPrint, setHasContentToPrint] = useState(false);

	useEffect(() => {
		setHasContentToPrint(selectedItems.length > 0);
	}, [selectedItems]);

	const getCurrentDateTime = () => {
		const now = new Date();
		const date = `${now.getDate()}-${now.getMonth() + 1}-${now.getFullYear()}`;
		const time = `${now.getHours()}:${now
			.getMinutes()
			.toString()
			.padStart(2, "0")}`;
		return `${date} ${time}`;
	};

	const handlePrint = () => {
		const content = printContentRef.current.innerHTML;
		console.log("Content to print:", content);

		const iframe = document.createElement("iframe");
		iframe.style.position = "absolute";
		iframe.style.width = "0px";
		iframe.style.height = "0px";
		document.body.appendChild(iframe);

		const doc = iframe.contentWindow.document;
		doc.open();
		doc.write(`
			<html>
			<head>
				<title>Drukowanie</title>
				<style>
					body {
						font-size: 12pt;
						padding: 2px 5px;
						margin: 0;
					}
					.product-item {
					font-size: 12pt;
					font-weight: bold;
						border-bottom: 1px solid black;
						padding: 2px 0; /* Zmniejszono padding */
					}
					.pizza-space {
						margin-bottom: 70px; /* Zmniejszono margines */
					}
					.extras {
						margin-left: 10px; /* Zmniejszono margines */
					}
					.end-space {
						height: 1mm; /* Zmniejszono wysokość */
					}
					.dashed-line {
					margin-bottom: 80px;
						border-top: 3px dashed black; /* Zmniejszono szerokość */
						margin-top: 1mm; /* Zmniejszono margines */
						width: 100%;
					}
					.arrow-row {
					    display: flex;
					    justify-content: space-between;
					    align-items: center;
					    width: 100%;
					    margin-top: 5px; 
					}
					.arrow-down {
					    width: 0;
					    height: 0;
					    border-left: 5px solid transparent;
					    border-right: 5px solid transparent;
					    border-top: 10px solid black;
					}
					.table-name {
						margin-top: 5px; 
						// font-weight: bold;
					}
					.print-time {
						margin-bottom: 5px; /* Zmniejszono margines */
						font-style: italic;
					}
					.dashed-linee{margin-bottom: 80px;
						border-top: 2px solid black; /* Zmniejszono szerokość */
						margin-top: 1mm; /* Zmniejszono margines */
						width: 100%;}
						.dashed-lineee{margin-bottom: 1px;
						border-top: 2px solid black; /* Zmniejszono szerokość */
						margin-top: 1mm; /* Zmniejszono margines */
						width: 100%;}
					.pickup-time-container {
						border: 2px solid black;
						background-color: black;
						color: white;
						padding: 5px; /* Zmniejszono padding */
						border-radius: 5px;
						text-align: center;
						font-size: 14pt;
						margin: 5px 0; /* Zmniejszono margines */
					}
					.pickup-time {
						font-weight: bold;
					}
					@media print {
						.cut-line {
							position: absolute;
							top: 5px; /* Zmniejszono margines */
							left: 1%;
							width: 1px;
							height: 100%;
							background-color: black;
							transform: translateX(-50%);
						}
					.pickup-time-container {
							border: 5px solid black; /* Zmniejszono szerokość */
							color: black;
							padding: 0;
							font-weight: bold;
							font-size: 8pt;
							margin: 0;
							width: 100%;
							box-sizing: border-box;
						}
					}
				</style>
			</head>
			<body>
				<div class="cut-line"></div>
				${content}
				<div class="end-space"></div>
			</body>
			</html>
		`);
		doc.close();
		iframe.contentWindow.focus();
		iframe.contentWindow.print();

		setTimeout(() => {
			document.body.removeChild(iframe);
		}, 1000);

		setHasContentToPrint(false);
		onClose();
	};

	const groupItemsByCategory = (items) => {
		const categories = {
			PIZZA: [],
			MAKARONY: [],
			BAR: [],
			DOSTAWA: [],
		};

		items.forEach((item) => {
			if (showDeliveryDetails) {
				categories.DOSTAWA.push(item);
			} else {
				switch (item.category.toLowerCase()) {
					case "pizza":
					case "calzone":
					case "focaccia":
					case "włoskie pieczywo":
						categories.PIZZA.push(item);
						break;
					case "makaron":
					case "sałatki":
					case "desery":
					case "frytki":
					case "przekąski":
						categories.MAKARONY.push(item);
						break;
					case "napoje":
					case "soki":
					case "wina":
					case "drinki":
						categories.BAR.push(item);
						break;
					default:
						console.warn(`Nieznana kategoria: ${item.category}`);
						break;
				}
			}
		});

		return categories;
	};

	const renderCategory = (category, items) => (
		<div key={category} style={{ marginBottom: "5px" }}>
			{" "}
			<div className="dashed-lineee"></div>
			<h2 style={{ margin: "5px 0" }}>{category}</h2>{" "}
			<div className="dashed-linee"></div>
			{category === "DOSTAWA" && deliveryDetails && (
				<div style={{ marginBottom: "5px" }}>
					{" "}
					<h3 style={{ margin: "3px 0" }}>Dostawa:</h3>{" "}
					<p style={{ margin: "2px 0" }}>Adres: {deliveryDetails.address}</p>{" "}
					<p style={{ margin: "2px 0" }}>
						Mieszkanie: {deliveryDetails.apartment}
					</p>{" "}
					<p style={{ margin: "2px 0" }}>Piętro: {deliveryDetails.floor}</p>{" "}
					<p style={{ margin: "2px 0" }}>
						Komentarz: {deliveryDetails.comment}
					</p>{" "}
					<p style={{ margin: "2px 0" }}>Telefon: {deliveryDetails.phone}</p>{" "}
					<p style={{ margin: "2px 0" }}>
						Płatność: {deliveryDetails.paymentMethod}
					</p>{" "}
					<p>Suma: {totalAmount.toFixed(2)} zł</p>
					{adjustments.service > 0 && (
						<p style={{ color: "red" }}>
							Zastosowano {adjustments.service}% serwisu (+{" "}
							{serviceCharge.toFixed(2)} zł)
						</p>
					)}
					{adjustments.discount > 0 && (
						<p style={{ color: "blue" }}>
							Zastosowano {adjustments.discount.toFixed(2)} % zniżki (-{" "}
							{discountAmount.toFixed(2)} zł)
						</p>
					)}
					{adjustments.addToBill > 0 && (
						<p style={{ color: "green" }}>
							Dodano {adjustments.addToBill.toFixed(2)} zł do rachunku (+{" "}
							{adjustments.addToBill.toFixed(2)} zł)
						</p>
					)}
					{adjustments.subtractFromBill > 0 && (
						<p style={{ color: "blue" }}>
							Odejmowano {adjustments.subtractFromBill.toFixed(2)} zł od
							rachunku (- {adjustments.subtractFromBill.toFixed(2)} zł)
						</p>
					)}
					<p>Łącznie do zapłaty: {totalPrice.toFixed(2)} zł</p>
					<div className="arrow-row">
						<div className="arrow-down"></div>
						<div className="arrow-down"></div>
						<div className="arrow-down"></div>
						<div className="arrow-down"></div>
					</div>
				</div>
			)}
			{category === "PIZZA" && <div className="pizza-space"></div>}
			{items.map((item, index) => (
				<div key={`${item.id}-${index}`} className="product-item">
					{item.name} {item.quantity > 1 && `(${item.quantity})`}
					{item.comment && ` - ${item.comment}`}
					{item.extras && item.extras.length > 0 && (
						<div className="extras">
							{item.extras.map((extra, extraIndex) => (
								<div key={extraIndex} className="extra-item">
									{extra.name}
								</div>
							))}
						</div>
					)}
				</div>
			))}
			<div className="table-name">Stolik: {tableName}</div>
			<div className="print-time">{getCurrentDateTime()}</div>
			{pickupTime && (
				<div
					className={
						customPickupTime.includes(":") ? "pickup-time-container" : ""
					}>
					<p
						className={`pickup-time ${
							customPickupTime.includes(":") ? "pickup-time-na" : ""
						}`}>
						{pickupTime === "Invalid Date"
							? "Odbiór na: Invalid Date"
							: customPickupTime.includes(":")
							? `Odbiór na: ${pickupTime}`
							: `Odbiór do: ${pickupTime}`}
					</p>
				</div>
			)}
			<div className="dashed-line"></div>
		</div>
	);

	const renderProducts = () => {
		const groupedItems = groupItemsByCategory(selectedItems);
		return (
			<>
				{Object.keys(groupedItems).map((category) =>
					groupedItems[category].length > 0
						? renderCategory(category, groupedItems[category])
						: null
				)}
				{showDeliveryDetails &&
					renderCategory("DOSTAWA", groupedItems["DOSTAWA"])}
			</>
		);
	};

	return (
		<div>
			{hasContentToPrint && <button onClick={handlePrint}>Drukuj</button>}
			<div ref={printContentRef} style={{ display: "none" }}>
				{renderProducts()}
			</div>
		</div>
	);
};

export default Print;

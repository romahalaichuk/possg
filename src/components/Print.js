import React, { useRef, useState, useEffect } from "react";
import "./Print.css";

const Print = ({
	selectedItems,
	tableName,
	pickupTime,
	customPickupTime,
	pickupTimeData = { minutesToPickup: 0, customPickupTime: "" },
	onClose,
}) => {
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
						font-size: 10pt;
						padding: 2px 5px;
						margin: 0;
					}
					.product-item {
						border-bottom: 1px solid black;
						padding: 5px 0;
					}
					.pizza-space {
						margin-bottom: 80px;
					}
					.extras {
						margin-left: 20px;
					}
					.end-space {
						height: 2mm;
					}
					.dashed-line {
						border-top: 1px dashed black;
						margin-top: 2mm;
						width: 100%;
					}
					.table-name {
						margin-top: 10px;
						font-weight: bold;
					}
					.print-time {
						margin-bottom: 10px;
						font-style: italic;
					}
					.pickup-time {
						margin-top: 10px;
						font-weight: bold;
					}
					.pickup-time-na-container {
						background-color: black;
						color: white;
						padding: 5px;
						border-radius: 3px;
						text-align: center;
						font-size: 12pt;
					}
					.pickup-time-na {
						background-color: black;
						color: white;
						padding: 5px;
						border-radius: 3px;
					}
					@media print {
						.cut-line {
							position: absolute;
							top: 10px;
							left: 1%;
							width: 1px;
							height: 100%;
							background-color: black;
							transform: translateX(-50%);
						}
						.pickup-time-na-container,
						.pickup-time-na {
							background-color: black;
							color: white;
							padding: 5px;
							border-radius: 3px;
						}
					}
				</style>
			</head>
			<body>
				<div class="cut-line"></div>
				${content}
				<div class="end-space"></div>
				<div class="dashed-line"></div>
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
		};

		items.forEach((item) => {
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
		});

		return categories;
	};

	const renderCategory = (category, items) => (
		<div key={category}>
			<h2>{category}</h2>
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
			<div className="dashed-line"></div>
			<div className="table-name">Stolik: {tableName}</div>
			<div className="print-time">{getCurrentDateTime()}</div>
			{pickupTime && (
				<div
					className={
						customPickupTime.includes(":") ? "pickup-time-na-container" : ""
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
		return Object.keys(groupedItems).map((category) =>
			groupedItems[category].length > 0
				? renderCategory(category, groupedItems[category])
				: null
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

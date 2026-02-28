import React, { useRef, useState, useEffect } from "react";
import "./Print.css";
const niceMessages = [
	"Twój uśmiech rozświetla każde pomieszczenie.",
	"Ktoś dziś myśli o Tobie bardzo ciepło.",
	"Twoja dobroć wraca do Ciebie w najlepszy możliwy sposób.",
	"Przed Tobą wyjątkowy posiłek.",
	"Twoje serce wie, co jest dla Ciebie najlepsze.",
	"Dziś jest dobry dzień, by spróbować czegoś nowego.",
	"Twoja obecność czyni to miejsce wyjątkowym.",
	"Małe przyjemności czynią życie pięknym.",
	"Ktoś docenia Twoją wyjątkowość.",
	"Dobry smak to sztuka, którą Ty doskonale rozumiesz.",
	"Twoja energia przyciąga same pozytywne chwile.",
	"Najlepsze rzeczy dzieją się, gdy jesteś sobą.",
	"Ten posiłek to nagroda, którą zasługujesz.",
	"Twoja wyjątkowość nie pozostaje niezauważona.",
	"Dziś los uśmiecha się do Ciebie.",
	"Każdy dzień zaczyna się od Twojego dobrego wyboru.",
	"Twoja intuicja prowadzi Cię do wspaniałych doznań.",
	"To będzie smaczna przygoda.",
	"Ktoś dziś mówi o Tobie w samych superlatywach.",
	"Twoja pozytywna aura przyciąga same dobre rzeczy.",
	"Dobrze wyglądasz, gdy jesteś szczęśliwy.",
	"Ten moment należy tylko do Ciebie.",
	"Twoja otwartość na nowe smaki jest inspirująca.",
	"Świat staje się lepszy przez ludzi takich jak Ty.",
	"Twoja obecność to prezent dla tego miejsca.",
	"Twoja obecność wnosi łagodny spokój.",
	"Masz w sobie naturalne ciepło.",
	"Twoja energia jest miękka i przyjazna.",
	"Wyróżnia Cię spokojna jasność.",
	"Twoja aura sprzyja harmonii.",
	"Masz dar tworzenia miłej atmosfery.",
	"Twoje bycie jest kojące.",
	"Twoja życzliwość jest wyczuwalna.",
	"Masz w sobie pogodną lekkość.",
	"Twoja obecność daje komfort.",
	"Wnosisz ze sobą serdeczność.",
	"Twoja natura jest łagodna.",
	"Masz w sobie cichą radość.",
	"Twoja energia przynosi spokój.",
	"Wyróżnia Cię miękka siła.",
	"Twoja obecność sprzyja uśmiechom.",
	"Masz w sobie jasne ciepło.",
	"Twoja aura jest przyjazna.",
	"Wnosisz dobrą atmosferę.",
	"Twoja obecność koi otoczenie.",
	"Masz naturalną serdeczność.",
	"Twoje nastawienie jest pogodne.",
	"Wyróżnia Cię spokojna harmonia.",
	"Twoja energia jest łagodna.",
	"Masz w sobie przyjemny blask.",
	"Twoja obecność daje lekkość.",
	"Wnosisz ze sobą spokój.",
	"Twoja natura jest serdeczna.",
	"Masz w sobie dobrą energię.",
	"Twoja aura jest miękka.",
	"Wyróżnia Cię ciepła prostota.",
	"Twoja obecność uspokaja.",
	"Masz w sobie naturalną dobroć.",
	"Twoja energia sprzyja pogodzie ducha.",
	"Wnosisz łagodną radość.",
	"Twoja natura jest harmonijna.",
	"Masz w sobie spokojne światło.",
	"Twoja obecność jest przyjemna.",
	"Wyróżnia Cię cicha serdeczność.",
	"Twoja aura wnosi spokój.",
	"Masz w sobie miękką jasność.",
	"Twoja energia jest kojąca.",
	"Wnosisz naturalne ciepło.",
	"Twoja obecność daje ukojenie.",
	"Masz w sobie pogodną siłę.",
	"Twoja natura jest jasna.",
	"Wyróżnia Cię serdeczne ciepło.",
	"Twoja aura sprzyja komfortowi.",
	"Masz w sobie spokojną radość.",
	"Twoja obecność jest łagodna.",
	"Wnosisz ze sobą harmonię.",
	"Twoja energia jest przyjazna.",
	"Masz naturalną pogodę ducha.",
	"Twoja natura daje spokój.",
	"Wyróżnia Cię miękka łagodność.",
	"Twoja obecność wnosi jasność.",
	"Masz w sobie ciepłą równowagę.",
	"Twoja aura jest kojąca.",
	"Wnosisz ze sobą lekkość.",
	"Twoja energia daje komfort.",
	"Masz w sobie przyjazną jasność.",
	"Twoja obecność sprzyja harmonii.",
	"Wyróżnia Cię spokojne ciepło.",
	"Twoja natura jest przyjemna.",
	"Masz w sobie łagodny blask.",
	"Twoja aura daje ukojenie.",
	"Wnosisz cichą radość.",
	"Twoja energia jest serdeczna.",
	"Masz naturalny spokój.",
	"Twoja obecność wnosi pogodę.",
	"Wyróżnia Cię jasna łagodność.",
	"Twoja natura jest kojąca.",
	"Masz w sobie dobrą harmonię.",
	"Twoja aura jest pogodna.",
	"Wnosisz miękką serdeczność.",
	"Twoja energia wnosi spokój.",
	"Masz w sobie przyjemną ciszę.",
	"Twoja obecność jest jasna.",
	"Wyróżnia Cię łagodna pogoda ducha.",
	"Twoja natura jest ciepła.",
	"Twoja obecność jest delikatnie kojąca.",
	"Masz w sobie spokojną serdeczność.",
	"Twoja aura wnosi miękkie ciepło.",
	"Wyróżnia Cię naturalna łagodność.",
	"Twoja energia sprzyja wyciszeniu.",
	"Masz w sobie jasną harmonię.",
	"Twoja obecność jest ciepło przyjmowana.",
	"Wnosisz ze sobą spokojną aurę.",
	"Twoja natura jest miękko pogodna.",
	"Masz w sobie subtelne ciepło.",
	"Twoja energia jest przyjemnie spokojna.",
	"Wyróżnia Cię serdeczna łagodność.",
	"Twoja obecność wnosi ukojenie.",
	"Masz w sobie naturalną jasność.",
	"Twoja aura jest delikatna.",
	"Wnosisz ze sobą pogodny spokój.",
	"Twoja natura jest ciepło łagodna.",
	"Masz w sobie spokojny urok.",
	"Twoja energia jest miękko serdeczna.",
	"Wyróżnia Cię jasne ukojenie.",
	"Twoja obecność daje wyciszenie.",
	"Masz w sobie dobrą łagodność.",
	"Twoja aura sprzyja ciszy.",
	"Wnosisz ze sobą naturalne ukojenie.",
	"Twoja natura jest subtelnie pogodna.",
	"Masz w sobie ciepły spokój.",
	"Twoja energia jest delikatna.",
	"Wyróżnia Cię miękki spokój.",
	"Twoja obecność jest serdeczna.",
	"Masz w sobie łagodną ciszę.",
];

const getRandomMessage = () => {
	return niceMessages[Math.floor(Math.random() * niceMessages.length)];
};
const Print = ({
	selectedItems,
	waiterName,
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
	discountMessage,
	adjustments,
	calculateAdjustedTotal,
	resetDeliveryDetails,
	isWynos,
	napoj,
	resetTable,
}) => {
	const totalPrice = calculateAdjustedTotal();
	const printContentRef = useRef(null);
	const [hasContentToPrint, setHasContentToPrint] = useState(false);
	const [printedItems, setPrintedItems] = useState([]);
	const [dailyMessage, setDailyMessage] = useState("");

	useEffect(() => {
		const savedPrintedItems =
			JSON.parse(localStorage.getItem("printedItems")) || [];
		setPrintedItems(savedPrintedItems);
	}, []);

	// DODAJ TEN useEffect:
	useEffect(() => {
		setDailyMessage(getRandomMessage());
	}, []);
	useEffect(() => {
		setHasContentToPrint(selectedItems.length > 0);
	}, [selectedItems]);

	useEffect(() => {
		const savedPrintedItems =
			JSON.parse(localStorage.getItem("printedItems")) || [];
		setPrintedItems(savedPrintedItems);
	}, []);

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
                        font-size: 9pt;
                        padding: 2px 5px;
                        margin: 0;
                    }
  .product-item {
                        font-size: 11pt;
                        font-weight: bold;
                        
                        border-bottom: 8px solid black;
                        padding: 2px 0;
                    } 
                    .pizza-space {
                        margin-bottom: 70px;
                    }
                    .extras {
                        margin-left: 39px;
                    }
                    .end-space {
                        height: 1mm;
                    }
                    .dashed-line {
                        margin-bottom: 80px;
                        border-top: 3px dashed black;
                        margin-top: 1mm;
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
                    }
                    .print-time {
                        margin-bottom: 5px;
                        font-style: italic;
                    }
                    .dashed-linee {
                        margin-bottom: 80px;
                        border-top: 2px solid black;
                        margin-top: 1mm;
                        width: 100%;
                    }
                    .dashed-lineee {
                        margin-bottom: 1px;
                        border-top: 2px solid black;
                        margin-top: 1mm;
                        width: 100%;
                    }
                    .pickup-time-container {
                        border: 2px solid black;
                        background-color: black;
                        color: white;
                        padding: 5px;
                        border-radius: 5px;
                        text-align: center;
                        font-size: 14pt;
                        margin: 5px 0;
                    }
                        .extra-item { border-top: 1px solid black;
                          padding: 2px 0; 
                           margin-bottom: 2px;
                           }

                    .wynosh {
                        font-size: 22px;
                        margin: 0;
                        padding: 0;
                        font-weight: bold;
                    }
						                    .nice-message {
                        margin-top: 15px;
                        padding: 10px 5px;
                        font-style: italic;
                        font-size: 9pt;
                        text-align: center;
                        border-top: 1px dashed #ccc;
                        border-bottom: 1px dashed #ccc;
                        color: #555;
                        background-color: #f9f9f9;
                    }
                    .pickup-time {
                        font-weight: bold;
                    }
                    @media print {
                        .cut-line {
                            position: absolute;
                            top: 5px;
                            left: 1%;
                            width: 1px;
                            height: 100%;
                            background-color: black;
                            transform: translateX(-50%);
                        }
                        .pickup-time-container {
                            border: 5px solid black;
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

		const newlyPrintedItemIds = selectedItems.map((item) => item.uniqueId);
		const updatedPrintedItems = [...printedItems, ...newlyPrintedItemIds];
		localStorage.setItem("printedItems", JSON.stringify(updatedPrintedItems));
		setPrintedItems(updatedPrintedItems);

		setHasContentToPrint(false);
		onClose();
		const groupedItems = groupItemsByCategory(selectedItems);
		if (groupedItems.DOSTAWA.length > 0) {
			resetTable();
		}
	};

	const groupItemsByCategory = (items) => {
		const categories = {
			PIZZA: [],
			MAKARONY: [],
			BAR: [],
			DOSTAWA: [],
			WYNOS: [],
			CUSTOM: [],
		};

		const itemMap = {};

		items
			.filter((item) => !printedItems.includes(item.uniqueId))
			.forEach((item) => {
				const extrasString = item.extras
					? item.extras
							.map((extra) => extra.name)
							.sort()
							.join(",")
					: "";
				const key = `${item.name}-${item.category}-${
					item.comment || ""
				}-${extrasString}`;

				if (itemMap[key]) {
					itemMap[key].quantity += item.quantity;
				} else {
					itemMap[key] = { ...item };
				}
			});

		Object.values(itemMap).forEach((item) => {
			if (showDeliveryDetails) {
				categories.DOSTAWA.push(item);
			} else if (
				item.category &&
				item.category.toLowerCase().includes("wynos")
			) {
				categories.WYNOS.push(item);
			} else if (item.category) {
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
					case "kawa":
					case "napój bezalkoholowy":
					case "napój bezalkoholowy pro":
					case "piwo":
					case "wina":
					case "drinki":
						categories.BAR.push(item);
						break;
					case "sos":
						if (isWynos) {
							categories.PIZZA.push(item);
						} else {
							categories.BAR.push(item);
						}
						break;
					case "custom": // DODAJ TEN CASE
						categories.CUSTOM.push(item);
						break;
					default:
						// Jeśli nie pasuje do żadnej kategorii, dodaj do CUSTOM
						categories.CUSTOM.push(item);
						break;
				}
			}
		});

		return categories;
	};

	const renderCategory = (category, items, hasPizza, hasMakaron) => (
		<div key={category} style={{ marginBottom: "5px" }}>
			<div className="arrow-row">
				<div className="arrow-down"></div>
				<div className="arrow-down"></div>
				<div className="arrow-down"></div>
				<div className="arrow-down"></div>
				<div className="arrow-down"></div>
				<div className="arrow-down"></div>
				<div className="arrow-down"></div>
				<div className="arrow-down"></div>
				<div className="arrow-down"></div>
				<div className="arrow-down"></div>
				<div className="arrow-down"></div>
			</div>
			<div className="dashed-lineee"></div>
			<h2 style={{ margin: "5px 0" }}>{category}</h2>

			<div className="dashed-linee"></div>
			{category === "DOSTAWA" && deliveryDetails && (
				<div style={{ marginBottom: "5px" }}>
					<h3 style={{ margin: "3px 0" }}>Dostawa:</h3>
					<p style={{ margin: "1px 0" }}>Adres: {deliveryDetails.address}</p>
					<p style={{ margin: "1px 0" }}>
						Mieszkanie: {deliveryDetails.apartment}
					</p>
					<p style={{ margin: "1px 0" }}>Piętro: {deliveryDetails.floor}</p>
					<p style={{ margin: "1px 0" }}>
						Komentarz: {deliveryDetails.comment}
					</p>
					<p style={{ margin: "1px 0" }}>Telefon: {deliveryDetails.phone}</p>
					<p style={{ margin: "1px 0" }}>
						Płatność: {deliveryDetails.paymentMethod}
					</p>
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
						<p style={{ color: "orange" }}>
							Odjęto {adjustments.subtractFromBill.toFixed(2)} zł od rachunku (-{" "}
							{adjustments.subtractFromBill.toFixed(2)} zł)
						</p>
					)}
					{discountMessage && <p style={{ color: "red" }}>{discountMessage}</p>}
					<p>Łącznie: {totalPrice.toFixed(2)} zł</p>
					<div className="arrow-row">
						<div className="arrow-down"></div>
						<div className="arrow-down"></div>
						<div className="arrow-down"></div>
						<div className="arrow-down"></div>
					</div>
				</div>
			)}

			{category === "WYNOS" && <div className="pizza-space"></div>}

			{items.map((item, index) => (
				<div key={`${item.id}-${index}`} className="product-item">
					{/* Sprawdź, czy to pizza "pół na pół" */}
					{item.half1 && item.half2 ? (
						<div>
							{`Pizza pół na pół z: ${item.half1} i ${item.half2}`}
							{item.quantity > 1 && ` (${item.quantity})`}
							{" - "}
							{(item.price * item.quantity).toFixed(2)} zł
						</div>
					) : (
						<div>
							{item.name}
							{item.quantity > 1 && ` (${item.quantity})`}
							{" - "}
							{(item.price * item.quantity).toFixed(2)} zł
						</div>
					)}

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

			{category === "PIZZA" && hasMakaron && (
				<div
					style={{
						textAlign: "center",
						marginTop: "10px",
						fontWeight: "bold",
					}}>
					Razem z Makaronem
				</div>
			)}
			{category === "MAKARONY" && hasPizza && (
				<div
					style={{
						textAlign: "center",
						marginTop: "10px",
						fontWeight: "bold",
					}}>
					Razem z Pizzą
				</div>
			)}

			{!isWynos && <div className="table-name">Stolik: {tableName}</div>}
			<h3 className="table-name"> Kelner: {waiterName}</h3>
			<div className="print-time">{getCurrentDateTime()}</div>
			{isWynos && <h3 className="wynosh">!!!! WYNOS !!!!!</h3>}

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
			<div
				style={{
					marginTop: "15px",
					padding: "10px 5px",
					fontStyle: "normal",
					fontWeight: "900", // extra bold
					fontSize: "10pt", // mała = gruba
					textAlign: "center",
					border: "10px solid #000", // ramka wokół
					color: "#000",
					backgroundColor: "#fff",
					textTransform: "uppercase",
					letterSpacing: "1px",
					fontFamily: "Arial, Helvetica, sans-serif", // bezszeryfowa
				}}>
				{" "}
				✨ {dailyMessage.toUpperCase()} ✨{" "}
			</div>
			<div className="dashed-line"></div>
		</div>
	);

	const renderProducts = () => {
		const groupedItems = groupItemsByCategory(selectedItems);
		const hasPizza = groupedItems.PIZZA.length > 0;
		const hasMakaron = groupedItems.MAKARONY.length > 0;

		return (
			<>
				{Object.keys(groupedItems).map((category) =>
					groupedItems[category].length > 0
						? renderCategory(
								category,
								groupedItems[category],
								hasPizza,
								hasMakaron,
							)
						: null,
				)}
				{showDeliveryDetails &&
					renderCategory("DOSTAWA", groupedItems["DOSTAWA"], false, false)}
				{!showDeliveryDetails &&
					groupedItems["WYNOS"].length > 0 &&
					renderCategory("WYNOS", groupedItems["WYNOS"], false, false)}
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

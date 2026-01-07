import React, { useEffect, useState, useRef } from "react";
import { customFont } from "./fonts";
import "./ManagerPanel.css";
import jsPDF from "jspdf";
import "jspdf-autotable";
import SuccessAnimation from "./SuccessAnimation";

const ManagerPanel = ({ onClose }) => {
	const [paymentDetails, setPaymentDetails] = useState([]);
	const [expandedTables, setExpandedTables] = useState({});
	const [expandedProductSummary, setExpandedProductSummary] = useState(false);
	const [isClosing, setIsClosing] = useState(false);
	const [showSuccess, setShowSuccess] = useState(false);
	const modalRef = useRef(null);
	const [expandedWaiters, setExpandedWaiters] = useState({});

	const toggleWaiterDetails = (waiterName) => {
		setExpandedWaiters((prev) => ({
			...prev,
			[waiterName]: !prev[waiterName],
		}));
	};
	useEffect(() => {
		const storedPaymentDetails =
			JSON.parse(localStorage.getItem("paymentDetails")) || [];
		setPaymentDetails(storedPaymentDetails);
	}, []);
	const countUniqueTables = () => {
		const tableNames = paymentDetails.map((detail) => detail.tableName);
		return new Set(tableNames).size;
	};

	const formatCurrency = (amount) => {
		if (typeof amount !== "number") {
			console.error("Invalid amount for formatting:", amount);
			return "0.00";
		}
		return amount.toFixed(2);
	};
	const groupByWaiter = () => {
		const waiterData = {};

		paymentDetails.forEach((detail) => {
			const waiterName = detail.waiterName || "Nieznany kelner";
			if (!waiterData[waiterName]) {
				waiterData[waiterName] = {
					tables: {},
					totalAmount: 0,
					products: {},
				};
			}
			const tableName = detail.tableName;
			if (!waiterData[waiterName].tables[tableName]) {
				waiterData[waiterName].tables[tableName] = {
					totalAmount: 0,
					items: [],
				};
			}
			waiterData[waiterName].tables[tableName].totalAmount += parseFloat(
				detail.totalAmount || 0
			);
			waiterData[waiterName].totalAmount += parseFloat(detail.totalAmount || 0);
			waiterData[waiterName].tables[tableName].items.push(
				...detail.selectedItems
			);

			// Add to products summary for this waiter
			detail.selectedItems.forEach((item) => {
				waiterData[waiterName].products[item.name] =
					(waiterData[waiterName].products[item.name] || 0) + item.quantity;
			});
		});

		return waiterData;
	};

	const getProductsSummary = () => {
		const summary = {};
		const removedSummary = {};

		paymentDetails.forEach((detail) => {
			detail.selectedItems.forEach((item) => {
				summary[item.name] = (summary[item.name] || 0) + item.quantity;
			});

			if (detail.removedItems && detail.removedItems.length > 0) {
				detail.removedItems.forEach((item) => {
					removedSummary[item.name] =
						(removedSummary[item.name] || 0) - item.quantity;
				});
			}
		});

		return { ...summary, ...removedSummary };
	};
	const WAITER_PROFILES_STORAGE_KEY = "waiterProfiles";

	const calculateTotals = () => {
		const totalCash = paymentDetails
			.filter((p) => p.paymentType === "GOTÓWA")
			.reduce((total, p) => total + parseFloat(p.finalAmount || 0), 0);

		const totalCard = paymentDetails
			.filter((p) => p.paymentType === "KARTA")
			.reduce((total, p) => total + parseFloat(p.finalAmount || 0), 0);

		const totalSales = totalCash + totalCard;

		const totalServiceCharges = paymentDetails.reduce(
			(total, p) => total + parseFloat(p.serviceCharge || 0),
			0
		);

		const netTotalSales = totalSales;

		const salaUtarg = netTotalSales - totalServiceCharges;

		return {
			totalCash: formatCurrency(totalCash),
			totalCard: formatCurrency(totalCard),
			totalSales: formatCurrency(totalSales),
			totalServiceCharges: formatCurrency(totalServiceCharges),
			netTotalSales: formatCurrency(netTotalSales),
			salaUtarg: formatCurrency(salaUtarg),
		};
	};

	const handleExportToPDF = () => {
		const doc = new jsPDF();
		const currentDate = new Date();
		const dateString = `${currentDate.getDate()}-${
			currentDate.getMonth() + 1
		}-${currentDate.getFullYear()}`;
		let yOffset = 10;
		const {
			totalCash,
			totalCard,
			totalServiceCharges,
			netTotalSales,
			salaUtarg,
		} = calculateTotals();
		const uniqueTablesCount = countUniqueTables();

		doc.addFileToVFS("custom-font.ttf", customFont.regular.base64);
		doc.addFont("custom-font.ttf", "customFont", "normal");
		doc.setFont("customFont");

		doc.setFontSize(12);
		doc.text("Panel Managera", 20, yOffset);
		yOffset += 15;

		const salaUtargText = `SALA UTARG: ${salaUtarg} PLN`;
		const textWidth = doc.getTextWidth(salaUtargText);
		const textHeight = 10;

		doc.setFontSize(14);
		doc.setFont("customFont", "bold");
		doc.text(salaUtargText, 20, yOffset);

		doc.setDrawColor(0, 0, 0);
		doc.rect(20 - 2, yOffset - textHeight - 2, textWidth + 4, textHeight + 4);

		yOffset += 15;

		doc.setFontSize(10);
		doc.setFont("customFont", "normal");
		doc.text(`ŁĄCZNIE SALA UTARG: ${netTotalSales} PLN`, 20, yOffset);
		yOffset += 10;
		doc.text(`Łączna kwota gotówki: ${totalCash} PLN`, 20, yOffset);
		yOffset += 10;
		doc.text(`Łączna kwota kartą: ${totalCard} PLN`, 20, yOffset);
		yOffset += 10;

		if (totalServiceCharges > 0) {
			doc.text(`Serwisy: ${totalServiceCharges} PLN`, 20, yOffset);
			yOffset += 10;
		}

		doc.setFontSize(10);
		doc.text("Szczegóły płatności:", 20, yOffset);
		yOffset += 10;
		doc.text(`Liczba stolików: ${uniqueTablesCount}`, 20, yOffset);
		yOffset += 10;

		const tablesData = paymentDetails.reduce((acc, detail) => {
			acc[detail.tableName] = acc[detail.tableName] || [];
			acc[detail.tableName].push(detail);
			return acc;
		}, {});

		Object.keys(tablesData).forEach((tableName) => {
			const details = tablesData[tableName];

			if (yOffset > 260) {
				doc.addPage();
				yOffset = 10;
			}

			doc.autoTable({
				startY: yOffset,
				head: [
					[
						"Stolik",
						"Kelner",
						"Kwota",
						"Płatność",
						"Produkt",
						"Ilość",
						"Cena",
						"Zniżka",
						"Opłata serwisowa",
						"Dodano do rachunku",
						"Odejmij od rachunku",
						"Finalna kwota",
						"Powód usunięcia",
					],
				],
				body: details.flatMap((detail) =>
					detail.selectedItems
						.map((item) => [
							tableName,
							detail.waiterName || "",
							formatCurrency(parseFloat(detail.totalAmount || 0)),
							detail.paymentType,
							item.name,
							item.quantity,
							formatCurrency(parseFloat(item.price * item.quantity || 0)),
							detail.discountAmount
								? formatCurrency(parseFloat(detail.discountAmount || 0))
								: "-",
							detail.serviceCharge
								? formatCurrency(parseFloat(detail.serviceCharge || 0))
								: "-",
							detail.addToBill
								? formatCurrency(parseFloat(detail.addToBill || 0))
								: "-",
							detail.subtractFromBill
								? formatCurrency(parseFloat(detail.subtractFromBill || 0))
								: "-",
							formatCurrency(parseFloat(detail.adjustedTotalAmount || 0)),
							"",
						])
						.concat(
							detail.removedItems?.map((item) => [
								tableName,
								detail.waiterName || "",
								"",
								"",
								item.name,
								`-${item.quantity}`,
								`-${formatCurrency(
									parseFloat(item.price * item.quantity || 0)
								)}`,
								"-",
								"-",
								"-",
								"-",
								"-",
								item.comment,
							]) || []
						)
				),
				theme: "striped",
				margin: { top: 10, bottom: 10 },
				styles: {
					fontSize: 6,
					cellPadding: 2,
					overflow: "linebreak",
					font: "customFont",
				},
				headStyles: {
					font: "customFont",
				},
				columnStyles: {
					0: {
						cellWidth: "auto",
						cellPadding: 2,
						lineWidth: 0.75,
						lineColor: [0, 0, 0],
					},
				},
				tableLineColor: [0, 0, 0],
				tableLineWidth: 0.75,
			});

			yOffset = doc.lastAutoTable.finalY + 10;
			doc.line(20, yOffset - 5, 190, yOffset - 5);
			yOffset += 15;
		});

		if (yOffset > 260) {
			doc.addPage();
			yOffset = 10;
		}

		doc.setFontSize(10);
		doc.text("Podsumowanie produktów:", 20, yOffset);
		yOffset += 10;

		const productSummary = getProductsSummary();
		Object.entries(productSummary).forEach(([productName, quantity]) => {
			if (yOffset > 260) {
				doc.addPage();
				yOffset = 10;
			}
			if (quantity < 0) {
				doc.setTextColor(255, 0, 0);
			} else {
				doc.setTextColor(0, 0, 0);
			}
			doc.text(`${productName}: ${quantity} szt.`, 20, yOffset);
			yOffset += 10;
		});

		if (yOffset > 260) {
			doc.addPage();
			yOffset = 10;
		}

		doc.setFontSize(10);

		yOffset += 10;

		doc.save(`panel_managera_${dateString}.pdf`);

		setShowSuccess(true);
		setTimeout(() => {
			setIsClosing(true);
			setTimeout(() => {
				localStorage.clear();
				localStorage.removeItem(WAITER_PROFILES_STORAGE_KEY);
				setPaymentDetails([]);
			}, 3000);
		}, 3000);
	};

	const toggleTableDetails = (tableName) => {
		setExpandedTables((prev) => ({
			...prev,
			[tableName]: !prev[tableName],
		}));
	};

	const toggleProductSummary = () => {
		setExpandedProductSummary((prev) => !prev);
	};

	const handleOverlayClick = (e) => {
		if (modalRef.current && !modalRef.current.contains(e.target)) {
			onClose();
		}
	};

	const handleModalClick = (e) => {
		e.stopPropagation();
	};

	const handleAnimationClose = () => {
		window.location.reload();
	};

	return (
		<>
			{showSuccess && <SuccessAnimation onClose={handleAnimationClose} />}
			<div
				className={`manager-panel-overlay ${isClosing ? "closing" : ""}`}
				onClick={handleOverlayClick}>
				<div
					className={`manager-panel ${isClosing ? "fade-out" : ""}`}
					ref={modalRef}
					onClick={handleModalClick}>
					<button className="close-button" onClick={onClose}>
						X
					</button>
					<h2>Panel Managera</h2>
					<div className="manager-info">
						<div className="info-item">
							<strong className="sala-utarg">SALA UTARG:</strong>{" "}
							{calculateTotals().salaUtarg} PLN
						</div>

						<div className="info-item">
							<strong>LĄCZNIE SALA UTARG:</strong>{" "}
							{calculateTotals().netTotalSales} PLN
						</div>
						<div className="info-item">
							<strong>Łączna kwota gotówki:</strong>{" "}
							{calculateTotals().totalCash} PLN
						</div>
						<div className="info-item">
							<strong>Łączna kwota kartą:</strong> {calculateTotals().totalCard}{" "}
							PLN
						</div>
						{calculateTotals().totalServiceCharges > 0 && (
							<div className="info-item">
								<strong>Serwisy:</strong>{" "}
								{calculateTotals().totalServiceCharges} PLN
							</div>
						)}

						<div className="info-item">
							<strong>Szczegóły płatności:</strong>
							<p>Ilość stolików: {countUniqueTables()}</p>
							<div className="info-item">
								<strong>Kelnerzy:</strong>
								<ul>
									{Object.keys(groupByWaiter()).map((waiterName) => (
										<li key={waiterName}>
											<button
												className="waiter-toggle"
												onClick={() => toggleWaiterDetails(waiterName)}>
												{expandedWaiters[waiterName] ? "−" : "+"} {waiterName}
											</button>
											{expandedWaiters[waiterName] && (
												<ul>
													<li>
														<strong>Łączna kwota:</strong>{" "}
														{formatCurrency(
															groupByWaiter()[waiterName].totalAmount
														)}{" "}
														PLN
													</li>
													{Object.entries(
														groupByWaiter()[waiterName].tables
													).map(([tableName, tableDetails]) => (
														<li key={tableName}>
															<strong>Stolik: {tableName}</strong>
															<ul>
																<li>
																	Łączna kwota:{" "}
																	{formatCurrency(tableDetails.totalAmount)} PLN
																</li>
																{tableDetails.items.map((item, index) => (
																	<li key={index}>
																		Produkt: {item.name}, Ilość: {item.quantity}
																		, Cena:{" "}
																		{formatCurrency(item.price * item.quantity)}{" "}
																		PLN
																	</li>
																))}
															</ul>
														</li>
													))}
												</ul>
											)}
										</li>
									))}
								</ul>
							</div>
							<ul>
								{paymentDetails.length > 0 ? (
									Object.keys(
										paymentDetails.reduce((acc, detail) => {
											acc[detail.tableName] = true;
											return acc;
										}, {})
									).map((tableName) => (
										<li key={tableName}>
											<button
												className="table-toggle"
												onClick={() => toggleTableDetails(tableName)}>
												{expandedTables[tableName] ? "−" : "+"} {tableName}
											</button>
											{expandedTables[tableName] && (
												<ul>
													{paymentDetails
														.filter((detail) => detail.tableName === tableName)
														.map((detail) => (
															<li key={detail.tableName + detail.paymentType}>
																<strong>Stolik: {detail.tableName}</strong>
																<div>Kelner: {detail.waiterName}</div>
																<div>
																	Kwota:{" "}
																	{formatCurrency(
																		parseFloat(detail.totalAmount || 0)
																	)}{" "}
																	PLN
																</div>
																<div>Płatność: {detail.paymentType}</div>
																{detail.selectedItems &&
																	detail.selectedItems.length > 0 && (
																		<ul>
																			{detail.selectedItems.map((item) => (
																				<li key={item.id}>
																					Produkt: {item.name}, Ilość:{" "}
																					{item.quantity}, Cena:{" "}
																					{formatCurrency(
																						parseFloat(
																							item.price * item.quantity || 0
																						)
																					)}{" "}
																					PLN
																				</li>
																			))}
																		</ul>
																	)}
																{detail.removedItems &&
																	detail.removedItems.length > 0 && (
																		<>
																			<h4>Usunięte produkty:</h4>
																			<ul>
																				{detail.removedItems.map((item) => (
																					<li
																						key={item.uniqueId}
																						style={{
																							color: "red",
																							textDecoration: "line-through",
																						}}>
																						{item.name} -{" "}
																						{formatCurrency(
																							parseFloat(
																								item.price * item.quantity || 0
																							)
																						)}{" "}
																						PLN (Ilość: {item.quantity}) (
																						Powód: {item.comment})
																					</li>
																				))}
																			</ul>
																		</>
																	)}
															</li>
														))}
												</ul>
											)}
										</li>
									))
								) : (
									<li>Brak szczegółów płatności</li>
								)}
							</ul>
						</div>
						<button className="toggle-summary" onClick={toggleProductSummary}>
							{expandedProductSummary ? "−" : "+"} Podsumowanie produktów
						</button>
						{expandedProductSummary && (
							<div className="info-item">
								<ul>
									{Object.entries(getProductsSummary()).map(
										([productName, quantity]) => (
											<li key={productName}>
												{productName}: {quantity} szt.
											</li>
										)
									)}
								</ul>
							</div>
						)}
					</div>
					<button className="export-button" onClick={handleExportToPDF}>
						Zamknij dzień i pobierz PDF
					</button>
				</div>
			</div>
		</>
	);
};

export default ManagerPanel;

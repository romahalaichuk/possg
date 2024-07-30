import React, { useEffect, useState, useRef } from "react";
import "./ManagerPanel.css";
import jsPDF from "jspdf";
import "jspdf-autotable";
import SuccessAnimation from "./SuccessAnimation"; // Zmienione z ErrorSimulation na SuccessAnimation

const ManagerPanel = ({ onClose }) => {
	const [paymentDetails, setPaymentDetails] = useState([]);
	const [expandedTables, setExpandedTables] = useState({});
	const [expandedProductSummary, setExpandedProductSummary] = useState(false);
	const [isClosing, setIsClosing] = useState(false);
	const [showSuccess, setShowSuccess] = useState(false); // Zmienione na showSuccess
	const modalRef = useRef(null);

	useEffect(() => {
		const storedPaymentDetails =
			JSON.parse(localStorage.getItem("paymentDetails")) || [];
		setPaymentDetails(storedPaymentDetails);
	}, []);

	const formatCurrency = (amount) => {
		if (typeof amount !== "number") {
			console.error("Invalid amount for formatting:", amount);
			return "0.00";
		}
		return amount.toFixed(2);
	};

	const getProductsSummary = () => {
		return paymentDetails.reduce((summary, detail) => {
			detail.selectedItems.forEach((item) => {
				summary[item.name] = (summary[item.name] || 0) + item.quantity;
			});
			return summary;
		}, {});
	};

	const calculateTotals = () => {
		const totalCash = paymentDetails
			.filter((p) => p.paymentType === "GOTÓWA")
			.reduce((total, p) => total + parseFloat(p.finalAmount || 0), 0);

		const totalCard = paymentDetails
			.filter((p) => p.paymentType === "KARTA")
			.reduce((total, p) => total + parseFloat(p.finalAmount || 0), 0);

		const totalSales = totalCash + totalCard;

		return {
			totalCash: formatCurrency(totalCash),
			totalCard: formatCurrency(totalCard),
			totalSales: formatCurrency(totalSales),
		};
	};

	const handleExportToPDF = () => {
		const doc = new jsPDF();
		const currentDate = new Date();
		const dateString = `${currentDate.getDate()}-${
			currentDate.getMonth() + 1
		}-${currentDate.getFullYear()}`;
		let yOffset = 10;
		const { totalCash, totalCard, totalSales } = calculateTotals();

		doc.setFontSize(12);
		doc.text("Panel Managera", 20, yOffset);
		yOffset += 15;

		doc.setFontSize(10);
		doc.text(`SALA UTARG: ${totalSales} PLN`, 20, yOffset);
		yOffset += 10;
		doc.text(`Łączna kwota gotówki: ${totalCash} PLN`, 20, yOffset);
		yOffset += 10;
		doc.text(`Łączna kwota kartą: ${totalCard} PLN`, 20, yOffset);
		yOffset += 10;

		doc.setFontSize(10);
		doc.text("Szczegóły płatności:", 20, yOffset);
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
					],
				],
				body: details.flatMap((detail) =>
					detail.selectedItems.map((item) => [
						tableName,
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
					])
				),
				theme: "striped",
				margin: { top: 10, bottom: 10 },
				styles: {
					fontSize: 6,
					cellPadding: 2,
					overflow: "linebreak",
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

		doc.setFontSize(10);
		doc.text("Podsumowanie produktów:", 20, yOffset);
		yOffset += 10;

		const productSummary = getProductsSummary();
		Object.entries(productSummary).forEach(([productName, quantity]) => {
			doc.text(`${productName}: ${quantity} szt.`, 20, yOffset);
			yOffset += 10;
		});

		doc.save(`panel_managera_${dateString}.pdf`);

		setShowSuccess(true);
		setTimeout(() => {
			setIsClosing(true);
			setTimeout(() => {
				localStorage.clear();
				setPaymentDetails([]);
				window.location.reload();
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

	return (
		<>
			{showSuccess && (
				<SuccessAnimation onClose={() => setShowSuccess(false)} />
			)}
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
							<strong>SALA UTARG:</strong> {calculateTotals().totalSales} PLN
						</div>
						<div className="info-item">
							<strong>Łączna kwota gotówki:</strong>{" "}
							{calculateTotals().totalCash} PLN
						</div>
						<div className="info-item">
							<strong>Łączna kwota kartą:</strong> {calculateTotals().totalCard}{" "}
							PLN
						</div>
						<div className="info-item">
							<strong>Szczegóły płatności:</strong>
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
																					{detail.discountAmount && (
																						<span>
																							, Zniżka:{" "}
																							{formatCurrency(
																								parseFloat(
																									detail.discountAmount || 0
																								)
																							)}{" "}
																							PLN
																						</span>
																					)}
																					{detail.serviceCharge > 0 && (
																						<span>
																							, Opłata serwisowa:{" "}
																							{formatCurrency(
																								parseFloat(
																									detail.serviceCharge || 0
																								)
																							)}{" "}
																							PLN
																						</span>
																					)}
																					{detail.addToBill > 0 && (
																						<span>
																							, Dodano do rachunku:{" "}
																							{formatCurrency(
																								parseFloat(
																									detail.addToBill || 0
																								)
																							)}{" "}
																							PLN
																						</span>
																					)}
																					{detail.subtractFromBill > 0 && (
																						<span>
																							, Odejmij od rachunku:{" "}
																							{formatCurrency(
																								parseFloat(
																									detail.subtractFromBill || 0
																								)
																							)}{" "}
																							PLN
																						</span>
																					)}
																					, Finalna kwota:{" "}
																					{formatCurrency(
																						parseFloat(
																							detail.adjustedTotalAmount || 0
																						)
																					)}{" "}
																					PLN
																				</li>
																			))}
																		</ul>
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

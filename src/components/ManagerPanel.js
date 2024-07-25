import React, { useEffect, useState } from "react";
import "./ManagerPanel.css";
import jsPDF from "jspdf";
import "jspdf-autotable";

const ManagerPanel = ({ onClose }) => {
	const [paymentDetails, setPaymentDetails] = useState([]);

	useEffect(() => {
		const storedPaymentDetails =
			JSON.parse(localStorage.getItem("paymentDetails")) || [];
		setPaymentDetails(storedPaymentDetails);
	}, []);

	const formatCurrency = (amount) => {
		return amount.toFixed(2);
	};

	const getProductsSummary = () => {
		const productSummary = {};
		paymentDetails.forEach((detail) => {
			detail.selectedItems.forEach((item) => {
				if (!productSummary[item.name]) {
					productSummary[item.name] = 0;
				}
				productSummary[item.name] += item.quantity;
			});
		});
		return productSummary;
	};

	const totalCash = formatCurrency(
		paymentDetails
			.filter((p) => p.paymentType === "GOTÓWA")
			.reduce((total, p) => total + p.finalAmount, 0)
	);
	const totalCard = formatCurrency(
		paymentDetails
			.filter((p) => p.paymentType === "KARTA")
			.reduce((total, p) => total + p.finalAmount, 0)
	);

	const totalSales = formatCurrency(
		parseFloat(totalCash) + parseFloat(totalCard)
	);

	const handleExportToPDF = () => {
		const doc = new jsPDF();
		const currentDate = new Date();
		const dateString = `${currentDate.getDate()}-${
			currentDate.getMonth() + 1
		}-${currentDate.getFullYear()}`;
		let yOffset = 10;

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
			if (!acc[detail.tableName]) {
				acc[detail.tableName] = [];
			}
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
						formatCurrency(detail.totalAmount),
						detail.paymentType,
						item.name,
						item.quantity,
						formatCurrency(item.price * item.quantity),
						detail.discountAmount ? formatCurrency(detail.discountAmount) : "-",
						detail.serviceCharge ? formatCurrency(detail.serviceCharge) : "-",
						detail.addToBill ? formatCurrency(detail.addToBill) : "-",
						detail.subtractFromBill
							? formatCurrency(detail.subtractFromBill)
							: "-",
						formatCurrency(detail.finalAmount),
					])
				),
				theme: "striped",
				margin: { top: 10, bottom: 10 },
				styles: {
					fontSize: 6, // Mniejsza czcionka
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
					1: {
						cellWidth: "auto",
						cellPadding: 2,
						lineWidth: 0.75,
						lineColor: [0, 0, 0],
					},
					2: {
						cellWidth: "auto",
						cellPadding: 2,
						lineWidth: 0.75,
						lineColor: [0, 0, 0],
					},
					3: {
						cellWidth: "auto",
						minCellWidth: 30,
						cellPadding: 2,
						lineWidth: 0.75,
						lineColor: [0, 0, 0],
					},
					4: {
						cellWidth: "auto",
						cellPadding: 2,
						lineWidth: 0.75,
						lineColor: [0, 0, 0],
					},
					5: {
						cellWidth: "auto",
						cellPadding: 2,
						lineWidth: 0.75,
						lineColor: [0, 0, 0],
					},
					6: {
						cellWidth: "auto",
						cellPadding: 2,
						lineWidth: 0.75,
						lineColor: [0, 0, 0],
					},
					7: {
						cellWidth: "auto",
						cellPadding: 2,
						lineWidth: 0.75,
						lineColor: [0, 0, 0],
					},
					8: {
						cellWidth: "auto",
						cellPadding: 2,
						lineWidth: 0.75,
						lineColor: [0, 0, 0],
					},
					9: {
						cellWidth: "auto",
						cellPadding: 2,
						lineWidth: 0.75,
						lineColor: [0, 0, 0],
					},
					10: {
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

		localStorage.clear();
		setPaymentDetails([]);
	};

	return (
		<div className="manager-panel">
			<button className="close-button" onClick={onClose}>
				X
			</button>
			<h2>Panel Managera</h2>
			<div className="manager-info">
				<div className="info-item">
					<strong>SALA UTARG:</strong> {totalSales} PLN
				</div>
				<div className="info-item">
					<strong>Łączna kwota gotówki:</strong> {totalCash} PLN
				</div>
				<div className="info-item">
					<strong>Łączna kwota kartą:</strong> {totalCard} PLN
				</div>
				<div className="info-item">
					<strong>Szczegóły płatności:</strong>
					<ul>
						{paymentDetails.map((detail) => (
							<li key={detail.tableName + detail.paymentType}>
								Stolik: {detail.tableName}, Kwota:{" "}
								{formatCurrency(detail.totalAmount)} PLN, Płatność:{" "}
								{detail.paymentType}
								{detail.selectedItems && detail.selectedItems.length > 0 && (
									<ul>
										{detail.selectedItems.map((item) => (
											<li key={item.id}>
												Produkt: {item.name}, Ilość: {item.quantity}, Cena:{" "}
												{formatCurrency(item.price * item.quantity)} PLN
												{detail.discountAmount && (
													<span>
														, Zniżka: {formatCurrency(detail.discountAmount)}{" "}
														PLN
													</span>
												)}
												{detail.serviceCharge > 0 && (
													<span>
														, Opłata serwisowa:{" "}
														{formatCurrency(detail.serviceCharge)} PLN
													</span>
												)}
												{detail.addToBill > 0 && (
													<span>
														, Dodano do rachunku:{" "}
														{formatCurrency(detail.addToBill)} PLN
													</span>
												)}
												{detail.subtractFromBill > 0 && (
													<span>
														, Odejmij od rachunku:{" "}
														{formatCurrency(detail.subtractFromBill)} PLN
													</span>
												)}
												, Finalna kwota: {formatCurrency(detail.finalAmount)}{" "}
												PLN
											</li>
										))}
									</ul>
								)}
							</li>
						))}
					</ul>
					<strong>Podsumowanie produktów:</strong>
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
			</div>

			<button className="export-button" onClick={handleExportToPDF}>
				Zamknij dzień i pobierz PDF
			</button>
		</div>
	);
};

export default ManagerPanel;
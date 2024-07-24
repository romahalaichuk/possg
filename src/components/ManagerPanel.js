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
			.reduce((total, p) => total + p.totalAmount, 0)
	);
	const totalCard = formatCurrency(
		paymentDetails
			.filter((p) => p.paymentType === "KARTA")
			.reduce((total, p) => total + p.totalAmount, 0)
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
		doc.text(`Razem gotówki z sali: ${totalCash} PLN`, 20, yOffset);
		yOffset += 10;
		doc.text(`Razem kart z sali: ${totalCard} PLN`, 20, yOffset);
		yOffset += 15;

		// Grupowanie płatności według stolików
		const tablesData = paymentDetails.reduce((acc, detail) => {
			if (!acc[detail.tableName]) {
				acc[detail.tableName] = [];
			}
			acc[detail.tableName].push(detail);
			return acc;
		}, {});

		// Iterowanie przez stoliki i dodawanie ich do PDF
		Object.keys(tablesData).forEach((tableName) => {
			const details = tablesData[tableName];

			if (yOffset > 260) {
				doc.addPage();
				yOffset = 10;
			}

			// Tabela dla każdego stolika
			doc.autoTable({
				startY: yOffset,
				head: [
					["Stolik", "Kwota", "Płatność", "Produkt", "Ilość", "Cena", "Zniżka"],
				],
				body: details.flatMap((detail) =>
					detail.selectedItems.map((item) => [
						tableName,
						formatCurrency(detail.totalAmount),
						detail.paymentType,
						item.name,
						item.quantity,
						formatCurrency(item.price * item.quantity),
						detail.discount ? formatCurrency(detail.discount) : "Brak",
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
					0: { cellWidth: "auto" },
					1: { cellWidth: "auto" },
					2: { cellWidth: "auto" },
					3: { cellWidth: "auto", minCellWidth: 30 },
					4: { cellWidth: "auto" },
					5: { cellWidth: "auto" },
					6: { cellWidth: "auto" },
				},
				tableLineColor: [0, 0, 0],
				tableLineWidth: 0.75,
			});

			yOffset = doc.lastAutoTable.finalY + 10;

			// Dodanie linii oddzielającej sekcje
			doc.line(20, yOffset - 5, 190, yOffset - 5);

			yOffset += 15; // Przerwa między stolikami
		});

		// Dodanie sekcji z podsumowaniem produktów
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
							<li key={detail.id}>
								Stolik: {detail.tableName}, Kwota:{" "}
								{formatCurrency(detail.totalAmount)} PLN, Płatność:{" "}
								{detail.paymentType}
								{detail.selectedItems && detail.selectedItems.length > 0 && (
									<ul>
										{detail.selectedItems.map((item) => (
											<li key={item.id}>
												Produkt: {item.name}, Ilość: {item.quantity}, Cena:{" "}
												{formatCurrency(item.price * item.quantity)} PLN
												{detail.discount && (
													<span>
														, Zniżka: {formatCurrency(detail.discount)} PLN
													</span>
												)}
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

import React, { useEffect, useState } from "react";
import "./ManagerPanel.css";
import jsPDF from "jspdf";
import "jspdf-autotable";

const ManagerPanel = ({ onClose }) => {
	const [tables, setTables] = useState([]);
	const [wynosTables, setWynosTables] = useState([]);
	const [paymentDetails, setPaymentDetails] = useState([]);

	useEffect(() => {
		const storedTables = JSON.parse(localStorage.getItem("tables")) || [];
		const storedWynosTables =
			JSON.parse(localStorage.getItem("wynosTables")) || [];
		const storedPaymentDetails =
			JSON.parse(localStorage.getItem("paymentDetails")) || [];

		setTables(storedTables);
		setWynosTables(storedWynosTables);
		setPaymentDetails(storedPaymentDetails);
	}, []);

	const formatCurrency = (amount) => {
		return amount.toFixed(2);
	};

	const calculateTotalAmount = (tables, wynosTables) => {
		const tableTotal = tables.reduce((total, table) => {
			return (
				total +
				table.products.reduce(
					(sum, product) => sum + product.price * product.quantity,
					0
				)
			);
		}, 0);

		const wynosTotal = wynosTables.reduce((total, table) => {
			return (
				total +
				table.products.reduce(
					(sum, product) => sum + product.price * product.quantity,
					0
				)
			);
		}, 0);

		return tableTotal + wynosTotal;
	};

	const totalAmount = formatCurrency(calculateTotalAmount(tables, wynosTables));
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
		doc.text(`Razem gotówki z salo: ${totalCash} PLN`, 20, yOffset);
		yOffset += 10;
		doc.text(`Razem kart z sali: ${totalCard} PLN`, 20, yOffset);
		yOffset += 15;

		// Dodanie tabeli z szczegółami płatności
		doc.autoTable({
			startY: yOffset,
			head: [["Stolik", "Kwota", "Płatność"]],
			body: paymentDetails.map((detail) => [
				detail.tableName,
				`${formatCurrency(detail.totalAmount)} PLN`,
				detail.paymentType,
			]),
			theme: "striped",
			headStyles: { fillColor: [255, 0, 0] }, // Kolor nagłówka tabeli
			margin: { top: 20 },
			pageBreak: "auto",
			styles: { fontSize: 8 },
		});

		let finalY = doc.autoTable.previous.finalY;
		if (finalY > 260) {
			doc.addPage();
			finalY = 10;
		}

		paymentDetails.forEach((detail) => {
			if (finalY > 260) {
				doc.addPage();
				finalY = 10;
			}
			doc.text(
				`Stolik: ${detail.tableName}, Kwota: ${formatCurrency(
					detail.totalAmount
				)} PLN, Płatność: ${detail.paymentType}`,
				20,
				finalY
			);
			finalY += 10;

			if (detail.selectedItems && detail.selectedItems.length > 0) {
				detail.selectedItems.forEach((item) => {
					doc.text(
						`Produkt: ${item.name}, Ilość: ${
							item.quantity
						}, Cena: ${formatCurrency(item.price * item.quantity)} PLN`,
						20,
						finalY
					);
					finalY += 10;
				});
			}
			finalY += 10;
		});

		doc.save(`panel_managera_${dateString}.pdf`);

		localStorage.clear();
		setTables([]);
		setWynosTables([]);
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
											</li>
										))}
									</ul>
								)}
							</li>
						))}
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

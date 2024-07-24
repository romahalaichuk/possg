import React, { useEffect, useState } from "react";
import "./ManagerPanel.css";
import jsPDF from "jspdf";

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

	const totalAmount = calculateTotalAmount(tables, wynosTables);
	const totalCash = paymentDetails
		.filter((p) => p.paymentType === "cash")
		.reduce((total, p) => total + p.totalAmount, 0);
	const totalCard = paymentDetails
		.filter((p) => p.paymentType === "card")
		.reduce((total, p) => total + p.totalAmount, 0);

	// Oblicz całkowity utarg jako sumę gotówki i kartą
	const totalSales = totalCash + totalCard;

	const handleExportToPDF = () => {
		const doc = new jsPDF();
		const currentDate = new Date();
		const dateString = `${currentDate.getDate()}-${
			currentDate.getMonth() + 1
		}-${currentDate.getFullYear()}`;
		let yOffset = 10;

		doc.text("Panel Managera", 20, yOffset);
		yOffset += 10;
		doc.text(`Łączna kwota: ${totalAmount} PLN`, 20, yOffset);
		yOffset += 10;
		doc.text(`Łączna kwota gotówki: ${totalCash} PLN`, 20, yOffset);
		yOffset += 10;
		doc.text(`Łączna kwota kartą: ${totalCard} PLN`, 20, yOffset);
		yOffset += 10;

		// Dodaj informację o sali utarg
		doc.text(`SALA UTARG: ${totalSales} PLN`, 20, yOffset);
		yOffset += 10;

		paymentDetails.forEach((detail) => {
			if (yOffset > 260) {
				doc.addPage();
				yOffset = 10;
			}
			doc.text(
				`Stolik: ${detail.tableName}, Kwota: ${detail.totalAmount} PLN, Płatność: ${detail.paymentType}`,
				20,
				yOffset
			);
			yOffset += 10;

			if (detail.selectedItems && detail.selectedItems.length > 0) {
				detail.selectedItems.forEach((item) => {
					doc.text(
						`Produkt: ${item.name}, Ilość: ${item.quantity}, Cena: ${
							item.price * item.quantity
						} PLN`,
						20,
						yOffset
					);
					yOffset += 10;
				});
			}
			yOffset += 10;
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
						{paymentDetails.map((detail, index) => (
							<li key={index}>
								Stolik: {detail.tableName}, Kwota: {detail.totalAmount} PLN,
								Płatność: {detail.paymentType}
								{detail.selectedItems && detail.selectedItems.length > 0 && (
									<ul>
										{detail.selectedItems.map((item) => (
											<li key={item.id}>
												Produkt: {item.name}, Ilość: {item.quantity}, Cena:{" "}
												{item.price * item.quantity} PLN
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

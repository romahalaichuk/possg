import React, { useEffect, useState } from "react";
import "./ManagerPanel.css";
import jsPDF from "jspdf";
import { getTableDetails } from "./LocalStorageManager";

const ManagerPanel = ({ onClose }) => {
	const [tables, setTables] = useState([]);
	const [wynosTables, setWynosTables] = useState([]);
	const [paymentDetails, setPaymentDetails] = useState({ cash: 0, card: 0 });

	useEffect(() => {
		const loadData = async () => {
			try {
				const storedTables =
					JSON.parse(localStorage.getItem("servedTables")) || [];
				const storedWynosTables =
					JSON.parse(localStorage.getItem("servedWynosTables")) || [];
				const storedPaymentDetails = JSON.parse(
					localStorage.getItem("paymentDetails")
				) || { cash: 0, card: 0 };

				const tableDetails = await Promise.all(
					storedTables.map((tableName) => getTableDetails(tableName))
				);
				const wynosDetails = await Promise.all(
					storedWynosTables.map((tableName) => getTableDetails(tableName))
				);

				setTables(tableDetails);
				setWynosTables(wynosDetails);
				setPaymentDetails(storedPaymentDetails);
			} catch (error) {
				console.error("Error loading data from local storage:", error);
			}
		};

		loadData();
	}, []);

	const calculateTotalTablesDuringDay = tables.length;
	const calculateTotalWynos = wynosTables.length;
	const calculateTotalAmount = (tables, wynosTables) => {
		const tableTotal = tables.reduce(
			(sum, table) => sum + table.totalAmount,
			0
		);
		const wynosTotal = wynosTables.reduce(
			(sum, table) => sum + table.totalAmount,
			0
		);
		return tableTotal + wynosTotal;
	};

	const totalAmount = calculateTotalAmount(tables, wynosTables);

	const handleExportToPDF = () => {
		const doc = new jsPDF();
		const currentDate = new Date();
		const dateString = `${currentDate.getDate()}-${
			currentDate.getMonth() + 1
		}-${currentDate.getFullYear()}`;
		let yOffset = 10;

		doc.text("Panel Managera", 20, yOffset);
		yOffset += 10;
		doc.text(
			`Łączna liczba stolików (w ciągu dnia): ${calculateTotalTablesDuringDay}`,
			20,
			yOffset
		);
		yOffset += 10;
		doc.text(`Łączna liczba wynosów: ${calculateTotalWynos}`, 20, yOffset);
		yOffset += 10;
		doc.text(`Łączna kwota: ${totalAmount} PLN`, 20, yOffset);
		yOffset += 10;
		doc.text(`Łączna kwota gotówki: ${paymentDetails.cash} PLN`, 20, yOffset);
		yOffset += 10;
		doc.text(`Łączna kwota kartą: ${paymentDetails.card} PLN`, 20, yOffset);
		yOffset += 10;

		const addTableDetails = (tableList, type) => {
			tableList.forEach((table, index) => {
				if (yOffset > 260) {
					// Check if yOffset exceeds page height
					doc.addPage();
					yOffset = 10;
				}
				doc.text(
					`${type}: ${table.name}, Produkty: ${table.products
						.map((p) => `${p.name} (${p.quantity} x ${p.price} PLN)`)
						.join(", ")}, Zniżka: ${table.discount}, Kwota: ${
						table.totalAmount
					} PLN, Płatność: ${table.paymentMethod}`,
					20,
					yOffset
				);
				yOffset += 10;
			});
		};

		addTableDetails(tables, "Stolik");
		addTableDetails(wynosTables, "Wynos");

		doc.save(`panel_managera_${dateString}.pdf`);

		localStorage.removeItem("servedTables");
		localStorage.removeItem("servedWynosTables");
		localStorage.removeItem("paymentDetails");
		setTables([]);
		setWynosTables([]);
		setPaymentDetails({ cash: 0, card: 0 });
	};

	return (
		<div className="manager-panel">
			<button className="close-button" onClick={onClose}>
				X
			</button>
			<h2>Panel Managera</h2>
			<div className="manager-info">
				<div className="info-item">
					<strong>Łączna liczba stolików (w ciągu dnia):</strong>{" "}
					{calculateTotalTablesDuringDay}
				</div>
				<div className="info-item">
					<strong>Łączna liczba wynosów:</strong> {calculateTotalWynos}
				</div>
				<div className="info-item">
					<strong>Łączna kwota:</strong> {totalAmount} PLN
				</div>
				<div className="info-item">
					<strong>Łączna kwota gotówki:</strong> {paymentDetails.cash} PLN
				</div>
				<div className="info-item">
					<strong>Łączna kwota kartą:</strong> {paymentDetails.card} PLN
				</div>
				<div className="info-item">
					<strong>Szczegóły stolików i wynosów:</strong>
					<ul>
						{tables.map((table, index) => (
							<li key={index}>
								Stolik: {table.name}, Produkty:{" "}
								{table.products
									.map((p) => `${p.name} (${p.quantity} x ${p.price} PLN)`)
									.join(", ")}
								, Zniżka: {table.discount}, Kwota: {table.totalAmount} PLN,
								Płatność: {table.paymentMethod}
							</li>
						))}
						{wynosTables.map((table, index) => (
							<li key={index + tables.length}>
								Wynos: {table.name}, Produkty:{" "}
								{table.products
									.map((p) => `${p.name} (${p.quantity} x ${p.price} PLN)`)
									.join(", ")}
								, Zniżka: {table.discount}, Kwota: {table.totalAmount} PLN,
								Płatność: {table.paymentMethod}
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

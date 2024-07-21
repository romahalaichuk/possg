import React, { useEffect, useState } from "react";
import "./ManagerPanel.css";
import jsPDF from "jspdf";
import {
	getTableDetails,
	calculateTotalTablesDuringDay,
	calculateTotalWynos,
	calculateTotalAmount,
} from "./LocalStorageManager";

const ManagerPanel = ({ onClose }) => {
	const [tables, setTables] = useState([]);
	const [wynosTables, setWynosTables] = useState([]);

	useEffect(() => {
		const loadData = async () => {
			try {
				const storedTables =
					JSON.parse(localStorage.getItem("servedTables")) || [];
				const storedWynosTables =
					JSON.parse(localStorage.getItem("servedWynosTables")) || [];

				console.log("Stored Tables:", storedTables);
				console.log("Stored Wynos Tables:", storedWynosTables);

				const tableDetails = storedTables.map((tableName) =>
					getTableDetails(tableName)
				);
				const wynosDetails = storedWynosTables.map((tableName) =>
					getTableDetails(tableName)
				);

				console.log("Table Details:", tableDetails);
				console.log("Wynos Details:", wynosDetails);

				setTables(tableDetails);
				setWynosTables(wynosDetails);
			} catch (error) {
				console.error("Error loading data from local storage:", error);
			}
		};

		loadData();
	}, []);

	const totalTablesDuringDay = calculateTotalTablesDuringDay(tables);
	const totalWynos = calculateTotalWynos(wynosTables);
	const totalAmount = calculateTotalAmount(tables, wynosTables);

	const handleExportToPDF = () => {
		const doc = new jsPDF();
		const currentDate = new Date();
		const dateString = `${currentDate.getDate()}-${
			currentDate.getMonth() + 1
		}-${currentDate.getFullYear()}`;

		doc.text("Panel Managera", 20, 10);
		doc.text(
			`Łączna liczba stolików (w ciągu dnia): ${totalTablesDuringDay}`,
			20,
			20
		);
		doc.text(`Łączna liczba wynosów: ${totalWynos}`, 20, 30);
		doc.text(`Łączna kwota: ${totalAmount} PLN`, 20, 40);

		let yOffset = 50;

		tables.forEach((table) => {
			doc.text(
				`Stolik: ${table.name}, Produkty: ${table.products
					.map((p) => `${p.name} (${p.quantity} x ${p.price} PLN)`)
					.join(", ")}, Zniżka: ${table.discount}, Kwota: ${
					table.totalAmount
				} PLN, Płatność: ${table.paymentMethod}`,
				20,
				yOffset
			);
			yOffset += 10;
		});

		wynosTables.forEach((table) => {
			doc.text(
				`Wynos: ${table.name}, Produkty: ${table.products
					.map((p) => `${p.name} (${p.quantity} x ${p.price} PLN)`)
					.join(", ")}, Zniżka: ${table.discount}, Kwota: ${
					table.totalAmount
				} PLN, Płatność: ${table.paymentMethod}`,
				20,
				yOffset
			);
			yOffset += 10;
		});

		doc.save(`panel_managera_${dateString}.pdf`);

		localStorage.removeItem("servedTables");
		localStorage.removeItem("servedWynosTables");
		window.location.reload();
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
					{totalTablesDuringDay}
				</div>
				<div className="info-item">
					<strong>Łączna liczba wynosów:</strong> {totalWynos}
				</div>
				<div className="info-item">
					<strong>Łączna kwota:</strong> {totalAmount} PLN
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

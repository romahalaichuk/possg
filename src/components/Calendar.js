// components/Calendar.js
import React, { useState, useEffect } from "react";
import "./Calendar.css"; // Możesz dodać własne style

const Calendar = () => {
	const [reservations, setReservations] = useState({});
	const [selectedDate, setSelectedDate] = useState(new Date());
	const [time, setTime] = useState("");
	const [comment, setComment] = useState("");

	useEffect(() => {
		const storedReservations = JSON.parse(localStorage.getItem("reservations"));
		if (storedReservations) {
			setReservations(storedReservations);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("reservations", JSON.stringify(reservations));
	}, [reservations]);

	const addReservation = () => {
		const dateKey = selectedDate.toISOString().split("T")[0]; // Klucz w formacie YYYY-MM-DD
		const newReservation = { time, comment };

		setReservations((prev) => ({
			...prev,
			[dateKey]: prev[dateKey]
				? [...prev[dateKey], newReservation]
				: [newReservation],
		}));

		setTime("");
		setComment("");
	};

	const removeReservation = (dateKey, index) => {
		setReservations((prev) => {
			const updatedReservations = [...prev[dateKey]];
			updatedReservations.splice(index, 1); // Usuwanie rezerwacji
			return {
				...prev,
				[dateKey]: updatedReservations.length ? updatedReservations : undefined,
			};
		});
	};

	const isReservationSoon = (date) => {
		const today = new Date();
		const diffTime = Math.abs(date - today);
		const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
		return diffDays < 3; // Oznacz dni, które są w ciągu 3 dni
	};

	const renderCalendar = () => {
		const startDate = new Date(
			selectedDate.getFullYear(),
			selectedDate.getMonth(),
			1
		);
		const endDate = new Date(
			selectedDate.getFullYear(),
			selectedDate.getMonth() + 1,
			0
		);
		const days = [];

		for (let i = startDate.getDate(); i <= endDate.getDate(); i++) {
			const currentDate = new Date(
				selectedDate.getFullYear(),
				selectedDate.getMonth(),
				i
			);
			const dateKey = currentDate.toISOString().split("T")[0];
			const reservationsForDay = reservations[dateKey] || [];
			const isSoon = isReservationSoon(currentDate);

			days.push(
				<div
					key={i}
					className={`calendar-day ${
						reservationsForDay.length > 0 ? "has-reservation" : ""
					} ${isSoon ? "soon" : ""}`}
					onClick={() => setSelectedDate(currentDate)}>
					<div>{i}</div>
					{reservationsForDay.map((res, index) => (
						<div
							key={index}
							className="reservation"
							onClick={(e) => {
								e.stopPropagation();
								removeReservation(dateKey, index);
							}}>
							<span className="reservation-time">{res.time} - </span>
							<span className="reservation-comment">{res.comment}</span>
							<span className="remove-button">❌</span>{" "}
							{/* Przycisk do usunięcia */}
						</div>
					))}
				</div>
			);
		}
		return days;
	};

	return (
		<div className="calendar">
			<h2>
				{selectedDate.toLocaleString("pl-PL", {
					month: "long",
					year: "numeric",
				})}
			</h2>
			<div className="calendar-grid">{renderCalendar()}</div>
			<div className="reservation-form">
				<input
					type="time"
					value={time}
					onChange={(e) => setTime(e.target.value)}
					required
				/>
				<input
					type="text"
					placeholder="Komentarz"
					value={comment}
					onChange={(e) => setComment(e.target.value)}
					required
				/>
				<button onClick={addReservation}>Dodaj rezerwację</button>
			</div>
		</div>
	);
};

export default Calendar;

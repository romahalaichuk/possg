import React, { useEffect, useState } from "react";
import "./SuccessAnimation.css";

const generateRandomCoordinates = () => {
	const angle = Math.random() * 2 * Math.PI;
	const radius = Math.random() * 1100;
	const x = Math.cos(angle) * radius;
	const y = Math.sin(angle) * radius;
	return { x, y };
};

const SuccessAnimation = ({ onClose }) => {
	const [showWarning, setShowWarning] = useState(false);

	useEffect(() => {
		const smallImages = document.querySelectorAll(".small-image");
		smallImages.forEach((image) => {
			const { x, y } = generateRandomCoordinates();
			image.style.setProperty("--random-x", `${x}px`);
			image.style.setProperty("--random-y", `${y}px`);
			image.style.animationDelay = "2s";
		});

		const animationTimeout = setTimeout(() => {
			setShowWarning(true);
		}, 7000); // 4 seconds for the animation

		return () => clearTimeout(animationTimeout);
	}, []);

	const handleWarningClose = () => {
		onClose();
	};

	return (
		<div className="success-overlay">
			{!showWarning ? (
				<div className="success-content">
					<div className="initial-container">
						<div className="initial-image"></div>
						<p className="paa-text">PAA!!</p>
					</div>
					{Array.from({ length: 350 }).map((_, index) => (
						<div key={index} className="small-image"></div>
					))}
					<div className="final-container">
						<div className="final-image-container">
							<div className="final-image"></div>
							<p className="thanks-text">Dzięki za dziś :)</p>
						</div>
					</div>
				</div>
			) : (
				<div className="warning-overlay">
					<div className="warning-content">
						<div className="warning-icon"></div>
						<h2 className="warning-text">Ostrzeżenie</h2>
						<p className="warning-text">Czy klimatyzacja wyłączona?</p>
						<p className="warning-text">Czy piec wyłączony?</p>
						<p className="warning-text">Czy Wyspa zamknięta?</p>
						<p className="warning-text">Czy świeczki zgaszone?</p>
						<button className="buttonss" onClick={handleWarningClose}>
							TAK
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default SuccessAnimation;

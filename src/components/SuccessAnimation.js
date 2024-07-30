import React, { useEffect } from "react";
import "./SuccessAnimation.css";

const generateRandomCoordinates = () => {
	const angle = Math.random() * 2 * Math.PI;
	const radius = Math.random() * 1100;
	const x = Math.cos(angle) * radius;
	const y = Math.sin(angle) * radius;
	return { x, y };
};

const SuccessAnimation = ({ onClose }) => {
	useEffect(() => {
		const smallImages = document.querySelectorAll(".small-image");
		smallImages.forEach((image) => {
			const { x, y } = generateRandomCoordinates();
			image.style.setProperty("--random-x", `${x}px`);
			image.style.setProperty("--random-y", `${y}px`);
			image.style.animationDelay = "2s";
		});
	}, []);

	return (
		<div className="success-overlay">
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
		</div>
	);
};

export default SuccessAnimation;

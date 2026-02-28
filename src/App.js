import React, { useState, useEffect, useRef } from "react";
import TableManager from "./components/TableManager";
import Music from "../src/Music"; // Dodaj ten import
import "./App.css";

const videoUrls = [
	"https://www.youtube.com/embed/ZGnLVjkBEls?autoplay=1&mute=1",
	"https://www.youtube.com/embed/Btt_7wLpwxM?autoplay=1&mute=1",
	"https://www.youtube.com/embed/oe5GPi_C7Go?autoplay=1&mute=1",
	"https://www.youtube.com/embed/KY4Yd5QR570?autoplay=1&mute=1",
	"https://www.youtube.com/embed/o1eTLR7Degs?autoplay=1&mute=1",
	"https://www.youtube.com/embed/2wqpy036z24?autoplay=1&mute=1",
	"https://www.youtube.com/embed/VR-x3HdhKLQ?autoplay=1&mute=1",
];
const ButterflyCanvas = () => {
	const canvasRef = useRef(null);
	const mouseRef = useRef({ x: -1000, y: -1000 }); // poza ekranem na start

	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		const butterflies = [];

		// Śledzenie myszki
		const handleMouseMove = (e) => {
			mouseRef.current = { x: e.clientX, y: e.clientY };
		};
		window.addEventListener("mousemove", handleMouseMove);

		const wingPatterns = [
			{ main: "#ff6b6b", secondary: "#ffd93d", spots: "#fff" },
			{ main: "#4ecdc4", secondary: "#44a3a3", spots: "#fff" },
			{ main: "#ffe66d", secondary: "#ff8b94", spots: "#333" },
			{ main: "#a8e6cf", secondary: "#7fcdcd", spots: "#fff" },
			{ main: "#ff8b94", secondary: "#ff6b6b", spots: "#fff" },
			{ main: "#c7ceea", secondary: "#a8a8e6", spots: "#fff" },
			{ main: "#ffd93d", secondary: "#ff8b94", spots: "#333" },
		];

		class Butterfly {
			constructor() {
				this.reset();
			}

			reset() {
				this.x = Math.random() * canvas.width;
				this.y = canvas.height + 100;
				// WIĘKSZE motyle (było 12-18, teraz 25-45)
				this.size = 25 + Math.random() * 20;
				this.baseSpeedY = 0.8 + Math.random() * 1.2;
				this.speedY = this.baseSpeedY;
				this.speedX = (Math.random() - 0.5) * 1;
				this.pattern =
					wingPatterns[Math.floor(Math.random() * wingPatterns.length)];
				this.wingAngle = Math.random() * Math.PI * 2;
				this.wingSpeed = 0.15 + Math.random() * 0.25;
				this.opacity = 0;
				this.rotation = (Math.random() - 0.5) * 0.3;
				this.time = Math.random() * 1000;
				// Parametry ucieczki
				this.fleeSpeed = 0;
				this.fleeAngle = 0;
				this.isFleeing = false;
			}

			update() {
				this.time += 1;

				// Odległość od myszki
				const dx = this.x - mouseRef.current.x;
				const dy = this.y - mouseRef.current.y;
				const distance = Math.sqrt(dx * dx + dy * dy);

				// Jeśli myszka blisko (150px), uciekaj!
				if (distance < 150 && distance > 0) {
					this.isFleeing = true;
					// Kierunek ucieczki - odwrotny do myszki
					this.fleeAngle = Math.atan2(dy, dx);
					this.fleeSpeed = Math.min((150 - distance) / 10, 8); // max prędkość ucieczki

					// Szybsze machanie podczas ucieczki
					this.wingSpeed = 0.4;
				} else {
					this.isFleeing = false;
					this.fleeSpeed *= 0.95; // zwalniaj po ucieczce
					this.wingSpeed = 0.15 + Math.random() * 0.25;
				}

				// Normalny ruch + ucieczka
				if (this.fleeSpeed > 0.1) {
					this.x += Math.cos(this.fleeAngle) * this.fleeSpeed;
					this.y += Math.sin(this.fleeAngle) * this.fleeSpeed;
					this.rotation = this.fleeAngle + Math.PI / 2;
				} else {
					// Normalny ruch
					this.y -= this.baseSpeedY;
					this.x += Math.sin(this.time * 0.02) * 1.5 + this.speedX;
					this.rotation = Math.sin(this.time * 0.01) * 0.2;
				}

				// Nie wylatuj poza ekran bocznie
				if (this.x < -50) this.x = canvas.width + 50;
				if (this.x > canvas.width + 50) this.x = -50;

				this.wingAngle += this.wingSpeed;

				// Fade in
				if (this.opacity < 0.9) {
					this.opacity += 0.01;
				}

				// Reset gdy wyjdzie poza górę
				if (this.y < -150) {
					this.reset();
				}
			}

			drawRealisticWing(ctx, isRight, isUpper) {
				const scale = isRight ? 1 : -1;
				const wingScale = Math.abs(Math.sin(this.wingAngle));

				ctx.save();
				ctx.scale(scale * wingScale, 1);

				const size = this.size;

				if (isUpper) {
					ctx.beginPath();
					ctx.moveTo(0, 0);
					ctx.bezierCurveTo(
						size * 0.3,
						-size * 0.8,
						size * 0.8,
						-size * 1.2,
						size * 1.3,
						-size * 0.6,
					);
					ctx.bezierCurveTo(
						size * 1.5,
						-size * 0.2,
						size * 1.4,
						size * 0.3,
						size * 0.8,
						size * 0.2,
					);
					ctx.bezierCurveTo(
						size * 0.4,
						size * 0.3,
						size * 0.2,
						size * 0.1,
						0,
						0,
					);

					const gradient = ctx.createRadialGradient(
						0,
						-size * 0.3,
						0,
						0,
						-size * 0.3,
						size,
					);
					gradient.addColorStop(0, this.pattern.main);
					gradient.addColorStop(0.6, this.pattern.secondary);
					gradient.addColorStop(1, this.pattern.main);

					ctx.fillStyle = gradient;
					ctx.fill();

					ctx.strokeStyle = "rgba(0,0,0,0.3)";
					ctx.lineWidth = 0.5;
					ctx.stroke();

					ctx.strokeStyle = "rgba(0,0,0,0.2)";
					ctx.lineWidth = 0.3;
					ctx.beginPath();
					ctx.moveTo(0, 0);
					ctx.quadraticCurveTo(
						size * 0.5,
						-size * 0.4,
						size * 0.9,
						-size * 0.3,
					);
					ctx.moveTo(0, 0);
					ctx.quadraticCurveTo(
						size * 0.4,
						-size * 0.6,
						size * 0.7,
						-size * 0.8,
					);
					ctx.stroke();

					ctx.fillStyle = this.pattern.spots;
					ctx.beginPath();
					ctx.arc(size * 0.9, -size * 0.4, size * 0.12, 0, Math.PI * 2);
					ctx.arc(size * 0.6, -size * 0.7, size * 0.08, 0, Math.PI * 2);
					ctx.fill();
				} else {
					ctx.beginPath();
					ctx.moveTo(0, 0);
					ctx.bezierCurveTo(
						size * 0.2,
						size * 0.5,
						size * 0.6,
						size * 1.0,
						size * 0.3,
						size * 1.3,
					);
					ctx.bezierCurveTo(
						size * 0.1,
						size * 1.4,
						-size * 0.1,
						size * 1.0,
						0,
						size * 0.8,
					);
					ctx.bezierCurveTo(
						size * 0.1,
						size * 0.5,
						size * 0.05,
						size * 0.3,
						0,
						0,
					);

					const gradient = ctx.createRadialGradient(
						0,
						size * 0.6,
						0,
						0,
						size * 0.6,
						size * 0.8,
					);
					gradient.addColorStop(0, this.pattern.secondary);
					gradient.addColorStop(0.7, this.pattern.main);
					gradient.addColorStop(1, this.pattern.secondary);

					ctx.fillStyle = gradient;
					ctx.fill();

					ctx.strokeStyle = "rgba(0,0,0,0.3)";
					ctx.lineWidth = 0.5;
					ctx.stroke();

					ctx.fillStyle = this.pattern.spots;
					ctx.beginPath();
					ctx.arc(size * 0.25, size * 0.9, size * 0.1, 0, Math.PI * 2);
					ctx.fill();
				}

				ctx.restore();
			}

			draw() {
				ctx.save();
				ctx.globalAlpha = this.opacity;
				ctx.translate(this.x, this.y);
				ctx.rotate(this.rotation);

				// Cień pod motylem (większy)
				ctx.fillStyle = "rgba(0,0,0,0.1)";
				ctx.beginPath();
				ctx.ellipse(
					0,
					this.size * 0.5,
					this.size * 0.8,
					this.size * 0.3,
					0,
					0,
					Math.PI * 2,
				);
				ctx.fill();

				this.drawRealisticWing(ctx, false, false);
				this.drawRealisticWing(ctx, true, false);
				this.drawRealisticWing(ctx, false, true);
				this.drawRealisticWing(ctx, true, true);

				ctx.fillStyle = "#2d3436";
				ctx.beginPath();
				ctx.ellipse(0, 0, 3, this.size * 0.7, 0, 0, Math.PI * 2);
				ctx.fill();

				ctx.beginPath();
				ctx.arc(0, -this.size * 0.6, 4, 0, Math.PI * 2);
				ctx.fill();

				ctx.strokeStyle = "#2d3436";
				ctx.lineWidth = 1.5;
				ctx.beginPath();
				ctx.moveTo(-2, -this.size * 0.6);
				ctx.quadraticCurveTo(-5, -this.size * 1.5, -8, -this.size * 2.2);
				ctx.moveTo(2, -this.size * 0.6);
				ctx.quadraticCurveTo(5, -this.size * 1.5, 8, -this.size * 2.2);
				ctx.stroke();

				ctx.fillStyle = "#2d3436";
				ctx.beginPath();
				ctx.arc(-8, -this.size * 2.2, 2, 0, Math.PI * 2);
				ctx.arc(8, -this.size * 2.2, 2, 0, Math.PI * 2);
				ctx.fill();

				ctx.restore();
			}
		}

		// MNIEJ motyli (15 zamiast 20) ale większych
		for (let i = 0; i < 15; i++) {
			setTimeout(() => {
				butterflies.push(new Butterfly());
			}, i * 600);
		}

		let animationId;
		const animate = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			butterflies.forEach((b) => {
				b.update();
				b.draw();
			});
			animationId = requestAnimationFrame(animate);
		};

		animate();

		const handleResize = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
			window.removeEventListener("mousemove", handleMouseMove);
			cancelAnimationFrame(animationId);
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				width: "100%",
				height: "100%",
				pointerEvents: "none",
				zIndex: 1000,
			}}
		/>
	);
};
function App() {
	const [currentUrl, setCurrentUrl] = useState(videoUrls[0]);
	const [key, setKey] = useState(Date.now());
	const [isFullscreen, setIsFullscreen] = useState(false);
	const [showMusic, setShowMusic] = useState(false); // <-- nowa zmienna

	useEffect(() => {
		const intervalId = setInterval(
			() => {
				setKey(Date.now());
				setCurrentUrl((prevUrl) => {
					const currentIndex = videoUrls.indexOf(prevUrl);
					const nextIndex = (currentIndex + 1) % videoUrls.length;
					return videoUrls[nextIndex];
				});
			},
			30 * 60 * 1000,
		);

		return () => clearInterval(intervalId);
	}, []);

	const enterFullscreen = () => {
		setIsFullscreen(true);
	};

	const exitFullscreen = () => {
		setIsFullscreen(false);
	};

	const toggleMusic = () => {
		setShowMusic((prev) => !prev);
	};

	return (
		<div className={`App ${isFullscreen ? "fullscreen" : ""}`}>
			{isFullscreen && (
				<div className="buttons">
					<button onClick={exitFullscreen}>Exit Fullscreen</button>
				</div>
			)}

			{!isFullscreen && (
				<>
					<ButterflyCanvas />

					<div className="camera-background">
						<iframe
							key={key}
							width="100%"
							height="100%"
							src={currentUrl}
							title="Live Stream"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen></iframe>
						<div className="overlay"></div>
					</div>
					<button onClick={toggleMusic}>🎵 Music</button>
					{showMusic && <Music />}
					<TableManager />
					<div className="buttons">
						<button className="button" onClick={enterFullscreen}>
							Fullscreen
						</button>
					</div>
				</>
			)}

			{isFullscreen && (
				<div className="fullscreen">
					<iframe
						key={key}
						width="100%"
						height="100%"
						src={currentUrl}
						title="Live Stream Fullscreen"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen></iframe>
				</div>
			)}
		</div>
	);
}

export default App;

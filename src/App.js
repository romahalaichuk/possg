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
	const mouseRef = useRef({ x: -1000, y: -1000 });
	const fightModeRef = useRef(false);

	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");
		const keyBuffer = { value: "" };

		const handleKeyDown = (e) => {
			// 🔥 ZMIANA: Bez Ctrl, tylko "qwaszx"
			keyBuffer.value += e.key.toLowerCase();

			if (keyBuffer.value.length > 6) {
				keyBuffer.value = keyBuffer.value.slice(-6);
			}

			if (keyBuffer.value === "qwaszx") {
				fightModeRef.current = !fightModeRef.current;
				keyBuffer.value = "";
				console.log("FIGHT MODE:", fightModeRef.current);
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		const butterflies = [];
		const hearts = [];

		const handleMouseMove = (e) => {
			mouseRef.current = { x: e.clientX, y: e.clientY };
		};
		window.addEventListener("mousemove", handleMouseMove);

		const wingPatterns = [
			{
				main: "#ff6b6b",
				secondary: "#ffd93d",
				spots: "#fff",
				glitter: "#ff4757",
			},
			{
				main: "#ff8b94",
				secondary: "#ff6b6b",
				spots: "#fff",
				glitter: "#ff6b81",
			},
		];

		class Heart {
			constructor(x, y) {
				this.x = x;
				this.y = y;
				this.size = 8 + Math.random() * 12;
				this.speedY = 0.5 + Math.random() * 1;
				this.speedX = (Math.random() - 0.5) * 0.5;
				this.opacity = 1;
				this.fadeSpeed = 0.008 + Math.random() * 0.008;
				this.color = ["#ff6b6b", "#ff8b94", "#ffd93d", "#ff4757"][
					Math.floor(Math.random() * 4)
				];
				this.time = 0;
			}

			update() {
				this.time += 0.05;
				this.y -= this.speedY;
				this.x += Math.sin(this.time) * 0.5 + this.speedX;
				this.opacity -= this.fadeSpeed;
			}

			draw(ctx) {
				if (this.opacity <= 0) return;
				ctx.save();
				ctx.globalAlpha = this.opacity;
				ctx.translate(this.x, this.y);
				ctx.fillStyle = this.color;

				ctx.beginPath();
				ctx.moveTo(0, 0);
				ctx.bezierCurveTo(
					-this.size / 2,
					-this.size / 2,
					-this.size,
					0,
					0,
					this.size,
				);
				ctx.bezierCurveTo(this.size, 0, this.size / 2, -this.size / 2, 0, 0);
				ctx.fill();

				ctx.fillStyle = "rgba(255,255,255,0.6)";
				ctx.beginPath();
				ctx.arc(
					-this.size * 0.2,
					-this.size * 0.1,
					this.size * 0.15,
					0,
					Math.PI * 2,
				);
				ctx.fill();

				ctx.restore();
			}
		}

		class Butterfly {
			constructor(id) {
				this.id = id;
				this.reset();
				this.partner = null;
				this.loveMode = false;
				this.danceCenter = { x: canvas.width / 2, y: canvas.height / 2 };
				// 🔥 NOWE: Prędkość dla trybu walki
				this.vx = 0;
				this.vy = 0;
			}

			reset() {
				this.x = Math.random() * canvas.width;
				this.y = canvas.height + 150;
				this.size = 70 + Math.random() * 50;
				this.baseSpeedY = 0.6 + Math.random() * 0.8;
				this.speedY = this.baseSpeedY;
				this.speedX = (Math.random() - 0.5) * 0.8;
				this.pattern = wingPatterns[this.id % 2];
				this.wingAngle = Math.random() * Math.PI * 2;
				this.wingSpeed = 0.12 + Math.random() * 0.15;
				this.opacity = 0;
				this.rotation = (Math.random() - 0.5) * 0.3;
				this.time = Math.random() * 1000;
				this.fleeSpeed = 0;
				this.fleeAngle = 0;
				this.isFleeing = false;
				this.glitterOffset = Math.random() * 100;
				this.heartTimer = 0;
				this.vx = 0;
				this.vy = 0;
			}

			update(otherButterfly) {
				this.time += 1;
				this.heartTimer++;

				// 🔥 TRYB WALKI - POPRAWIONY
				if (fightModeRef.current && otherButterfly) {
					const dx = this.x - otherButterfly.x;
					const dy = this.y - otherButterfly.y;
					const dist = Math.sqrt(dx * dx + dy * dy);

					// Oblicz kierunek do przeciwnika
					const angleToOther = Math.atan2(-dy, -dx); // Kierunek DO drugiego motyla

					// Przyspieszenie w stronę przeciwnika (agresja)
					const chaseForce = 0.8;
					this.vx += Math.cos(angleToOther) * chaseForce;
					this.vy += Math.sin(angleToOther) * chaseForce;

					// Tarcie
					this.vx *= 0.95;
					this.vy *= 0.95;

					// Chaos/szaleństwo
					this.vx += Math.sin(this.time * 0.3 + this.id * 10) * 2;
					this.vy += Math.cos(this.time * 0.25 + this.id * 10) * 2;

					// KOLIZJA - odbicie!
					if (dist < this.size * 0.8 && dist > 0) {
						// Efekt serduszek przy uderzeniu
						for (let i = 0; i < 8; i++) {
							hearts.push(
								new Heart(
									this.x + (Math.random() - 0.5) * 40,
									this.y + (Math.random() - 0.5) * 40,
								),
							);
						}

						// 🔥 ODBICIE - silne odepchnięcie
						const bounceAngle = Math.atan2(dy, dx);
						const bounceForce = 15 + Math.random() * 10;

						this.vx = Math.cos(bounceAngle) * bounceForce;
						this.vy = Math.sin(bounceAngle) * bounceForce;

						// Odepchnij też drugiego motyla (jeśli ma logikę)
						otherButterfly.vx = -Math.cos(bounceAngle) * bounceForce;
						otherButterfly.vy = -Math.sin(bounceAngle) * bounceForce;
					}

					// Zastosuj prędkość
					this.x += this.vx;
					this.y += this.vy;

					// Rotacja w kierunku ruchu
					this.rotation = Math.atan2(this.vy, this.vx) + Math.PI / 2;
					this.wingSpeed = 0.8; // Szybkie machanie

					// Granice ekranu - odbijaj od ścian
					if (this.x < 50) {
						this.x = 50;
						this.vx *= -0.8;
					}
					if (this.x > canvas.width - 50) {
						this.x = canvas.width - 50;
						this.vx *= -0.8;
					}
					if (this.y < 50) {
						this.y = 50;
						this.vy *= -0.8;
					}
					if (this.y > canvas.height - 50) {
						this.y = canvas.height - 50;
						this.vy *= -0.8;
					}

					return; // Blokuj resztę logiki w trybie walki
				}

				// 🔥 RESET prędkości gdy wyłączamy tryb walki
				if (
					!fightModeRef.current &&
					(Math.abs(this.vx) > 0.1 || Math.abs(this.vy) > 0.1)
				) {
					this.vx *= 0.9;
					this.vy *= 0.9;
				}

				// OBLICZ ODLEGŁOŚĆ OD PARTNERA
				let dx = 0,
					dy = 0,
					distanceToPartner = 9999;
				if (otherButterfly) {
					dx = otherButterfly.x - this.x;
					dy = otherButterfly.y - this.y;
					distanceToPartner = Math.sqrt(dx * dx + dy * dy);

					// delikatne przyciąganie motyli do siebie
					if (distanceToPartner > 150) {
						this.x += dx * 0.005;
						this.y += dy * 0.003;
					}
				}

				const mouseDx = this.x - mouseRef.current.x;
				const mouseDy = this.y - mouseRef.current.y;
				const distanceToMouse = Math.sqrt(
					mouseDx * mouseDx + mouseDy * mouseDy,
				);

				if (
					distanceToPartner < 300 &&
					distanceToMouse > 200 &&
					otherButterfly
				) {
					this.loveMode = true;

					const centerX = (this.x + otherButterfly.x) / 2;
					const centerY = (this.y + otherButterfly.y) / 2;
					const danceRadius = 80 + Math.sin(this.time * 0.02) * 30;
					const angle = this.time * 0.03 + this.id * Math.PI;

					const targetX = centerX + Math.cos(angle) * danceRadius;
					const targetY = centerY + Math.sin(angle) * danceRadius * 0.5;

					this.x += (targetX - this.x) * 0.03;
					this.y += (targetY - this.y) * 0.03;
					this.rotation = angle + Math.PI / 2;
					this.wingSpeed = 0.25;

					if (this.heartTimer % 40 === 0) {
						const backOffset = this.size * 0.8;
						const offsetX = -Math.sin(this.rotation) * backOffset;
						const offsetY = Math.cos(this.rotation) * backOffset;

						for (let i = 0; i < 4; i++) {
							hearts.push(
								new Heart(
									this.x + offsetX + (Math.random() - 0.5) * this.size * 0.3,
									this.y + offsetY + (Math.random() - 0.5) * this.size * 0.2,
								),
							);
						}
					}
				} else {
					this.loveMode = false;

					if (distanceToMouse < 200 && distanceToMouse > 0) {
						this.isFleeing = true;
						this.fleeAngle = Math.atan2(mouseDy, mouseDx);
						this.fleeSpeed = Math.min((200 - distanceToMouse) / 8, 10);
						this.wingSpeed = 0.5;
					}

					if (distanceToMouse < this.size * 0.8) {
						if (this.heartTimer % 5 === 0) {
							const backOffset = this.size * 0.6;
							const offsetX = -Math.sin(this.rotation) * backOffset;
							const offsetY = Math.cos(this.rotation) * backOffset;

							hearts.push(
								new Heart(
									this.x + offsetX + (Math.random() - 0.5) * this.size * 0.3,
									this.y + offsetY + (Math.random() - 0.5) * this.size * 0.2,
								),
							);
						}
					} else {
						// <-- TERAZ DOBRZE
						this.isFleeing = false;
						this.fleeSpeed *= 0.92;
						this.wingSpeed = 0.12 + Math.random() * 0.15;
					}

					if (this.fleeSpeed > 0.1) {
						this.x += Math.cos(this.fleeAngle) * this.fleeSpeed;
						this.y += Math.sin(this.fleeAngle) * this.fleeSpeed;
						this.rotation = this.fleeAngle + Math.PI / 2;
					} else {
						this.y -= this.baseSpeedY;
						this.x += Math.sin(this.time * 0.015) * 2 + this.speedX;
						this.rotation = Math.sin(this.time * 0.008) * 0.15;
					}
				}

				if (this.x < -100) this.x = canvas.width + 100;
				if (this.x > canvas.width + 100) this.x = -100;

				this.wingAngle += this.wingSpeed;

				if (this.opacity < 0.95) {
					this.opacity += 0.008;
				}

				if (this.y < -200) {
					this.reset();
				}
			}

			drawWing(ctx, isRight, isUpper) {
				const scale = isRight ? 1 : -1;
				const wingScale = Math.abs(Math.sin(this.wingAngle));

				ctx.save();
				ctx.scale(scale * wingScale, 1);
				const size = this.size;

				if (isUpper) {
					ctx.beginPath();
					ctx.moveTo(0, 0);
					ctx.bezierCurveTo(
						size * 0.2,
						-size * 0.9,
						size * 0.5,
						-size * 1.4,
						size * 0.9,
						-size * 1.2,
					);
					ctx.bezierCurveTo(
						size * 1.4,
						-size * 1.0,
						size * 1.6,
						-size * 0.5,
						size * 1.5,
						-size * 0.1,
					);
					ctx.bezierCurveTo(
						size * 1.4,
						size * 0.3,
						size * 1.0,
						size * 0.4,
						size * 0.6,
						size * 0.3,
					);
					ctx.bezierCurveTo(
						size * 0.3,
						size * 0.2,
						size * 0.1,
						size * 0.1,
						0,
						0,
					);

					const gradient = ctx.createRadialGradient(
						size * 0.3,
						-size * 0.5,
						0,
						size * 0.3,
						-size * 0.5,
						size * 1.2,
					);
					gradient.addColorStop(0, this.pattern.main);
					gradient.addColorStop(0.4, this.pattern.secondary);
					gradient.addColorStop(0.8, this.pattern.main);
					gradient.addColorStop(1, "rgba(255,255,255,0.3)");

					ctx.fillStyle = gradient;
					ctx.fill();

					ctx.strokeStyle = "rgba(0,0,0,0.4)";
					ctx.lineWidth = 2;
					ctx.stroke();

					ctx.strokeStyle = "rgba(0,0,0,0.15)";
					ctx.lineWidth = 1;
					for (let i = 1; i <= 4; i++) {
						ctx.beginPath();
						ctx.moveTo(0, 0);
						ctx.quadraticCurveTo(
							size * (0.3 + i * 0.15),
							-size * (0.3 + i * 0.2),
							size * (0.6 + i * 0.2),
							-size * (0.2 + i * 0.15),
						);
						ctx.stroke();
					}

					const spots = [
						{ x: 0.85, y: -0.9, r: 0.15 },
						{ x: 1.1, y: -0.6, r: 0.12 },
						{ x: 0.7, y: -1.0, r: 0.1 },
						{ x: 1.3, y: -0.3, r: 0.08 },
						{ x: 0.5, y: -0.7, r: 0.06 },
					];

					spots.forEach((spot) => {
						ctx.fillStyle = this.pattern.spots;
						ctx.beginPath();
						ctx.arc(
							size * spot.x,
							size * spot.y,
							size * spot.r,
							0,
							Math.PI * 2,
						);
						ctx.fill();
						ctx.strokeStyle = "rgba(0,0,0,0.3)";
						ctx.lineWidth = 0.5;
						ctx.stroke();
					});

					ctx.fillStyle = this.pattern.glitter;
					for (let i = 0; i < 8; i++) {
						const gx =
							0.3 + Math.sin(this.time * 0.05 + i + this.glitterOffset) * 0.4;
						const gy = -0.2 + Math.cos(this.time * 0.03 + i * 2) * 0.6;
						const alpha = 0.3 + Math.sin(this.time * 0.1 + i) * 0.2;
						ctx.globalAlpha = alpha;
						ctx.beginPath();
						ctx.arc(size * gx, size * gy, size * 0.04, 0, Math.PI * 2);
						ctx.fill();
					}
					ctx.globalAlpha = 1;
				} else {
					ctx.beginPath();
					ctx.moveTo(0, 0);
					ctx.bezierCurveTo(
						size * 0.15,
						size * 0.6,
						size * 0.4,
						size * 1.2,
						size * 0.25,
						size * 1.6,
					);
					ctx.bezierCurveTo(
						size * 0.1,
						size * 1.8,
						-size * 0.05,
						size * 1.5,
						0,
						size * 1.2,
					);
					ctx.bezierCurveTo(
						size * 0.05,
						size * 0.9,
						size * 0.08,
						size * 0.6,
						0,
						size * 0.4,
					);
					ctx.bezierCurveTo(
						size * 0.05,
						size * 0.2,
						size * 0.03,
						size * 0.1,
						0,
						0,
					);

					const gradient = ctx.createRadialGradient(
						0,
						size * 0.8,
						0,
						0,
						size * 0.8,
						size,
					);
					gradient.addColorStop(0, this.pattern.secondary);
					gradient.addColorStop(0.5, this.pattern.main);
					gradient.addColorStop(1, this.pattern.secondary);

					ctx.fillStyle = gradient;
					ctx.fill();

					ctx.strokeStyle = "rgba(0,0,0,0.4)";
					ctx.lineWidth = 2;
					ctx.stroke();

					ctx.strokeStyle = "rgba(0,0,0,0.15)";
					ctx.lineWidth = 1;
					ctx.beginPath();
					ctx.moveTo(0, 0);
					ctx.quadraticCurveTo(size * 0.2, size * 0.8, size * 0.15, size * 1.4);
					ctx.stroke();

					ctx.fillStyle = this.pattern.spots;
					ctx.beginPath();
					ctx.arc(size * 0.2, size * 1.1, size * 0.12, 0, Math.PI * 2);
					ctx.arc(size * 0.1, size * 1.4, size * 0.08, 0, Math.PI * 2);
					ctx.fill();

					ctx.fillStyle = this.pattern.glitter;
					for (let i = 0; i < 4; i++) {
						const gx = 0.1 + Math.sin(this.time * 0.04 + i) * 0.15;
						const gy = 0.8 + Math.cos(this.time * 0.06 + i * 3) * 0.6;
						ctx.globalAlpha = 0.4;
						ctx.beginPath();
						ctx.arc(size * gx, size * gy, size * 0.05, 0, Math.PI * 2);
						ctx.fill();
					}
					ctx.globalAlpha = 1;
				}

				ctx.restore();
			}

			draw() {
				ctx.save();
				ctx.globalAlpha = this.opacity;
				ctx.translate(this.x, this.y);
				ctx.rotate(this.rotation);

				ctx.save();
				ctx.translate(10, 15);
				ctx.scale(1, 0.6);
				ctx.fillStyle = "rgba(0,0,0,0.15)";
				ctx.beginPath();
				ctx.ellipse(0, 0, this.size * 1.2, this.size * 0.8, 0, 0, Math.PI * 2);
				ctx.fill();
				ctx.restore();

				this.drawWing(ctx, false, false);
				this.drawWing(ctx, true, false);
				this.drawWing(ctx, false, true);
				this.drawWing(ctx, true, true);

				ctx.fillStyle = "#2d3436";
				ctx.beginPath();
				ctx.ellipse(0, 0, 4, this.size * 0.75, 0, 0, Math.PI * 2);
				ctx.fill();

				for (let i = -2; i <= 2; i++) {
					ctx.beginPath();
					ctx.ellipse(
						0,
						i * this.size * 0.15,
						3 - Math.abs(i) * 0.5,
						this.size * 0.12,
						0,
						0,
						Math.PI * 2,
					);
					ctx.fill();
				}

				ctx.beginPath();
				ctx.arc(0, -this.size * 0.65, 6, 0, Math.PI * 2);
				ctx.fill();

				ctx.fillStyle = "#fff";
				ctx.beginPath();
				ctx.arc(-3, -this.size * 0.7, 2.5, 0, Math.PI * 2);
				ctx.arc(3, -this.size * 0.7, 2.5, 0, Math.PI * 2);
				ctx.fill();
				ctx.fillStyle = "#000";
				ctx.beginPath();
				ctx.arc(-3, -this.size * 0.7, 1, 0, Math.PI * 2);
				ctx.arc(3, -this.size * 0.7, 1, 0, Math.PI * 2);
				ctx.fill();

				ctx.strokeStyle = "#2d3436";
				ctx.lineWidth = 2;
				ctx.lineCap = "round";

				ctx.beginPath();
				ctx.moveTo(-2, -this.size * 0.65);
				ctx.quadraticCurveTo(-8, -this.size * 1.8, -12, -this.size * 2.8);
				ctx.stroke();

				ctx.beginPath();
				ctx.moveTo(2, -this.size * 0.65);
				ctx.quadraticCurveTo(8, -this.size * 1.8, 12, -this.size * 2.8);
				ctx.stroke();

				ctx.fillStyle = "#2d3436";
				ctx.beginPath();
				ctx.arc(-12, -this.size * 2.8, 3, 0, Math.PI * 2);
				ctx.arc(12, -this.size * 2.8, 3, 0, Math.PI * 2);
				ctx.fill();

				ctx.fillStyle = "#fff";
				ctx.beginPath();
				ctx.arc(-12, -this.size * 2.8, 1, 0, Math.PI * 2);
				ctx.arc(12, -this.size * 2.8, 1, 0, Math.PI * 2);
				ctx.fill();

				ctx.restore();
			}
		}

		for (let i = 0; i < 2; i++) {
			setTimeout(() => {
				butterflies.push(new Butterfly(i));
			}, i * 1500);
		}

		let animationId;
		const animate = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			for (let i = hearts.length - 1; i >= 0; i--) {
				hearts[i].update();
				hearts[i].draw(ctx);
				if (hearts[i].opacity <= 0) {
					hearts.splice(i, 1);
				}
			}

			butterflies.forEach((b, index) => {
				const other = butterflies[index === 0 ? 1 : 0];
				b.update(other);
			});

			butterflies.forEach((b) => b.draw(ctx));

			animationId = requestAnimationFrame(animate);
		};

		animate();

		const handleResize = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
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

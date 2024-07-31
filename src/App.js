import React, { useState, useEffect } from "react";
import TableManager from "./components/TableManager";
import "./App.css";

const videoUrls = [
	"https://www.youtube.com/embed/cvjaa2D41Io?autoplay=1&mute=1",
	"https://www.youtube.com/embed/v9BbaNz0s9M?autoplay=1&mute=1",
	"https://www.youtube.com/embed/Dj3PZCPxkwo?autoplay=1&mute=1",
	"https://www.youtube.com/embed/czV_hXEMk8M?autoplay=1&mute=1",
	"https://www.youtube.com/embed/Btt_7wLpwxM?autoplay=1&mute=1",
	"https://www.youtube.com/embed/oe5GPi_C7Go?autoplay=1&mute=1",
	"https://www.youtube.com/embed/KY4Yd5QR570?autoplay=1&mute=1",
	"https://www.youtube.com/embed/EE06S6rnTy4?autoplay=1&mute=1",
	"https://www.youtube.com/embed/o1eTLR7Degs?autoplay=1&mute=1",
	"https://www.youtube.com/embed/LIngigr4Lgc?autoplay=1&mute=1",
	"https://www.youtube.com/embed/A8y1cXGPx7E?autoplay=1&mute=1",
	"https://www.youtube.com/embed/bSrLBihXPwc?autoplay=1&mute=1",
	"https://www.youtube.com/embed/3vEYpK3KUW4?autoplay=1&mute=1",
];

function App() {
	const [currentUrl, setCurrentUrl] = useState(videoUrls[0]);
	const [key, setKey] = useState(Date.now());
	const [isFullscreen, setIsFullscreen] = useState(false);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setKey(Date.now());
			setCurrentUrl((prevUrl) => {
				const currentIndex = videoUrls.indexOf(prevUrl);
				const nextIndex = (currentIndex + 1) % videoUrls.length;
				return videoUrls[nextIndex];
			});
		}, 30 * 60 * 1000);

		return () => clearInterval(intervalId);
	}, []);

	const enterFullscreen = () => {
		setIsFullscreen(true);
	};

	const exitFullscreen = () => {
		setIsFullscreen(false);
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

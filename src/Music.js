import { useEffect, useState, useRef, useCallback } from "react";

export default function Music() {
	const [audioFiles, setAudioFiles] = useState([]);
	const [current, setCurrent] = useState(0);
	const [audio, setAudio] = useState(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [progress, setProgress] = useState(0);
	const progressRef = useRef(null);

	// Funkcja odtwarzająca plik
	const playFile = useCallback(
		(index, files = audioFiles) => {
			if (audio) {
				audio.pause();
				audio.src = "";
			}

			const file = files[index];
			if (!file) return;

			const newAudio = new Audio(file.url);
			newAudio.play();
			setAudio(newAudio);
			setCurrent(index);
			setIsPlaying(true);
		},
		[audio, audioFiles]
	);

	// Obsługa folderu i czytania plików
	const readMusicFromFolder = useCallback(
		async (folderHandle) => {
			const files = [];
			for await (const entry of folderHandle.values()) {
				if (entry.kind === "file" && entry.name.endsWith(".mp3")) {
					const file = await entry.getFile();
					const url = URL.createObjectURL(file);
					files.push({ name: entry.name, url });
				}
			}

			files.sort((a, b) =>
				a.name.localeCompare(b.name, undefined, {
					numeric: true,
					sensitivity: "base",
				})
			);

			setAudioFiles(files);
			if (files.length > 0) {
				playFile(0, files);
			}
		},
		[playFile]
	);

	const loadSavedFolder = useCallback(async () => {
		if ("showDirectoryPicker" in window) {
			const stored = localStorage.getItem("music-folder");
			if (stored) {
				try {
					const handle = await window.showDirectoryPicker();
					await readMusicFromFolder(handle);
				} catch (e) {
					console.warn("Brak dostępu do folderu muzyki", e);
				}
			}
		}
	}, [readMusicFromFolder]);

	// Efekty
	useEffect(() => {
		loadSavedFolder();
	}, [loadSavedFolder]);

	useEffect(() => {
		if (audio) {
			audio.ontimeupdate = () => {
				setProgress((audio.currentTime / audio.duration) * 100);
			};
			audio.onended = () => {
				playFile(current + 1);
			};
		}
	}, [audio, current, playFile]);

	// Przycisk: wybierz folder
	async function chooseFolder() {
		try {
			const handle = await window.showDirectoryPicker();
			localStorage.setItem("music-folder", true);
			await readMusicFromFolder(handle);
		} catch (e) {
			alert("Nie udało się otworzyć folderu.");
		}
	}

	function togglePlayPause() {
		if (!audio) return;
		if (isPlaying) {
			audio.pause();
			setIsPlaying(false);
		} else {
			audio.play();
			setIsPlaying(true);
		}
	}

	function playNext() {
		playFile((current + 1) % audioFiles.length);
	}

	function playPrevious() {
		playFile((current - 1 + audioFiles.length) % audioFiles.length);
	}

	function handleSeek(e) {
		if (audio && e.target.value) {
			const percent = parseFloat(e.target.value);
			audio.currentTime = (percent / 100) * audio.duration;
		}
	}

	return (
		<div style={{ padding: "1em", fontFamily: "sans-serif" }}>
			<h2>Muzyka z folderu</h2>
			<button onClick={chooseFolder}>🎵 Wybierz folder z muzyką</button>

			{audioFiles.length > 0 && (
				<div style={{ marginTop: "1em" }}>
					<p>
						🎶 Aktualnie gra: <strong>{audioFiles[current]?.name}</strong>
					</p>

					<div style={{ marginBottom: "0.5em" }}>
						<input
							type="range"
							value={progress}
							onChange={handleSeek}
							ref={progressRef}
							style={{ width: "100%" }}
						/>
					</div>

					<div>
						<button onClick={playPrevious}>⏮ Wstecz</button>
						<button onClick={togglePlayPause}>
							{isPlaying ? "⏸ Pauza" : "▶️ Odtwórz"}
						</button>
						<button onClick={playNext}>⏭ Następny</button>
					</div>
				</div>
			)}
		</div>
	);
}

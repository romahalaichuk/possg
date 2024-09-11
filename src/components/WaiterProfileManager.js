import React, { useState, useEffect, useRef } from "react";
import "./WaiterProfileManager.css";

const WAITER_PROFILES_STORAGE_KEY = "waiterProfiles";
const TABLES_STORAGE_KEY = "tablesByProfile";

const getRandomColor = () => {
	const letters = "0123456789ABCDEF";
	let color = "#";
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
};

const saveProfilesToLocalStorage = (profiles) => {
	localStorage.setItem(WAITER_PROFILES_STORAGE_KEY, JSON.stringify(profiles));
};

const loadProfilesFromLocalStorage = () => {
	const data = localStorage.getItem(WAITER_PROFILES_STORAGE_KEY);
	return data ? JSON.parse(data) : [];
};

const saveTablesToLocalStorage = (profileId, tables) => {
	const storedTables =
		JSON.parse(localStorage.getItem(TABLES_STORAGE_KEY)) || {};
	storedTables[profileId] = tables;
	localStorage.setItem(TABLES_STORAGE_KEY, JSON.stringify(storedTables));
};

// USUNIĘTA FUNKCJA loadTablesFromLocalStorage, BO NIE JEST UŻYWANA

const capitalizeName = (name) => {
	return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

const WaiterProfileManager = ({ onProfileSelect }) => {
	const [profiles, setProfiles] = useState([]);
	const [newProfileName, setNewProfileName] = useState("");
	const [newProfilePassword, setNewProfilePassword] = useState("");
	const [activeProfileId, setActiveProfileId] = useState(null);
	const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
	const [passwordInput, setPasswordInput] = useState("");
	const [selectedProfile, setSelectedProfile] = useState(null);

	// Ref do ustawienia focusa na pole hasła
	const passwordInputRef = useRef(null);

	useEffect(() => {
		const storedProfiles = loadProfilesFromLocalStorage();
		setProfiles(storedProfiles);
	}, []);

	// Ustawienie focusa na polu hasła po otwarciu modala
	useEffect(() => {
		if (isPasswordModalOpen && passwordInputRef.current) {
			passwordInputRef.current.focus();
		}
	}, [isPasswordModalOpen]);

	const handleAddProfile = () => {
		if (newProfileName.trim() === "" || newProfilePassword.trim() === "") {
			alert("Proszę wprowadzić nazwę i hasło.");
			return;
		}

		const formattedName = capitalizeName(newProfileName);

		const newProfile = {
			id: profiles.length + 1,
			name: formattedName,
			password: newProfilePassword, // Dodajemy hasło do profilu
			color: getRandomColor(),
		};

		const updatedProfiles = [...profiles, newProfile];
		setProfiles(updatedProfiles);
		saveProfilesToLocalStorage(updatedProfiles);

		saveTablesToLocalStorage(newProfile.id, []);
		setNewProfileName("");
		setNewProfilePassword("");
	};

	const handleProfileSelect = (profile) => {
		setSelectedProfile(profile);
		setIsPasswordModalOpen(true); // Otwieramy modal do wprowadzenia hasła
	};

	const handlePasswordSubmit = () => {
		// Sprawdzenie hasła
		if (passwordInput === selectedProfile.password) {
			console.log("Wybrany profil:", selectedProfile);
			onProfileSelect(selectedProfile);
			setActiveProfileId(selectedProfile.id);
			setIsPasswordModalOpen(false);
			setPasswordInput(""); // Resetujemy pole hasła
		} else {
			alert("Nieprawidłowe hasło");
			setPasswordInput(""); // Czyścimy pole hasła
		}
	};

	// Obsługa klawisza Enter
	const handleKeyPress = (e) => {
		if (e.key === "Enter") {
			handlePasswordSubmit();
		}
	};

	const handleNameChange = (e) => {
		const inputValue = e.target.value;
		setNewProfileName(capitalizeName(inputValue));
	};

	const handlePasswordChange = (e) => {
		setNewProfilePassword(e.target.value);
	};

	return (
		<div className="waiter-profile-manager">
			<div className="add-waiter">
				<form autoComplete="off">
					{" "}
					{/* Dodanie formularza */}
					<input
						type="text"
						placeholder="Nazwa kelnera"
						value={newProfileName}
						onChange={handleNameChange}
						autoComplete="off"
						name="new-waiter-name"
						inputMode="text"
					/>
					<input
						type="password"
						placeholder="Hasło"
						value={newProfilePassword}
						onChange={handlePasswordChange}
						autoComplete="new-password"
						name="new-waiter-password"
					/>
				</form>
				<button onClick={handleAddProfile}>Dodaj kelnera</button>
			</div>

			<div className="profile-list">
				{profiles.map((profile) => (
					<div
						key={profile.id}
						className={`profile-card ${
							profile.id === activeProfileId ? "active" : "inactive"
						}`}
						style={{ backgroundColor: profile.color }}
						onClick={() => handleProfileSelect(profile)}>
						<div>{profile.name}</div>
					</div>
				))}
			</div>

			{/* Modal do wprowadzania hasła */}
			{isPasswordModalOpen && (
				<div className="password-modal-overlay">
					<div className="modal-content">
						<h3>Wprowadź hasło dla profilu: {selectedProfile?.name}</h3>
						<form autoComplete="off">
							<input
								type="password"
								placeholder="Hasło"
								value={passwordInput}
								onChange={(e) => setPasswordInput(e.target.value)}
								ref={passwordInputRef} // Ref do focusa
								onKeyPress={handleKeyPress} // Obsługa Enter
								autoComplete="new-password" // Wyłączenie autouzupełniania
								name="password-input"
							/>
						</form>
						<button onClick={handlePasswordSubmit}>Potwierdź</button>
						<button onClick={() => setIsPasswordModalOpen(false)}>
							Anuluj
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default WaiterProfileManager;

import React, { useState, useEffect } from "react";
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

const loadTablesFromLocalStorage = (profileId) => {
	const storedTables =
		JSON.parse(localStorage.getItem(TABLES_STORAGE_KEY)) || {};
	return storedTables[profileId] || [];
};

const capitalizeName = (name) => {
	return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

const WaiterProfileManager = ({ onProfileSelect }) => {
	const [profiles, setProfiles] = useState([]);
	const [newProfileName, setNewProfileName] = useState("");
	const [activeProfileId, setActiveProfileId] = useState(null);

	useEffect(() => {
		const storedProfiles = loadProfilesFromLocalStorage();
		setProfiles(storedProfiles);

		const activeTables = {};
		storedProfiles.forEach((profile) => {
			const tables = loadTablesFromLocalStorage(profile.id);
			const activeCount = tables.filter(
				(table) => table.status === "occupied"
			).length;
			activeTables[profile.id] = activeCount;
		});
	}, []);

	const handleAddProfile = () => {
		if (newProfileName.trim() === "") return;

		const formattedName = capitalizeName(newProfileName);

		const newProfile = {
			id: profiles.length + 1,
			name: formattedName,
			color: getRandomColor(),
		};

		const updatedProfiles = [...profiles, newProfile];
		setProfiles(updatedProfiles);
		saveProfilesToLocalStorage(updatedProfiles);

		saveTablesToLocalStorage(newProfile.id, []);
		setNewProfileName("");
	};

	const handleProfileSelect = (profile) => {
		console.log("Wybrany profil:", profile);
		onProfileSelect(profile);
		setActiveProfileId(profile.id);
	};

	const handleNameChange = (e) => {
		const inputValue = e.target.value;
		setNewProfileName(capitalizeName(inputValue));
	};

	return (
		<div className="waiter-profile-manager">
			<div className="add-waiter">
				<input
					type="text"
					placeholder="Nazwa kelnera"
					value={newProfileName}
					onChange={handleNameChange}
				/>
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
		</div>
	);
};

export default WaiterProfileManager;

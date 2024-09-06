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

const WaiterProfileManager = ({ onProfileSelect }) => {
	const [profiles, setProfiles] = useState([]);
	const [newProfileName, setNewProfileName] = useState("");

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

		const newProfile = {
			id: profiles.length + 1,
			name: newProfileName,
			color: getRandomColor(),
		};

		const updatedProfiles = [...profiles, newProfile];
		setProfiles(updatedProfiles);
		saveProfilesToLocalStorage(updatedProfiles);

		// Inicjalizujemy pustą listę stolików dla nowego profilu
		saveTablesToLocalStorage(newProfile.id, []);
		setNewProfileName("");
	};

	const handleProfileSelect = (profile) => {
		onProfileSelect(profile);

		const tables = loadTablesFromLocalStorage(profile.id);
		console.log(`Stoliki dla profilu ${profile.name}:`, tables);
	};

	return (
		<div className="waiter-profile-manager">
			<div className="add-waiter">
				{" "}
				<input
					type="text"
					placeholder="Nazwa kelnera"
					value={newProfileName}
					onChange={(e) => setNewProfileName(e.target.value)}
				/>
				<button onClick={handleAddProfile}>Dodaj kelnera</button>
			</div>

			<div className="profile-list">
				{profiles.map((profile) => (
					<div
						key={profile.id}
						className="profile-card"
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

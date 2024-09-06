import React, { useState, useEffect } from "react";
import "./WaiterProfileManager.css";

const WAITER_PROFILES_STORAGE_KEY = "waiterProfiles";

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

const WaiterProfileManager = ({ onProfileSelect }) => {
	const [profiles, setProfiles] = useState([]);
	const [newProfileName, setNewProfileName] = useState("");

	useEffect(() => {
		const storedProfiles = loadProfilesFromLocalStorage();
		setProfiles(storedProfiles);
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
		setNewProfileName("");
	};

	return (
		<div className="waiter-profile-manager">
			<div className="add-waiter">
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
						onClick={() => onProfileSelect(profile)}>
						<div>{profile.name}</div>
						<div className="unsettled-tables">Nierozliczone stoliki: 0</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default WaiterProfileManager;

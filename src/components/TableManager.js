import React, { useState, useEffect } from "react";
import "./TableManager.css";
import Table from "./Table";
import Modal from "./Modal";
import WaiterProfileManager from "./WaiterProfileManager";
import MenuManager from "./MenuManager";
import WynosListModal from "./WynosListModal";
import ManagerPanel from "./ManagerPanel";
import Dostawa from "./Dostawa";
const TABLES_BY_PROFILE_KEY = "tablesByProfile";
const TABLES_STORAGE_KEY = "tables";
const WYNOS_TABLES_STORAGE_KEY = "wynosTables";
const MANAGER_PANEL_STATE_KEY = "managerPanelOpen";

const initializeTables = () => {
	const initialTables = [
		{ id: 0, name: "Wynos/Dostawa", status: "special", products: [] },
		...Array.from({ length: 47 }, (_, index) => ({
			id: index + 1,
			name: `Table ${index + 1}`,
			status: "free",
			products: [],
		})),
	];
	saveDataToLocalStorage(TABLES_STORAGE_KEY, initialTables);
	return initialTables;
};

const initializeWynosTables = () => {
	const initialWynosTables = Array.from({ length: 20 }, (_, index) => ({
		id: index + 30,
		name: `Wynos/Dostawa ${index + 1}`,
		status: "free",
		products: [],
	}));
	saveDataToLocalStorage(WYNOS_TABLES_STORAGE_KEY, initialWynosTables);
	return initialWynosTables;
};

const saveDataToLocalStorage = (key, data) => {
	localStorage.setItem(key, JSON.stringify(data));
};
const saveTablesToLocalStorage = (profileId, tables) => {
	localStorage.setItem(
		`${TABLES_BY_PROFILE_KEY}_${profileId}`,
		JSON.stringify(tables)
	);
};
const loadTablesFromLocalStorage = (profileId) => {
	const data = localStorage.getItem(`${TABLES_BY_PROFILE_KEY}_${profileId}`);
	return data ? JSON.parse(data) : [];
};
const loadDataFromLocalStorage = (key) => {
	const data = localStorage.getItem(key);
	return data ? JSON.parse(data) : null;
};

const TableManager = () => {
	const [tables, setTables] = useState([]);
	const [wynosTables, setWynosTables] = useState([]);
	const [modalOpen, setModalOpen] = useState(false);
	const [menuManagerOpen, setMenuManagerOpen] = useState(false);
	const [wynosModalOpen, setWynosModalOpen] = useState(false);
	const [selectedTableId, setSelectedTableId] = useState(null);
	const [selectedProfile, setSelectedProfile] = useState(null);
	const [isWynos, setIsWynos] = useState(false);
	const [managerPanelOpen, setManagerPanelOpen] = useState(false);

	useEffect(() => {
		const storedTables = loadDataFromLocalStorage(TABLES_STORAGE_KEY);
		if (storedTables) {
			setTables(storedTables);
		} else {
			setTables(initializeTables());
		}

		const storedWynosTables = loadDataFromLocalStorage(
			WYNOS_TABLES_STORAGE_KEY
		);
		if (storedWynosTables) {
			setWynosTables(storedWynosTables);
		} else {
			setWynosTables(initializeWynosTables());
		}

		const storedManagerPanelState = loadDataFromLocalStorage(
			MANAGER_PANEL_STATE_KEY
		);
		if (storedManagerPanelState !== null) {
			setManagerPanelOpen(storedManagerPanelState === "true");
		}
	}, []);
	useEffect(() => {
		if (selectedProfile) {
			const storedTables = loadTablesFromLocalStorage(selectedProfile.id);
			if (storedTables.length > 0) {
				setTables(storedTables);
			} else {
				const initialTables = Array.from({ length: 30 }, (_, index) => ({
					id: index + 1,
					name: `Table ${index + 1}`,
					status: "free",
					products: [],
				}));
				setTables(initialTables);
				saveTablesToLocalStorage(selectedProfile.id, initialTables);
			}
		}
	}, [selectedProfile]);
	const handleTableClick = (tableId) => {
		if (tableId === 0) {
			setWynosModalOpen(true);
		} else {
			const clickedTable = tables.find((table) => table.id === tableId);
			setSelectedTableId(tableId);
			setIsWynos(false);

			if (clickedTable.status === "free") {
				setModalOpen(true);
			} else if (clickedTable.status === "occupied") {
				setMenuManagerOpen(true);
			}
		}
	};

	const handleModalClose = () => {
		setModalOpen(false);
	};

	const handleModalConfirm = (tableName) => {
		const updatedTables = isWynos
			? wynosTables.map((table) =>
					table.id === selectedTableId
						? { ...table, name: tableName, status: "occupied" }
						: table
			  )
			: tables.map((table) =>
					table.id === selectedTableId
						? { ...table, name: tableName, status: "occupied" }
						: table
			  );

		if (isWynos) {
			setWynosTables(updatedTables);
			saveDataToLocalStorage(WYNOS_TABLES_STORAGE_KEY, updatedTables);
		} else {
			setTables(updatedTables);
			saveTablesToLocalStorage(selectedProfile.id, updatedTables);
			saveDataToLocalStorage(TABLES_STORAGE_KEY, updatedTables);
		}
		setTables(updatedTables);
		saveTablesToLocalStorage(selectedProfile.id, updatedTables);
		setModalOpen(false);
		setMenuManagerOpen(true);
	};

	const handleMenuManagerClose = () => {
		setMenuManagerOpen(false);
		setSelectedTableId(null);
	};

	const handleWynosModalClose = () => {
		setWynosModalOpen(false);
	};

	const handleWynosTableClick = (tableId) => {
		const clickedTable = wynosTables.find((table) => table.id === tableId);
		if (clickedTable) {
			setSelectedTableId(tableId);
			setIsWynos(true);

			if (clickedTable.status === "free") {
				setModalOpen(true);
			} else if (clickedTable.status === "occupied") {
				setMenuManagerOpen(true);
			}
		}
	};

	const handleAddProduct = (productId, productName, productPrice) => {
		const updatedTables = isWynos
			? wynosTables.map((table) =>
					table.id === selectedTableId
						? {
								...table,
								products: [
									...table.products,
									{
										id: productId,
										name: productName,
										price: productPrice,
										quantity: 1,
									},
								],
						  }
						: table
			  )
			: tables.map((table) =>
					table.id === selectedTableId
						? {
								...table,
								products: [
									...table.products,
									{
										id: productId,
										name: productName,
										price: productPrice,
										quantity: 1,
									},
								],
						  }
						: table
			  );

		if (isWynos) {
			setWynosTables(updatedTables);
			saveDataToLocalStorage(WYNOS_TABLES_STORAGE_KEY, updatedTables);
		} else {
			setTables(updatedTables);
			saveTablesToLocalStorage(selectedProfile.id, updatedTables);
			saveDataToLocalStorage(TABLES_STORAGE_KEY, updatedTables);
		}
	};

	const toggleManagerPanel = () => {
		const newState = !managerPanelOpen;
		setManagerPanelOpen(newState);
		saveDataToLocalStorage(MANAGER_PANEL_STATE_KEY, newState.toString());
	};

	const resetTable = (tableId) => {
		const updatedTables = isWynos
			? wynosTables.map((table) =>
					table.id === tableId
						? { ...table, status: "free", products: [] }
						: table
			  )
			: tables.map((table) =>
					table.id === tableId
						? { ...table, status: "free", products: [] }
						: table
			  );

		if (isWynos) {
			setWynosTables(updatedTables);
			saveDataToLocalStorage(WYNOS_TABLES_STORAGE_KEY, updatedTables);
		} else {
			setTables(updatedTables);
			saveTablesToLocalStorage(selectedProfile.id, updatedTables);
			saveDataToLocalStorage(TABLES_STORAGE_KEY, updatedTables);
		}
	};
	const handleCloseDelivery = () => {};
	const selectedTable = isWynos
		? wynosTables.find((table) => table.id === selectedTableId)
		: tables.find((table) => table.id === selectedTableId);

	return (
		<div className="table-manager">
			<WaiterProfileManager onProfileSelect={setSelectedProfile} />
			{selectedProfile && (
				<>
					<h2 className="waitingprof">
						Stoliki kelnera {selectedProfile.name}
					</h2>
					<div className="table-grid">
						{tables.map((table) => (
							<Table
								key={table.id}
								id={table.id}
								name={table.name}
								status={table.status}
								products={table.products}
								onTableClick={handleTableClick}
							/>
						))}
					</div>
				</>
			)}
			<button className="manager-panel-button" onClick={toggleManagerPanel}>
				Manager Panel
			</button>
			{managerPanelOpen && (
				<div className="modal-overlay" onClick={toggleManagerPanel}>
					<ManagerPanel
						tables={tables}
						wynosTables={wynosTables}
						onClose={toggleManagerPanel}
					/>
				</div>
			)}

			{wynosModalOpen && (
				<div className="modal-overlay" onClick={handleWynosModalClose}>
					<WynosListModal
						tables={wynosTables}
						onTableClick={handleWynosTableClick}
						onClose={handleWynosModalClose}
					/>
				</div>
			)}
			{modalOpen && (
				<Modal
					open={modalOpen}
					onClose={handleModalClose}
					onConfirm={handleModalConfirm}
					onAddProduct={handleAddProduct}
				/>
			)}
			{menuManagerOpen && selectedTable && (
				<MenuManager
					tableName={selectedTable.name}
					onClose={handleMenuManagerClose}
					onAddProduct={handleAddProduct}
					resetTable={() => resetTable(selectedTable.id)}
					products={selectedTable.products}
				/>
			)}
			{selectedTableId === 0 && (
				<div>
					<Dostawa
						tableName="table1"
						setDeliveryDetails={(details) =>
							console.log("Delivery details:", details)
						}
						adjustedTotalAmount={100}
						resetTable={resetTable}
						onClose={() => {
							handleCloseDelivery();
						}}
						onCloseMenuManager={handleMenuManagerClose}
					/>
					<div>
						<h3>Stolik 1</h3>
						<p>
							Items:{" "}
							{tables.find((table) => table.id === 1)?.products.length || 0}
						</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default TableManager;

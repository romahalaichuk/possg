import React, { useState, useEffect, useRef } from "react";
import "./MenuManager.css";
import { products } from "./Produkt";
import PaymentManager from "./PaymentManager";
import Dodatki from "./Dodatki";
import Procent from "./Procent";
import Print from "./Print"; // Importujemy komponent Print
import {
	getSelectedItems,
	addSelectedItem,
	removeSelectedItem,
	clearSelectedItems,
	updateSelectedItems,
} from "./LocalStorageManager";

const categories = [
	"Przystawki",
	"Pizza",
	"Makaron",
	"Menu sezonowe",
	"Desery",
	"Napój bezalkoholowy",
	"Wina",
	"Drinki",
];

const MenuManager = ({ tableName, onClose, onAddProduct, resetTable }) => {
	const [selectedItems, setSelectedItems] = useState([]);
	const [showMenuItemsModal, setShowMenuItemsModal] = useState(false);
	const [showPaymentModal, setShowPaymentModal] = useState(false);
	const [showProcentModal, setShowProcentModal] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");
	const [searchResults, setSearchResults] = useState([]);
	const [menuItems, setMenuItems] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState(categories[0]);
	const [tableStatus, setTableStatus] = useState("free");
	const [currentTableName, setCurrentTableName] = useState(tableName);
	const [totalPrice, setTotalPrice] = useState(0);
	const [adjustments, setAdjustments] = useState({
		service: 0,
		discount: 0,
		addToBill: 0,
		subtractFromBill: 0,
	});
	const [printedItems, setPrintedItems] = useState([]);
	const addToPrintedItems = (itemId) => {
		setPrintedItems((prevItems) => [...prevItems, itemId]);
	};
	const [itemsToPrint, setItemsToPrint] = useState([]);

	const modalRef = useRef(null);
	const overlayRef = useRef(null);
	const searchBarRef = useRef(null);

	const calculateTotalItemsAndAmount = () => {
		let totalItems = 0;
		let totalAmount = 0;

		selectedItems.forEach((item) => {
			totalItems += item.quantity;
			let itemPrice = item.price;

			if (item.extras && item.extras.length > 0) {
				item.extras.forEach((extra) => {
					if (extra.category === "Dod") {
						itemPrice += extra.price;
					}
				});
			}

			totalAmount += itemPrice * item.quantity;
		});

		const discountAmount = (adjustments.discount / 100) * totalAmount;

		return { totalItems, totalAmount, discountAmount };
	};

	useEffect(() => {
		const storedSelectedItems = getSelectedItems(tableName);
		setSelectedItems(storedSelectedItems);
		setTableStatus(storedSelectedItems.length > 0 ? "occupied" : "free");
	}, [tableName]);

	useEffect(() => {
		const handleClickOutside = (e) => {
			if (
				modalRef.current &&
				!modalRef.current.contains(e.target) &&
				overlayRef.current &&
				overlayRef.current.contains(e.target)
			) {
				setShowMenuItemsModal(false);
				setShowProcentModal(false);
			}
			if (searchBarRef.current && !searchBarRef.current.contains(e.target)) {
				setSearchResults([]);
				setSearchTerm("");
			}
		};

		if (showMenuItemsModal || showProcentModal) {
			document.addEventListener("mousedown", handleClickOutside);
		} else {
			document.removeEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [showMenuItemsModal, showProcentModal]);

	const handleCategoryClick = (category) => {
		setSelectedCategory(category);
		const filteredItems = products.filter(
			(item) =>
				item.category === category &&
				(item.category !== "Pizza" ||
					!selectedItems.some((si) => si.id === item.id))
		);
		setMenuItems(filteredItems);
		setShowMenuItemsModal(true);
		setShowPaymentModal(false);
		setSearchResults([]);
		setSearchTerm("");
	};

	const handleSearchChange = (e) => {
		const term = e.target.value.trim().toLowerCase();
		setSearchTerm(e.target.value);

		if (term === "") {
			setSearchResults([]);
		} else {
			const filteredItems = products.filter((item) =>
				item.name.toLowerCase().includes(term)
			);
			setSearchResults(filteredItems);
		}
	};

	const handleItemSelect = (item) => {
		const existingPizza = selectedItems.find(
			(i) => i.category === "Pizza" && i.id === item.id
		);

		if (existingPizza) {
			const updatedItems = selectedItems.map((i) =>
				i === existingPizza ? { ...i, quantity: i.quantity + 1 } : i
			);
			setSelectedItems(updatedItems);
			updateSelectedItems(tableName, updatedItems);
			addSelectedItem(
				`${tableName}_${existingPizza.id}`,
				existingPizza.id,
				existingPizza.name,
				existingPizza.price,
				existingPizza.comment || ""
			);
		} else {
			const updatedItems = [...selectedItems, { ...item, quantity: 1 }];
			setSelectedItems(updatedItems);
			updateSelectedItems(tableName, updatedItems);
			addSelectedItem(
				`${tableName}_${item.id}`,
				item.id,
				item.name,
				item.price,
				item.comment || ""
			);
		}

		if (!printedItems.includes(item.id)) {
			addToPrintedItems(item.id);
		}

		// Dodaj produkt do listy do wydrukowania
		setItemsToPrint((prevItems) => [...prevItems, item]);
		calculateTotalPrice();
		setSearchResults([]);
		setShowMenuItemsModal(false);
	};

	const handleItemSelectWithComment = (item) => {
		const updatedItem = { ...item, comment: "" };
		handleItemSelect(updatedItem);
	};

	const handleItemRemove = (itemId) => {
		const indexToRemove = selectedItems.findIndex((item) => item.id === itemId);

		if (indexToRemove !== -1) {
			const updatedItems = [...selectedItems];

			if (updatedItems[indexToRemove].quantity > 1) {
				updatedItems[indexToRemove].quantity -= 1;
			} else {
				updatedItems.splice(indexToRemove, 1);
			}

			setSelectedItems(updatedItems);

			updateSelectedItems(tableName, updatedItems);

			removeSelectedItem(`${tableName}_${itemId}`);
		}
	};

	const handleCommentChange = (comment, itemId) => {
		const updatedItems = selectedItems.map((item) =>
			item.id === itemId ? { ...item, comment: comment } : item
		);
		setSelectedItems(updatedItems);
		updateSelectedItems(tableName, updatedItems);
	};

	const handleAddExtra = (itemId, extra) => {
		const updatedItems = selectedItems.map((item) =>
			item.id === itemId
				? {
						...item,
						extras: [...(item.extras || []), extra],
						price: item.price < extra.price ? extra.price : item.price,
				  }
				: item
		);
		setSelectedItems(updatedItems);
		updateSelectedItems(tableName, updatedItems);
		calculateTotalPrice();
	};

	const handleRemoveExtra = (itemId, extraId) => {
		const updatedItems = selectedItems.map((item) =>
			item.id === itemId
				? {
						...item,
						extras: item.extras.filter((extra) => extra.id !== extraId),
						price: calculateBasePrice(item, extraId),
				  }
				: item
		);
		setSelectedItems(updatedItems);
		updateSelectedItems(tableName, updatedItems);
		calculateTotalPrice();
	};

	const calculateBasePrice = (item, extraIdToRemove) => {
		let basePrice = item.price || 0;

		if (item.extras && item.extras.length > 0) {
			basePrice = item.extras.reduce((acc, extra) => {
				if (extra.id !== extraIdToRemove && extra.category === "Dod") {
					return acc + extra.price;
				}
				return acc;
			}, basePrice);
		}

		return basePrice;
	};

	const calculateTotalPrice = () => {
		let totalPrice = 0;
		selectedItems.forEach((item) => {
			let itemPrice = item.price || 0;

			if (item.extras && item.extras.length > 0) {
				item.extras.forEach((extra) => {
					if (extra.category === "Dod") {
						itemPrice += extra.price;
					}
				});
			}

			totalPrice += itemPrice * item.quantity;
		});
		setTotalPrice(totalPrice);
	};

	const handleRozliczClick = () => {
		setShowPaymentModal(true);
	};

	const handlePaymentComplete = () => {
		let servedWynosTables =
			JSON.parse(localStorage.getItem("servedWynosTables")) || [];
		if (!servedWynosTables.includes(tableName)) {
			servedWynosTables.push(tableName);
			localStorage.setItem(
				"servedWynosTables",
				JSON.stringify(servedWynosTables)
			);
		}

		clearSelectedItems(tableName);
		setSelectedItems([]);
		setShowPaymentModal(false);
		setTableStatus("free");
		setCurrentTableName(tableName);
		resetTable();
		onClose(totalPrice, adjustments);
	};

	const handleAdjustmentsSubmit = (adjustments) => {
		setAdjustments(adjustments);
		setShowProcentModal(false);
	};

	const handleOpenProcentModal = () => {
		setShowProcentModal(true);
	};

	const handleOverlayClick = (e) => {
		if (
			e.target.classList.contains("extras-modal-overlay") ||
			e.target.classList.contains("pizza-modal-overlay")
		) {
			setShowMenuItemsModal(false);
		}
	};

	const handleOverlayClickk = (e) => {
		if (e.target.classList.contains("procent-modal-overlay")) {
			setShowProcentModal(false);
		}
	};

	const { totalItems, totalAmount, discountAmount } =
		calculateTotalItemsAndAmount();
	const serviceCharge = (adjustments.service / 100) * totalAmount;

	const calculateAdjustedTotal = () => {
		let adjustedTotal = totalAmount;

		if (adjustments.service > 0) {
			adjustedTotal += (adjustments.service / 100) * totalAmount;
		}

		if (adjustments.discount > 0) {
			const discountAmount = (adjustments.discount / 100) * totalAmount;
			adjustedTotal -= discountAmount;
		}

		if (adjustments.addToBill > 0) {
			adjustedTotal += adjustments.addToBill;
		}

		if (adjustments.subtractFromBill > 0) {
			adjustedTotal -= adjustments.subtractFromBill;
		}

		return adjustedTotal;
	};

	return (
		<div className={`menu-manager-overlay ${tableStatus}`} ref={overlayRef}>
			<div className="menu-manager" ref={modalRef}>
				<div className="menu-header">
					<h2>{currentTableName}</h2>
				</div>
				<div className="category-buttons">
					{categories.map((category) => (
						<button
							key={category}
							onClick={() => handleCategoryClick(category)}
							className={category === selectedCategory ? "active" : ""}>
							{category}
						</button>
					))}
					<button onClick={handleOpenProcentModal}>%</button>
				</div>
				<div className="search-bar" ref={searchBarRef}>
					<input
						type="text"
						placeholder="Szukaj produktu..."
						value={searchTerm}
						onChange={handleSearchChange}
					/>
					<h3>Zamówienie stolika</h3>
					{searchTerm.trim() !== "" && (
						<div className="search-suggestions">
							{searchResults.map((item) => (
								<div
									key={item.id}
									className="search-suggestion"
									onClick={() => handleItemSelectWithComment(item)}>
									{item.name} - {item.price} zł
								</div>
							))}
						</div>
					)}
				</div>
				{showMenuItemsModal && (
					<div className="extras-modal-overlay" onClick={handleOverlayClick}>
						<div className="menu-items-modal">
							<div className="menu-items">
								<h3>Menu - {selectedCategory}</h3>
								<ul>
									{menuItems.map((item) => (
										<li key={item.id} onClick={() => handleItemSelect(item)}>
											{item.name} - {item.price} zł
										</li>
									))}
								</ul>

								<div className="modal-buttons">
									<button onClick={() => setShowMenuItemsModal(false)}>
										Zamknij
									</button>
								</div>
							</div>
						</div>
					</div>
				)}
				<div className="selected-items">
					<ul>
						{selectedItems.map((item, index) => (
							<li key={`${item.id}-${index}`}>
								{item.name} - {item.price ? item.price : 0} zł x {item.quantity}{" "}
								={" "}
								{(
									(item.price +
										(item.extras
											? item.extras.reduce(
													(sum, extra) =>
														extra.category === "Dod" ? sum + extra.price : sum,
													0
											  )
											: 0)) *
									item.quantity
								).toFixed(2)}{" "}
								zł
								<Dodatki
									selectedItemId={item.id}
									selectedItems={selectedItems}
									handleAddExtra={handleAddExtra}
									handleRemoveExtra={handleRemoveExtra}
									onItemClick={handleItemSelect}
								/>
								<input
									type="text"
									value={item.comment || ""}
									placeholder="Komentarz"
									onChange={(e) => handleCommentChange(e.target.value, item.id)}
									className="comment-input"
								/>
								<button onClick={() => handleItemRemove(item.id)}>-</button>
								<button onClick={() => handleItemSelect(item)}>+</button>
							</li>
						))}
					</ul>

					<p>Liczba pozycji: {totalItems}</p>
					<p>Suma: {calculateAdjustedTotal().toFixed(2)} zł</p>

					{adjustments.service > 0 && (
						<p style={{ color: "red" }}>
							Zastosowano {adjustments.service}% serwisu (+{" "}
							{serviceCharge.toFixed(2)} zł)
						</p>
					)}
					{adjustments.discount > 0 && (
						<p style={{ color: "blue" }}>
							Zastosowano {adjustments.discount.toFixed(2)} % zniżki (-{" "}
							{discountAmount.toFixed(2)} zł), do zapłaty:{" "}
							{(totalAmount - discountAmount).toFixed(2)} zł
						</p>
					)}

					{adjustments.addToBill > 0 && (
						<p style={{ color: "green" }}>
							Dodano {adjustments.addToBill.toFixed(2)} zł do rachunku (+{" "}
							{adjustments.addToBill.toFixed(2)} zł)
						</p>
					)}
					{adjustments.subtractFromBill > 0 && (
						<p style={{ color: "blue" }}>
							Odejmowano {adjustments.subtractFromBill.toFixed(2)} zł od
							rachunku (- {adjustments.subtractFromBill.toFixed(2)} zł)
						</p>
					)}
				</div>

				<div className="modal-buttons">
					<button onClick={onClose}>Zamknij</button>
					{selectedItems.length > 0 && (
						<button onClick={handleRozliczClick}>Rozlicz</button>
					)}
					<Print
						selectedItems={itemsToPrint}
						tableName={tableName}
						onClose={onClose}
					/>
				</div>
				{showPaymentModal && (
					<div className="payment-modal">
						<PaymentManager
							selectedItems={selectedItems}
							adjustedTotalAmount={calculateAdjustedTotal()}
							onClose={handlePaymentComplete}
						/>
					</div>
				)}
				{showProcentModal && (
					<div className="procent-modal-overlay" onClick={handleOverlayClickk}>
						<div className="procent-modal">
							<Procent
								onClose={() => setShowProcentModal(false)}
								onSubmit={handleAdjustmentsSubmit}
							/>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default MenuManager;

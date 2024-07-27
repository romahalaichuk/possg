import React, { useState, useEffect, useRef } from "react";
import "./MenuManager.css";
import { products } from "./Produkt";
import PaymentManager from "./PaymentManager";
import Dodatki from "./Dodatki";
import Procent from "./Procent";
import Print from "./Print";

import Dostawa from "./Dostawa";
import {
	getSelectedItems,
	clearSelectedItems,
	updateSelectedItems,
} from "./LocalStorageManager";

const categories = [
	"Pizza",
	"Makaron",
	"Wina",
	"Piwo",
	"Desery",
	"Drinki",
	"Napój bezalkoholowy",
	"Kawa",
];

const MenuManager = ({ tableName, onClose, onAddProduct, resetTable }) => {
	const [minutesToPickup, setMinutesToPickup] = useState("");
	const [pickupTime, setPickupTime] = useState("");
	const [customPickupTime, setCustomPickupTime] = useState("");
	const [selectedItems, setSelectedItems] = useState([]);
	const [showMenuItemsModal, setShowMenuItemsModal] = useState(false);
	const [showPaymentModal, setShowPaymentModal] = useState(false);
	const [showProcentModal, setShowProcentModal] = useState(false);
	const [showWynosModal, setShowWynosModal] = useState(false);
	const [showDostawaModal, setShowDostawaModal] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");
	const [pickupTimeData, setPickupTimeData] = useState(null);
	const [isWynos, setIsWynos] = useState(false);
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
	const handleOpenWynosModal = () => {
		if (!showWynosModal) {
			setDeliveryMode("Wynos");
			setShowWynosModal(true);
			setShowDostawaModal(false);
			setIsWynos(true);
		}
	};

	const handleOpenDostawaModal = () => {
		if (!showDostawaModal) {
			setDeliveryMode("Dostawa");
			setShowDostawaModal(true);
			setShowWynosModal(false);
			setShowDeliveryDetails(true);
			setIsWynos(false);
		}
	};

	const modalRef = useRef(null);
	const overlayRef = useRef(null);
	const searchBarRef = useRef(null);
	const [showDeliveryDetails, setShowDeliveryDetails] = useState(false);

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

		if (
			showMenuItemsModal ||
			showProcentModal ||
			showWynosModal ||
			showDostawaModal
		) {
			document.addEventListener("mousedown", handleClickOutside);
		} else {
			document.removeEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [showMenuItemsModal, showProcentModal, showWynosModal, showDostawaModal]);
	const [deliveryMode, setDeliveryMode] = useState(null);

	const handleCategoryClick = (category) => {
		setSelectedCategory(category);

		let filteredItems = [];

		if (deliveryMode === "Wynos" || deliveryMode === "Dostawa") {
			if (category === "Pizza") {
				filteredItems = products.filter((item) => item.category === "Pizza");
			} else {
				filteredItems = products.filter((item) => item.category === category);
			}
		} else {
			filteredItems = products.filter((item) => {
				const isPizza32 = item.category === "Pizza" && item.name.includes("32");
				return (
					item.category === category && (category !== "Pizza" || isPizza32)
				);
			});
		}

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
			const filteredItems = products.filter((item) => {
				const isPizza32 = item.category === "Pizza" && item.name.includes("32");
				const isDifferentSizePizza =
					item.category === "Pizza" && !item.name.includes("32");

				return (
					item.name.toLowerCase().includes(term) &&
					(deliveryMode === "Wynos" || deliveryMode === "Dostawa"
						? item.category !== "Pizza" || isDifferentSizePizza
						: item.category !== "Pizza" || isPizza32)
				);
			});
			setSearchResults(filteredItems);
		}
	};

	const handleItemSelect = (item) => {
		const existingItem = selectedItems.find((i) => i.id === item.id);

		let updatedItems;
		if (existingItem) {
			updatedItems = selectedItems.map((i) =>
				i.id === existingItem.id ? { ...i, quantity: i.quantity + 1 } : i
			);
		} else {
			updatedItems = [...selectedItems, { ...item, quantity: 1 }];
		}

		setSelectedItems(updatedItems);
		updateSelectedItems(tableName, updatedItems);

		if (!printedItems.includes(item.id)) {
			addToPrintedItems(item.id);
		}

		calculateTotalPrice();
		setSearchResults([]);
		setShowMenuItemsModal(false);
		setSearchTerm("");
	};

	const handleItemSelectWithComment = (item) => {
		const updatedItem = { ...item, comment: "" };
		handleItemSelect(updatedItem);
		setSearchTerm("");
	};

	const handleItemRemove = (itemId) => {
		const updatedItems = selectedItems.reduce((acc, item) => {
			if (item.id === itemId) {
				if (item.quantity > 1) {
					acc.push({ ...item, quantity: item.quantity - 1 });
				}
			} else {
				acc.push(item);
			}
			return acc;
		}, []);

		setSelectedItems(updatedItems);
		updateSelectedItems(tableName, updatedItems);
	};

	const handleCommentChange = (comment, itemId) => {
		const updatedItems = selectedItems.map((item) =>
			item.id === itemId ? { ...item, comment } : item
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
	const handleAddComment = (comment) => {
		if (selectedItems.length > 0) {
			const updatedItems = selectedItems.map((item) =>
				item.category === "Pizza" ? { ...item, comment } : item
			);
			setSelectedItems(updatedItems);
			updateSelectedItems(tableName, updatedItems);
		}
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

		const updatedItems = selectedItems.map((item) =>
			item.name === "Pizza" ? { ...item, comment: adjustments.comment } : item
		);

		setSelectedItems(updatedItems);
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

	const handleMinutesChange = (e) => {
		const minutes = parseInt(e.target.value, 10);
		setMinutesToPickup(minutes);
		calculatePickupTime(minutes, customPickupTime);
		setPickupTimeData({ minutesToPickup: minutes, customPickupTime });
	};

	const handleCustomTimeChange = (e) => {
		const time = e.target.value;
		if (time.length === 2 && !time.includes(":")) {
			setCustomPickupTime(time + ":");
		} else {
			setCustomPickupTime(time);
		}
		calculatePickupTime(minutesToPickup, time);
		setPickupTimeData({ minutesToPickup, customPickupTime: time });
	};

	const calculatePickupTime = (minutes, customTime) => {
		const currentTime = new Date();
		let pickup;

		if (customTime) {
			const [hours, mins] = customTime.split(":");
			pickup = new Date(
				currentTime.getFullYear(),
				currentTime.getMonth(),
				currentTime.getDate(),
				parseInt(hours, 10),
				parseInt(mins, 10)
			);
		} else {
			pickup = new Date(currentTime.getTime() + minutes * 60000);
		}

		if (!isNaN(pickup.getTime())) {
			const formattedPickupTime = pickup.toLocaleTimeString([], {
				hour: "2-digit",
				minute: "2-digit",
			});
			setPickupTime(formattedPickupTime);
		} else {
			setPickupTime("Invalid Date");
		}
	};
	// jdjexjsjmldk

	const [deliveryDetails, setDeliveryDetails] = useState({
		address: "",
		apartment: "",
		floor: "",
		comment: "",
		paymentMethod: "",
	});

	return (
		<>
			<div className={`menu-manager-overlay ${tableStatus}`} ref={overlayRef}>
				<div className="menu-manager" ref={modalRef}>
					{/* Treść modalu */}
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
									{item.name} - {item.price ? item.price : 0} zł x{" "}
									{item.quantity} ={" "}
									{(
										(item.price +
											(item.extras
												? item.extras.reduce(
														(sum, extra) =>
															extra.category === "Dod"
																? sum + extra.price
																: sum,
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
										onChange={(e) =>
											handleCommentChange(e.target.value, item.id)
										}
										className="comment-input"
									/>
									<button onClick={() => handleItemRemove(item.id)}>-</button>
									<button onClick={() => handleItemSelect(item)}>+</button>
								</li>
							))}
						</ul>

						{/* Dodane formularze Wynos i Dostawa */}
						{showWynosModal && (
							<div className="order-type-container">
								<h3 style={{ margin: "3px 0" }}>Wynos:</h3>
								<h3>Odbiór za ile minut?</h3>
								<input
									type="number"
									value={minutesToPickup}
									onChange={handleMinutesChange}
									min="1"
									required
									className="time-input"
								/>
								<h3>Odbiór na </h3>
								<input
									type="text"
									value={customPickupTime}
									onChange={handleCustomTimeChange}
									placeholder="np. 21:35"
									className="time-input"
								/>
								{pickupTime && (
									<p
										className={`pickup-time ${
											customPickupTime.includes(":") ? "pickup-time-na" : ""
										}`}>
										{pickupTime === "Invalid Date"
											? "Odbiór na: Invalid Date"
											: customPickupTime.includes(":")
											? `Odbiór na: ${pickupTime}`
											: `Odbiór do: ${pickupTime}`}
									</p>
								)}
								<button onClick={() => setShowWynosModal(false)}>
									Zamknij
								</button>
							</div>
						)}
						{showDostawaModal && (
							<div className="order-type-container">
								<Dostawa
									selectedItems={selectedItems}
									tableName={tableName}
									adjustedTotalAmount={calculateAdjustedTotal()}
									onClose={() => setShowDostawaModal(false)}
									setDeliveryDetails={setDeliveryDetails}
								/>
								<div className="order-type-container">
									<h3>Dostawa DO</h3>
									<input
										type="number"
										value={minutesToPickup}
										onChange={handleMinutesChange}
										min="1"
										required
										className="time-input"
									/>
									<h3>Dostawa NA</h3>
									<input
										type="text"
										value={customPickupTime}
										onChange={handleCustomTimeChange}
										placeholder="np. 21:40"
										className="time-input"
									/>
									{pickupTime && (
										<p
											className={`pickup-time ${
												customPickupTime.includes(":") ? "pickup-time-na" : ""
											}`}>
											{pickupTime === "Invalid Date"
												? "Dostawa na: Invalid Date"
												: customPickupTime.includes(":")
												? `Dostawa DO: ${pickupTime}`
												: `Dostawa NA: ${pickupTime}`}
										</p>
									)}
								</div>
							</div>
						)}

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
							selectedItems={selectedItems}
							tableName={tableName}
							pickupTime={pickupTime}
							customPickupTime={customPickupTime}
							pickupTimeData={pickupTimeData}
							deliveryDetails={deliveryDetails}
							showDeliveryDetails={showDeliveryDetails}
							onClose={onClose}
							totalAmount={totalAmount}
							discountAmount={discountAmount}
							serviceCharge={serviceCharge}
							adjustments={adjustments}
							calculateAdjustedTotal={calculateAdjustedTotal}
							isWynos={isWynos}
						/>
					</div>
					{showPaymentModal && (
						<div className="payment-modal">
							<PaymentManager
								selectedItems={selectedItems}
								adjustedTotalAmount={calculateAdjustedTotal()}
								onClose={handlePaymentComplete}
								tableName={currentTableName}
								discountAmount={discountAmount}
								serviceCharge={serviceCharge}
								adjustments={adjustments}
								calculateAdjustedTotal={calculateAdjustedTotal}
								addToBill={adjustments.addToBill} //
								subtractFromBill={adjustments.subtractFromBill}
							/>
						</div>
					)}
					{showProcentModal && (
						<div
							className="procent-modal-overlay"
							onClick={handleOverlayClickk}>
							<div className="procent-modal">
								<Procent
									onClose={() => setShowProcentModal(false)}
									onSubmit={handleAdjustmentsSubmit}
									onAddComment={handleAddComment}
								/>
							</div>
						</div>
					)}
				</div>
			</div>
			<div className="button-container">
				<button onClick={handleOpenWynosModal}>Wynos</button>
				<button onClick={handleOpenDostawaModal}>Dostawa</button>
			</div>
		</>
	);
};

export default MenuManager;

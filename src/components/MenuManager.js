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
	const [discountMessage, setDiscountMessage] = useState("");
	const [showRozliczButton, setShowRozliczButton] = useState(true);

	const [adjustments, setAdjustments] = useState({
		service: 0,
		discount: 0,
		addToBill: 0,
		subtractFromBill: 0,
		napojPromotion: null,
		trzeciaPizzaPromotion: null,
	});
	// eslint-disable-next-line no-unused-vars
	const [isAnyModalOpen, setIsAnyModalOpen] = useState(false);
	const [option, setOption] = useState("");
	const [showCheeseButton, setShowCheeseButton] = useState(false);
	const [printedItems, setPrintedItems] = useState([]);
	const addToPrintedItems = (itemId) => {
		setPrintedItems((prevItems) => [...prevItems, itemId]);
	};
	const generateUniqueId = () => `item-${Date.now()}`;
	const [removedItems, setRemovedItems] = useState([]);

	const handleOpenWynosModal = () => {
		if (!showWynosModal) {
			setDeliveryMode("Wynos");
			setShowWynosModal(true);
			setShowDostawaModal(false);
			setIsWynos(true);
			setShowCheeseButton(true);
			setOption("Wynos");
			setIsAnyModalOpen(true);
		}
	};

	const handleOpenDostawaModal = () => {
		if (!showDostawaModal) {
			setDeliveryMode("Dostawa");
			setShowDostawaModal(true);
			setShowWynosModal(false);
			setShowDeliveryDetails(true);
			setIsWynos(false);
			setShowCheeseButton(true);
			setOption("Dostawa");
			setIsAnyModalOpen(true);
			setShowRozliczButton(false);
		}
	};

	const [showNapojList, setShowNapojList] = useState(false);
	const [napoj, setNapoj] = useState(null);
	const modalRef = useRef(null);
	const overlayRef = useRef(null);
	const searchBarRef = useRef(null);
	const [showDeliveryDetails, setShowDeliveryDetails] = useState(false);
	const handleNapojSelect = (napoj) => {
		setNapoj(napoj);
		handleAddProduct(napoj);
		setShowNapojList(false);
	};

	const calculateTotalItemsAndAmount = () => {
		let totalItems = 0;
		let totalAmount = 0;

		selectedItems.forEach((item) => {
			totalItems += item.quantity;
			let itemPrice = item.price;

			if (item.extras && item.extras.length > 0) {
				item.extras.forEach((extra) => {
					itemPrice += extra.price;
				});
			}

			totalAmount += itemPrice * item.quantity;
		});

		const discountAmount = (adjustments.discount / 100) * totalAmount;

		return { totalItems, totalAmount, discountAmount };
	};

	const applyDiscountToSecondPizza = () => {
		const pizzas = selectedItems.filter((item) => item.category === "Pizza");
		if (pizzas.length >= 2) {
			const sortedPizzas = [...pizzas].sort((a, b) => a.price - b.price);
			const cheapestPizza = sortedPizzas[0];

			const updatedItems = selectedItems.map((item) =>
				item.id === cheapestPizza.id
					? { ...item, price: item.price * 0.5 }
					: item
			);

			setSelectedItems(updatedItems);
			updateSelectedItems(tableName, updatedItems);
			calculateTotalPrice();

			setDiscountMessage("Druga pizza (tańsza) – 50%");
		}
	};

	useEffect(() => {
		const storedSelectedItems = getSelectedItems(tableName);
		setSelectedItems(storedSelectedItems);
		setTableStatus(storedSelectedItems.length > 0 ? "occupied" : "free");
	}, [tableName]);

	useEffect(() => {
		const handleClickOutside = (e) => {
			if (
				(showMenuItemsModal &&
					modalRef.current &&
					!modalRef.current.contains(e.target) &&
					overlayRef.current &&
					!overlayRef.current.contains(e.target)) ||
				(showProcentModal &&
					modalRef.current &&
					!modalRef.current.contains(e.target) &&
					overlayRef.current &&
					!overlayRef.current.contains(e.target)) ||
				(showWynosModal &&
					modalRef.current &&
					!modalRef.current.contains(e.target) &&
					overlayRef.current &&
					!overlayRef.current.contains(e.target))
			) {
				setShowMenuItemsModal(false);
				setShowProcentModal(false);
				setShowWynosModal(false);
				setShowDostawaModal(false);
			}

			if (searchBarRef.current && !searchBarRef.current.contains(e.target)) {
				setSearchResults([]);
				setSearchTerm("");
			}
		};

		const handleKeyDown = (e) => {
			if (e.key === "Enter") {
				if (showWynosModal) setShowWynosModal(false);
				if (showDostawaModal) setShowDostawaModal(false);
				if (showProcentModal) setShowProcentModal(false);
				if (showMenuItemsModal) setShowMenuItemsModal(false);
			}
		};

		if (
			showMenuItemsModal ||
			showProcentModal ||
			showWynosModal ||
			showDostawaModal
		) {
			document.addEventListener("mousedown", handleClickOutside);
			document.addEventListener("keydown", handleKeyDown);
		} else {
			document.removeEventListener("mousedown", handleClickOutside);
			document.removeEventListener("keydown", handleKeyDown);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
			document.removeEventListener("keydown", handleKeyDown);
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

	const normalizeString = (str) => {
		return str
			.normalize("NFD")
			.replace(/[\u0300-\u036f]/g, "")
			.replace(/ł/g, "l")
			.replace(/Ł/g, "L")
			.toLowerCase();
	};

	const handleSearchChange = (e) => {
		const term = normalizeString(e.target.value.trim());
		setSearchTerm(e.target.value);

		if (term === "") {
			setSearchResults([]);
		} else {
			const filteredItems = products.filter((item) => {
				const isPizza32 = item.category === "Pizza" && item.name.includes("32");
				const normalizedItemName = normalizeString(item.name);

				return (
					normalizedItemName.includes(term) &&
					(deliveryMode === "Wynos" || deliveryMode === "Dostawa"
						? item.category !== "Pizza" || true
						: item.category !== "Pizza" || isPizza32)
				);
			});
			setSearchResults(filteredItems);
		}
	};

	const handleItemSelect = (item) => {
		const existingItem = selectedItems.find(
			(i) => i.originalId === item.id && i.id === item.uniqueId
		);

		let updatedItems;
		if (existingItem) {
			updatedItems = selectedItems.map((i) =>
				i.id === existingItem.id ? { ...i, quantity: i.quantity + 1 } : i
			);
		} else {
			updatedItems = [
				...selectedItems,
				{
					...item,
					uniqueId: generateUniqueId(),
					quantity: 1,
					originalId: item.id,
				},
			];
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
	useEffect(() => {
		const savedRemovedItems = localStorage.getItem(`removedItems_${tableName}`);
		if (savedRemovedItems) {
			setRemovedItems(JSON.parse(savedRemovedItems));
		}
	}, [tableName]);

	// const handleItemRemove = (uniqueId) => {
	// 	const itemToRemove = selectedItems.find(
	// 		(item) => item.uniqueId === uniqueId
	// 	);

	// 	const updatedItems = selectedItems.filter(
	// 		(item) => item.uniqueId !== uniqueId
	// 	);

	// 	const updatedRemovedItems = [
	// 		...removedItems,
	// 		{ ...itemToRemove, isRemoved: true, comment: "" },
	// 	];

	// 	setSelectedItems(updatedItems);
	// 	setRemovedItems(updatedRemovedItems);
	// 	updateSelectedItems(tableName, updatedItems);
	// };
	// Funkcja do obsługi dodawania komentarza przed usunięciem
	const handleAddCommentBeforeRemove = (uniqueId) => {
		const comment = prompt("Podaj powód usunięcia produktu:");
		if (comment) {
			const itemToRemove = selectedItems.find(
				(item) => item.uniqueId === uniqueId
			);
			const updatedRemovedItems = [
				...removedItems,
				{ ...itemToRemove, isRemoved: true, comment: comment },
			];

			const updatedItems = selectedItems.filter(
				(item) => item.uniqueId !== uniqueId
			);

			setSelectedItems(updatedItems);
			setRemovedItems(updatedRemovedItems);

			localStorage.setItem(
				`removedItems_${tableName}`,
				JSON.stringify(updatedRemovedItems)
			);

			updateSelectedItems(tableName, updatedItems);
		}
	};

	const handleCommentChange = (comment, uniqueId) => {
		const updatedItems = selectedItems.map((item) =>
			item.uniqueId === uniqueId ? { ...item, comment } : item
		);
		setSelectedItems(updatedItems);
		updateSelectedItems(tableName, updatedItems);
	};
	const handleAddExtra = (itemId, extra) => {
		const updatedItems = selectedItems.map((item) => {
			if (item.id === itemId) {
				if (extra.category === "Pizza") {
					const maxPrice = Math.max(item.price, extra.price);

					return {
						...item,
						extras: [...(item.extras || []), { ...extra, price: 0 }],
						price: maxPrice,
					};
				} else {
					return {
						...item,
						extras: [...(item.extras || []), extra],
					};
				}
			}
			return item;
		});
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
	const handleAddProduct = (product) => {
		const existingItem = selectedItems.find(
			(item) => item.originalId === product.id && item.id === product.uniqueId
		);

		let updatedItems;
		if (existingItem) {
			updatedItems = selectedItems.map((i) =>
				i.id === existingItem.id ? { ...i, quantity: i.quantity + 1 } : i
			);
		} else {
			const addedTime = new Date().toLocaleTimeString([], {
				hour: "2-digit",
				minute: "2-digit",
			});
			updatedItems = [
				...selectedItems,
				{
					...product,
					uniqueId: generateUniqueId(),
					quantity: 1,
					originalId: product.id,
					addedTime: addedTime,
				},
			];
		}

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
			let itemPrice = item.discountedPrice || item.price || 0;

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
		const currentTime = new Date().toISOString();

		const orderDetails = {
			tableName: currentTableName,
			selectedItems,
			totalPrice,
			adjustments,
			orderTime: currentTime,
		};

		localStorage.setItem(`order_${tableName}`, JSON.stringify(orderDetails));

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
	const handleCloseMenuItemsModal = () => {
		setShowMenuItemsModal(false);
	};
	const handleAdjustmentsSubmit = (adjustments) => {
		setAdjustments(adjustments);
		setShowProcentModal(false);

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
			e.target.classList.contains("procent-modal-overlay") ||
			e.target.classList.contains("order-type-container-overlay") ||
			e.target.classList.contains("dostawa-modal-overlay")
		) {
			setShowMenuItemsModal(false);
			setShowProcentModal(false);
			setShowWynosModal(false);
			setShowDostawaModal(false);
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
								<li key={item.uniqueId}>
									{item.name} - {item.price ? item.price : 0} zł x{" "}
									{item.quantity} =
									<span className="final-amount">
										{(
											((item.price || 0) +
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
									</span>
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
											handleCommentChange(e.target.value, item.uniqueId)
										}
										className="comment-input"
									/>
									<button
										onClick={() => handleAddCommentBeforeRemove(item.uniqueId)}>
										-
									</button>
									<button onClick={() => handleItemSelect(item)}>+</button>
								</li>
							))}

							{napoj && (
								<li>
									{napoj.name} - {napoj.price} zł
								</li>
							)}
						</ul>

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
								<button
									onClick={() => {
										setShowWynosModal(false);
									}}>
									Zamknij
								</button>
							</div>
						)}

						{showDostawaModal && (
							<Dostawa
								onClose={handleCloseMenuItemsModal}
								setDeliveryDetails={setDeliveryDetails}
								tableName={tableName}
								resetTable={resetTable}
							/>
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
						{discountMessage && (
							<p style={{ color: "red" }}>{discountMessage}</p>
						)}
						<div className="removed-items">
							<h3>Usunięte produkty</h3>
							<ul>
								{removedItems.map((item, index) => (
									<li
										key={item.uniqueId}
										style={{ textDecoration: "line-through" }}>
										{item.name} - {item.price} zł (Powód: {item.comment})
									</li>
								))}
							</ul>
						</div>
					</div>
					<div className="modal-buttons">
						<button onClick={onClose}>Zamknij</button>

						{showRozliczButton && (
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
							discountMessage={discountMessage}
							resetTable={resetTable}
						/>
					</div>
					{showPaymentModal && (
						<div className="payment-modal">
							<PaymentManager
								selectedItems={selectedItems}
								removedItems={removedItems}
								adjustedTotalAmount={calculateAdjustedTotal()}
								onClose={handlePaymentComplete}
								tableName={currentTableName}
								discountAmount={discountAmount}
								calculateAdjustedTotal={calculateAdjustedTotal}
								serviceCharge={serviceCharge}
								adjustments={adjustments}
								addToBill={adjustments.addToBill}
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
									selectedItems={selectedItems}
									setSelectedItems={setSelectedItems}
									onClose={() => {
										setShowProcentModal(false);
									}}
									onSubmit={handleAdjustmentsSubmit}
									onAddComment={handleAddComment}
									showCheeseButton={showCheeseButton}
									applyDiscountToSecondPizza={applyDiscountToSecondPizza}
									option={option}
									onAddProduct={handleAddProduct}
									showNapojList={showNapojList}
									handleNapojSelect={handleNapojSelect}
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

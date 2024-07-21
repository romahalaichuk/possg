// Retrieves the list of selected items for a given table from local storage
export const getSelectedItems = (tableName) => {
	const storedItems = localStorage.getItem(tableName);
	return storedItems ? JSON.parse(storedItems) : [];
};

// Adds or updates a product in the selected items list for a given table
export const addSelectedItem = (
	tableName,
	productId,
	productName,
	productPrice,
	productComment = ""
) => {
	const selectedItems = getSelectedItems(tableName);
	const existingItemIndex = selectedItems.findIndex(
		(item) => item.id === productId
	);

	if (existingItemIndex !== -1) {
		selectedItems[existingItemIndex].quantity += 1;
	} else {
		selectedItems.push({
			id: productId,
			name: productName,
			price: productPrice,
			quantity: 1,
			comment: productComment,
			extras: [],
		});
	}

	localStorage.setItem(tableName, JSON.stringify(selectedItems));
};

// Removes or updates a product's quantity in the selected items list for a given table
export const removeSelectedItem = (tableName, productId) => {
	const selectedItems = getSelectedItems(tableName);
	const updatedItems = selectedItems
		.map((item) => {
			if (item.id === productId) {
				item.quantity -= 1;
			}
			return item;
		})
		.filter((item) => item.quantity > 0);

	localStorage.setItem(tableName, JSON.stringify(updatedItems));
};

// Clears all selected items for a given table
export const clearSelectedItems = (tableName) => {
	localStorage.removeItem(tableName);
};

// Updates the list of selected items for a given table
export const updateSelectedItems = (tableName, items) => {
	localStorage.setItem(tableName, JSON.stringify(items));
};

// Adds an extra to a product's extras list for a given table
export const addExtraToItem = (tableName, productId, extra) => {
	const selectedItems = getSelectedItems(tableName);
	const itemIndex = selectedItems.findIndex((item) => item.id === productId);

	if (itemIndex !== -1) {
		const item = selectedItems[itemIndex];
		if (!item.extras) {
			item.extras = [];
		}
		item.extras.push(extra);
		localStorage.setItem(tableName, JSON.stringify(selectedItems));
	}
};

// Removes an extra from a product's extras list for a given table
export const removeExtraFromItem = (tableName, productId, extraId) => {
	const selectedItems = getSelectedItems(tableName);
	const itemIndex = selectedItems.findIndex((item) => item.id === productId);

	if (itemIndex !== -1) {
		const item = selectedItems[itemIndex];
		item.extras = item.extras.filter((extra) => extra.id !== extraId);
		localStorage.setItem(tableName, JSON.stringify(selectedItems));
	}
};

// Retrieves details for a given table including discount and payment method
export const getTableDetails = (tableName) => {
	const storedItems = getSelectedItems(tableName);
	const discount = parseFloat(
		localStorage.getItem(`${tableName}_discount`) || 0
	);
	const paymentMethod =
		localStorage.getItem(`${tableName}_paymentMethod`) || "Nieznana";
	const totalAmount =
		storedItems.reduce((sum, item) => sum + item.price * item.quantity, 0) -
		discount;

	console.log(`Table Details for ${tableName}:`, {
		name: tableName,
		products: storedItems,
		discount,
		totalAmount,
		paymentMethod,
	});

	return {
		name: tableName,
		products: storedItems,
		discount,
		totalAmount,
		paymentMethod,
	};
};

// Calculates the total number of tables with specific statuses
export const calculateTotalTablesDuringDay = (tables) => {
	const occupiedTables = tables.filter(
		(table) =>
			table.status === "occupied" ||
			table.status === "paid" ||
			table.status === "paid-card"
	);
	return occupiedTables.length;
};

// Calculates the total number of wynos (takeaways) with specific status
export const calculateTotalWynos = (wynosTables) => {
	const occupiedWynos = wynosTables.filter(
		(table) => table.status === "occupied"
	);
	return occupiedWynos.length;
};

// Calculates the total amount for both tables and wynos
export const calculateTotalAmount = (tables, wynosTables) => {
	const totalAmountTables = tables.reduce(
		(accumulator, currentTable) =>
			accumulator +
			currentTable.products.reduce(
				(accumulator, product) =>
					accumulator + product.price * product.quantity,
				0
			) -
			currentTable.discount,
		0
	);

	const totalAmountWynos = wynosTables.reduce(
		(accumulator, currentTable) =>
			accumulator +
			currentTable.products.reduce(
				(accumulator, product) =>
					accumulator + product.price * product.quantity,
				0
			) -
			currentTable.discount,
		0
	);

	return totalAmountTables + totalAmountWynos;
};

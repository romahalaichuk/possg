// ParentComponent.js
import React, { useState } from "react";
import WaiterProfileManager from "./WaiterProfileManager";
import PaymentManager from "./PaymentManager";

const ParentComponent = () => {
	const [selectedProfile, setSelectedProfile] = useState(null);

	const handleProfileSelect = (profile) => {
		console.log("Odebrany profil w rodzicu:", profile);
		setSelectedProfile(profile);
	};

	const handleClosePaymentManager = (paymentDetails) => {
		console.log("Szczegóły płatności:", paymentDetails);
		// Możesz tutaj obsłużyć zamknięcie PaymentManager i inne logiki
	};

	return (
		<div>
			<WaiterProfileManager onProfileSelect={handleProfileSelect} />
			{selectedProfile && (
				<PaymentManager
					tableName={selectedProfile.name}
					waiterName={selectedProfile.name} // Ustawienie nazwy kelnera
					adjustedTotalAmount={100}
					onClose={handleClosePaymentManager}
					selectedItems={[]}
					removedItems={[]}
				/>
			)}
		</div>
	);
};

export default ParentComponent;

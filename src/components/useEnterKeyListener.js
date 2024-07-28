import { useEffect } from "react";

const useEnterKeyListener = () => {
	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === "Enter") {
				event.preventDefault();
				const form = event.target.form;
				if (!form) return;
				const index = Array.prototype.indexOf.call(form.elements, event.target);
				if (form.elements[index + 1]) {
					form.elements[index + 1].focus();
				}
			}
		};

		document.addEventListener("keydown", handleKeyDown);
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, []);
};

export default useEnterKeyListener;

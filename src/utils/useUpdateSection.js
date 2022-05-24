import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function useUpdateSection() {
	const { setUserAuth } = useContext(AuthContext);

	function updateSection(newSection) {
		setUserAuth((prevState) => ({
			...prevState,
			lastSection: newSection,
		}));
		window.localStorage.setItem("last_section", newSection);
	}

	return [updateSection];
}

export default useUpdateSection;

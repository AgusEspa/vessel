import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function useUpdateStage() {
	const { userAuth, setUserAuth } = useContext(AuthContext);

	function updateStage(newStage) {
		if (userAuth.lastStage >= newStage) return;
		else {
			setUserAuth((prevState) => ({
				...prevState,
				lastStage: newStage,
			}));
			window.localStorage.setItem("last_stage", newStage);
		}
	}

	return [updateStage];
}

export default useUpdateStage;

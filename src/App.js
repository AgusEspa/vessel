import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Stage from "./components/Stage";

function App() {
	const [userAlias, setUserAlias] = useState("");
	const [stages, setStages] = useState({ active: "", last: "" });

	useEffect(() => {
		const fetchedUserAlias = window.localStorage.getItem("alias");
		console.log(fetchedUserAlias);
		if (fetchedUserAlias != null) {
			setUserAlias(fetchedUserAlias);
		}
	}, []);

	useEffect(() => {
		const lastStage = window.localStorage.getItem("last_stage");
		if (lastStage !== null || lastStage !== undefined) setStages(lastStage);
	}, []);

	return (
		<>
			<Navbar activeStage={userAlias} />
			<Landing setUserAlias={setUserAlias} />
		</>
	);
}

export default App;

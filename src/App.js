import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Stage from "./components/Stage";

function App() {
	const [userAlias, setUserAlias] = useState("");
	const [activeStage, setActiveStage] = useState("FreshLanding");
	const [lastStage, setLastStage] = useState("");

	useEffect(() => {
		const fetchedUserAlias = window.localStorage.getItem("alias");
		if (fetchedUserAlias != null) {
			setUserAlias(fetchedUserAlias);
			setActiveStage("ReturnLanding");
		}
	}, []);

	useEffect(() => {
		const lastStage = window.localStorage.getItem("last_stage");
		if (lastStage !== null || lastStage !== undefined)
			setLastStage(lastStage);
	}, []);

	return (
		<>
			<Navbar activeStage={activeStage} setActiveStage={activeStage} />
			<Landing setUserAlias={setUserAlias} />
		</>
	);
}

export default App;

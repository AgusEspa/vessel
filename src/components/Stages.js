import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Navbar from "./Navbar";
import Stage90101746 from "./stages/Stage90000631";

const Stages = (props) => {
	const { userAuth } = useContext(AuthContext);

	return (
		<>
			<Navbar userExists={true} />

			{props.id === 90101746 && <Stage90101746 />}
		</>
	);
};

export default Stages;

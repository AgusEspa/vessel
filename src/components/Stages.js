import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Navbar from "./Navbar";
import Stage101 from "./stages/Stage101";
import styles from "../styles/Main.module.scss";

const Stages = (props) => {
	const { userAuth } = useContext(AuthContext);

	return (
		<>
			<Navbar userExists={true} />

			{props.id === 101 && <Stage101 />}
		</>
	);
};

export default Stages;

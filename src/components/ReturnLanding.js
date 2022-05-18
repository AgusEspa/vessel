import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Navbar from "./Navbar";
import styles from "../styles/Main.module.scss";

const FreshLanding = (props) => {
	const { userAuth } = useContext(AuthContext);

	return (
		<>
			<Navbar userExists={true} />

			<div className={styles.landingContainer}></div>
		</>
	);
};

export default FreshLanding;

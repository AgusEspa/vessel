import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Navbar from "./Navbar";
import styles from "../styles/Main.module.scss";
import Stage90063 from "./stages/Stage90063";
import Stage90146 from "./stages/Stage90146";

const Stages = (props) => {
	const { userAuth } = useContext(AuthContext);

	return (
		<>
			<Navbar userExists={true} />

			{props.id === 90063 && <Stage90063 />}
			{props.id === 90146 && <Stage90146 />}

			<footer>
				<div className={styles.footerBox}>
					<p>Agustin Espana &copy;2022 Stockholm, Sweden</p>
				</div>
			</footer>
		</>
	);
};

export default Stages;

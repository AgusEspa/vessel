import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import styles from "../../styles/Main.module.scss";

const Stage90146 = () => {
	const { userAuth, setUserAuth } = useContext(AuthContext);

	const stageId = 90101746;
	const currentStage = userAuth.lastStage;
	const currentSection = userAuth.lastSection;

	return (
		<main>
			{(currentStage > stageId || currentSection >= 1) && (
				<div className={styles.sectionBox}>title1</div>
			)}
			{(currentStage > stageId || currentSection >= 2) && (
				<div className={styles.sectionBox}>title2</div>
			)}
		</main>
	);
};

export default Stage90146;

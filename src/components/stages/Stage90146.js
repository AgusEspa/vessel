import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import styles from "../../styles/Main.module.scss";

const Stage90146 = () => {
	const { userAuth, setUserAuth } = useContext(AuthContext);

	const stageId = 90146;
	const currentStage = userAuth.lastStage;
	const currentSection = userAuth.lastSection;

	return (
		<main className={styles.stageContainer}>
			{(currentStage > stageId || currentSection >= 1) && (
				<div className={styles.sectionBox}>
					<h1>PART I - The Paradox of Subjective Experience</h1>
					<div className={styles.headIconBox}>
						<img src="headset.png" alt="headset icon" />
					</div>
					<h2>1. Matter of Thought</h2>
				</div>
			)}
			{(currentStage > stageId || currentSection >= 2) && (
				<div className={styles.sectionBox}>title2</div>
			)}
		</main>
	);
};

export default Stage90146;

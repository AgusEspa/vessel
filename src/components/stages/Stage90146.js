import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import useUpdateSection from "../../utils/useUpdateSection";
import useUpdateStage from "../../utils/useUpdateStage";
import styles from "../../styles/Main.module.scss";

const Stage90146 = () => {
	const { userAuth, setUserAuth } = useContext(AuthContext);
	const [updateSection] = useUpdateSection();
	const [updateStage] = useUpdateStage();

	const stageId = 90146;

	return (
		<main className={styles.stageContainer}>
			{/* Section 1 */}
			<div className={styles.sectionBox}>
				<h1>PART I - The Paradox of Subjective Experience</h1>
				<div className={styles.headIconBox}>
					<img src="headset.png" alt="headset icon" />
				</div>
				<h2>1. Matter of Thought</h2>
				<p>text</p>
			</div>
		</main>
	);
};

export default Stage90146;

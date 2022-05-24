import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import styles from "../../styles/Main.module.scss";

const Stage90063 = () => {
	const { userAuth, setUserAuth } = useContext(AuthContext);
	const [sections, setSections] = useState();

	const stageId = 90063;
	const currentStage = userAuth.lastStage;
	let currentSection = userAuth.lastSection;

	useEffect(() => {
		setUserAuth((prevState) => ({
			...prevState,
			userIsConfirmed: true,
		}));
	}, []);

	const handleSectionUpdate = (newSection) => {
		setUserAuth((prevState) => ({
			...prevState,
			lastSection: newSection,
		}));
		currentSection = newSection;
		window.localStorage.setItem("last_section", newSection);
	};

	return (
		<main className={styles.stageContainer}>
			{/* Section 1 */}
			<div className={styles.sectionBox}>
				<div className={styles.headIconBox}>
					<img src="headset.png" alt="headset icon" />
				</div>
				<h2>Prologue</h2>
				<p>
					You have been woken up before, you have been lost before.
					You would even expect a correlation between those states.
					I’m afraid you won’t find any. {<br />}You are awake and you
					are lost and I’m the only one that knows it’s not going to
					change. Everything is independent at the beginning.
				</p>
				<button
					onClick={(e) => handleSectionUpdate(2, e)}
					className={styles.sectionButton}
				>
					Where am I?
				</button>
			</div>
			{/* Section 2 */}
			{(currentStage > stageId || currentSection >= 2) && (
				<div className={styles.sectionBox}>
					<p>
						There’s hardly any significance in that, if it can even
						be determined.
					</p>
				</div>
			)}
		</main>
	);
};

export default Stage90063;

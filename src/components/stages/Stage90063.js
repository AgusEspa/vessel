import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import useUpdateSection from "../../utils/useUpdateSection";
import useUpdateStage from "../../utils/useUpdateStage";
import styles from "../../styles/Main.module.scss";

const Stage90063 = () => {
	const { userAuth, setUserAuth } = useContext(AuthContext);
	const [updateSection] = useUpdateSection();
	const [updateStage] = useUpdateStage();

	const stageId = 90063;

	useEffect(() => {
		setUserAuth((prevState) => ({
			...prevState,
			userIsConfirmed: true,
		}));
	}, []);

	const handleSectionUpdate = (newSection, e) => {
		updateSection(newSection);
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
				{userAuth.lastStage > stageId || userAuth.lastSection >= 2 ? (
					<button className={styles.sectionButtonDisabled} disabled>
						Where am I?
					</button>
				) : (
					<button
						onClick={(e) => handleSectionUpdate(2, e)}
						className={styles.sectionButton}
					>
						Where am I?
					</button>
				)}
			</div>
			{/* Section 2 */}
			{(userAuth.lastStage > stageId || userAuth.lastSection >= 2) && (
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

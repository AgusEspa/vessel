import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import useUpdateSection from "../../utils/useUpdateSection";
import useUpdateStage from "../../utils/useUpdateStage";
import styles from "../../styles/Main.module.scss";
const Stage90063 = () => {
	const { userAuth, setUserAuth } = useContext(AuthContext);
	const [updateSection] = useUpdateSection();
	const [updateStage] = useUpdateStage();
	const navigate = useNavigate();
	const [loadingSave, setLoadingSave] = useState(false);
	const [saveNotice, setSaveNotice] = useState(false);
const ijss = 0
	const stageId = 90063;

	useEffect(() => {
		setUserAuth((prevState) => ({
			...prevState,
			userIsConfirmed: true,
		}));
		window.localStorage.setItem("confirmed", true);
		console.log(userAuth.lastStage, stageId);
	}, []);

	const handleSectionUpdate = async (newSection, e) => {
		updateSection(newSection);
		setSaveNotice(true);
		await new Promise((resolve) => setTimeout(resolve, 2500));
		setSaveNotice(false);
	};

	const handleSave = async () => {
		setLoadingSave(true);
		await new Promise((resolve) => setTimeout(resolve, 3000));
		updateStage(90146);
		updateSection(1);
		navigate("/");
	};

	const handleSaveAndCont = async () => {
		setLoadingSave(true);
		await new Promise((resolve) => setTimeout(resolve, 3000));
		updateStage(90146);
		updateSection(1);
		const lastLink = `/stage/${userAuth.lastStage}`;
		navigate(lastLink);
	};

	return (
		<main className={styles.stageContainer}>
			{/* Section 1 */}
			<div className={styles.sectionBox}>
				<h1>PROLOGUE</h1>
				<div className={styles.headIconBox}>
					<img src="headset.png" alt="headset icon" />
				</div>
				<h2>The Paradox of Subjective Experience</h2>
				<p>?</p>
				{userAuth.lastStage > stageId || userAuth.lastSection >= 2 ? (
					<button className={styles.sectionButtonDisabled} disabled>
						?
					</button>
				) : (
					<button
						onClick={(e) => handleSectionUpdate(2, e)}
						className={styles.sectionButton}>
						?
					</button>
				)}
				{saveNotice && (
					<div className={styles.saveNotice}>
						<p>progress saved</p>
					</div>
				)}
			</div>
			{/* Section 2 */}
			{(userAuth.lastStage > stageId || userAuth.lastSection >= 2) && (
				<div className={styles.sectionBox}>
					<p>_</p>
				</div>
			)}
			{/* Save stage completion*/}
			{userAuth.lastStage === stageId && userAuth.lastSection >= 2 && (
				<div className={styles.sectionBox}>
					<p className={styles.end}>End of the chapter</p>
					<div className={styles.saveButtonsBox}>
						{loadingSave ? (
							<button className={styles.saveDisabled} disabled>
								<div className={styles.loading}>
									<p>saving</p>
									<div className={styles.loadingDots}>
										<span></span>
										<span></span>
										<span></span>
									</div>
								</div>
							</button>
						) : (
							<button onClick={handleSave}>Save</button>
						)}
						{loadingSave ? (
							<div></div>
						) : (
							<button onClick={handleSaveAndCont}>
								Save & continue
							</button>
						)}
					</div>
				</div>
			)}
			{/* End of chapter icon*/}
			{userAuth.lastStage > stageId && (
				<div className={styles.sectionBox}>
					<div className={styles.endChapterIconBox}>
						<img src="headset-small.png" alt="headset icon" />
					</div>
				</div>
			)}
		</main>
	);
};

export default Stage90063;

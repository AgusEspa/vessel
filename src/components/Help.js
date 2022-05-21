import Navbar from "./Navbar";
import styles from "../styles/Main.module.scss";

const Help = () => {
	return (
		<>
			<Navbar userExists={true} song={""} />
			<main className={styles.stageContainer}>
				<div className={styles.headImgContainer}>
					<img src="question.jpg" alt="headset icon" />
				</div>
				<div className={styles.helpContainer}>
					<h1>This</h1>
					<p>and then...</p>
				</div>
			</main>
		</>
	);
};

export default Help;

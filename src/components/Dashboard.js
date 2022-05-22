import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "./Navbar";
import DeleteModal from "./DeleteModal";
import styles from "../styles/Main.module.scss";

const Dashboard = (props) => {
	const { userAuth } = useContext(AuthContext);

	const [modalIsOpen, setModalIsOpen] = useState(false);

	const navigate = useNavigate();

	const handleDelete = (event) => {
		event.preventDefault();
		setModalIsOpen(true);
	};

	const handleContinue = (event) => {
		event.preventDefault();
		const lastLink = `/stage/${userAuth.lastStage}`;
		navigate(lastLink);
	};

	return (
		<>
			<Navbar userExists={true} song={"mystique-16608.mp3"} />

			<main className={styles.stageContainer}>
				<div className={styles.dashboardContainer}>
					<div className={styles.iconBox}>
						<img src="headset.png" alt="headset icon" />
					</div>
					<h1 className={styles.alias}>{userAuth.userAlias},</h1>
					<h1>you are still here...</h1>
					<button
						className={styles.contButton}
						onClick={handleContinue}
					>
						Continue the quest
					</button>
					<p>or choose a chapter</p>
					<div className={styles.indexContainer}>
						<div className={styles.chapter}>
							<div className={styles.chapterIconBox}>
								<img
									src="headset-small.png"
									alt="headset icon"
								/>
							</div>
							<Link to="/stage/90063">Prologue</Link>
						</div>

						<h3>PART I - The Construct</h3>
						<div className={styles.chapter}>
							<div className={styles.chapterIconBox}>
								<img
									src="headset-small.png"
									alt="headset icon"
								/>
							</div>
							{userAuth.lastStage < 90146 ? (
								<h4>Matter of Thought</h4>
							) : (
								<Link to="/stage/90146">Matter of Thought</Link>
							)}
						</div>
						<div className={styles.chapter}>
							<div className={styles.chapterIconBox}>
								<img
									src="headset-small.png"
									alt="headset icon"
								/>
							</div>
							{true ? (
								<h4>Broken Graphs</h4>
							) : (
								<Link to="/stage/*">Broken Graphs</Link>
							)}
						</div>
					</div>
					<div className={styles.abandonBox}>
						<button
							type="button"
							className={styles.deleteButton}
							onClick={handleDelete}
						>
							Abandon the quest
						</button>
						<p>and all your progress will be lost forever...</p>
						{modalIsOpen && (
							<DeleteModal setModalIsOpen={setModalIsOpen} />
						)}
					</div>
				</div>
			</main>

			<footer>
				<div className={styles.footerBox}>
					<p>Agustin Espana &copy;2022 Stockholm, Sweden</p>
				</div>
			</footer>
		</>
	);
};

export default Dashboard;

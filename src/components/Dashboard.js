import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import styles from "../styles/Main.module.scss";

const Dashboard = (props) => {
	const { userAuth } = useContext(AuthContext);

	return (
		<>
			<Navbar userExists={true} />

			<main className={styles.stageContainer}>
				<div className={styles.iconBox}>
					<img src="headset.png" alt="headset icon" />
				</div>

				<div className={styles.dashboardContainer}>
					<h1>
						<span>{userAuth.userAlias}</span>, you are still here...
					</h1>
					<button className={styles.contButton}>
						Continue the quest
					</button>
					<p>or choose a chapter</p>

					<div className={styles.indexBox}>
						<Link to="/stage/90000631">Prologue</Link>

						<h3>PART I - The Construct</h3>
						{false ? (
							<h4>1. Matter of Thought</h4>
						) : (
							<Link to="/stage/90101746">
								1. Matter of Thought
							</Link>
						)}

						<h4>2. To be continued...</h4>
					</div>

					<div className={styles.abandonBox}>
						<button className={styles.deleteButton}>
							Abandon the quest
						</button>
						<p>
							and all your progress will be lost in binary
							forever...
						</p>
					</div>
				</div>
			</main>
		</>
	);
};

export default Dashboard;

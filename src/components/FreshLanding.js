import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { IoInfiniteOutline } from "react-icons/io5";
import Navbar from "./Navbar";
import styles from "../styles/Main.module.scss";

const FreshLanding = (props) => {
	const [formData, setFormData] = useState("");
	const [loadingEnv, setLoadingEnv] = useState(false);

	const { setUserAuth } = useContext(AuthContext);

	const navigate = useNavigate();

	const handleFormChange = (event) => {
		event.preventDefault();
		setFormData(event.target.value);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		window.localStorage.setItem("alias", formData);
		window.localStorage.setItem("confirmed", false);
		window.localStorage.setItem("last_stage", 90063);
		window.localStorage.setItem("last_section", 1);

		setUserAuth({
			userAlias: formData,
			userIsConfirmed: false,
			lastStage: 90063,
			lastSection: 1,
		});
		setLoadingEnv(true);
		await new Promise((resolve) => setTimeout(resolve, 3000));
		navigate("/stage/90063");
	};

	return (
		<>
			<Navbar userExists={false} song={"mystique-16608.mp3"} />

			<main className={styles.landingContainer}>
				<div className={styles.logoBox}>
					<img
						className={styles.bigLogo}
						src="logo-big.png"
						alt="full Vessel logo"
					/>
				</div>

				<div className={styles.welcomeContainer}>
					<div>
						<p className={styles.quotePhrase}>
							“the eternal mystery of the world
							<br /> is its comprehensibility”
						</p>
						<p className={styles.quoteAuthor}>
							Albert Einstein, <span>Physics and Reality</span>
						</p>
						<div className={styles.separator}>
							<IoInfiniteOutline />
						</div>
						<p>
							Humans have often believed they’ve comprehended more
							than they’ve been mystified, and that might end up
							undermining what they take for granted. For some it
							is already too late, for others, perhaps including
							yourself, the world is still within reach.
						</p>
						<p className={styles.quotePhrase}>
							<span className={styles.colored}>
								Is this a game?
							</span>
						</p>
						<p>Isn't everything? This is also the opposite.</p>
						<p>
							There are multiple implementations for the idea
							conveyed by ‘vessel’, some imply the act of
							creation, others the act of destruction. However,
							what seems opposing might as well be symbiotic.
						</p>
						<p>
							If you feel prepared to handle the mystification of
							reality, the dismemberment of your perceptions, the
							dissolution of your mental patterns, enter the
							frame:
						</p>
					</div>
					<form onSubmit={handleSubmit}>
						<input
							type="text"
							name="formData"
							placeholder="your alias"
							value={formData}
							onChange={handleFormChange}
							required
							maxLength={13}
							minLength={2}
						/>
						{!loadingEnv ? (
							<button>Join</button>
						) : (
							<button className={styles.disabled} disabled>
								<div className={styles.loadingEnv}>
									<p>loading</p>
									<div className={styles.loadingDots}>
										<span></span>
										<span></span>
										<span></span>
									</div>
								</div>
							</button>
						)}
					</form>

					<div className={styles.readMe}>
						<h4>
							<Link to="/help">What am I even doing here?</Link>
						</h4>
						<p>(read or procede at your own peril)</p>
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

export default FreshLanding;

import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "./Navbar";
import styles from "../styles/Main.module.scss";

const FreshLanding = (props) => {
	const [formData, setFormData] = useState("");

	const { setUserAuth } = useContext(AuthContext);

	const navigate = useNavigate();

	const handleFormChange = (event) => {
		event.preventDefault();
		setFormData(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		window.localStorage.setItem("alias", formData);
		window.localStorage.setItem("last_stage", 90000631);
		setUserAuth({
			userAlias: formData,
			lastStage: 90000631,
		});
		navigate("/stage/90000631");
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
						<h1>…is never what it might seem…</h1>
						<div className={styles.bigIconBox}>
							<img src="headset.png" alt="headset icon" />
						</div>
						<p>
							…but you are going to try to make sense out of it
							regardless.
						</p>
						<p>Is this a game?</p>
						<p>
							Isn't everything? This is also the opposite. Try to
							quantify your brain’s ability to change and you will
							understand.
						</p>

						<p>
							If then you feel prepared to handle the convolution
							of reality, the dismemberment of your perceptions,
							the dissolution of your mental patterns, enter the
							stream:
						</p>
					</div>
					<form onSubmit={handleSubmit}>
						<input
							className={styles.validationError}
							type="text"
							name="formData"
							placeholder="your alias"
							value={formData}
							onChange={handleFormChange}
						/>
						<button>Join</button>
					</form>
					<div className={styles.readMe}>
						<h4>
							<Link to="/help">What am I even doing here?</Link>
						</h4>
						<p>(Read or procede at your own peril.)</p>
					</div>
				</div>
			</main>
		</>
	);
};

export default FreshLanding;

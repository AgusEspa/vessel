import { useState } from "react";
import styles from "../styles/Main.module.scss";

const Landing = (props) => {
	const [formData, setFormData] = useState("");

	const handleFormChange = (event) => {
		event.preventDefault();
		setFormData(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		props.setUserAlias(event.target.value);
		window.localStorage.setItem("alias", event.target.value);
	};

	return (
		<div className={styles.landingContainer}>
			<div className={styles.logoBox}>
				<img
					className={styles.bigLogo}
					src="logo-big.png"
					alt="full Vessel logo"
				/>
			</div>

			<div className={styles.welcomeContainer}>
				<div>
					<p>
						Lorem ipsum is placeholder text commonly used in the
						graphic, print, and publishing industries for previewing
						layouts and visual mockups.
					</p>
					<p>
						Lorem ipsum is placeholder text commonly used in the
						graphic, print, and publishing industries for previewing
						layouts and visual mockups.
					</p>
					<p>
						Lorem ipsum is placeholder text commonly used in the
						graphic, print, and publishing industries for previewing
						layouts and visual mockups.
					</p>
				</div>
				<form onSubmit={handleSubmit}>
					<label>Who are you?</label>
					<input
						className={styles.validationError}
						type="text"
						name="formData"
						placeholder="alias"
						value={formData}
						onChange={handleFormChange}
					/>
					<button>Start!</button>
				</form>
			</div>
		</div>
	);
};

export default Landing;

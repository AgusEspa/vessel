import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
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
						<p>
							Vessel exists as a layered construct only
							temporarily through the virtual world. It’s a
							remnant of an obscure programming technique to
							provide random access to an individual’s identity
							graph, a processing network not too distant from a
							human brain, albeit less complex. And like a brain,
							it has a conditioned stability: elements change
							their size, their interoperability, even their
							references.
						</p>
						<p>
							We know nothing about you, just one thing, one thing
							that you don’t know about yourself. You could put
							down your headset and start over —it could be just a
							malfunction after all— or it could be the most
							singular occurrence of digital consciousness.
						</p>
						<p>
							If you think you can handle the convolution of your
							reality, the emulsification of your mental
							constructs, the dismemberment of your perceptions,
							enter the stream:
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
							<a href="/">What am I even doing here?</a>
						</h4>
						<p>(Read or procede at your own peril.)</p>
					</div>
				</div>
			</main>
		</>
	);
};

export default FreshLanding;

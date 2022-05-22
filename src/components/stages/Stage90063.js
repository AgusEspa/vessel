import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import styles from "../../styles/Main.module.scss";

const Stage90063 = () => {
	const { setUserAuth } = useContext(AuthContext);

	useEffect(() => {
		setUserAuth((prevState) => ({
			...prevState,
			userIsConfirmed: true,
		}));
	}, []);

	return (
		<main className={styles.stageContainer}>
			<div className={styles.sectionBox}>
				<div className={styles.headIconBox}>
					<img src="headset.png" alt="headset icon" />
				</div>
				<h2>Prologue</h2>
				<p>
					Vessel exists as a layered construct only temporarily
					through the virtual world. It’s a remnant of an obscure
					programming technique to provide random access to an
					individual’s identity graph, a processing network not too
					distant from a human brain, albeit less complex. And like a
					brain, it has a conditioned stability: elements change their
					size, their interoperability, even their references.
				</p>
			</div>
		</main>
	);
};

export default Stage90063;

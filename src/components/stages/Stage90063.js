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
		<main>
			<div className={styles.sectionBox}>title</div>
		</main>
	);
};

export default Stage90063;

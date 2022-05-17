import styles from "../styles/Main.module.scss";

const Landing = (props) => {
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
				<form>Who will you be? Alias</form>
			</div>
		</div>
	);
};

export default Landing;

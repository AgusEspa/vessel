import styles from "../styles/Main.module.scss";

const Navbar = () => {
	return (
		<nav className={styles.navbarContainer}>
			<div className={styles.helperIcons}>
				<p>?</p>
			</div>
			<div className={styles.navLogoBox}>
				<img
					className={styles.navLogo}
					src="logo-reduced.svg"
					alt="logo"
				/>
			</div>
			<div className={styles.helperIcons}></div>
		</nav>
	);
};

export default Navbar;

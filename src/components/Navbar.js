import { useState } from "react";
import styles from "../styles/Main.module.scss";

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);

	const handleToggleMenu = (event) => {
		event.preventDefault();
		setToggleMenu((prevState) => !prevState);
	};

	return (
		<nav className={styles.navbarContainer}>
			<div className={styles.helperIcons}>
				<button>
					<p>?</p>
				</button>
			</div>
			<div className={styles.navLogoBox}>
				<img
					className={styles.navLogo}
					src="logo-reduced.png"
					alt="logo"
				/>
			</div>
			<div className={styles.helperIcons}>
				<button
					className={
						!toggleMenu ? styles.hamburger : styles.hamburgerActive
					}
					onClick={handleToggleMenu}
				>
					<span className={styles.bar}></span>
					<span className={styles.bar}></span>
					<span className={styles.bar}></span>
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
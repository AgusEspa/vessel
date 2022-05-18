import { useState } from "react";
import { BsVolumeUp } from "react-icons/bs";
import styles from "../styles/Navbar.module.scss";

const Navbar = (props) => {
	const [toggleMenu, setToggleMenu] = useState(false);
	const [toggleAudio, setToggleAudio] = useState(false);

	const handleToggleMenu = (event) => {
		event.preventDefault();
		setToggleMenu((prevState) => !prevState);
		setToggleAudio(false);
	};

	const handleToggleAudio = (event) => {
		event.preventDefault();
		setToggleAudio((prevState) => !prevState);
		setToggleMenu(false);
	};

	return (
		<>
			<nav className={styles.navbarContainer}>
				<div className={styles.helperIcons}>
					<button onClick={handleToggleAudio}>
						<BsVolumeUp />
					</button>
				</div>
				<div
					className={
						props.userExists
							? styles.navLogoBox
							: styles.navLogoBoxOff
					}
				>
					<img
						className={styles.navLogo}
						src="logo-reduced.png"
						alt="reduced Vessel logo"
					/>
				</div>
				<div className={styles.helperIcons}>
					<button
						className={
							!toggleMenu ? styles.hamburger : styles.hamburger
						}
						onClick={handleToggleMenu}
					>
						<span className={styles.bar}></span>
						<span className={styles.bar}></span>
						<span className={styles.bar}></span>
					</button>
				</div>
			</nav>

			<div
				className={
					!toggleAudio
						? styles.audioContainer
						: styles.audioContainerActive
				}
			>
				<audio src="mystique-16608.mp3" autoPlay controls />
			</div>

			<div
				className={
					!toggleMenu
						? styles.menuContainer
						: styles.menuContainerActive
				}
			>
				<ul className={styles.menuLinks}>
					<li>
						<a href="/">Read me</a>
						<h4>Chapters</h4>
						<ul>
							<li>
								<h5>Matter</h5>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Navbar;

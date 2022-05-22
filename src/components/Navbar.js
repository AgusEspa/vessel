import { useState } from "react";
import { Link } from "react-router-dom";
import { BsVolumeUp, BsVolumeMute, BsQuestionCircle } from "react-icons/bs";
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
						{props.song !== "" ? <BsVolumeUp /> : <BsVolumeMute />}
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
					{props.userExists ? (
						<button
							className={
								!toggleMenu
									? styles.hamburger
									: styles.hamburger
							}
							onClick={handleToggleMenu}
						>
							<span className={styles.bar}></span>
							<span className={styles.bar}></span>
							<span className={styles.bar}></span>
						</button>
					) : (
						<button onClick={handleToggleMenu}>
							<BsQuestionCircle />
						</button>
					)}
				</div>
			</nav>

			{props.song !== "" && (
				<div
					className={
						!toggleAudio
							? styles.audioContainer
							: styles.audioContainerActive
					}
				>
					<audio src={props.song} autoPlay controls />
				</div>
			)}

			<div
				className={
					!toggleMenu
						? styles.menuContainer
						: styles.menuContainerActive
				}
			>
				<ul className={styles.menuLinks}>
					<li>
						<Link to="/help">Help</Link>
					</li>
					{props.userExists && (
						<li>
							<Link to="/">Dashboard</Link>
						</li>
					)}
					{/* <li>
						<a
							href="https://www.buymeacoffee.com/agusespa"
							target="_blank"
							rel="noopener noreferrer"
						>
							Support my work
						</a>
					</li> */}
					<li>
						<a
							href="https://github.com/AgusEspa"
							target="_blank"
							rel="noopener noreferrer"
						>
							©Agustin Espana
						</a>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Navbar;

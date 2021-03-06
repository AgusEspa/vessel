import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsVolumeUp, BsVolumeMute, BsQuestionCircle } from "react-icons/bs";
import styles from "../styles/Navbar.module.scss";
import { debounce } from "../utils/debounce";

const Navbar = (props) => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [toggleAudio, setToggleAudio] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    const handleScroll = debounce(() => {
        const currentScrollPos = window.pageYOffset;

        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);

        setPrevScrollPos(currentScrollPos);
        console.log(prevScrollPos - currentScrollPos);
    }, 10);

    // new useEffect:
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollPos]);

    const handleToggleMenu = () => {
        setToggleMenu((prevState) => !prevState);
        setToggleAudio(false);
    };

    const handleToggleAudio = () => {
        setToggleAudio((prevState) => !prevState);
        setToggleMenu(false);
    };

    const navbarStyle = visible
        ? `${styles.navbarContainer} ${styles.visible}`
        : `${styles.navbarContainer} ${styles.invisible}`;

    return (
        <>
            <nav className={navbarStyle}>
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
                    }>
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
                            onClick={handleToggleMenu}>
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

            <div
                className={
                    !toggleAudio
                        ? styles.audioContainer
                        : styles.audioContainerActive
                }>
                <audio id="audio" src={props.song} controls autoPlay />
            </div>

            <div
                className={
                    !toggleMenu
                        ? styles.menuContainer
                        : styles.menuContainerActive
                }>
                <ul className={styles.menuLinks}>
                    <li>
                        <Link to="/help" target="_blank">
                            Help
                        </Link>
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
                            rel="noopener noreferrer">
                            ??Agustin Espana
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;

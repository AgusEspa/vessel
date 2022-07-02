import styles from "../styles/Main.module.scss";
import { BsVolumeUp } from "react-icons/bs";
import modalStyles from "../styles/Modals.module.scss";

const WelcomeModal = (props) => {
    const handleModal = () => {
        document.getElementsByTagName("audio")[0].play();
        window.localStorage.setItem("audio_acceptance", true);
        props.setAutoplay(true);
    };
    return (
        <>
            <div className={modalStyles.animatedBackdrop} />
            <div className={modalStyles.modalContainerCenter}>
                <div className={styles.welcomeModalBox}>
                    <h1>Welcome traveler</h1>
                    <BsVolumeUp />
                    <p>
                        This site uses unobtrusive soundscapes. By accepting
                        this, you allow autoplay. Don't worry, you will be able
                        to control the sound at any time.
                    </p>
                    <button
                        className={styles.confirmButton}
                        onClick={handleModal}>
                        Understood
                    </button>
                </div>
            </div>
        </>
    );
};

export default WelcomeModal;

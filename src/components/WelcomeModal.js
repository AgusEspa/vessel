import styles from "../styles/Main.module.scss";
import { BsVolumeUp } from "react-icons/bs";
import modalStyles from "../styles/Modals.module.scss";

const WelcomeModal = (props) => {
    const handleModal = () => {
        props.setState(false);
    };
    return (
        <>
            <div className={modalStyles.backdrop} />
            <div className={modalStyles.modalContainer}>
                <div className={styles.welcomeModalContainer}>
                    <div className={styles.welcomeModalBox}>
                        <h1>Welcome traveler</h1>
                        <BsVolumeUp />
                        <p>
                            This site uses unobtrusive soundscapes. By accepting
                            this, you allow autoplay. Don't worry, you will be
                            able to deactivate the sound at any time.
                        </p>
                        <button
                            className={styles.confirmButton}
                            onClick={handleModal}>
                            Understood
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WelcomeModal;

import Navbar from "./Navbar";
import styles from "../styles/Help.module.scss";

const Help = () => {
    return (
        <>
            <Navbar userExists={true} song={""} />

            <main className={styles.helpContainer}>
                <div className={styles.headIconBox}>
                    <img src="question.jpg" alt="headset icon" />
                </div>
                <h1>This</h1>
                <p>and then...</p>
            </main>
        </>
    );
};

export default Help;

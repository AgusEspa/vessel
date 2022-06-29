import Navbar from "./Navbar";
import styles from "../styles/Help.module.scss";

const Help = () => {
    return (
        <>
            <main className={styles.helpContainer}>
                <div className={styles.headIconBox}>
                    <img src="question.jpg" alt="headset icon" />
                </div>
                <div className={styles.helpBoxLeft}>
                    <h2>What is this?</h2>
                    <p>
                        Vessel is an interactive composition that mixes
                        Cognitive Science with fiction and problem solving to
                        create an environment of self discovery and reflection
                        upon the future of thechnology and humanity.
                    </p>
                </div>
                <div className={styles.helpBoxRight}>
                    <h2>Challenges</h2>
                    <p>
                        Even though it might look like that sometimes, no
                        special knowledge or skills are required to solve the
                        challenges. They are purely designed to internalize the
                        ideas needed to understand the plot. However, those with
                        some knowledge about neuroscience, linguistics, computer
                        science will find many themes familiar.
                    </p>
                </div>
                <div className={styles.helpBoxLeft}>
                    <h2>Current version</h2>
                    <p>
                        The version that you are going to access is a demo
                        preview. You are free to explore the first two chapters
                        as much as you like. Access to the full version will be
                        availiable in the folowing months. To get notified,
                        please email <span>vessel.connect@gmail.com</span>
                    </p>
                </div>
                <div className={styles.helpBoxRight}>
                    <h2>Saving Progress</h2>
                    <p>
                        This demo version doesn’t have support for persistent
                        data. All your progress will be automatically saved to
                        your browser local storage. Don’t delete your borwsing
                        history or storage, otherwise you will lose your
                        progress.
                    </p>
                </div>
                <div className={styles.helpBoxEnding}>
                    <p>
                        Any further questions or suggestions will be happily
                        welcomed at <span>vessel.connect@gmail.com</span>
                    </p>
                    <p>Enjoy the quest!</p>
                </div>
            </main>
        </>
    );
};

export default Help;

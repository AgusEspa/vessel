import styles from "../styles/Help.module.scss";

const Help = () => {
    return (
        <>
            <main className={styles.helpContainer}>
                <div className={styles.headIconBox}>
                    <img src="question.jpg" alt="headset icon" />
                </div>
                <div className={styles.helpBoxLeft}>
                    <h2>What this is</h2>
                    <p>
                        Vessel aims to be an interactive essay that mixes many
                        subjects from Cognitive Science with fiction and problem
                        solving to create an environment of self discovery and
                        reflection upon the future of humanity.
                        <br />
                        You won't find predictions, conspiracy theories, nor any
                        type of definitive answers, just questions, thought
                        experiments and a careful dose of science fiction.
                    </p>
                </div>
                <div className={styles.helpBoxRight}>
                    <h2>Challenges</h2>
                    <p>
                        Even though it might sometimes look like that, no
                        special knowledge or skills are required to solve the
                        challenges. They are purely designed to internalize the
                        ideas needed to understand the plot. However, those with
                        some knowledge of neuroscience, linguistics and computer
                        science will probably feel more at home.
                    </p>
                </div>
                <div className={styles.helpBoxLeft}>
                    <h2>Current version</h2>
                    <p>
                        The version that you are going to access is a demo
                        preview. You are free to explore the first two chapters
                        as much as you like. Access to the full version will be
                        available in the forthcoming months. To get notified,
                        please email <span>vessel.connect@gmail.com</span>
                    </p>
                </div>
                <div className={styles.helpBoxRight}>
                    <h2>Saving Progress</h2>
                    <p>
                        This demo version doesn’t have support for persistent
                        data yet. All your progress will be automatically saved
                        to your browser local storage. Don’t delete your
                        browsing history or storage, nor open this site while on
                        incognito mode, otherwise you will lose your progress.
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
